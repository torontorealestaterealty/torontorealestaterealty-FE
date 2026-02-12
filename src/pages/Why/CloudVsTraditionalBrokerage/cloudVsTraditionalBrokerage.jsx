import "./cloudVsTraditionalBrokerage.css";
import heroBg from "../../../assets/images/home/agent.jpg";
import Footer from "../../../components/Footer/footer.jsx";
export default function CloudVsTraditionalBrokeragePage() {
  return (
    <main className="cmp-page">
      {/* HERO */}
      <section className="cmp-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="cmp-heroOverlay" />
        <div className="cmp-container cmp-heroWrap">
          <div className="cmp-eyebrow">Compare Models</div>
          <h1 className="cmp-heroTitle">Full-time Office Brokerage vs. Cloud-Based Brokerage</h1>
          <p className="cmp-heroSub">
            Not all brokerages are created equal. Here’s a clear comparison to help you choose the model that supports
            your business, lifestyle, and goals.
          </p>

          <div className="cmp-heroPills">
            <span className="cmp-pill">Lower overhead</span>
            <span className="cmp-pill">Faster workflows</span>
            <span className="cmp-pill">Work from anywhere</span>
            <span className="cmp-pill">Modern tools</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="cmp-section">
        <div className="cmp-container">
          {/* Comparison */}
          <div className="cmp-card">
            <h2 className="cmp-title">Side-by-Side Comparison</h2>
            <p className="cmp-muted">
              This comparison highlights what changes when you move from a physical office model to a modern cloud-based
              brokerage.
            </p>

            <div className="cmp-table">
              <div className="cmp-row cmp-head">
                <div className="cmp-cell cmp-aspect">Factor</div>
                <div className="cmp-cell cmp-colTitle">Full-time Office Brokerage</div>
                <div className="cmp-cell cmp-colTitle cmp-colRight">Cloud-Based Brokerage</div>
              </div>

              <div className="cmp-row">
                <div className="cmp-cell cmp-aspect">1. Physical Presence</div>
                <div className="cmp-cell">
                  Requires a physical office for meetings, paperwork, and in-person interactions.
                </div>
                <div className="cmp-cell cmp-right">
                  Operates online — no physical office required. Communication and transactions are handled digitally.
                </div>
              </div>

              <div className="cmp-row">
                <div className="cmp-cell cmp-aspect">2. Client Interaction</div>
                <div className="cmp-cell">
                  Clients may need to visit the office for meetings and signatures; more coordination and travel time.
                </div>
                <div className="cmp-cell cmp-right">
                  Video calls, e-signatures, and secure document sharing reduce in-person meetings and speed up deals.
                </div>
              </div>

              <div className="cmp-row">
                <div className="cmp-cell cmp-aspect">3. Operational Efficiency</div>
                <div className="cmp-cell">
                  Office maintenance, utilities, and admin layers can slow workflows and increase overhead.
                </div>
                <div className="cmp-cell cmp-right">
                  Lower overhead and more automation leads to quicker processing and fewer administrative delays.
                </div>
              </div>

              <div className="cmp-row">
                <div className="cmp-cell cmp-aspect">4. Cost Effectiveness</div>
                <div className="cmp-cell">
                  Higher costs (space, utilities, staff) often show up in fees, splits, or higher commission structures.
                </div>
                <div className="cmp-cell cmp-right">
                  Reduced costs can mean better value — more resources go into tools, support, and service improvements.
                </div>
              </div>

              <div className="cmp-row">
                <div className="cmp-cell cmp-aspect">5. Speed & Flexibility</div>
                <div className="cmp-cell">
                  Physical paperwork and scheduling conflicts can cause delays.
                </div>
                <div className="cmp-cell cmp-right">
                  Instant sharing, online communication, and real-time updates — agents can work from anywhere.
                </div>
              </div>

              <div className="cmp-row">
                <div className="cmp-cell cmp-aspect">6. Accessibility</div>
                <div className="cmp-cell">
                  Limited by office hours and geographic location.
                </div>
                <div className="cmp-cell cmp-right">
                  24/7 access to tools and support — manage transactions anytime from anywhere with internet.
                </div>
              </div>

              <div className="cmp-row">
                <div className="cmp-cell cmp-aspect">7. Technology Integration</div>
                <div className="cmp-cell">
                  May rely on traditional methods, which can be less efficient for client management and transaction flow.
                </div>
                <div className="cmp-cell cmp-right">
                  Strong tech stack: CRM, marketing automation, and transaction management improve client experience.
                </div>
              </div>

              <div className="cmp-row">
                <div className="cmp-cell cmp-aspect">8. Scalability</div>
                <div className="cmp-cell">
                  Growth can be limited by physical space and additional office resources.
                </div>
                <div className="cmp-cell cmp-right">
                  Easy to scale — onboarding and growth happen digitally without needing more office space.
                </div>
              </div>
            </div>
          </div>

          <div className="cmp-card cmp-cardDark">
            <h2 className="cmp-title cmp-titleLight">Conclusion</h2>

            <div className="cmp-quote">
              <div className="cmp-quoteName">Hi, I’m Lisa!</div>
              <div className="cmp-quoteText">
                As a fellow real estate agent, I know how important it is to find a brokerage that truly supports you.
                At Toronto Real Estate Realty Plus, we offer a friendly, collaborative environment where you can thrive
                without the burden of monthly fees. Our cloud-based model supports faster, cost-effective services —
                so you can work flexibly from anywhere.
              </div>
            </div>

            <div className="cmp-quoteFooter">
              Not all brokerages are created equal — choose one that’s dedicated to your success.
            </div>
          </div>

          <div className="cmp-cta">
            <div className="cmp-ctaTitle">Ready to elevate your career?</div>
            <div className="cmp-ctaSub">
              Contact us today to see how the cloud-based model can make a real difference for your business.
            </div>

            <div className="cmp-ctaActions">
              <a className="cmp-btn cmp-btnGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
                Schedule a Consultation
              </a>
              <a className="cmp-btn cmp-btnOutline" href="mailto:support@torontorealestaterealty.ca">
                Contact Us
              </a>
            </div>

            <div className="cmp-ctaFine">No franchise fees • Modern tools • Full support</div>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}
