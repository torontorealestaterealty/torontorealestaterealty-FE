import "./aboutUs.css";
import heroBg from "../../../assets/images/home/agent.jpg";
import Footer from "../../../components/Footer/footer.jsx"; 
export default function AboutTorontoRealEstateRealtyPlusPage() {
  return (
    <main className="abt-page">
      <section className="abt-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="abt-heroOverlay" />
        <div className="abt-container abt-heroWrap">
          <div className="abt-eyebrow">About</div>

          <h1 className="abt-heroTitle">About Toronto Real Estate Realty PLUS</h1>

          <p className="abt-heroSub">
            For over <strong>35 years</strong>, Toronto Real Estate Realty has been a leader in the Toronto real estate
            market — offering strong support for new graduates, new agents, and seasoned professionals alike.
          </p>

          <div className="abt-heroBadgeRow">
            <span className="abt-chip">35+ Years Experience</span>
            <span className="abt-chip">Cloud-Based Brokerage</span>
            <span className="abt-chip">Agent-First Support</span>
          </div>

          <div className="abt-heroActions">
            <a className="abt-btn abt-btnGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
              Schedule a Consultation
            </a>
            <a className="abt-btn abt-btnOutline" href="mailto:support@torontorealestaterealty.ca">
              Contact Us
            </a>
          </div>

          <div className="abt-heroNote">
            More than a brokerage — a dedicated partner for your real estate success.
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="abt-section">
        <div className="abt-container">
          {/* STORY */}
          <div className="abt-card">
            <h2 className="abt-title">A Brokerage Built on Real Market Experience</h2>
            <p className="abt-text">
              Our leadership team brings deep operational experience from award-winning brokerages — including
              <strong> 16 years at RE/MAX Vision Realty</strong> and <strong>4 years at Royal LePage Vision</strong>.
              We understand what agents need to grow, stay compliant, and serve clients confidently in an evolving market.
            </p>

            <div className="abt-highlight">
              <div className="abt-highlightTitle">What you get with us</div>
              <div className="abt-highlightText">
                A modern brokerage model with practical guidance, real support, and a cost structure designed to protect
                your earnings — especially during market shifts.
              </div>
            </div>
          </div>

          {/* WHY CHOOSE */}
          <div className="abt-card abt-cardDark">
            <h2 className="abt-title abt-titleLight">Why Choose Toronto Real Estate Realty PLUS?</h2>

            <div className="abt-grid">
              <div className="abt-item">
                <div className="abt-itemIcon">◎</div>
                <div className="abt-itemTitle">Cost-Effective Brokerage Solutions</div>
                <div className="abt-itemText">
                  A cloud-based operation that reduces overhead while improving accessibility and support — without the
                  burden of traditional office costs.
                </div>
              </div>

              <div className="abt-item">
                <div className="abt-itemIcon">◎</div>
                <div className="abt-itemTitle">Flexible License Options</div>
                <div className="abt-itemText">
                  Whether you’re parking your license or trading actively, we provide an environment that works for every
                  stage of your career.
                </div>
              </div>

              <div className="abt-item">
                <div className="abt-itemIcon">◎</div>
                <div className="abt-itemTitle">Expert Guidance</div>
                <div className="abt-itemText">
                  Tailored strategies and hands-on help to navigate an ever-evolving market and deliver better outcomes
                  for clients.
                </div>
              </div>

              <div className="abt-item">
                <div className="abt-itemIcon">◎</div>
                <div className="abt-itemTitle">Innovative Services Post-COVID-19</div>
                <div className="abt-itemText">
                  With new market expectations and TRESA regulations, we support customized service options that empower
                  both buyers and sellers.
                </div>
              </div>
            </div>

            <div className="abt-note">
              At Toronto Real Estate Realty PLUS, we’re more than a brokerage — we’re your dedicated partner.
            </div>
          </div>

          {/* CTA */}
          <div className="abt-cta">
            <div className="abt-ctaTitle">Get Started Today</div>
            <div className="abt-ctaSub">
              Ready to elevate your real estate career? Contact us now to see how our experience and personalized service
              can help you reach your goals.
            </div>

            <div className="abt-ctaActions">
              <a className="abt-btn abt-btnGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
                Schedule a Consultation
              </a>
              <a className="abt-btn abt-btnOutline" href="mailto:support@torontorealestaterealty.ca">
                Contact Us
              </a>
            </div>

            <div className="abt-ctaFine">
              Online support • Flexible options • Built for today’s market
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
