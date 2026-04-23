import "./App.css";
import { Link } from "react-router-dom";

function History() {
  return (
    <div className="history-page">

      {/* NAV */}
      <nav className="navbar">
        <Link to="/" className="logo-text">← Back</Link>
      </nav>

      {/* 🎬 HERO IMAGE */}
      <div className="history-hero-image">
        <div className="history-overlay">
          <h1>Where It Started</h1>
          <p>
            A journey rooted in community, leadership, and purpose —
            shaping the foundation for everything that followed.
          </p>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="timeline">

        <div className="timeline-item">
          <h2>Chief Marketing Officer – PushBlack</h2>
          <span>2024 – Present</span>
          <p>
            Leading content marketing and revenue product initiatives,
            driving AI-powered engagement at scale.
          </p>
        </div>

        <div className="timeline-item">
          <h2>Principal – Red Clay Studios</h2>
          <span>2023 – Present</span>
          <p>
            Independent leadership in PR, media relations, and communications.
          </p>
        </div>

        <div className="timeline-item">
          <h2>Sr Product Portfolio Manager – Workday</h2>
          <span>2020 – 2023</span>
          <p>
            Led global product marketing strategy for workforce analytics platforms.
          </p>
        </div>

        <div className="timeline-item">
          <h2>COO – i.c.stars</h2>
          <span>Earlier</span>
          <p>
            Oversaw digital transformation and operational growth at scale.
          </p>
        </div>

      </div>
    </div>
  );
}

export default History;