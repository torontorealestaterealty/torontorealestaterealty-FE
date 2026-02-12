import "./fullTimeAgents.css";
import heroBg from "../../../assets/images/home/agent.jpg";
import Footer from "../../../components/Footer/footer.jsx";
export default function FullTimeAgents() {
  return (
    <main className="fta-page">
      <section className="fta-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="fta-heroOverlay" />
        <div className="fta-container fta-heroWrap">
          <div className="fta-eyebrow">For Full-Time Agents</div>

          <h1 className="fta-heroTitle">One Plan. Full Support. Built for Full-Time Agents.</h1>

          <p className="fta-heroSub">
            Our brokerage offers one simple plan for full-time real estate agents in Ontario. Whether you close a few
            deals a year or you’re highly active, you’ll receive full brokerage support, keep 100% of your commission,
            and never pay monthly or franchise fees.
          </p>

          <div className="fta-heroBullets">
            <span className="fta-pill">No splits</span>
            <span className="fta-pill">No franchise fees</span>
            <span className="fta-pill">No desk / monthly fees</span>
            <span className="fta-pill">MLS board member friendly</span>
          </div>

          <div className="fta-heroActions">
            <a className="fta-btn fta-btnGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
              Schedule a Consultation
            </a>
            <a className="fta-btn fta-btnOutline" href="mailto:support@torontorealestaterealty.ca">
              Contact Us
            </a>
          </div>

          <div className="fta-heroNote">
            One plan. One fee. Full flexibility — for the modern full-time Realtor.
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="fta-section">
        <div className="fta-container">
          {/* Active Realtors */}
          <div className="fta-card">
            <h2 className="fta-title">For Active Realtors – MLS Board Members</h2>
            <p className="fta-text">
              We do not charge franchise, desk, or monthly fees — not even commission splits. You get full brokerage
              support plus BrokerBay for scheduling showings.
            </p>

            <div className="fta-feesGrid">
              <div className="fta-feeBox">
                <div className="fta-feeLabel">Residential & Commercial Transactions</div>
                <div className="fta-feeValue">$495.00</div>
                <div className="fta-feeMeta">Transaction fee per transaction • 100% commission to your bank account</div>
              </div>

              <div className="fta-feeBox">
                <div className="fta-feeLabel">Residential Lease Transactions</div>
                <div className="fta-feeValue">$199.00</div>
                <div className="fta-feeMeta">Transaction fee per transaction • 100% commission to your bank account</div>
              </div>

              <div className="fta-feeBox fta-feeBoxDark">
                <div className="fta-feeLabel">Commercial Lease Transactions</div>
                <div className="fta-feeValue">$199.00</div>
                <div className="fta-feeMeta">
                  Per transaction <strong>OR</strong> you receive <strong>90%</strong> and brokerage retains <strong>10%</strong>,
                  whichever is higher
                </div>
              </div>
            </div>
          </div>

          {/* Payment Timelines */}
          <div className="fta-card fta-cardDark">
            <h2 className="fta-title fta-titleLight">Commission & Payment Timelines</h2>
            <p className="fta-text fta-textLight">
              We prioritize prompt and efficient processing of payments for our agents, sellers, and landlords.
            </p>

            <div className="fta-timeline">
              <div className="fta-tItem">
                <div className="fta-tHead">
                  <div className="fta-tNum">01</div>
                  <div className="fta-tTitle">Agent Commission Payments</div>
                </div>
                <div className="fta-tText">
                  Commission payments within <strong>48 hours</strong> of receiving the funds — deposited directly to your bank account.
                </div>
              </div>

              <div className="fta-tItem">
                <div className="fta-tHead">
                  <div className="fta-tNum">02</div>
                  <div className="fta-tTitle">Seller Payments</div>
                </div>
                <div className="fta-tText">
                  Sellers receive payment within <strong>24 hours</strong> after confirmation from their lawyer that the transaction closed.
                </div>
              </div>

              <div className="fta-tItem">
                <div className="fta-tHead">
                  <div className="fta-tNum">03</div>
                  <div className="fta-tTitle">Landlord Payments</div>
                </div>
                <div className="fta-tText">
                  Landlords are paid within <strong>24 hours</strong> after a lease transaction closes successfully.
                </div>
              </div>
            </div>
          </div>

          {/* Why choose */}
          <div className="fta-card">
            <h2 className="fta-title">Why Choose Toronto Real Estate Realty Plus?</h2>
            <p className="fta-text">
              By providing efficient payment processing, we highlight our commitment to supporting our agents and partners.
              If you’re searching for a brokerage that offers excellent support and favorable terms, our streamlined payment timelines
              and dedicated service make us an ideal choice for both new and experienced agents.
            </p>

            <div className="fta-checkGrid">
              <div className="fta-check">Efficient payment processing</div>
              <div className="fta-check">Support for new & experienced agents</div>
              <div className="fta-check">Flat fees • predictable costs</div>
              <div className="fta-check">Modern cloud-based operations</div>
            </div>

            <div className="fta-legacy">
              <div className="fta-legacyTitle">Experience that matters</div>
              <div className="fta-legacyText">
                With <strong>35 years</strong> of real estate expertise and <strong>20+ years</strong> operating RE/MAX and Royal LePage
                franchises, we understand today’s market and how to help you thrive.
              </div>
            </div>
          </div>

          {/* Barrie / Guelph notice */}
          <div className="fta-banner">
            <div className="fta-bannerTitle">Great news for agents in Barrie, Guelph, and surrounding areas!</div>
            <div className="fta-bannerText">
              As members of <strong>BDAR</strong> and <strong>OnePointAR</strong>, agents in these regions can access the same MLS system
              used by TRREB — without the high TRREB fees. Everything on this page applies to you whether you’re full-time, part-time,
              or parking your license while remaining active on the MLS.
            </div>

            <div className="fta-bannerChecks">
              <span> No franchise fees</span>
              <span> No monthly office expenses</span>
              <span> 100% commission retention</span>
              <span> Flat transaction costs</span>
            </div>
          </div>

          {/* CTA */}
          <div className="fta-cta">
            <div className="fta-ctaTitle">Ready to learn more?</div>
            <div className="fta-ctaSub">
              Schedule a Zoom meeting today — we’ll walk you through how Toronto Real Estate Realty Plus can support your business.
            </div>

            <div className="fta-ctaActions">
              <a className="fta-btn fta-btnGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
                Schedule a Consultation
              </a>
              <a className="fta-btn fta-btnOutline" href="mailto:support@torontorealestaterealty.ca">
                Contact Us
              </a>
            </div>

            <div className="fta-ctaFine">
              MLS® and Board membership requirements vary by region and association.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
