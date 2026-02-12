import "./whyUs.css";
import heroBg from "../../../assets/images/home/agent.jpg";
import Footer from "../../../components/Footer/footer.jsx";
export default function WhyUs() {
  return (
    <main className="why-page">
      {/* HERO */}
      <section className="why-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="why-heroOverlay" />
        <div className="why-container why-heroWrap">
          <div className="why-eyebrow">Why Us</div>

          <h1 className="why-heroTitle">Why Toronto Real Estate Realty Plus?</h1>

          <p className="why-heroSub">
            It’s a changed marketplace — are you ready? Whether you’re launching your career or looking for a fresh start,
            we offer the tools, support, and expertise to help you thrive in today’s dynamic real estate market.
          </p>

          <div className="why-boardChips">
            <span className="why-chip">TRREB</span>
            <span className="why-chip">BDAR</span>
            <span className="why-chip">Cornerstone</span>
          </div>

          <div className="why-heroActions">
            <a className="why-btn why-btnGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
              Schedule a Consultation
            </a>
            <a className="why-btn why-btnOutline" href="mailto:support@torontorealestaterealty.ca">
              Contact Us
            </a>
          </div>

          <div className="why-heroNote">
            A modern brokerage model — built for agents who want more flexibility and better returns.
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="why-section">
        <div className="why-container">
          {/* 4 reasons */}
          <div className="why-card">
            <h2 className="why-title">What Makes Us Different</h2>

            <div className="why-grid">
              <div className="why-item">
                <div className="why-num">01</div>
                <div className="why-itemTitle">Extensive Experience in Real Estate</div>
                <div className="why-itemText">
                  With over 35 years of industry expertise, we specialize in a wide range of properties, including preconstruction condominiums, new homes, resale homes, and commercial properties. Our successful history includes owning and operating RE/MAX and Royal LePage franchises in Toronto, where we’ve managed over 170 agents. Trust our deep knowledge of the real estate market to guide your career.
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">02</div>
                <div className="why-itemTitle">Modern Cloud-Based Tools</div>
                <div className="why-itemText">
                  Leverage cutting-edge cloud-based technology that allows you to work from anywhere, streamline your processes, and enhance your productivity. At Toronto Real Estate Realty, we provide agents with innovative tools designed for today’s competitive real estate landscape, making your job easier and more efficient.
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">03</div>
                <div className="why-itemTitle">Competitive Resources Without Hidden Fees</div>
                <div className="why-itemText">
                  Forget about hefty franchise fees, unreasonable commission splits, and desk fees. Instead, enjoy better returns through effective social media marketing, personalized coaching, and dedicated one-on-one support. We equip you with everything you need to discover opportunities and close deals effectively in this changing real estate market.
                </div>
              </div>

              <div className="why-item">
                <div className="why-num">04</div>
                <div className="why-itemTitle">Collaborative Team Spirit</div>
                <div className="why-itemText">
                  Join a community that values collaboration and mutual success. At Toronto Real Estate Realty, you’re not just another agent; you’re a valued member of a supportive team dedicated to helping you thrive in your real estate career.
                </div>
              </div>
            </div>
          </div>

          <div className="why-card why-cardDark">
            <h2 className="why-title why-titleLight">Why Choose Us?</h2>

            <div className="why-bullets">
              <div className="why-bullet">No Franchise Fees — keep more of your earnings</div>
              <div className="why-bullet">Comprehensive Training — ongoing mentorship for your growth</div>
              <div className="why-bullet">Effective Marketing — modern social media strategies to attract clients</div>
              <div className="why-bullet">Supportive Community — collaboration focused on mutual success</div>
            </div>

            <div className="why-message">
              Join Toronto Real Estate Realty Plus — a brokerage reshaping the real estate industry in Ontario. Whether
              you’re a new agent launching your career or an experienced professional seeking a fresh start, we provide
              the resources, tools, and expertise to help you succeed.
            </div>
          </div>

          {/* CTA */}
          <div className="why-cta">
            <div className="why-ctaTitle">Ready to Elevate Your Real Estate Career?</div>
            <div className="why-ctaSub">
              Let’s connect. Schedule a quick Zoom chat or send us your information — we’ll get back to you as soon as possible.
            </div>

            <div className="why-ctaActions">
              <a className="why-btn why-btnGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
                Schedule a Consultation
              </a>
              <a className="why-btn why-btnOutline" href="mailto:support@torontorealestaterealty.ca">
                Contact Us
              </a>
            </div>

            <div className="why-ctaFine">
              Information shown is general guidance. We’ll help tailor your setup based on your goals and board membership.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
