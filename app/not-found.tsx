import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function NotFound(){return <section className="not-found section-padding"><div className="container"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>This road<br/><em>ends here.</em></h1><p>But the best ideas usually start by choosing another direction.</p><Link href="/" className="button button-dark">Back to the beginning <ArrowUpRight size={18}/></Link></div></section>}
