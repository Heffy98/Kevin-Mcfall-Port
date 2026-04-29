import { useState } from "react";
import "./App.css";

import avatarImg from "./assets/KM-Blk-turtleneck-2025.jpeg";
import heroImg from "./assets/Screenshot 2026-04-22 212920.png";
import businessImg from "./assets/Awardpic-edited.png";
import { Work as Portfolio } from "./pages/Work";
type Page = "home" | "portfolio" | "contact";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (nextPage: Page) => {
    setPage(nextPage);
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <button className="brand" onClick={() => navigate("home")}>
          <img src={avatarImg} alt="Kevin McFall" className="avatar" />
          <span className="brand-name">McFall</span>
          <span className="badge">Chief Marketing Officer</span>
        </button>

    <button
  className={`hamburger ${menuOpen ? "open" : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</button>
      </nav>

      <div
        className={`menu-backdrop ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`side-menu ${menuOpen ? "show" : ""}`}>
        <button onClick={() => navigate("home")}>Home</button>
        <button onClick={() => navigate("portfolio")}>Portfolio</button>
        <button onClick={() => navigate("contact")}>Contact</button>
      </aside>
      {page === "home" && <Home />}
     {page === "portfolio" && <Portfolio />}
      {page === "contact" && <Contact />}
    </div>
  );
}

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="page">

      <section className="hero theme-hero">
        <img src={heroImg} className="hero-bg" />

        <div className="hero-overlay">
          <h1 className="title reveal-text">Kevin W McFall</h1>
          <p className="sub">Product • Growth • Marketing Leadership</p>
          <p className="description">
            Proven executive driving revenue, strategy, and digital transformation.
          </p>

          <div className="hero-actions">
            <button className="cta" onClick={() => setOpen(true)}>
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="booking-overlay">
          <div className="booking-modal">
            <button className="close-modal" onClick={() => setOpen(false)}>✕</button>
            <h2>Book a Consultation</h2>
            <p>Email: kevin.mcfall@gmail.com</p>
          </div>
        </div>
      )}

      {/* KEEP YOUR SECTIONS */}
      <section className="scene theme-business">
        <img src={businessImg} className="bg" />
        <div className="overlay">
          <h2>Business Impact</h2>
        </div>
      </section>

    </main>
  );
}

function Contact() {
  return (
    <section className="contact">
      <div className="contact-bg">
        <img src={avatarImg} alt="" />
      </div>
      <div className="contact-content">
        <h1>Contact</h1>
        <p>Email: kevin.mcfall@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/kevinmcfall</p>
      </div>
    </section>
  );
}
