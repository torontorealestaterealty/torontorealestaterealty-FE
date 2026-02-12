import "./parking.css";
import heroBg from "../../../assets/images/home/agent.jpg";
import Footer from "../../../components/Footer/footer.jsx";
export default function Parking() {
  return (
    <main className="plan-page">
      <section className="plan-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="plan-heroOverlay" />
        <div className="plan-container plan-heroWrap">
          <div className="plan-eyebrow">Pricing & Plans</div>
          <h1 className="plan-heroTitle">One Simple Plan for Every Type of Agent</h1>
          <p className="plan-heroSub">
            Whether you’re full-time, part-time, low-volume, or parking your license — our plan works for you.
            No categories. No commission splits. One fair, flexible plan.
          </p>

          <div className="plan-heroActions">
            <a className="plan-btn plan-btnGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
              Schedule a Consultation
            </a>
            <a className="plan-btn plan-btnOutline" href="mailto:support@torontorealestaterealty.ca">
              Contact Us
            </a>
          </div>

          <div className="plan-heroNote">
            Keep 100% commission • Pay only when you close • Built for TREB & Non-TREB agents
          </div>
        </div>
      </section>

      <section className="plan-section">
        <div className="plan-container">
          <div className="plan-topGrid">
            <div className="plan-highlight">
              <div className="plan-highlightTitle">You Pay Only</div>
              <div className="plan-priceRow">
                <span className="plan-price">$129.99</span>
                <span className="plan-priceMeta">+ HST / Year</span>
              </div>

              <ul className="plan-checkList">
                <li>No Monthly Fees</li>
                <li>No Office Rent</li>
                <li>No Franchise Fees</li>
                <li>No Commission Splits</li>
                <li>Full Support from Our Brokerage Team</li>
              </ul>
            </div>

            <div className="plan-highlight plan-highlightDark">
              <div className="plan-highlightTitle">Transaction Fees</div>
              <div className="plan-miniSub">Only when you close a deal</div>

              <div className="plan-feeTable">
                <div className="plan-feeRow">
                  <div className="plan-feeLabel">Purchase or Sale</div>
                  <div className="plan-feeValue">$495 + HST</div>
                </div>
                <div className="plan-feeRow">
                  <div className="plan-feeLabel">Lease</div>
                  <div className="plan-feeValue">$199 + HST</div>
                </div>
              </div>

              <div className="plan-keepNote">
                That’s it — you keep <strong>100%</strong> of your commission.
              </div>
            </div>
          </div>

          <div className="plan-card">
            <h2 className="plan-title">Who This Plan Works For</h2>

            <div className="plan-pillGrid">
              <span className="plan-pill">New Agents</span>
              <span className="plan-pill">Part-Time Agents</span>
              <span className="plan-pill">Full-Time Agents</span>
              <span className="plan-pill">Low-Volume Producers</span>
              <span className="plan-pill">Agents Parking Their License</span>
              <span className="plan-pill">With or Without Board Membership</span>
              <span className="plan-pill">TREB or Non-TREB</span>
            </div>

            <p className="plan-text">
              Unlike other brokerages, we support agents whether they are TREB members or not. We offer both TREB and
              Non-TREB office options — giving you the flexibility to work in a way that suits your budget and goals.
            </p>
          </div>

          <div className="plan-card plan-cardDark">
            <h2 className="plan-title plan-titleLight">How It Works</h2>

            <div className="plan-steps">
              <div className="plan-step">
                <div className="plan-stepNum">01</div>
                <div className="plan-stepTitle">Join & Activate</div>
                <div className="plan-stepText">Pay your annual fee and get access to the brokerage support & systems.</div>
              </div>

              <div className="plan-step">
                <div className="plan-stepNum">02</div>
                <div className="plan-stepTitle">Work Your Way</div>
                <div className="plan-stepText">Stay active, go part-time, or park your license — your plan stays the same.</div>
              </div>

              <div className="plan-step">
                <div className="plan-stepNum">03</div>
                <div className="plan-stepTitle">Pay Only When You Close</div>
                <div className="plan-stepText">Transaction fees apply only when you close a deal. You keep 100% commission.</div>
              </div>
            </div>
          </div>

          <div className="plan-cta">
            <div className="plan-ctaTitle">Ready to get started?</div>
            <div className="plan-ctaSub">Contact us or schedule a consultation — we’ll walk you through the best option for you.</div>

            <div className="plan-ctaActions">
              <a className="plan-btn plan-btnGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
                Schedule a Consultation
              </a>
              <a className="plan-btn plan-btnOutline" href="mailto:support@torontorealestaterealty.ca">
                Contact Us
              </a>
            </div>

            <div className="plan-ctaFine">
              MLS®/Board membership may be required for certain MLS services depending on your board selection.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
