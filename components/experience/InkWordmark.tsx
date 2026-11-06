import { displayName } from "@/lib/experience/state";
export function InkWordmark({
  name,
  phase,
}: {
  name: string | null;
  phase: string;
}) {
  const text = name ? displayName(name) : "yearning.";
  const length = Array.from(text).length;
  return (
    <div className="name-anchor" data-testid="name-anchor">
      <h1
        aria-label={text}
        className={`ink-wordmark ${name ? "personal-name" : ""} ${length > 18 ? "long-name" : ""} ${length > 40 ? "very-long-name" : ""}`}
        data-phase={phase}
      >
        {phase === "absorbing" && (
          <span aria-hidden="true" className="absorbing-wordmark">
            yearning.
          </span>
        )}
        <span key={name ?? "wordmark"} className="ink-letters">
          {text}
        </span>
      </h1>
    </div>
  );
}
