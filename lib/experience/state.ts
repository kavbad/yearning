import { z } from "zod";
export const nameSchema = z
  .string()
  .trim()
  .min(1)
  .max(120)
  .refine(
    (s) => !/[\p{Cc}\p{Cf}<>]/u.test(s),
    "Use a name without control characters or markup.",
  );
export function displayName(name: string) {
  const n = nameSchema.parse(name).normalize("NFC");
  return /[.!。！]$/u.test(n) ? n : `${n}.`;
}
export type Phase =
  "landing" | "morphing" | "asking_name" | "absorbing" | "conversing";
export type Action =
  | { type: "BEGIN" }
  | { type: "CONNECTED" }
  | { type: "NAME"; name: string }
  | { type: "SETTLED" };
export type ExperienceState = { phase: Phase; name: string | null };
export const initialState: ExperienceState = { phase: "landing", name: null };
export function experienceReducer(
  state: ExperienceState,
  action: Action,
): ExperienceState {
  switch (action.type) {
    case "BEGIN":
      return state.phase === "landing"
        ? { ...state, phase: "morphing" }
        : state;
    case "CONNECTED":
      return state.phase === "morphing"
        ? { ...state, phase: "asking_name" }
        : state;
    case "NAME":
      return state.phase === "asking_name" &&
        nameSchema.safeParse(action.name).success
        ? { phase: "absorbing", name: nameSchema.parse(action.name) }
        : state;
    case "SETTLED":
      return state.phase === "absorbing"
        ? { ...state, phase: "conversing" }
        : state;
  }
}
