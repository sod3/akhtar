"use client";

import { useState } from "react";
import { growthSteps } from "@/lib/content";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export default function GrowthSystem() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  return <div className="growth-layout">
    <div className="growth-steps" role="tablist" aria-label="Eight stages of the growth system">{growthSteps.map((s, i) => <button key={s.title} type="button" role="tab" aria-selected={active === i} aria-controls="growth-panel" id={`growth-tab-${i}`} tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={e => { if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); const j = (active + 1) % growthSteps.length; setActive(j); document.getElementById(`growth-tab-${j}`)?.focus(); } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); const j = (active + growthSteps.length - 1) % growthSteps.length; setActive(j); document.getElementById(`growth-tab-${j}`)?.focus(); } }} className={`growth-step ${active === i ? "selected" : ""}`}>
      <span className="growth-index">0{i+1}</span><span>{s.title}</span><ArrowUpRight size={19} strokeWidth={1.4}/>
    </button>)}</div>
    <div id="growth-panel" role="tabpanel" aria-labelledby={`growth-tab-${active}`} className="growth-feature">
      <div className="growth-feature-header"><span className="eyebrow eyebrow-light">THE OPERATING SYSTEM / 0{active+1}</span><ArrowRight size={25} strokeWidth={1.4}/></div>
      <AnimatePresence mode="wait"><motion.div key={active} initial={reduced ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? {} : { opacity: 0, y: -8 }} transition={{ duration: reduced ? 0 : .28 }}>
        <div className="growth-big-num">0{active+1}<span>/08</span></div><p className="growth-feature-kicker">{growthSteps[active].short}</p><h3>{growthSteps[active].title}<span className="dot">.</span></h3><p className="growth-feature-text">{growthSteps[active].detail}</p>
      </motion.div></AnimatePresence><div className="growth-progress"><div style={{ width: `${((active+1)/8)*100}%` }}/></div>
    </div>
  </div>;
}
