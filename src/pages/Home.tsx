import { useState } from "react";

import heroImg from "../assets/Screenshot 2026-04-22 212920.png";
import businessImg from "../assets/Awardpic.png";
import djImg from "../assets/DJMEGA.png";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="page">

      <section className="hero">
        <img src={heroImg} className="hero-bg" />

        <div className="hero-overlay">
          <h1 className="title">Kevin W McFall</h1>
          <p className="sub">Product • Growth • Marketing Leadership</p>

          <button className="cta" onClick={() => setOpen(true)}>
            Book a Consultation
          </button>
        </div>
      </section>

      {open && (
        <div className="booking-overlay">
          <div className="booking-modal">
            <button onClick={() => setOpen(false)}>✕</button>
            <h2>Book a Consultation</h2>
          </div>
        </div>
      )}

      <section className="scene">
        <img src={businessImg} className="bg" />
      </section>

      <section className="scene">
        <img src={djImg} className="bg" />
      </section>

    </main>
  );
}