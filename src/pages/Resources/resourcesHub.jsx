import { Link } from "react-router";
import "./ResourcesHub.css";
import heroBg from "../../assets/images/home/agent.jpg";
import Footer from "../../components/Footer/footer.jsx";

export default function ResourcesHub() {
  return (
    <main className="res-page">
      {/* HERO */}
      <section className="res-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="res-heroOverlay" />

        <div className="res-container res-heroWrap">
          <h1 className="res-heroTitle">Resources</h1>
          <p className="res-heroSub">
            Learn more about Toronto Real Estate Realty and how our listing solutions work
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="res-section">
        <div className="res-container">
          <div className="res-grid">
            {/* Card 1 */}
            <article className="res-card">
              <div className="res-cardHead">
                <div className="res-icon" aria-hidden="true">🏡</div>
                <div className="res-cardHeadText">
                  <h2 className="res-cardTitle">TRER Listing</h2>
                  <p className="res-cardSub">What it is, how it works, and where it’s available</p>
                </div>
              </div>

              <div className="res-links">
                <Link className="res-link" to="/resources/torontoreal/what-is">
                  What is TorontoReal Listing
                </Link>
                <Link className="res-link" to="/resources/torontoreal/how-it-works">
                  How TorontoReal Works
                </Link>
                <Link className="res-link" to="/resources/torontoreal/service-area">
                  Our Service Area
                </Link>
              </div>

              <div className="res-cardFooter">
                <Link className="res-cardCta" to="/resources/torontoreal">
                  View all <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            {/* Card 2 */}
            <article className="res-card">
              <div className="res-cardHead">
                <div className="res-icon" aria-hidden="true">📄</div>
                <div className="res-cardHeadText">
                  <h2 className="res-cardTitle">Listings & Pricing</h2>
                  <p className="res-cardSub">Fees, value, selling tips, and FAQs</p>
                </div>
              </div>

              <div className="res-links">
                <Link className="res-link" to="/resources/listings-pricing/benefits">
                  Benefits of selling with TorontoReal
                </Link>
                <Link className="res-link" to="/resources/listings-pricing/home-worth">
                  How much is your home worth
                </Link>
                <Link className="res-link" to="/resources/listings-pricing/selling-privately">
                  Selling privately
                </Link>
                <Link className="res-link" to="/resources/listings-pricing/faq">
                  TorontoReal FAQ
                </Link>
              </div>

              <div className="res-cardFooter">
                <Link className="res-cardCta" to="/resources/listings-pricing">
                  View all <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            {/* Card 3 */}
            <article className="res-card">
              <div className="res-cardHead">
                <div className="res-icon" aria-hidden="true">💳</div>
                <div className="res-cardHeadText">
                  <h2 className="res-cardTitle">Payments & Support</h2>
                  <p className="res-cardSub">Options, commissions, guidance, and help</p>
                </div>
              </div>

              <div className="res-links">
                <Link className="res-link" to="/resources/payments-support/options">
                  Choose your selling options
                </Link>
                <Link className="res-link" to="/resources/payments-support/money-in-pocket">
                  Money in your pocket
                </Link>
                <Link className="res-link" to="/resources/payments-support/tips">
                  Trends and tips for sellers
                </Link>
                <Link className="res-link" to="/resources/payments-support/commission">
                  How much commission should a seller offer?
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
