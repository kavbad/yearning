import type { VoiceAdapter, Transcript } from "./VoiceSession";
export class MockVoiceAdapter implements VoiceAdapter {
  onTranscriptDelta: ((event: Transcript) => void) | null = null;
  onTranscriptFinal: ((event: Transcript) => void) | null = null;
  onAudioState: ((state: "silent" | "speaking") => void) | null = null;
  onError: ((error: Error) => void) | null = null;
  private connected = false;
  async connect() {
    this.connected = true;
    this.sendInstruction("What should I call you?");
  }
  disconnect() {
    this.connected = false;
    this.onAudioState?.("silent");
  }
  mute() {
    this.onAudioState?.("silent");
  }
  unmute() {
    this.onAudioState?.("silent");
  }
  sendInstruction(text: string) {
    if (this.connected)
      this.onTranscriptFinal?.({ text, speaker: "assistant" });
  }
  submitName(text: string) {
    if (this.connected) this.onTranscriptFinal?.({ text, speaker: "user" });
  }
}
