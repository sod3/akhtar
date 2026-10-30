"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [{ href: "/work", label: "Work" }, { href: "/about", label: "About" }, { href: "/thinking", label: "Thinking" }, { href: "/media", label: "Media" }];
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className="site-header">
    <div className="nav-wrap container">
      <Link href="/" aria-label="Mudassir Akhtar, home" className="brand"><span className="brand-symbol">M<span>.</span>A</span><span className="brand-wordmark">MUDASSIR<br />AKHTAR<span className="brand-dot">.</span></span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map(l => <Link key={l.href} href={l.href} className={pathname === l.href || pathname.startsWith(l.href + "/") ? "nav-active" : ""}>{l.label}</Link>)}</nav>
      <Link className="nav-contact" href="/contact">Let&apos;s connect <ArrowUpRight size={16} strokeWidth={1.8} /></Link>
      <button type="button" className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav">{open ? <X size={25}/> : <Menu size={25}/>}</button>
    </div>
    <nav id="mobile-nav" className={`mobile-nav ${open ? "mobile-nav-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open}>
      {links.map((l,i) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}><span className="tiny">0{i+1}</span>{l.label}<ArrowUpRight size={22}/></Link>)}
      <Link href="/contact" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}><span className="tiny">05</span>Collaborate<ArrowUpRight size={22}/></Link>
    </nav>
  </header>;
}
