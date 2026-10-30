"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";

export default function InquiryForm() {
  const [name,setName] = useState(""); const [email,setEmail] = useState(""); const [type,setType] = useState("Venture collaboration"); const [message,setMessage] = useState(""); const [notice,setNotice] = useState(""); const [copied,setCopied] = useState(false);
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  const body = `Name: ${name}\nEmail: ${email}\nOpportunity: ${type}\n\n${message}`;
  async function copy() {
    try { await navigator.clipboard.writeText(body); setCopied(true); setNotice("Inquiry copied. Contact details will be enabled when the verified email address is configured."); setTimeout(() => setCopied(false), 2500); }
    catch { setNotice("Clipboard unavailable in this browser. Please select and copy your message manually."); }
  }
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!contactEmail) { void copy(); return; }
    const subject = encodeURIComponent(`${type} enquiry — ${name}`);
    const msg = encodeURIComponent(body);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${msg}`;
    setNotice("Your email application should open with the inquiry prepared. Please send it from there; no message was submitted to a server.");
  }
  return <form className="inquiry-form" onSubmit={submit}>
    <div className="form-two"><label>Your name <input autoComplete="name" value={name} onChange={e=>setName(e.target.value)} required minLength={2} maxLength={120} placeholder="How should I address you?" /></label><label>Email address <input type="email" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} required maxLength={150} placeholder="you@company.com" /></label></div>
    <label>What are you exploring? <select value={type} onChange={e=>setType(e.target.value)}><option>Venture collaboration</option><option>Product & growth strategy</option><option>Business partnership</option><option>Speaking / media</option><option>Something else</option></select></label>
    <label>Tell me about it <textarea required minLength={12} maxLength={5000} rows={5} value={message} onChange={e=>setMessage(e.target.value)} placeholder="The idea, the challenge, or the opportunity…" /></label>
    <div className="form-action"><button type="submit" className="button button-dark">{contactEmail ? "Prepare email" : "Copy inquiry"}<ArrowUpRight size={18}/></button><button className="copy-action" type="button" onClick={()=>void copy()} aria-label="Copy inquiry text">{copied?<Check size={18}/>:<Copy size={18}/>} Copy details</button></div>
    <p className="form-disclosure">{contactEmail ? "Your email client will open. The site does not store or transmit this form." : "The public contact email has not been configured yet. The form copies your message instead of pretending it was submitted."}</p>
    {notice && <p className="form-notice" role="status">{notice}</p>}
  </form>;
}
