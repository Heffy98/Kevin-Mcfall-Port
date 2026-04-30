import { type FormEvent, useState } from "react";

import heroImg from "../assets/Screenshot 2026-04-22 212920.png";
import businessImg from "../assets/Awardpic.png";
import djImg from "../assets/DJMEGA.png";

const rotatingQuotes = [
  "Strategy turns vision into momentum.",
  "Growth follows clarity, courage, and execution.",
  "Leadership is the bridge between ideas and impact.",
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const sendConsultationRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const message = String(formData.get("message") || "");
    const subject = `Consultation request from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:kevin.mcfall@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setOpen(false);
  };

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

        <QuoteRibbon />
      </section>

      {open && (
        <div className="booking-overlay">
          <div className="booking-modal">
            <button
              className="close-modal"
              onClick={() => setOpen(false)}
              type="button"
            >
              ✕
            </button>
            <h2>Book a Consultation</h2>

            <form className="booking-form" onSubmit={sendConsultationRequest}>
              <label>
                Name
                <input name="name" type="text" autoComplete="name" required />
              </label>

              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>

              <label>
                Phone
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>

              <label>
                Message
                <textarea name="message" rows={4} required />
              </label>

              <button className="booking-submit" type="submit">
                Send Request
              </button>
            </form>
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

function QuoteRibbon() {
  return (
    <div className="quote-ribbon" aria-label="Rotating leadership quotes">
      {rotatingQuotes.map((quote, index) => (
        <span key={quote} style={{ animationDelay: `${index * 4}s` }}>
          {quote}
        </span>
      ))}
    </div>
  );
}
