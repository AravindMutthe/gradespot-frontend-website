"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Button, type ButtonSize } from "@/components/atoms";
import {
  AUDIENCE_LABELS,
  CallbackRequestSchema,
  normalizeIndianMobile,
  type CallbackRequest,
} from "@/lib/contracts";

/* ---------------------------------------------------------------------------
 * "Get a Callback" — the single site-wide CTA.
 *
 * Mount <CallbackModalProvider> once (in layout.tsx); anywhere in the tree,
 * <CallbackButton> opens the modal. The modal collects name, 10-digit Indian
 * mobile, audience and message, validates (Zod phone rule),
 * then copies the enquiry for WhatsApp/email.
 * When the Axon lead API gains a callback-shaped endpoint, this is the one
 * place to switch copy-to-clipboard for a POST.
 * ------------------------------------------------------------------------- */

const CallbackCtx = createContext<{ open: () => void }>({ open: () => {} });

export function useCallbackModal() {
  return useContext(CallbackCtx);
}

export function CallbackButton({
  children = "Get a Callback",
  size = "md",
  variant = "primary",
  className = "",
}: {
  children?: ReactNode;
  size?: ButtonSize;
  variant?: "primary" | "ghost" | "outline" | "whatsapp";
  className?: string;
}) {
  const { open } = useCallbackModal();
  return (
    <Button size={size} variant={variant} className={className} onClick={open}>
      {children}
    </Button>
  );
}

type Audience = CallbackRequest["audience"];

function FieldError({ show, children }: { show: boolean; children: ReactNode }) {
  if (!show) return null;
  return <p className="mt-1.5 text-[12.5px] font-semibold text-[#c62f2f]">{children}</p>;
}

const inputCls =
  "w-full rounded-[10px] border-[1.5px] border-line bg-bg px-[13px] py-[11px] text-[15px] text-ink placeholder:text-ink3 focus:border-brand focus:outline-2 focus:outline-brand/55";

export function CallbackModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [audience, setAudience] = useState<Audience>("student");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [copied, setCopied] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setCopied(false);
      setErrors({});
      const t = setTimeout(() => nameRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open ]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = CallbackRequestSchema.safeParse({
      name: name.trim(),
      phone: normalizeIndianMobile(phone),
      audience,
      message: message.trim() || undefined,
    });
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      setErrors({
        name: flat.name?.[0],
        phone: flat.phone?.[0],
      });
      return;
    }
    const d = parsed.data;
    const text =
      `Callback request — GradeSpot website\n` +
      `Name: ${d.name}\n` +
      `Mobile: ${d.phone}\n` +
      `I am a: ${AUDIENCE_LABELS[d.audience]}` +
      (d.message ? `\nNeeds: ${d.message}` : "");
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* clipboard unavailable — the note below still guides the visitor */
    }
    setCopied(true);
  };

  return (
    <CallbackCtx.Provider value={{ open: openModal }}>
      {children}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Request a callback"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(8,10,14,0.55)] p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="max-h-[90vh] w-full max-w-[480px] overflow-auto rounded-[18px] bg-panel p-[26px]">
            <h3 className="text-[21px]">Get a Callback</h3>
            <p className="mb-[18px] mt-1.5 text-[14.5px] text-ink2">
              Fill this in and copy your enquiry — send it to us on WhatsApp
              or email and we&apos;ll call you back.
            </p>
            <form onSubmit={submit} noValidate>
              <div className="mb-3.5">
                <label htmlFor="cb-name" className="mb-1.5 block text-[13.5px] font-bold">
                  Your name
                </label>
                <input
                  id="cb-name"
                  ref={nameRef}
                  type="text"
                  autoComplete="name"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputCls}
                />
                <FieldError show={!!errors.name}>{errors.name}</FieldError>
              </div>
              <div className="mb-3.5">
                <label htmlFor="cb-phone" className="mb-1.5 block text-[13.5px] font-bold">
                  Mobile number
                </label>
                <input
                  id="cb-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputCls}
                />
                <FieldError show={!!errors.phone}>{errors.phone}</FieldError>
              </div>
              <div className="mb-3.5">
                <label htmlFor="cb-aud" className="mb-1.5 block text-[13.5px] font-bold">
                  I am a
                </label>
                <select
                  id="cb-aud"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value as Audience)}
                  className={inputCls}
                >
                  {(Object.keys(AUDIENCE_LABELS) as Audience[]).map((a) => (
                    <option key={a} value={a}>
                      {AUDIENCE_LABELS[a]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3.5">
                <label htmlFor="cb-msg" className="mb-1.5 block text-[13.5px] font-bold">
                  What do you need?
                </label>
                <textarea
                  id="cb-msg"
                  rows={3}
                  placeholder="Course, service or product you're interested in"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div className="mt-[18px] flex flex-wrap gap-2.5">
                <Button type="submit">Copy My Enquiry</Button>
                <Button type="button" variant="ghost" onClick={close}>
                  Cancel
                </Button>
              </div>
              {copied && (
                <p className="mt-2.5 text-[13.5px] font-bold text-ok">
                  Copied — paste it into WhatsApp or email and hit send.
                  We&apos;ll take it from there.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </CallbackCtx.Provider>
  );
}
