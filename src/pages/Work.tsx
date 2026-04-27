import { useState } from "react";

/* ===== BACKGROUND ===== */
import bgImg from "../assets/KevinMcfallBackground.png";

/* ===== ASSETS ===== */

/* Rushmore */
import rush1 from "../assets/Rushmore.png";
import rush2 from "../assets/rushmore2.png";
import rush3 from "../assets/rushmore3.png";
import rush4 from "../assets/rushmore4.png";

/* Zap2it */
import zapit1 from "../assets/zapit1des.png";
import zapit2 from "../assets/zapit2.png";
import zapit3 from "../assets/zapit3.png";

/* Workday */
import workday1image from "../assets/workday1image.png";
import workday2image from "../assets/workday2image.png";

/* Sphera */
import sphera1 from "../assets/sphera.png";

/* Sears */
import sears1 from "../assets/sears1.png";
import sears3 from "../assets/sears3.png";

/* Cision */
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";

/* Tweets */
import tweet1 from "../assets/tweets1.png";
import tweet2 from "../assets/tweets2.png";

/* ===== PROJECT DATA ===== */
const projects = [
  {
    title: "Zap2it Platform",
    tag: "TV Guide • Media Platform",
    overview:
      "Led development of a large-scale TV and media discovery platform.",
    execution:
      "Managed 400+ affiliate partners and major networks including NBC and Disney.",
    impact:
      "Supported coverage for major global events including Olympics broadcasting.",
    images: [zapit1, zapit2, zapit3],
  },
  {
    title: "RushmoreDrive",
    tag: "Search • Community Platform",
    overview:
      "Built culturally relevant search experience for targeted audiences.",
    execution:
      "Focused on content discovery and community engagement.",
    impact:
      "One of the first culturally-driven search platforms.",
    images: [rush1, rush2, rush3, rush4],
  },
  {
    title: "Cision Digital Media",
    tag: "PR • Social Media",
    overview:
      "Developed freemium growth strategy for PR and media tools.",
    execution:
      "Focused on acquisition, engagement, and influencer platform scaling.",
    impact:
      "Increased adoption across media professionals and enterprise clients.",
    images: [c1, c2, c3, c4, tweet1, tweet2],
  },
  {
    title: "Sphera ESG Platform",
    tag: "Enterprise SaaS • Sustainability",
    overview:
      "Led messaging and relaunch of ESG sustainability platform.",
    execution:
      "Rebuilt branding and integrated new marketing assets.",
    impact:
      "Improved positioning in enterprise sustainability market.",
    images: [sphera1],
  },
  {
    title: "SearsPartsDirect",
    tag: "E-Commerce • Retail",
    overview:
      "Built scalable product discovery experience.",
    execution:
      "Improved UX and navigation across millions of SKUs.",
    impact:
      "Enhanced conversion and usability.",
    images: [sears1, sears3],
  },
  {
    title: "Workday VIBE",
    tag: "Analytics • HR Tech",
    overview:
      "Developed belonging & diversity analytics platform.",
    execution:
      "Defined enterprise analytics measuring workforce sentiment.",
    impact:
      "Delivered scalable insights across organizations.",
    images: [workday1image, workday2image],
  },
];

export function Work() {
  const [active, setActive] = useState<any>(null);

  return (
    <section className="work-page">

      {/* ===== BACKGROUND ===== */}
      <div className="work-bg">
        <img src={bgImg} alt="background" />
        <div className="work-bg-overlay" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="work-content">
        <h1 className="work-title">Selected Work</h1>

        <div className="projects">
          {projects.map((p) => (
            <div
              key={p.title}
              className="project-card"
              onClick={() => setActive(p)}
            >
              <p className="tag">{p.tag}</p>
              <h2>{p.title}</h2>
              <p>{p.overview}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {active && (
        <div className="modal">
          <button className="close" onClick={() => setActive(null)}>
            ✕
          </button>

          <div className="modal-content">
            <h1>{active.title}</h1>
            <p className="tag">{active.tag}</p>

            <section>
              <h3>Overview</h3>
              <p>{active.overview}</p>
            </section>

            <section>
              <h3>Execution</h3>
              <p>{active.execution}</p>
            </section>

            <section>
              <h3>Impact</h3>
              <p>{active.impact}</p>
            </section>

            <div className="image-grid">
              {active.images.map((img: string, i: number) => (
                <img key={i} src={img} alt={active.title} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}