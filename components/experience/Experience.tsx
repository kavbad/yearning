"use client";
import { useEffect, useReducer, useRef, useState } from "react";
import { PaperSurface } from "./PaperSurface";
import { InkWordmark } from "./InkWordmark";
import { WatercolorOrb } from "./WatercolorOrb";
import {
  experienceReducer,
  initialState,
  nameSchema,
} from "@/lib/experience/state";
import { visualConfig } from "@/lib/visualConfig";
import { MockVoiceAdapter } from "@/lib/voice/MockVoiceAdapter";
export function Experience() {
  const [state, dispatch] = useReducer(experienceReducer, initialState);
  const [caption, setCaption] = useState("");
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");
  const voice = useRef<MockVoiceAdapter | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const active = state.phase !== "landing";
  useEffect(() => {
    const v = new MockVoiceAdapter();
    voice.current = v;
    v.onTranscriptFinal = (e) => {
      if (e.speaker === "assistant") setCaption(e.text);
      else {
        setCaption("");
        setEditing(false);
        dispatch({ type: "NAME", name: e.text });
      }
    };
    return () => {
      v.disconnect();
      voice.current = null;
    };
  }, []);
  useEffect(() => {
    if (state.phase !== "morphing") return;
    const timer = setTimeout(() => {
      dispatch({ type: "CONNECTED" });
      void voice.current?.connect();
    }, visualConfig.timing.morphMs);
    return () => clearTimeout(timer);
  }, [state.phase]);
  useEffect(() => {
    if (state.phase !== "absorbing") return;
    const timer = setTimeout(
      () => dispatch({ type: "SETTLED" }),
      visualConfig.timing.absorbMs,
    );
    return () => clearTimeout(timer);
  }, [state.phase]);
  useEffect(() => {
    if (!caption) return;
    const timer = setTimeout(
      () => setCaption(""),
      visualConfig.timing.captionMs,
    );
    return () => clearTimeout(timer);
  }, [caption]);
  useEffect(() => {
    if (editing) input.current?.focus();
  }, [editing]);
  return (
    <main
      className="experience"
      data-phase={state.phase}
      style={
        {
          "--paper": visualConfig.paper,
          "--ink": visualConfig.ink,
          "--name-y": visualConfig.anchors.nameY,
          "--invitation-y": visualConfig.anchors.invitationY,
        } as React.CSSProperties
      }
    >
      <PaperSurface />
      <svg className="ink-filters" aria-hidden="true">
        <defs>
          <filter
            id="ink-density"
            x="-10%"
            y="-20%"
            width="120%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".12 .22"
              numOctaves="3"
              seed="12"
              result="fiber"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="fiber"
              scale=".65"
              result="lettering"
            />
            <feColorMatrix
              in="fiber"
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .35 .65"
              result="density"
            />
            <feComposite in="lettering" in2="density" operator="in" />
          </filter>
        </defs>
      </svg>
      <InkWordmark name={state.name} phase={state.phase} />
      <p className={`tagline ${state.name ? "departed" : ""}`}>
        {visualConfig.tagline}
      </p>
      <div
        className={`invitation-anchor ${active ? "awakened" : ""}`}
        data-testid="orb-anchor"
      >
        <WatercolorOrb />
        {(state.phase === "landing" || state.phase === "morphing") && (
          <button
            disabled={active}
            className="begin"
            aria-describedby="demo-disclosure"
            onClick={() => dispatch({ type: "BEGIN" })}
          >
            Begin
          </button>
        )}
      </div>
      <div className="caption-anchor">
        <p
          className={`caption ${caption ? "visible" : ""}`}
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {caption}
        </p>
        {state.phase === "asking_name" && !editing && (
          <button className="quiet-control" onClick={() => setEditing(true)}>
            Try a name <span aria-hidden="true">↗</span>
          </button>
        )}
        {editing && state.phase === "asking_name" && (
          <form
            className="name-form"
            onSubmit={(e) => {
              e.preventDefault();
              const result = nameSchema.safeParse(input.current?.value);
              if (!result.success) {
                setError("A name, from 1 to 120 characters.");
                return;
              }
              setError("");
              voice.current?.submitName(result.data);
            }}
          >
            <label className="sr-only" htmlFor="name">
              What should I call you?
            </label>
            <input
              ref={input}
              id="name"
              autoComplete="given-name"
              maxLength={120}
              placeholder="Your name"
              aria-describedby={error ? "name-error" : undefined}
            />
            <button aria-label="Reveal my name" type="submit">
              ↵
            </button>
            {error && (
              <p id="name-error" role="alert">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
      <p id="demo-disclosure" className={active ? "demo-note" : "sr-only"}>
        {active
          ? "A quiet study · no audio is recorded"
          : "Interactive visual study. Voice is mocked; no audio is recorded."}
      </p>
      {state.phase === "conversing" && (
        <button
          className="return-control quiet-control"
          onClick={() => window.location.reload()}
        >
          Begin again
        </button>
      )}
    </main>
  );
}
