import { useState } from "react";
import "./App.css";

import avatarImg from "./assets/KM-Blk-turtleneck-2025.jpeg";
import heroImg from "./assets/Screenshot 2026-04-22 212920.png";
import businessImg from "./assets/Awardpic.png";
import historyImg from "./assets/Kmcfallhistory.png";
import djImg from "./assets/DJMEGA.png";

type Page = "home" | "history" | "work" | "contact";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <button className="brand" onClick={() => setPage("home")}>
          <img src={avatarImg} alt="Kevin McFall" className="avatar" />
          <span className="brand-name">McFall</span>
          <span className="badge">Chief Marketing Officer</span>
        </button>

        <div className="links">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("history")}>History</button>
          <button onClick={() => setPage("work")}>Work</button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </div>
      </nav>

      {page === "home" && <Home />}
      {page === "history" && <History />}
      {page === "work" && <Work />}
      {page === "contact" && <Contact />}
    </div>
  );
}

/* ================= HOME ================= */

function Home() {
  return (
    <main className="page">
      
      {/* HERO */}
      <section className="hero theme-hero">
        <img src={heroImg} className="hero-bg" />

        <div className="hero-overlay">
          <h1 className="title reveal-text">Kevin W McFall</h1>
          <p className="sub">Product • Growth • Marketing Leadership</p>
          <p className="description">
            Proven executive driving revenue, strategy, and digital transformation across B2B and B2C.
          </p>
          <button className="cta">Book a Consultation</button>
        </div>
      </section>

      {/* BUSINESS */}
      <section className="scene theme-business">
        <img src={businessImg} className="bg" />
        <div className="overlay">
          <h2>Business Impact</h2>
          <p>
            Led cross-functional teams, scaled revenue beyond $20M, and delivered measurable impact.
          </p>
        </div>
      </section>

      {/* DJ */}
      <section className="scene dj theme-dj">
        <img src={djImg} className="bg" />
        <div className="overlay">
          <h2 className="dj-title">DJ MEGA</h2>
          <p>
            Where culture meets sound. Years of music, radio, and community impact.
          </p>
        </div>
      </section>

    </main>
  );
}

/* ================= HISTORY ================= */

function History() {
  return (
    <section className="hero theme-history">
      <img src={historyImg} className="hero-bg" />

      <div className="hero-overlay">
        <h1 className="title">History</h1>
        <p>
          From early beginnings to building a career that bridges business and culture.
        </p>
      </div>
    </section>
  );
}

/* ================= WORK ================= */

function Work() {
  return (
    <section className="work">
      <h1>Selected Work</h1>

      <div className="cards">
        <div className="card">
          <h3>Enterprise ESG Platform</h3>
          <p>Corporate sustainability platform.</p>
        </div>

        <div className="card">
          <h3>Workday VIBE</h3>
          <p>Workforce analytics platform.</p>
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT ================= */

function Contact() {
  return (
    <section className="contact">
      <h1>Contact</h1>
      <p>Email: kevin.mcfall@gmail.com</p>
      <p>LinkedIn: linkedin.com/in/kevinmcfall</p>
    </section>
  );
}
