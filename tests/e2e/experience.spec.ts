import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  // Font readiness alone does not establish material-asset readiness.
  await page.evaluate(async () => {
    const urls = [
      "/materials/yearning-ink.webp",
      "/materials/watercolor-bloom.webp",
      matchMedia("(max-width: 600px)").matches
        ? "/materials/cotton-paper-mobile.webp"
        : "/materials/cotton-paper.webp",
    ];
    await Promise.all(
      urls.map(async (src) => {
        const image = new Image();
        image.src = src;
        await image.decode();
      }),
    );
  });
});
test("landing, name reveal, anchor invariants, captions, accessibility", async ({
  page,
}, info) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await expect(page.getByRole("heading")).toHaveText("yearning.");
  await expect(page.getByRole("button")).toHaveCount(1);
  await expect(page.getByRole("textbox")).toHaveCount(0);
  await expect(page.locator(".demo-note")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "Begin", exact: true }),
  ).toHaveAccessibleDescription(/Voice is mocked/);
  await page.waitForTimeout(2300);
  await page.screenshot({
    path: `test-results/${info.project.name}-landing.png`,
  });
  const name = await page.getByTestId("name-anchor").boundingBox();
  const orb = await page.getByTestId("orb-anchor").boundingBox();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("button", { name: "Begin", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("status")).toHaveText("What should I call you?");
  await page.getByRole("button", { name: "Try a name" }).click();
  await page.getByRole("textbox").fill("Kavon");
  await page.getByRole("textbox").press("Enter");
  await expect(page.getByRole("heading")).toHaveText("Kavon.");
  await expect(page.locator("main")).toHaveAttribute(
    "data-phase",
    "conversing",
  );
  expect(await page.getByTestId("name-anchor").boundingBox()).toEqual(name);
  expect(await page.getByTestId("orb-anchor").boundingBox()).toEqual(orb);
  await expect(page.getByRole("status")).toBeEmpty();
  await expect(page.locator('[role="log"]')).toHaveCount(0);
  await page.screenshot({
    path: `test-results/${info.project.name}-named.png`,
  });
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  expect(errors).toEqual([]);
  expect(
    await page.evaluate(
      () =>
        document.documentElement.scrollWidth <= innerWidth &&
        document.documentElement.scrollHeight <= innerHeight,
    ),
  ).toBe(true);
});
test("Unicode and long names fit the protected name zone", async ({ page }) => {
  for (const name of ["سارا", "李明", "Alexandria ".repeat(10).trim()]) {
    await page.goto("/");
    await page.getByRole("button", { name: "Begin", exact: true }).click();
    await page.getByRole("button", { name: "Try a name" }).click();
    await page.getByRole("textbox").fill(name);
    await page.getByRole("textbox").press("Enter");
    await expect(page.getByRole("heading")).toHaveText(`${name}.`);
    const box = await page.getByRole("heading").boundingBox();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(page.viewportSize()!.width);
    const orb = await page.getByTestId("orb-anchor").boundingBox();
    expect(box!.y + box!.height).toBeLessThan(orb!.y);
  }
});
test("reduced motion and no audio collection", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  const requests: string[] = [];
  page.on("request", (r) => {
    if (r.url().includes("/api/")) requests.push(r.url());
  });
  await page.getByRole("button", { name: "Begin", exact: true }).click();
  await expect(page.getByRole("status")).toHaveText("What should I call you?");
  expect(
    await page
      .locator(".pigment-body")
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
  expect(requests).toEqual([]);
  await expect(
    page.getByText("A quiet study · no audio is recorded"),
  ).toBeVisible();
});
test("first question fades without leaving a chat history", async ({
  page,
}) => {
  await page.clock.install();
  await page.getByRole("button", { name: "Begin", exact: true }).click();
  await page.clock.fastForward(2000);
  await expect(page.getByRole("status")).toHaveText("What should I call you?");
  await page.clock.fastForward(7000);
  await expect(page.getByRole("status")).toBeEmpty();
  await expect(page.getByRole("button", { name: "Try a name" })).toBeVisible();
});
