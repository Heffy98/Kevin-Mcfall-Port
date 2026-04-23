import kevinImg from "../assets/kevin.jpg";

export function About() {
  return (
    <>
      <section className="about">
        <h1>About</h1>

        <img src={kevinImg} alt="Kevin McFall" className="profile-img" />

        <p>
          Kevin McFall is an AI-fluent business leader with over 15 years of
          experience across product, marketing, and strategy. He specializes in
          driving revenue growth, building impactful customer experiences, and
          leading cross-functional initiatives that deliver measurable results.
        </p>
      </section>

      <section className="experience">
        <h2>Experience</h2>

        <div className="exp-item">
          <h3>Chief Marketing Officer</h3>
          <p className="exp-company">PushBlack - Remote</p>
          <p>
            Leads content marketing and revenue-driving product initiatives
            while managing and developing a high-performing team.
          </p>
        </div>

        <div className="exp-item">
          <h3>Principal</h3>
          <p className="exp-company">Red Clay Studios - Chicago</p>
          <p>
            Runs an independent PR, media relations, and communications firm
            focused on strategic storytelling and public engagement.
          </p>
        </div>

        <div className="exp-item">
          <h3>Sr Product Portfolio Manager</h3>
          <p className="exp-company">Workday - Chicago</p>
          <p>
            Led global product and solution marketing for HR platforms,
            including diversity, inclusion, and workforce analytics initiatives.
          </p>
        </div>
      </section>

      <section className="impact fade-in-delay">
        <h2>Leadership & Impact</h2>

        <p>
          Kevin McFall is a proven go-to-market (GTM) and product-led growth
          executive who builds revenue engines and digital programs that scale
          B2B profitability and social impact.
        </p>

        <ul className="impact-list">
          <li>Grew P&Ls to over $20M in revenue</li>
          <li>Increased nonprofit operating revenue by 18%</li>
          <li>Improved operational efficiency by 75%</li>
          <li>Boosted customer acquisition by 24%</li>
          <li>Reached over 6M listeners through strategic media partnerships</li>
          <li>
            Led digital transformation initiatives increasing productivity by
            30%
          </li>
        </ul>

        <p>
          He brings a rare blend of corporate product marketing, ESG SaaS, and
          media experience-working with organizations like Workday, Sphera, and
          Ebony Media-delivering over $30M in client revenue and driving
          measurable business impact.
        </p>
      </section>
    </>
  );
}
