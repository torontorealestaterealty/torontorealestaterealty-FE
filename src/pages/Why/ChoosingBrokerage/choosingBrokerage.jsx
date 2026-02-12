import "./choosingBrokerage.css";
import heroBg from "../../../assets/images/home/agent.jpg";
import Footer from "../../../components/Footer/footer.jsx";
export default function ChoosingBrokerage() {
  return (
    <main className="choose-page">
      {/* HERO */}
      <section
        className="choose-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="choose-heroOverlay" />
        <div className="choose-container choose-heroWrap">
          <div className="choose-eyebrow">Guidance for Agents</div>

          <h1 className="choose-heroTitle">
            Choosing the Right Real Estate Brokerage
          </h1>

          <p className="choose-heroSub">
            Selecting the right real estate brokerage is crucial for your
            success — whether you’re a new graduate from Humber Real Estate
            College, a new agent, or an experienced professional.
          </p>

          <div className="choose-heroNote">
            Make an informed decision that supports your long-term growth.
          </div>
        </div>
      </section>

      <section className="choose-section">
        <div className="choose-container">
          <div className="choose-card">
            <h2 className="choose-title">Key Factors to Consider</h2>

            <div className="choose-grid">
              <div className="choose-item">
                <div className="choose-num">01</div>
                <div className="choose-itemTitle">
                  Commission Splits vs. Support
                </div>
                <div className="choose-itemText">
                  When starting out, prioritize support and training over high commission splits. Look for brokerages that offer comprehensive mentorship and hands-on guidance. A brokerage with a strong training program will help you grow faster than one with high splits but little support.
                </div>
              </div>

              <div className="choose-item">
                <div className="choose-num">02</div>
                <div className="choose-itemTitle">
                  Fair Pricing & Fee Structure
                </div>
                <div className="choose-itemText">
                  Search for real estate brokerages that have transparent pricing and no hidden fees. Many new agents seek brokerages that don’t charge franchise fees or monthly fees. Finding a brokerage that offers competitive commission rates without unnecessary charges can significantly boost your earnings.
                </div>
              </div>

              <div className="choose-item">
                <div className="choose-num">03</div>
                <div className="choose-itemTitle">
                  Support for Part-Time Agents
                </div>
                <div className="choose-itemText">
                 If you’re a part-time agent, choose a brokerage that is flexible and accommodating. Look for brokerages that understand the unique challenges of part-time work and provide the necessary resources to help you succeed.
                </div>
              </div>

              <div className="choose-item">
                <div className="choose-num">04</div>
                <div className="choose-itemTitle">
                  Experience & Reputation
                </div>
                <div className="choose-itemText">
                  Consider the experience and reputation of the brokerage. Established brokerages often have a wealth of knowledge and industry connections that can benefit your career. Look for brokerages with positive reviews and a track record of supporting their agents.
                </div>
              </div>

              <div className="choose-item">
                <div className="choose-num">05</div>
                <div className="choose-itemTitle">
                  Personalized Training & Development
                </div>
                <div className="choose-itemText">
                  Choose a brokerage that invests in your growth. Look for those that offer ongoing training sessions, workshops, and access to experienced mentors. Personalized development programs can help you stay ahead in the competitive real estate market.
                </div>
              </div>

              <div className="choose-item">
                <div className="choose-num">06</div>
                <div className="choose-itemTitle">
                  Culture & Environment
                </div>
                <div className="choose-itemText">
                  The culture of the brokerage is essential for your job satisfaction. Seek out brokerages that foster a friendly and supportive environment. A positive workplace can enhance collaboration and motivation among agents.
                </div>
              </div>
            </div>
          </div>

          <div className="choose-card choose-cardDark">
            <h2 className="choose-title choose-titleLight">Conclusion</h2>

            <p className="choose-text">
            When searching for the best real estate brokerage in Toronto, consider these factors to ensure you make an informed choice. By prioritizing support, fair pricing, and a positive culture, you’ll set yourself up for success in your real estate career.
            </p>

            <p className="choose-text">
              At Toronto Real Estate Realty Plus, we provide essential support
              through modern online platforms — eliminating the costs and
              limitations of traditional office spaces.
            </p>
          </div>

          {/* CTA */}
          <div className="choose-cta">
            <div className="choose-ctaTitle">
              Discover the Difference Experience Makes
            </div>
            <div className="choose-ctaSub">
              Contact Toronto Real Estate Realty Plus today to see if we’re the
              right brokerage for you.
            </div>

            <div className="choose-ctaActions">
              <a
                href="https://meetings.hubspot.com/"
                target="_blank"
                rel="noreferrer"
                className="choose-btn choose-btnGold"
              >
                Schedule a Consultation
              </a>
              <a
                href="mailto:support@torontorealestaterealty.ca"
                className="choose-btn choose-btnOutline"
              >
                Contact Us
              </a>
            </div>

            <div className="choose-ctaFine">
              No franchise fees • No monthly office expenses • Full support
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
