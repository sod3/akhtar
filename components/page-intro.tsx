import { ReactNode } from "react";
export default function PageIntro({ index, kicker, title, description }: { index: string; kicker: string; title: ReactNode; description: string }) {
 return <section className="page-intro section-padding"><div className="container"><div className="eyebrow"><span className="eyebrow-rule"/>{index} / {kicker}</div><h1 className="page-heading">{title}</h1><p className="page-description">{description}</p></div></section>;
}
