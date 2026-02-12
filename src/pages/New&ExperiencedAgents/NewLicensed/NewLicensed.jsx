import "./NewLicensed.css";
import heroBg from "../../../assets/images/home/agent.jpg";
import Footer from "../../../components/Footer/footer.jsx";
export default function NewLicensedAgentsPage() {
  return (
    <main className="nla-page">
      <section
        className="nla-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="nla-heroOverlay" />

        <div className="nla-container nla-heroWrap">
          <div className="nla-eyebrow">Newly Licensed Agents</div>

          <h1 className="nla-heroTitle">
            Supporting Newly Licensed Real Estate Agents
          </h1>

          <p className="nla-heroSub">
            <strong>Full-time or Part-time</strong> — Launch your Real Estate Career.
            <br />
            Are you a newly graduated or licensed real estate agent eager to
            kickstart your career in Toronto, Canada? At{" "}
            <strong>Toronto Real Estate Realty Plus</strong>, we understand that
            starting out in real estate can be challenging — and we’re here to
            provide the guidance and support you need to build a successful
            career. With over <strong>35 years of experience</strong> in
            residential and commercial sales, we are dedicated to nurturing
            your growth and helping you thrive in the competitive real estate
            market.
          </p>

          <div className="nla-heroActions">
            <a
              className="nla-btn nla-btnGold"
              href="https://meetings.hubspot.com/"
              target="_blank"
              rel="noreferrer"
            >
              Schedule a Zoom Chat
            </a>
            <a
              className="nla-btn nla-btnOutline"
              href="https://share.hsforms.com/"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </div>

          <div className="nla-heroNote">
            Real mentorship • Real systems • A modern brokerage built for today’s agents
          </div>
        </div>
      </section>

      <section className="nla-section">
        <div className="nla-container">

          <div className="nla-card nla-cardWhy">
            <h2 className="nla-title-why">Why Choose Toronto Real Estate Realty?</h2>

            <p className="nla-text-why">
              Choosing the right brokerage matters. Many franchises impose high
              fees and focus on recruiting agents rather than providing meaningful
              support. At Toronto Real Estate Realty, we invest in our agents
              through mentorship, strategy, and real hands-on guidance — so you
              can build a strong, sustainable career.
            </p>

            <div className="nla-whyGrid">
              <div className="nla-whyItem">
                <h3 className="nla-whyTitle">Unlimited Support & Mentorship</h3>
                <p>
                  Personalized one-on-one support with experienced brokers. We
                  guide you through your first transactions with Zoom mentorship
                  and continuous real-world advice.
                </p>
              </div>

              <div className="nla-whyItem">
                <h3 className="nla-whyTitle">Marketing & Technology Tools</h3>
                <p>
                  Build your online presence with modern tools — from branding
                  and websites to targeted social media strategies that attract
                  real clients.
                </p>
              </div>

              <div className="nla-whyItem">
                <h3 className="nla-whyTitle">Tailored Career Growth</h3>
                <p>
                  Focus on the markets and property types you’re passionate about.
                  We help you position yourself strategically and grow at your
                  own pace.
                </p>
              </div>

              <div className="nla-whyItem">
                <h3 className="nla-whyTitle">Individualized Strategy</h3>
                <p>
                  We help you identify the right clients, pricing strategies, and
                  next steps so your efforts are intentional, efficient, and
                  effective.
                </p>
              </div>
            </div>
          </div>

          {/* START WITH US */}
          <div className="nla-card nla-cardSoft">
            <h2 className="nla-title-start">Why Start Your Career with Us?</h2>
            <p className="nla-text-start">
              Join a brokerage with a proven track record in Toronto’s real
              estate market. Our commitment to your success goes beyond initial
              training — we offer ongoing education, networking opportunities,
              and a collaborative environment where you can thrive.
            </p>
          </div>

          {/* FINAL CTA */}
          <div className="nla-cta">
            <h2 className="nla-ctaTitle">
              Take the First Step Towards Your Real Estate Success
            </h2>

            <p className="nla-ctaSub">
              Discover the support and opportunities that await you at Toronto
              Real Estate Realty Plus. Don’t hesitate to reach out and find out
              how we can help you move forward in your real estate career.
            </p>

            <div className="nla-ctaActions">
              <a
                className="nla-btn nla-btnGold"
                href="https://meetings.hubspot.com/"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a Zoom Chat
              </a>
              <a
                className="nla-btn nla-btnOutline"
                href="https://share.hsforms.com/"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </div>

            <div className="nla-ctaNote">
              Full-time • Part-time • New graduates welcome
            </div>
          </div>

        </div>
      </section>
      <Footer/>
    </main>
  );
}
