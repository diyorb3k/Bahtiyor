"use client";

import { useEffect, useId, useRef, useState } from "react";

type Option = { value: string; label: string };

// Custom dropdown so the list matches the site design (native <select> popups can't be styled).
export function Select({
  name,
  value,
  onChange,
  options,
  placeholder,
  label,
}: {
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: Option[];
  placeholder: string;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const listId = useId();
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-night/60 px-5 py-4 text-left text-sm outline-none transition focus:border-gold/60 focus:ring-4 focus:ring-gold/10"
      >
        <span className={selected ? "text-white" : "text-white/30"}>{selected ? selected.label : placeholder}</span>
        <svg
          viewBox="0 0 20 20"
          className={`h-4 w-4 text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-20 mt-2 max-h-72 overflow-auto rounded-2xl border border-gold/20 bg-surface/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl"
        >
          {[{ value: "", label: placeholder }, ...options].map((o) => {
            const active = o.value === value;
            return (
              <li key={o.value || "__none"} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(o.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition ${
                    active ? "bg-gold/15 text-gold" : o.value ? "text-white/80 hover:bg-white/5 hover:text-white" : "text-white/40 hover:bg-white/5"
                  }`}
                >
                  {o.label}
                  {active && <span className="text-gold">✓</span>}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
