import { useEffect, useState } from "react";
import { client, urlFor } from "../sanityClient";

/* ===== BACKGROUND ===== */
import bgImg from "../assets/KevinMcfallBackground.png";

/* ===== RUSHMORE ===== */
import rush1 from "../assets/Rushmore.png";
import rush2 from "../assets/rushmore2.png";
import rush3 from "../assets/rushmore3.png";
import rush4 from "../assets/rushmore4.png";

/* ===== ZAP2IT ===== */
import zapit1 from "../assets/zapit1des.png";
import zapit2 from "../assets/zapit2.png";
import zapit3 from "../assets/zapit3.png";

/* ===== WORKDAY ===== */
import workday1image from "../assets/workday1image.png";
import workday2image from "../assets/workday2image.png";

/* ===== SPHERA ===== */
import sphera1 from "../assets/sphera.png";
import newsphera1 from "../assets/newsphera1.png";
import newsphera2 from "../assets/newsphera2.png";

/* ===== SEARS ===== */
import sears1 from "../assets/sears1.png";
import sears3 from "../assets/sears3.png";

/* ===== CISION ===== */
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";

/* ===== TWEETS ===== */
import tweet1 from "../assets/tweets1.png";
import tweet2 from "../assets/tweets2.png";

/* ===== IC STARS ===== */
import ic1 from "../assets/IC1.png";
import ic2 from "../assets/IC2.png";
import ic3 from "../assets/IC3.png";
import ic4 from "../assets/IC4.png";
import ic5 from "../assets/IC5.png";
import ic6 from "../assets/IC6.png";
import ic7 from "../assets/IC7.png";
import ic8 from "../assets/IC8.png";
import ic9 from "../assets/IC9.png";
import ic11 from "../assets/IC11.png";

/* ===== PUSHBLACK ===== */
import pb1 from "../assets/PB1.png";
import pb2 from "../assets/PB2.png";
import pb3 from "../assets/PB3.png";
import pb4 from "../assets/PB4.png";
import pb5 from "../assets/PB5.png";
import pb6 from "../assets/PB6.png";
import pb7 from "../assets/PB7.png";
import pb8 from "../assets/PB8.png";

/* ===== MARKETING CAMPAIGNS ===== */
import mc1 from "../assets/m-c1.png";
import mc2 from "../assets/m-c2.png";
import mc3 from "../assets/m-c3.png";
import mc4 from "../assets/m-c4.png";
import mc5 from "../assets/m-c5.png";
import mc6 from "../assets/m-c6.png";
import mc7 from "../assets/m-c7.png";
import mc8 from "../assets/m-c8.png";
import mc9 from "../assets/m-c9.png";
import mc10 from "../assets/m-c10.png";
import mc11 from "../assets/m-c11.png";

type Project = {
  title: string;
  tag: string;
  overview: string;
  execution: string;
  impact: string;
  images: string[];
};

type SanityUpdate = {
  _id: string;
  title?: string;
  tag?: string;
  description?: string;
  impact?: string;
  image?: any;
};

const projects: Project[] = [
  {
    title: "Zap2it Platform",
    tag: "TV Guide • Media Platform",
    overview: "Led development of a large-scale TV and media discovery platform.",
    execution:
      "Managed 400+ affiliate partners and major networks including NBC and Disney while helping shape how audiences discovered what to watch and where to watch it.",
    impact:
      "Supported coverage for major global events including Olympics broadcasting and helped scale a widely used entertainment discovery platform.",
    images: [zapit1, zapit2, zapit3],
  },
  {
    title: "RushmoreDrive",
    tag: "Search • Community Platform",
    overview: "Built culturally relevant search experience for targeted audiences.",
    execution:
      "Focused on content discovery, community engagement, news aggregation, job search, interactive features, and culturally relevant search results.",
    impact:
      "One of the first culturally-driven search platforms, combining technology, community, and editorial content into one digital experience.",
    images: [rush1, rush2, rush3, rush4],
  },
  {
    title: "Cision Digital Media",
    tag: "PR • Social Media",
    overview: "Developed freemium growth strategy for PR and media tools.",
    execution:
      "Focused on acquisition, engagement, social tracking, influencer tools, and platform growth for media professionals and communicators.",
    impact:
      "Increased adoption across media professionals and enterprise clients while supporting demand generation in the PR and communications space.",
    images: [c1, c2, c3, c4, tweet1, tweet2],
  },
  {
    title: "Sphera ESG Platform",
    tag: "Enterprise SaaS • Sustainability",
    overview: "Led messaging, positioning, and relaunch of ESG sustainability platform.",
    execution:
      "Rebuilt branding, sharpened the value proposition, integrated new marketing assets, and supported the relaunch of Sphera’s Sustainability Cloud section.",
    impact:
      "Strengthened enterprise positioning and improved communication around ESG reporting, sustainability data, and regulatory readiness.",
    images: [sphera1, newsphera1, newsphera2],
  },
  {
    title: "SearsPartsDirect",
    tag: "E-Commerce • Retail",
    overview: "Built scalable product discovery experience.",
    execution:
      "Improved UX, search, navigation, and customer product discovery across a large parts and services e-commerce environment.",
    impact:
      "Enhanced usability, conversion flow, and the customer experience across millions of SKUs.",
    images: [sears1, sears3],
  },
  {
    title: "Workday VIBE",
    tag: "Analytics • HR Tech",
    overview: "Developed belonging and diversity analytics platform.",
    execution:
      "Defined enterprise analytics experiences measuring workforce sentiment, belonging, diversity, inclusion, and employee engagement.",
    impact:
      "Delivered scalable insights that helped organizations better understand workforce dynamics and improve inclusive workplace strategy.",
    images: [workday1image, workday2image],
  },
  {
    title: "i.c.stars Digital Transformation",
    tag: "Nonprofit • Workforce Development",
    overview:
      "Led digital transformation initiatives supporting workforce development, technology training, and organizational growth.",
    execution:
      "Owned strategy, budget planning, CRM and LMS implementation, data dashboards, and digital infrastructure improvements to support program operations and scale.",
    impact:
      "Improved productivity, strengthened internal systems, and helped expand the organization’s ability to serve emerging technology talent.",
    images: [ic1, ic2, ic3, ic4, ic5, ic6, ic7, ic8, ic9, ic11],
  },
  {
    title: "PushBlack Growth & Media Strategy",
    tag: "Media • Culture • Community",
    overview:
      "Supported content marketing, earned revenue, and audience growth initiatives for a civic engagement media platform.",
    execution:
      "Focused on digital storytelling, distribution strategy, podcast collaboration, engagement growth, audience acquisition, and mission-driven media performance.",
    impact:
      "Helped increase efficiency, grow audience engagement, and expand cultural impact through narrative-driven digital media.",
    images: [pb1, pb2, pb3, pb4, pb5, pb6, pb7, pb8],
  },
  {
    title: "Notable Marketing Campaigns",
    tag: "Marketing • Brand Strategy",
    overview:
      "Led and supported high-impact marketing campaigns across media, entertainment, product, and community-focused initiatives.",
    execution:
      "Built messaging, positioning, campaign strategy, brand storytelling, and cross-channel marketing assets for multiple organizations and audiences.",
    impact:
      "Increased visibility, strengthened brand presence, and helped convert strategy into measurable audience, revenue, and engagement outcomes.",
    images: [mc1, mc2, mc3, mc4, mc5, mc6, mc7, mc8, mc9, mc10, mc11],
  },
];

export function Work() {
  const [active, setActive] = useState<Project | null>(null);
  const [updates, setUpdates] = useState<SanityUpdate[]>([]);

  useEffect(() => {
    client
      .fetch<SanityUpdate[]>(
        `*[_type == "project"] | order(_createdAt desc){
          _id,
          title,
          tag,
          description,
          impact,
          image
        }`
      )
      .then((data) => {
        console.log("SANITY DATA:", data);
        setUpdates(data);
      })
      .catch((error) => {
        console.error("Sanity fetch error:", error);
      });
  }, []);

  return (
    <section className="work-page">
      <div className="work-bg">
        <img src={bgImg} alt="Kevin McFall background" />
        <div className="work-bg-overlay" />
      </div>

      <div className="work-content">
        <h1 className="work-title">Portfolio</h1>

        <div className="projects">
          {projects.map((p) => (
            <button
              key={p.title}
              className="project-card"
              onClick={() => setActive(p)}
              type="button"
            >
              <p className="tag">{p.tag}</p>
              <h2>{p.title}</h2>
              <p>{p.overview}</p>
              <span className="card-hint">Open Case Study</span>
            </button>
          ))}
        </div>

        <div className="latest-updates">
          <h2>Latest Portfolio Updates</h2>

          {updates.length === 0 ? (
            <p className="empty-updates">No monthly updates published yet.</p>
          ) : (
            <div className="updates-grid">
              {updates.map((update) => (
                <article className="update-card" key={update._id}>
                  {update.image && (
                    <img
                      src={urlFor(update.image).width(900).url()}
                      alt={update.title || "Portfolio update"}
                      className="update-image"
                    />
                  )}

                  <div className="update-body">
                    <p className="tag">{update.tag || "Portfolio Update"}</p>
                    <h3>{update.title}</h3>
                    <p className="desc">{update.description}</p>
                    {update.impact && <p className="impact">{update.impact}</p>}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {active && (
        <div className="modal" onClick={() => setActive(null)}>
          <button className="close" onClick={() => setActive(null)} type="button">
            ✕
          </button>

          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {active.images.length > 0 && (
              <div className="modal-hero-image">
                <img src={active.images[0]} alt={`${active.title} hero`} />
              </div>
            )}

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

            {active.images.length > 1 && (
              <div className="image-grid">
                {active.images.slice(1).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${active.title} visual ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
