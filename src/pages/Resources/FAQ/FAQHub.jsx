import { Link } from "react-router";
import "./faq.css";
import heroBg from "../../../assets/images/home/agent.jpg";
import Footer from "../../../components/Footer/footer.jsx";

export default function FAQHub() {
  const topics = [
    {
      title: "Parking & License Status",
      description:
        "Parking your license, staying RECO-compliant, and what changes (and what doesn’t).",
      icon: "📋",
      link: "/faq/parking-license",
      questions: 4,
    },
    {
      title: "MLS & Board Access",
      description:
        "MLS visibility, showings, board listings, and how to access property information.",
      icon: "🏠",
      link: "/faq/mls-board-access",
      questions: 2,
    },
    {
      title: "Support & Services",
      description:
        "Brokerage support, guidance on offers, and help throughout transactions.",
      icon: "🤝",
      link: "/faq/support-services",
      questions: 1,
    },
    {
      title: "Payments & Fees",
      description:
        "How you get paid, 100% commission structure, and transparent fixed fees.",
      icon: "💰",
      link: "/faq/payments-fees",
      questions: 2,
    },
  ];

  return (
    <main id="faq-hub" className="faq-page">
      {/* HERO */}
      <section
        className="faq-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="faq-heroOverlay" />
        <div className="faq-container">
          <div className="faq-heroEyebrow">Frequently Asked Questions</div>

          <h1 className="faq-hero-title">Find answers by topic</h1>

          <p className="faq-hero-sub">
            Select a category to explore questions relevant to parking your
            license, MLS access, brokerage support, and fees.
          </p>
        </div>
      </section>

      {/* TOPICS GRID */}
      <section className="faq-content">
        <div className="faq-container">
          <div className="faq-topics-grid">
            {topics.map((topic, index) => (
              <Link key={index} to={topic.link} className="faq-topic-card">
                <div className="faq-topic-top">
                  <div className="faq-topic-icon">{topic.icon}</div>

                  <div className="faq-topic-meta">
                    <span className="faq-topic-count">
                      {topic.questions} questions
                    </span>
                    <span className="faq-topic-arrow">→</span>
                  </div>
                </div>

                <h3 className="faq-topic-title">{topic.title}</h3>
                <p className="faq-topic-desc">{topic.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="faq-cta">
        <div className="faq-container">
          <div className="faq-ctaCard">
            <h2 className="faq-ctaCard-title">Still have questions?</h2>
            <p className="faq-ctaCard-text">
              Book a call or send us an email — we’ll walk you through the best
              option for your situation.
            </p>

            <div className="faq-ctaCard-actions">
              <a
                className="faq-btn faq-btn-gold"
                href="https://meetings.hubspot.com/"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a Call
              </a>
              <a
                className="faq-btn faq-btn-outline"
                href="mailto:info@torontorealestaterealty.com"
              >
                Email Us
              </a>
            </div>

            <div className="faq-ctaCard-note">
              No monthly fees • 100% commission • Flat transaction fee
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
