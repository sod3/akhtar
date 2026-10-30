"use client";
import { useEffect, useState } from "react";
export default function ScrollProgress() {
  const [value,setValue] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => { cancelAnimationFrame(frame); frame=requestAnimationFrame(()=>{const h=document.documentElement.scrollHeight-window.innerHeight; setValue(h>0?(window.scrollY/h)*100:0);}); };
    update(); window.addEventListener("scroll",update,{passive:true}); window.addEventListener("resize",update);
    return ()=>{cancelAnimationFrame(frame);window.removeEventListener("scroll",update);window.removeEventListener("resize",update);};
  },[]);
  return <div className="scroll-progress" aria-hidden="true" style={{transform:`scaleX(${value/100})`}}/>;
}
