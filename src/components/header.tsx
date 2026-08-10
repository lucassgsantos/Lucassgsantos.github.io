"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [{ href: "#projetos", label: "Projetos" }, { href: "#contato", label: "Contato" }];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-20 border-b border-transparent bg-[#f7f7f7]/90 backdrop-blur-md">
    <nav className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-6" aria-label="Navega??o principal">
      <a href="#inicio" className="text-sm font-bold tracking-[-0.03em] text-zinc-950">Lucas Pinheiro</a>
      <div className="hidden items-center gap-8 text-sm font-semibold text-zinc-600 md:flex">{links.map((link) => <a className="transition hover:text-zinc-950" href={link.href} key={link.href}>{link.label}</a>)}</div>
      <button className="rounded p-2 text-zinc-950 md:hidden" type="button" aria-expanded={open} aria-label="Abrir menu" onClick={() => setOpen((value) => !value)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
    </nav>
    {open && <div className="border-t border-zinc-200 bg-white px-[4%] pb-4 pt-2 md:hidden">{links.map((link) => <a className="block py-3 text-sm font-semibold text-zinc-700" href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</div>}
  </header>;
}
