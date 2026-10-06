"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Chat, Close, Send } from "@carbon/icons-react";
import { IconButton } from "@/components/atoms";

/**
 * Floating chatbot widget — VISUAL SHELL ONLY.
 * The /api/chat streaming route (Vercel AI SDK + Groq/Gemini) lands in
 * Phase 3; until then the input is disabled and no request is made.
 */
export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close chat" : "Open GradeSpot AI assistant"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-brand-ink"
      >
        {open ? <Close size={24} /> : <Chat size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.section
            aria-label="GradeSpot AI Assistant"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex h-[520px] w-[calc(100vw-3rem)] max-w-[400px] flex-col overflow-hidden rounded-card border border-line/20 bg-panel shadow-2xl"
          >
            <header className="flex items-center justify-between bg-brand px-4 py-3 text-white">
              <div>
                <p className="font-semibold">GradeSpot AI Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-white/80">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                  Online · Free instant support
                </p>
              </div>
              <IconButton
                label="Close chat"
                onClick={() => setOpen(false)}
                className="text-white hover:bg-white/10"
              >
                <Close size={20} />
              </IconButton>
            </header>

            <div className="flex flex-1 flex-col items-center justify-center gap-2 p-6 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand-ink">
                <Chat size={24} />
              </span>
              <p className="text-sm text-ink3">
                Ask about our certifications, web development, cybersecurity,
                or training schedules.
              </p>
              <p className="rounded-button bg-ink3/10 px-3 py-1 text-xs text-ink3">
                Chat API wiring lands in Phase 3 — visual shell only.
              </p>
            </div>

            <form
              className="flex items-center gap-2 border-t border-line/20 p-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                disabled
                placeholder="Chat connects in Phase 3…"
                aria-label="Chat message (disabled until Phase 3)"
                className="flex-1 rounded-button border border-line/30 bg-bg2 px-4 py-2.5 text-sm text-ink3 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled
                aria-label="Send message (disabled until Phase 3)"
                className="flex h-10 w-10 items-center justify-center rounded-button bg-brand text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
