import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import PageIntro from "@/components/page-intro";
import Reveal from "@/components/reveal";
export const metadata: Metadata = { title: "Media & Speaking", description: "Speaking, founder conversations, field research and entrepreneurial moments from Mudassir Akhtar's work." };
const media=[
 {n:"01",type:"INDUSTRIAL VISIT / FIELD RESEARCH",title:"Inside FameWheels",detail:"Conversation, research and strategy with an operating automotive marketplace.",design:"media-a",status:"Footage reference available · media not uploaded"},
 {n:"02",type:"STARTUP PITCH / VENTURE BUILD",title:"ArtDera: Building a marketplace",detail:"Exploring the commercial model and opportunities for independent creators.",design:"media-b",status:"Pitch visuals and permission pending"},
 {n:"03",type:"LEADERSHIP / ENTREPRENEURSHIP",title:"Building with teams",detail:"Connecting strategy, collaboration and execution across different functions.",design:"media-c",status:"Team photography pending"},
 {n:"04",type:"IDEAS / CONVERSATIONS",title:"Behind the decisions",detail:"How products, marketing, psychology and business choices come together.",design:"media-d",status:"Edited interview footage pending"}
];
export default function Media(){return <><PageIntro index="04" kicker="MEDIA & SPEAKING" title={<>The work beyond<br/><em>the screen.</em></>} description="Business conversations, field research, startup pitching, team moments and ideas worth sharing. Real footage will appear here as approved media is supplied."/><section className="media-page section-padding"><div className="container"><div className="media-page-grid">{media.map((m,i)=><Reveal className="media-feature" key={m.n} delay={i*.05}><div className={`media-art ${m.design}`}><div className="media-bignum">{m.n}</div><div className="media-picture-label">MEDIA ASSET PENDING</div></div><div className="media-meta"><span>{m.type}</span><span>{m.n}/04</span></div><h2>{m.title}</h2><p>{m.detail}</p><p className="media-asset-status">{m.status}</p></Reveal>)}</div><div className="media-guidance"><h3>Good stories deserve real images.</h3><p>These are intentionally labeled editorial placeholders — not fabricated photos, recorded talks or video links. Add your approved original media to the editable content library before launching.</p><Link className="text-link" href="/contact">For speaking or interviews <ArrowUpRight size={19}/></Link></div></div></section></>}
