export type Transcript = { text: string; speaker: "assistant" | "user" };
export interface VoiceAdapter {
  connect(): Promise<void>;
  disconnect(): void;
  mute(): void;
  unmute(): void;
  sendInstruction(text: string): void;
  onTranscriptDelta: ((event: Transcript) => void) | null;
  onTranscriptFinal: ((event: Transcript) => void) | null;
  onAudioState: ((state: "silent" | "speaking") => void) | null;
  onError: ((error: Error) => void) | null;
}
