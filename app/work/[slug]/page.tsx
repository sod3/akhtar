import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/reveal";
import { projects } from "@/lib/content";

type Props = { params: Promise<{slug:string}> };
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const p=projects.find(x=>x.slug===slug);return p?{title:`${p.name} — Case Study`,description:p.description}:{title:"Work not found"};}
export default async function CaseStudy({params}:Props){
 const {slug}=await params;const p=projects.find(x=>x.slug===slug);if(!p)notFound();
 const next=projects[(projects.findIndex(x=>x.slug===slug)+1)%projects.length];
 return <>
  <section className="case-hero section-padding"><div className="container"><Link href="/work" className="back-link"><ArrowLeft size={16}/> ALL WORK</Link><div className="case-hero-grid"><div><p className="eyebrow"><span className="eyebrow-rule"/>{p.label} / {p.category.toUpperCase()}</p><h1>{p.name}<span>.</span></h1><p>{p.intro}</p><div className="case-chips"><span>{p.sector}</span><span>{p.role}</span></div></div><div className="case-aside"><span>ENGAGEMENT</span><strong>{p.period}</strong><span>STATUS</span><p>{p.status}</p>{p.url&&<a className="text-link" href={p.url} target="_blank" rel="noopener noreferrer">Visit public site <ArrowUpRight size={17}/></a>}</div></div></div></section>
  <section className="case-image-section"><div className="container"><div className={`case-image case-image-${p.theme}`}><Image src={p.cover} alt={`Conceptual editorial artwork for ${p.name}, not a screenshot`} fill priority sizes="(max-width: 800px) 100vw, 90vw"/></div><p className="image-caption">EDITORIAL PROJECT VISUAL / ORIGINAL ARTWORK — NOT AN ACTUAL WEBSITE SCREENSHOT</p></div></section>
  <section className="case-body section-padding"><div className="container case-content-grid"><aside className="case-contents"><span>IN THIS CASE</span><a href="#context">01 / Context</a><a href="#constraint">02 / Constraint</a><a href="#insight">03 / Insight</a><a href="#direction">04 / Direction</a><a href="#contribution">05 / Contribution</a><a href="#evidence">06 / Evidence</a><a href="#learning">07 / Learning</a></aside><div className="case-story">
   <Reveal className="case-chapter" ><span id="context" className="chapter-anchor"/><p className="eyebrow">01 / BUSINESS CONTEXT</p><h2>The starting point.</h2><p>{p.context}</p></Reveal>
   <Reveal className="case-chapter"><span id="constraint" className="chapter-anchor"/><p className="eyebrow">02 / THE CONSTRAINT</p><h2>What made this difficult?</h2><p>{p.constraint}</p></Reveal>
   <Reveal className="case-chapter"><span id="insight" className="chapter-anchor"/><p className="eyebrow">03 / THE INSIGHT</p><h2>See the real problem.</h2><blockquote>{p.insight}</blockquote></Reveal>
   <Reveal className="case-chapter"><span id="direction" className="chapter-anchor"/><p className="eyebrow">04 / STRATEGIC DIRECTION</p><h2>What I focused on.</h2><div className="decision-list">{p.decisions.map((d,i)=><div key={d}><span>0{i+1}</span><p>{d}</p></div>)}</div></Reveal>
   <Reveal className="case-chapter"><span id="contribution" className="chapter-anchor"/><p className="eyebrow">05 / MY CONTRIBUTION</p><h2>The work, precisely stated.</h2><p>{p.execution}</p></Reveal>
   <Reveal className="case-chapter"><span id="evidence" className="chapter-anchor"/><p className="eyebrow">06 / WHAT CAN BE SHOWN</p><h2>Evidence, not invention.</h2><div className="evidence-list">{p.evidence.map(e=><div key={e}><CheckCircle2 size={22}/><p>{e}</p></div>)}</div><p className="case-evidence-note">For stronger proof, add approved screenshots, source documents, testimonial permission and verified current metrics before publishing updates.</p></Reveal>
   <Reveal className="case-chapter"><span id="learning" className="chapter-anchor"/><p className="eyebrow">07 / THE LEARNING</p><h2>What matters next.</h2><p>{p.learning}</p></Reveal>
  </div></div></section><section className="next-project"><div className="container"><span>NEXT CASE STUDY</span><Link href={`/work/${next.slug}`}><strong>{next.name}</strong><ArrowUpRight size={40}/></Link></div></section>
 </>;
}
