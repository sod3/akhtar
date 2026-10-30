import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-top"><div><div className="eyebrow eyebrow-light"><span className="accent-disc"/> OPEN TO SELECT COLLABORATIONS</div><h2>Have something<br /><em>worth building?</em></h2></div><Link className="footer-cta" href="/contact" aria-label="Go to contact page"><ArrowUpRight size={37} strokeWidth={1.1}/></Link></div>
    <div className="footer-bottom"><Link href="/" className="footer-signature">MUDASSIR AKHTAR<span>.</span></Link><div className="footer-links"><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/thinking">Thinking</Link><Link href="/media">Media</Link><Link href="/contact">Contact</Link></div><span>© {new Date().getFullYear()} · Built from the customer backward.</span></div>
  </div></footer>;
}
