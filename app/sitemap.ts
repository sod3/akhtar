import type { MetadataRoute } from "next";
import { projects, articles } from "@/lib/content";
export default function sitemap():MetadataRoute.Sitemap {
 const domain=(process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL !== "https://example.com" ? process.env.NEXT_PUBLIC_SITE_URL : "https://example.com").replace(/\/$/, "");
 return ["", "/about", "/work", "/thinking", "/media", "/contact", ...projects.map(p=>`/work/${p.slug}`), ...articles.map(a=>`/thinking/${a.slug}`)].map(path=>({url:`${domain}${path}`,changeFrequency:"monthly" as const,priority:path===""?1:0.7}));
}
