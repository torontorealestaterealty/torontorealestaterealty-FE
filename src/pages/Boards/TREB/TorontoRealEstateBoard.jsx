import "./TorontoRealEstateBoard.css";
import ctaBg from "../../../assets/images/home/agent.jpg";
import Footer from "../../../components/Footer/footer.jsx";

export default function TorontoRealEstateBoardPage() {
  return (
    <main className="treb-boardPage">
      {/* HERO */}
      <section
        className="treb-boardHero"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="treb-boardHero-overlay" />
        <div className="treb-container treb-boardHero-wrap">
          <div className="treb-boardHero-eyebrow">TRREB Member Brokerage</div>

          <h1 className="treb-boardHero-title">
            Toronto Real Estate Realty Plus is a TRREB Member Brokerage
          </h1>

          <p className="treb-boardHero-sub">
            Keep full access to TRREB MLS® tools, earn 100% commission, and work with a flexible cloud-based model —
            built for both active agents and agents looking to park their license.
          </p>

          <div className="treb-boardHero-actions">
            <a className="treb-btn treb-btn-gold" href="https://share.hsforms.com/" target="_blank" rel="noreferrer">
              Join Us Now
            </a>
            <a className="treb-btn treb-btn-outlineGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
              Schedule a Zoom Meeting
            </a>
          </div>

          <div className="treb-boardHero-note">
            Brokerage Member of TRREB • MLS® access through TRREB systems you already use
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="treb-boardSection treb-boardWhy">
        <div className="treb-container treb-boardWhy-wrap">
          <div className="treb-boardCardLight">
            <h2 className="treb-serifTitle">Why Join as a TRREB Member?</h2>

            <p className="treb-mutedDark">
              Are you a TRREB REALTOR® looking for more flexibility, a flat-fee transaction model, and seamless MLS®
              access — without splits or hidden fees? Or do you want to park your license and continue doing
              transactions at your own pace? Toronto Real Estate Realty Plus is designed for both.
            </p>

            <div className="treb-checkGrid">
              <div className="treb-checkCol">
                <h3 className="treb-checkTitle">Active Agents</h3>
                <ul className="treb-checkList">
                  <li>Full TRREB MLS® access</li>
                  <li>Keep 100% commission</li>
                  <li>Cloud-based workflow</li>
                </ul>
              </div>

              <div className="treb-checkDivider" />

              <div className="treb-checkCol">
                <h3 className="treb-checkTitle">Parked Agents</h3>
                <ul className="treb-checkList">
                  <li>Keep your license active</li>
                  <li>Do deals when you choose</li>
                  <li>Low overhead, no desk fees</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="treb-boardSection treb-boardSection--dark">
        <div className="treb-container">
          <h2 className="treb-serifTitle treb-serifTitle--light">Benefits for TRREB Agents</h2>

          <div className="treb-benefitsGrid">
            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Seamless MLS® Access</div>
              <div className="treb-benefitText">
                Retain full access to the TRREB MLS® system for listing and searching properties using the tools you’re
                already familiar with.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Proptx Visibility</div>
              <div className="treb-benefitText">
                Get access to Proptx for cross-board MLS visibility (for agents with access to other boards such as BDAR,
                OnePointAR, and Cornerstone).
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">100% Commission</div>
              <div className="treb-benefitText">
                No commission splits. Keep what you earn with a transparent flat-fee transaction model.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Flat Transaction Fees</div>
              <div className="treb-benefitText">
                Predictable per-deal pricing — no franchise fees, no desk fees, and no surprise charges.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Cloud-Based Brokerage</div>
              <div className="treb-benefitText">
                Work remotely from anywhere within TRREB’s region with support and systems — without a physical office
                requirement.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Flexible for Active & Parked</div>
              <div className="treb-benefitText">
                Whether you’re producing full-time or parking your license, transact as often (or as little) as you want.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="treb-boardSection treb-boardSection--dark treb-boardPricing">
        <div className="treb-container">
          <h2 className="treb-serifTitle treb-serifTitle--light">Pricing</h2>

          <div className="treb-pricingCard">
            <div className="treb-pricingRow">
              <div className="treb-pricingLabel">Buying & Selling Transactions</div>
              <div className="treb-pricingValue">$495.00 + HST</div>
            </div>

            <div className="treb-pricingRow">
              <div className="treb-pricingLabel">Leasing & Referral Transactions</div>
              <div className="treb-pricingValue">$199.99 + HST</div>
            </div>

            <div className="treb-pricingDivider" />

            <div className="treb-pricingRow">
              <div className="treb-pricingLabel">Annual Fee (Active TRREB Member)</div>
              <div className="treb-pricingValue">$149.99</div>
            </div>

            <div className="treb-pricingRow">
              <div className="treb-pricingLabel">Non-TREB Option (keep license active)</div>
              <div className="treb-pricingValue">$129.99</div>
            </div>

            <div className="treb-pricingNote">No commission splits • No franchise fees • No desk fees</div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="treb-boardCta" style={{ backgroundImage: `url(${ctaBg})` }}>
        <div className="treb-boardCta-overlay" />
        <div className="treb-container treb-boardCta-wrap">
          <h2 className="treb-boardCta-title">Ready to Join Toronto Real Estate Realty Plus?</h2>

          <p className="treb-boardCta-sub">
            If you’re a TRREB REALTOR® looking for flexibility, seamless MLS® access, and a simple flat-fee model —
            we’d love to help you get started.
          </p>

          <div className="treb-boardCta-actions">
            <a className="treb-btn treb-btn-gold" href="https://share.hsforms.com/" target="_blank" rel="noreferrer">
              Join Us Now
            </a>
            <a className="treb-btn treb-btn-outlineGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
              Schedule a Zoom Meeting
            </a>
            <a className="treb-btn treb-btn-linkGold" href="https://mylicense.ca" target="_blank" rel="noreferrer">
              Looking to just Park for now →
            </a>
          </div>

          <div className="treb-boardCta-note">
            MLS® and TRREB® are trademarks of their respective owners. Information shown is for general guidance.
          </div>
        </div>
      </section>

      {/* Smooth dark transition into global footer */}
      <div className="treb-footerBand">
        <Footer />
      </div>
    </main>
  );
}
