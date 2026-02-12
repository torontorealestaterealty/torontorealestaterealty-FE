import "./ExperiencedAgents.css";
import heroBg from "../../../../assets/images/home/agent.jpg";
import Footer from "../../../../components/Footer/footer.jsx";
export default function ExperiencedAgents() {
  return (
    <main className="exp-page">
      <section className="exp-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="exp-heroOverlay" />

        <div className="exp-container exp-heroWrap">
          <div className="exp-eyebrow">Experienced Agents</div>

          <h1 className="exp-heroTitle">Why Choose Toronto Real Estate Realty?</h1>

          <p className="exp-heroSub">
            Are you an experienced real estate agent looking to maximize your earnings and reduce unnecessary expenses?
            At <strong>Toronto Real Estate Realty</strong>, we understand that seasoned professionals need efficient
            support — without the burden of high franchise fees or steep commission splits.
          </p>

          <div className="exp-heroActions">
            <a
              className="exp-btn exp-btnGold"
              href="https://meetings.hubspot.com/"
              target="_blank"
              rel="noreferrer"
            >
              Schedule a Zoom Meeting
            </a>
            <a
              className="exp-btn exp-btnOutline"
              href="https://share.hsforms.com/"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </div>

          <div className="exp-heroNote">
            Keep your independence • Keep your brand • Keep more of your commission
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="exp-section">
        <div className="exp-container">
          {/* Big credibility container */}
          <div className="exp-card exp-cardWhy">
            <h2 className="exp-title">Why Toronto Real Estate Realty Stands Out</h2>

            <div className="exp-credGrid">
              <div className="exp-credItem">
                <div className="exp-credKicker">35 Years of Expertise</div>
                <p className="exp-credText">
                  With over 35 years in the Toronto real estate market — including 16 years operating
                  <strong> RE/MAX Vision Realty</strong> and 4 years with <strong>Royal LePage Vision</strong> — our
                  leadership team brings deep, practical industry knowledge.
                </p>
              </div>

              <div className="exp-credItem">
                <div className="exp-credKicker">Industry Involvement</div>
                <p className="exp-credText">
                  We’ve actively contributed to the Toronto Real Estate Board’s Professional Standards and Commercial
                  Committees, helping us stay informed on market changes, compliance expectations, and best practices.
                </p>
              </div>
            </div>

            <div className="exp-divider" />

            <div className="exp-twoCol">
              <div className="exp-twoColItem">
                <h3 className="exp-subTitle">Why Avoid Franchised Brokerages?</h3>
                <p className="exp-text">
                  Franchised brokerages often come with hidden costs — desk fees, recurring charges, and unfavorable
                  commission splits. For experienced agents, these expenses don’t automatically translate into better
                  support. Buyers and sellers value deep market knowledge and strong agent service — not the franchise
                  sign on the door.
                </p>
              </div>

              <div className="exp-twoColItem">
                <h3 className="exp-subTitle">Superior Support & 100% Commissions</h3>
                <p className="exp-text">
                  Join Toronto Real Estate Realty and retain <strong>100% of your commissions</strong>, with only fixed
                  transaction costs. It’s a straightforward model designed to help you keep more of what you earn — so
                  you can reinvest into your business and client relationships.
                </p>
              </div>
            </div>
          </div>

          {/* TRESA section */}
          <div className="exp-card exp-cardSoft">
            <h2 className="exp-title">Customized Options Under TRESA</h2>
            <p className="exp-text exp-textCenter">
              The new Real Estate and Business Brokers Act (TRESA) offers agents more flexible options for buying and
              selling properties. This encourages specialization — allowing you to focus on the areas where you excel.
              At Toronto Real Estate Realty, we provide resources and strategic guidance to support your specialization
              efforts and keep your workflow efficient.
            </p>
          </div>

          <div className="exp-card">
            <h2 className="exp-title">Why Choose Us?</h2>

            <div className="exp-bulletGrid">
              <div className="exp-bullet">
                <div className="exp-bulletTitle">Exceptional Experience</div>
                <div className="exp-bulletText">
                  Benefit from over three decades of expertise in both residential and commercial real estate.
                </div>
              </div>

              <div className="exp-bullet">
                <div className="exp-bulletTitle">Supportive Environment</div>
                <div className="exp-bulletText">
                  Collaborative atmosphere, ongoing education, technology tools, and personalized marketing strategies.
                </div>
              </div>

              <div className="exp-bullet">
                <div className="exp-bulletTitle">Freedom & Flexibility</div>
                <div className="exp-bulletText">
                  Choose your specialization and geographic focus. We support your brand growth with tailored guidance.
                </div>
              </div>
            </div>
          </div>

          <div className="exp-cta">
            <h2 className="exp-ctaTitle">Ready to Elevate Your Real Estate Career?</h2>
            <p className="exp-ctaSub">
              Schedule a Zoom meeting to discuss how we do things differently — and how we can support your success.
              Discover the benefits of joining a brokerage that values your independence and expertise.
            </p>

            <div className="exp-ctaActions">
              <a
                className="exp-btn exp-btnGold"
                href="https://meetings.hubspot.com/"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a Zoom Meeting
              </a>
              <a
                className="exp-btn exp-btnOutline"
                href="https://share.hsforms.com/"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </div>

            <div className="exp-ctaNote">
              100% commission model • Fixed transaction costs • Real support
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
