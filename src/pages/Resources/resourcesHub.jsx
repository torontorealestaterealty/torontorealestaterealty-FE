import { Link } from "react-router";
import "./resourcesHub.css";
import heroBg from "../../assets/images/home/agent.jpg";
import Footer from "../../components/Footer/footer.jsx";

export default function ResourcesHub() {
  return (
    <main className="res-page">
      <section className="res-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="res-heroOverlay" />

        <div className="res-container res-heroWrap">
          <h1 className="res-heroTitle">Resources</h1>
          <p className="res-heroSub">
            Learn more about Toronto Real Estate Realty and how our listing solutions work
          </p>
        </div>
      </section>

      <section className="res-section">
        <div className="res-container">
          <div className="res-grid">
            <article className="res-card">
              <div className="res-cardHead">
                {/* <div className="res-icon" aria-hidden="true">🏡</div> */}
                <div className="res-cardHeadText">
                  <h2 className="res-cardTitle">New and Experienced Agents</h2>
                  <p className="res-cardSub">How we can help you succeed in real estate</p>
                </div>
              </div>

              <div className="res-links">
                <Link className="res-link" to="/registering-with-reco">
                  RECO + Real Estate Students
                </Link>
                <Link className="res-link" to="/changing-market">
                  New Agents in Today's Changing Market
                </Link>
                <Link className="res-link" to="/new-licensed-agents">
                  Supporting Newly Licensed Agents
                </Link>
                <Link className="res-link" to="/experienced-agents">
                    Experienced Agents
                </Link>
              </div>

              {/* <div className="res-cardFooter">
                <Link className="res-cardCta" to="/resources/torontoreal">
                  View all <span aria-hidden="true">→</span>
                </Link>
              </div> */}
            </article>

            <article className="res-card">
              <div className="res-cardHead">
                {/* <div className="res-icon" aria-hidden="true">📄</div> */}
                <div className="res-cardHeadText">
                  <h2 className="res-cardTitle">FAQs</h2>
                  <p className="res-cardSub">Frequently Asked Questions about Toronto Real Estate Realty</p>
                </div>
              </div>

              <div className="res-links">
                <Link className="res-link" to="/faq">
                  Parking your Real Estate License
                </Link>
              </div>

              {/* <div className="res-cardFooter">
                <Link className="res-cardCta" to="/resources/listings-pricing">
                  View all <span aria-hidden="true">→</span>
                </Link>
              </div> */}
            </article>

            <article className="res-card">
              <div className="res-cardHead">
                {/* <div className="res-icon" aria-hidden="true">💳</div> */}
                <div className="res-cardHeadText">
                  <h2 className="res-cardTitle">Resources</h2>
                  <p className="res-cardSub">Options, commissions, guidance, and help</p>
                </div>
              </div>

              <div className="res-links">
                <Link className="res-link" to="/resources/payments-support/options">
                 Non TREB Realtor and MLS Offers
                </Link>
                <Link className="res-link" to="/resources/payments-support/money-in-pocket">
                  Selling MLS Listings with a Parked RECO License
                </Link>
                <Link className="res-link" to="/resources/payments-support/tips">
                  The Process of making offer for Parked RECO Realtors
                </Link>
              </div>

              <div className="res-cardFooter">
                <Link className="res-cardCta" to="/resources/payments-support">
                  View all <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
