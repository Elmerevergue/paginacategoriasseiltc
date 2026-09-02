"use client";

import { useState } from "react";

const LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#transformadores", label: "Transformadores" },
  { href: "#mantenimiento", label: "Mantenimiento" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="font-display text-lg font-bold text-azul">
          SEILTC
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-azul"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="border-b-2 border-cobre text-sm font-semibold text-ink transition-colors hover:text-cobre"
          >
            Cotizar
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border border-rule md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-rule px-5 pb-2 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-rule py-3 text-base font-medium text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
