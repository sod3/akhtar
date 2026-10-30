import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/content";

type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return articles.map(a=>({slug:a.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const a=articles.find(x=>x.slug===slug);return a?{title:a.title,description:a.excerpt}:{title:"Article not found"};}
export default async function ArticlePage({params}:Props){const {slug}=await params;const a=articles.find(x=>x.slug===slug);if(!a)notFound();const next=articles[(articles.findIndex(x=>x.slug===slug)+1)%articles.length];return <>
 <article><header className="article-hero section-padding"><div className="container article-hero-inner"><Link className="back-link" href="/thinking"><ArrowLeft size={16}/> ALL FIELD NOTES</Link><p className="eyebrow"><span className="eyebrow-rule"/>{a.category.toUpperCase()} / {a.readingTime.toUpperCase()}</p><h1>{a.title}</h1><p>{a.excerpt}</p><div className="article-credit"><span>WORDS BY MUDASSIR AKHTAR</span><span>ORIGINAL FIELD NOTE · WORKING EDITORIAL</span></div></div></header><div className="article-body"><div className="article-content"><span className="dropcap">{a.number}</span>{a.paragraphs.map((p,i)=><p key={i}>{p}</p>)}<div className="article-pullquote">“Clarity before execution.”</div></div></div></article><div className="next-project"><div className="container"><span>READ NEXT</span><Link href={`/thinking/${next.slug}`}><strong>{next.title}</strong><ArrowUpRight size={40}/></Link></div></div>
 </>}
