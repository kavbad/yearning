import { describe, it, expect } from "vitest";
import {
  displayName,
  nameSchema,
  experienceReducer as reduce,
  initialState,
} from "../../lib/experience/state";
import { MockVoiceAdapter } from "../../lib/voice/MockVoiceAdapter";
describe("name contract", () => {
  it.each(["Kavon", "李明", "سارا", "Zoë", "A".repeat(120)])(
    "preserves %s",
    (name) => expect(displayName(name)).toBe(`${name}.`),
  );
  it("normalizes without duplicating punctuation", () => {
    expect(displayName("  Zoë. ")).toBe("Zoë.");
    expect(displayName("李明。")).toBe("李明。");
  });
  it.each([
    "",
    "   ",
    "A".repeat(121),
    "<script>",
    "hello\u0000",
    "\u202eevil",
  ])("rejects invalid names", (name) =>
    expect(nameSchema.safeParse(name).success).toBe(false),
  );
});
describe("validated state transitions", () => {
  it("ignores premature names and repeated begin", () => {
    expect(reduce(initialState, { type: "NAME", name: "Kavon" })).toBe(
      initialState,
    );
    const s = reduce(initialState, { type: "BEGIN" });
    expect(reduce(s, { type: "BEGIN" })).toBe(s);
  });
  it("accepts a name only after connection", () => {
    let s = reduce(initialState, { type: "BEGIN" });
    s = reduce(s, { type: "CONNECTED" });
    expect(reduce(s, { type: "NAME", name: "" })).toBe(s);
    s = reduce(s, { type: "NAME", name: "سارا" });
    expect(s.phase).toBe("absorbing");
    expect(reduce(s, { type: "SETTLED" })).toEqual({
      phase: "conversing",
      name: "سارا",
    });
  });
});
it("mock emits question and explicit name, then stops on disconnect", async () => {
  const v = new MockVoiceAdapter();
  const events: string[] = [];
  v.onTranscriptFinal = (e) => events.push(e.text);
  await v.connect();
  v.submitName("Kavon");
  v.disconnect();
  v.submitName("Other");
  expect(events).toEqual(["What should I call you?", "Kavon"]);
});
