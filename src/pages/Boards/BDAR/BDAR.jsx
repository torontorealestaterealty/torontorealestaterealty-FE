import "./BDAR.css";
import ctaBg from "../../../assets/images/home/agent.jpg";
import Footer from "../../../components/Footer/footer.jsx";

export default function BDARPage() {
  return (
    <main className="treb-boardPage bdar-page">
      {/* HERO */}
      <section
        className="treb-boardHero bdar-hero"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="treb-boardHero-overlay bdar-heroOverlay" />

        <div className="treb-container treb-boardHero-wrap">
          <div className="treb-boardHero-eyebrow">Barrie & District Association of REALTORS®</div>

          <h1 className="treb-boardHero-title">
            Toronto Real Estate Realty Plus is a Brokerage Member of BDAR
          </h1>

          <p className="treb-boardHero-sub">
            Full MLS access through BDAR systems, 100% commission, and a flexible cloud-based model —
            built for active agents and agents looking to park their license.
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
            Serving BDAR members across Barrie and surrounding areas • MLS stays fully integrated
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="treb-boardSection treb-boardWhy bdar-intro">
        <div className="treb-container">
          <div className="treb-boardCardLight bdar-card">
            <h2 className="treb-serifTitle">BDAR Agents Welcome</h2>

            <p className="treb-mutedDark">
              As a Brokerage Member of BDAR, Toronto Real Estate Realty Plus offers all of its services to agents who are
              Members of BDAR and are working within BDAR’s geographical areas. When you’re operating in Barrie, you can
              access all of the brokerage’s tools, systems, and support that you need to succeed.
            </p>

            <p className="treb-mutedDark">
              You do not need to give up any benefits or access to MLS when joining our brokerage — everything remains
              fully integrated and works seamlessly, just like you’re used to with BDAR.
            </p>

            <div className="bdar-regionRow">
              <span className="bdar-pill">Barrie</span>
              <span className="bdar-pill">BDAR Region</span>
              <span className="bdar-pill">Proptx MLS</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="treb-boardSection treb-boardSection--dark">
        <div className="treb-container">
          <h2 className="treb-serifTitle treb-serifTitle--light">
            Benefits for BDAR Agents
          </h2>

          <div className="treb-benefitsGrid">
            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Seamless MLS Access through Proptx</div>
              <div className="treb-benefitText">
                Maintain full access to the Proptx MLS system to list and search properties, stay connected to the local
                market, and keep strong listing visibility — with the same tools you already use.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">100% Commission + Flat Transaction Fee</div>
              <div className="treb-benefitText">
                No commission splits. No franchise fees. No desk fees. You only pay a fixed transaction fee per deal and
                keep the commission you earn.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Cloud-Based Brokerage – Work Remotely</div>
              <div className="treb-benefitText">
                Operate without a traditional office. Work from anywhere while receiving top-tier support through a modern
                cloud-based brokerage model.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">No Hidden Fees</div>
              <div className="treb-benefitText">
                Predictable pricing and low annual fees — no monthly desk fees, no franchise fees, and no surprises.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Flexibility to Suit Your Needs</div>
              <div className="treb-benefitText">
                Stay fully active or park your license while continuing to do transactions — do as many or as few as you
                want.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Support + Systems to Succeed</div>
              <div className="treb-benefitText">
                Get the tools, systems, and responsive support you need to grow your real estate business in the BDAR market.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="treb-boardSection treb-boardSection--dark treb-boardPricing bdar-pricing">
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
              <div className="treb-pricingLabel">Annual Fee (Active BDAR Member)</div>
              <div className="treb-pricingValue">$149.99</div>
            </div>

            <div className="treb-pricingRow">
              <div className="treb-pricingLabel">Non-Board MLS Member (keep license active)</div>
              <div className="treb-pricingValue">$129.99</div>
            </div>

            <div className="treb-pricingNote">
              No commission splits • No franchise fees • No desk fees
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S NEXT */}
      <section className="treb-boardSection bdar-next">
        <div className="treb-container">
          <div className="bdar-nextCard">
            <h2 className="bdar-nextCard-title">Ready to Join Toronto Real Estate Realty Plus?</h2>

            <p className="bdar-nextCardText">
              If you’re a BDAR REALTOR® looking for seamless MLS access, no commission splits, and the flexibility to work
              remotely while keeping 100% of your commission, Toronto Real Estate Realty Plus is the place for you.
            </p>

            <div className="bdar-nextActions">
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
          </div>
        </div>
      </section>

      {/* Footer band */}
      <div className="treb-footerBand">
        <Footer />
      </div>
    </main>
  );
}
