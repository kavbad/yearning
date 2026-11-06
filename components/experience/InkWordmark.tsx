import { displayName, type Phase } from "@/lib/experience/state";

function WordmarkArtwork({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`wordmark-artwork ${className}`} />
  );
}

export function InkWordmark({
  name,
  phase,
}: {
  name: string | null;
  phase: Phase;
}) {
  const text = name ? displayName(name) : "yearning.";
  const length = Array.from(text).length;
  return (
    <div className="name-anchor" data-testid="name-anchor">
      <h1
        aria-label={text}
        className={`ink-wordmark ${name ? "personal-name" : "brand-name"} ${length > 18 ? "long-name" : ""} ${length > 40 ? "very-long-name" : ""}`}
        data-phase={phase}
      >
        {!name ? (
          <>
            <span className="sr-only">yearning.</span>
            <WordmarkArtwork />
          </>
        ) : (
          <>
            {phase === "absorbing" && (
              <WordmarkArtwork className="absorbing-wordmark" />
            )}
            <span key={name} className="ink-letters" dir="auto">
              {text}
            </span>
          </>
        )}
      </h1>
    </div>
  );
}
