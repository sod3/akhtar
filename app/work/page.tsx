import type { Metadata } from "next";
import PageIntro from "@/components/page-intro";
import Reveal from "@/components/reveal";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/content";

export const metadata: Metadata = { title: "Work & Ventures", description: "ArtDera, Novuli and FameWheels: selected venture building, product strategy and automotive marketplace growth work." };
export default function Work(){return <><PageIntro index="02" kicker="WORK & VENTURES" title={<>Different contexts.<br/><em>Same discipline.</em></>} description="From zero-to-one marketplace building to client work and operating-business strategy. Each case makes clear what I did — and what remains a proposal."/><section className="work-page section-padding"><div className="container"><div className="work-filters"><span>SELECTED CASE STUDIES / 03</span><span>VENTURE · PRODUCT · GROWTH</span></div><div className="work-page-grid">{projects.map((p,i)=><Reveal key={p.slug} delay={i*.06}><ProjectCard project={p} featured={i===0}/></Reveal>)}</div><div className="work-disclosure"><span>THE STANDARD</span><p>Every case follows context → constraint → insight → decisions → contribution → evidence → learning. No invented ROI, client endorsements or implementation claims.</p></div></div></section></>}
