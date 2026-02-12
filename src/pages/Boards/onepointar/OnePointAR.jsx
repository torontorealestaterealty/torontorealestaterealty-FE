import "./OnePointAR.css";
import ctaBg from "../../../assets/images/home/agent.jpg";
import Footer from "../../../components/Footer/footer.jsx";

export default function OnePointARPage() {
  return (
    <main className="treb-boardPage onepoint-page">
      <section
        className="treb-boardHero onepoint-hero"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="treb-boardHero-overlay onepoint-heroOverlay" />

        <div className="treb-container treb-boardHero-wrap">
          <div className="treb-boardHero-eyebrow">OnePoint Association of REALTORS®</div>

          <h1 className="treb-boardHero-title">
            Toronto Real Estate Realty Plus is a Brokerage Member of OnePointAR
          </h1>

          <p className="treb-boardHero-sub">
            Full MLS access through OnePointAR systems, 100% commission, and a flexible cloud-based model —
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
            Serving OnePointAR members across Guelph • Grey Bruce Owen Sound • Lakelands • Huron Perth
          </div>
        </div>
      </section>

      {/* WHAT IS ONEPOINT */}
      <section className="treb-boardSection treb-boardWhy onepoint-intro">
        <div className="treb-container">
          <div className="treb-boardCardLight onepoint-card">
            <h2 className="treb-serifTitle">OnePointAR Agents Welcome</h2>

            <p className="treb-mutedDark">
              As a Brokerage Member of OnePointAR, Toronto Real Estate Realty Plus offers all of its services to agents
              who are members of OnePointAR and are working within OnePoint’s geographical areas. Whether you’re operating
              in Guelph, Owen Sound, Lakelands, or Huron Perth, you can access the brokerage’s tools, systems, and support
              you need to succeed.
            </p>

            <p className="treb-mutedDark">
              You do not need to give up any benefits or access to MLS when joining our brokerage — everything remains
              fully integrated and works seamlessly, just like you’re used to with OnePointAR.
            </p>

            <div className="onepoint-regionRow">
              <span className="onepoint-pill">Guelph</span>
              <span className="onepoint-pill">Owen Sound</span>
              <span className="onepoint-pill">Lakelands</span>
              <span className="onepoint-pill">Huron Perth</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="treb-boardSection treb-boardSection--dark">
        <div className="treb-container">
          <h2 className="treb-serifTitle treb-serifTitle--light">
            Benefits for OnePointAR Agents
          </h2>

          <div className="treb-benefitsGrid">
            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Seamless MLS Access with Proptx</div>
              <div className="treb-benefitText">
                Full access to Proptx MLS to list and search across multiple MLS systems — including GDAR, RAGBOS, LAR,
                and HPAR — using the same tools you already know.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">100% Commission</div>
              <div className="treb-benefitText">
                No splits. No franchise fees. No desk fees. Keep the commission you earn with a transparent flat-fee
                transaction model.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Cloud-Based Brokerage</div>
              <div className="treb-benefitText">
                Work remotely from anywhere in OnePointAR’s regions with full support, systems, and a virtual office model.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">No Hidden Fees</div>
              <div className="treb-benefitText">
                Predictable pricing with low annual fees — no monthly desk fees, no franchise fees, and no surprises.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Flexible for Active & Parked</div>
              <div className="treb-benefitText">
                Park your license and still do transactions when you want — as many or as few as you choose.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Same OnePointAR MLS Experience</div>
              <div className="treb-benefitText">
                Everything remains fully integrated — seamless MLS access across boards, just like you’re used to.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="treb-boardSection treb-boardSection--dark treb-boardPricing onepoint-pricing">
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
              <div className="treb-pricingLabel">Annual Fee (Active OnePointAR Member)</div>
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

      <section className="treb-boardSection onepoint-next">
        <div className="treb-container">
          <div className="onepoint-nextCard">
            <h2 className="onepoint-nextCard-title">What’s Next?</h2>

            <div className="onepoint-steps">
              <div className="onepoint-step">
                <div className="onepoint-stepNum">01</div>
                <div className="onepoint-stepTitle">Sign Up Now</div>
                <div className="onepoint-stepText">Complete our quick sign-up form to get started.</div>
              </div>

              <div className="onepoint-step">
                <div className="onepoint-stepNum">02</div>
                <div className="onepoint-stepTitle">Book a Zoom Meeting</div>
                <div className="onepoint-stepText">Schedule a Zoom call with our broker to review your goals.</div>
              </div>

              <div className="onepoint-step">
                <div className="onepoint-stepNum">03</div>
                <div className="onepoint-stepTitle">Park if You Need To</div>
                <div className="onepoint-stepText">Not ready to be active? Park your license and transact on your terms.</div>
              </div>
            </div>

            <div className="onepoint-nextActions">
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

      <div className="treb-footerBand">
        <Footer />
      </div>
    </main>
  );
}
