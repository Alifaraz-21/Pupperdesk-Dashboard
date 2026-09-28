"use client";

import { Sparkles } from "lucide-react";

export default function AiAssistantButton() {
  return (
    <button
      type="button"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl"
      aria-label="Open AI assistant"
    >
      <Sparkles className="h-6 w-6" />
    </button>
  );
}
