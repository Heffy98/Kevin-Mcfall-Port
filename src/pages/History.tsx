import { useState } from "react";

import momImg from "../assets/Kmcfallhistory.png";
import kidImg from "../assets/KevinKid.png";
import collegeImg from "../assets/UniversityOfIllinois.png";
import familyImg from "../assets/KevinFamily.png";
import marriageImg from "../assets/KevinMarriage.png";
import dj1 from "../assets/DJMEGA.png";
import dj2 from "../assets/DJMega3.png";
import dj3 from "../assets/DJMega4.png";

/* ===== DATA ===== */
const sections = [
  {
    title: "The Beginning",
    text: "Every story starts with foundation. Family, values, and guidance shaped the path ahead.",
    image: momImg,
    extra: [kidImg],
  },
  {
    title: "Building Community",
    text: "At the University of Illinois, Kevin co-founded the Black Alumni Network to build lasting support for students.",
    image: collegeImg,
    extraText: `
In 2002, Kevin McFall (LAS ’86) and Alicia Gilmore-Catching founded the University of Illinois Black Alumni Network (BAN).

Today, the network is 500 strong and continues to grow — supporting students long after graduation.

Be one of the 500.
Donate: www.tinyurl.com/BANDonations
    `,
  },
  {
    title: "Family",
    text: "Through every chapter, family remains the center of purpose and motivation.",
    image: familyImg,
  },
];

export function History() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="history-page">

      {/* ===== FIRST TWO CARDS ===== */}
      {sections.slice(0, 2).map((sec, i) => (
        <div
          key={i}
          className={`history-card ${active === i ? "open" : ""}`}
          onClick={() => setActive(active === i ? null : i)}
        >
          <img src={sec.image} className="card-bg" />
          <div className="card-overlay" />

          <div className="card-content">
            <h2>{sec.title}</h2>
            <p>{sec.text}</p>

            {active === i && (
              <div className="card-expand">
                {sec.extraText && <p>{sec.extraText}</p>}

                {sec.extra && (
                  <div className="extra-images">
                    {sec.extra.map((img, idx) => (
                      <img key={idx} src={img} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* ===== MARRIAGE TRANSITION ===== */}
      <section className="history-transition">
        <img src={marriageImg} className="transition-bg" />
        <div className="transition-overlay" />

        <div className="transition-content">
          <h2>A New Chapter</h2>
          <p>
            From building community to building a life — marriage marked the
            beginning of something deeper, rooted in love, partnership, and purpose.
          </p>
        </div>
      </section>

      {/* ===== FAMILY CARD ===== */}
      {sections.slice(2).map((sec, i) => {
        const index = i + 2;

        return (
          <div
            key={index}
            className={`history-card ${active === index ? "open" : ""}`}
            onClick={() =>
              setActive(active === index ? null : index)
            }
          >
            <img src={sec.image} className="card-bg" />
            <div className="card-overlay" />

            <div className="card-content">
              <h2>{sec.title}</h2>
              <p>{sec.text}</p>
            </div>
          </div>
        );
      })}

      {/* ===== DJ FINALE ===== */}
      <section className="dj-finale">
        <img src={dj1} className="dj-bg" />
        <div className="dj-overlay" />

        <div className="dj-content">
          <h1>DJ MEGA</h1>

          <p>
            Where business meets culture. Where strategy meets sound.
            This is more than music — it's connection, energy, and impact.
          </p>

          <div className="dj-gallery">
            <img src={dj2} />
            <img src={dj3} />
          </div>
        </div>
      </section>

      {/* ===== PODCAST / PUSHBLACK ===== */}
      <section className="podcast-section">
        <div className="podcast-content">
          <h2>Continuing the Conversation</h2>

          <p>
            Beyond leadership and music, the work extends into storytelling and
            amplifying voices. Through platforms like PushBlack, powerful narratives
            around Black history, culture, and social impact are shared with millions —
            bringing forward stories that often go untold.
          </p>

          <a
            href="https://www.pushblack.us/"
            target="_blank"
            className="podcast-button"
          >
            Explore PushBlack
          </a>
        </div>
      </section>

    </div>
  );
}