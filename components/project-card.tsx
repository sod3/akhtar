import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/content";

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <Link href={`/work/${project.slug}`} className={`project-card project-${project.theme} ${featured ? "project-featured" : ""}`}>
    <div className="project-art"><Image src={project.cover} alt={`Editorial graphic for the ${project.name} project, not a product screenshot`} width={1100} height={740} sizes={featured ? "(max-width: 800px) 100vw, 58vw" : "(max-width: 800px) 100vw, 45vw"} /></div>
    <div className="project-meta"><span className="eyebrow">{project.label}</span><span className="project-arrow"><ArrowUpRight size={23} strokeWidth={1.4}/></span></div>
    <h3>{project.name}</h3><p>{project.description}</p><div className="project-tagline"><span>{project.sector}</span><span>{project.category}</span></div>
  </Link>;
}
