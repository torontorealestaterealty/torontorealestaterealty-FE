import "./TrebNonTrebTrading.css";
import heroBg from "../../../assets/images/home/agent.jpg";
import Footer from "../../../components/Footer/footer.jsx";
export default function TrebNonTrebTradingPage() {
  return (
    <main className="tnt-page">
      <section className="tnt-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="tnt-heroOverlay" />
        <div className="tnt-container tnt-heroWrap">
          <div className="tnt-eyebrow">TREB or NON-TREB Trading</div>

          <h1 className="tnt-heroTitle">Your RECO License is All You Need to Keep Trading in Real Estate.</h1>

          <p className="tnt-heroSub">
            TREB or NON-TREB — you can still trade in real estate. Your RECO license lets you conduct transactions,
            and our brokerage supports you with full service and no outdated franchise costs.
          </p>

          <div className="tnt-heroPills">
            <span className="tnt-pill">No franchise fees</span>
            <span className="tnt-pill">No desk / office fees</span>
            <span className="tnt-pill">No commission splits</span>
            <span className="tnt-pill">Pay per transaction</span>
          </div>

          <div className="tnt-heroActions">
            <a className="tnt-btn tnt-btnGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
              Schedule a Consultation
            </a>
            <a className="tnt-btn tnt-btnOutline" href="mailto:support@torontorealestaterealty.ca">
              Contact Us
            </a>
          </div>

          <div className="tnt-heroNote">
            We help agents stay active and cost-efficient — especially during market slowdowns.
          </div>
        </div>
      </section>

      <section className="tnt-section">
        <div className="tnt-container">
          <div className="tnt-card">
            <h2 className="tnt-title">RECO License</h2>
            <p className="tnt-text">
              You only need your <strong>RECO license</strong> to conduct real estate transactions. Membership in the
              Toronto Real Estate Board (TREB/TRREB) or any other board is not required to keep trading.
            </p>

            <div className="tnt-callouts">
              <div className="tnt-callout">
                <div className="tnt-calloutTitle">✅ What this means</div>
                <div className="tnt-calloutText">
                  Your RECO license allows you to trade in real estate — including a wide range of property types.
                </div>
              </div>

              <div className="tnt-callout">
                <div className="tnt-calloutTitle">🏠 Realtor.ca access</div>
                <div className="tnt-calloutText">
                  Many of the listings and information consumers use are visible on realtor.ca (public-facing MLS®
                  platform). Our team can also guide you on tools and workflows based on your business needs.
                </div>
              </div>
            </div>
          </div>

          <div className="tnt-card tnt-cardDark">
            <h2 className="tnt-title tnt-titleLight">TREB Membership Notes</h2>

            <div className="tnt-split">
              <div className="tnt-splitBlock">
                <div className="tnt-splitTitle">If you already paid TREB dues</div>
                <div className="tnt-splitText">
                  If you’ve paid your TREB dues for 2024, you can typically continue using your access until the end of
                  the year — then decide whether to renew for 2025.
                </div>
              </div>

              <div className="tnt-splitBlock">
                <div className="tnt-splitTitle">Maintaining access when you park</div>
                <div className="tnt-splitText">
                  When you park your RECO license, your MLS access/password typically remain the same — the main change
                  is the brokerage name update in the system (where applicable).
                </div>
              </div>
            </div>

            <div className="tnt-fine">
              MLS®/Board access rules can vary by board/association. We’ll confirm your exact setup during onboarding.
            </div>
          </div>

          <div className="tnt-card">
            <h2 className="tnt-title">How We Support Agents During Market Challenges</h2>

            <p className="tnt-text">
              In a declining market, many traditional franchise brokerages become expensive due to franchise fees, desk
              fees, and commission splits. At Toronto Real Estate Realty Plus, we keep it simple: everyone receives
              full-time support and pays the same transaction fee only when they successfully complete a deal.
            </p>

            <div className="tnt-featureGrid">
              <div className="tnt-feature">
                <div className="tnt-featureTitle">No Additional Fees</div>
                <div className="tnt-featureText">
                  Say goodbye to high franchise and office fees. Franchises are things of the past.
                </div>
              </div>

              <div className="tnt-feature">
                <div className="tnt-featureTitle">Supportive Environment</div>
                <div className="tnt-featureText">
                  Benefit from 35 years of real estate expertise across residential and commercial transactions.
                </div>
              </div>

              <div className="tnt-feature">
                <div className="tnt-featureTitle">Keep 100% Commission</div>
                <div className="tnt-featureText">
                  Commission splits are outdated. You keep 100% of the commission earned — you only pay a transaction fee.
                </div>
              </div>
            </div>

            <div className="tnt-quote">
              “We don’t do any Commission splits. You keep 100% of the Commission earned on the Trade – all you pay is a Transaction fee. ”
            </div>
          </div>

          <div className="tnt-cta">
            <div className="tnt-ctaTitle">Get the best options in the industry</div>
            <div className="tnt-ctaSub">
              Schedule a Zoom meeting with us. We’ll explain how our plans and support can help you navigate the market
              effectively and cost-efficiently. Let’s move forward together.
            </div>

            <div className="tnt-ctaActions">
              <a className="tnt-btn tnt-btnGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
                Schedule a Consultation
              </a>
              <a className="tnt-btn tnt-btnOutline" href="mailto:support@torontorealestaterealty.ca">
                Contact Us
              </a>
            </div>

            <div className="tnt-ctaFine">
              Information shown is general guidance. We’ll confirm your board/MLS setup based on your location and membership.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
