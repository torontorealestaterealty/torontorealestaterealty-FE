import "./faq.css";
import Footer from "../../../components/Footer/footer.jsx";
import { useState } from "react";
import faqData from "../../FAQ/faqs.json";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = faqData.faqs;

  return (
    <main id="faq-page" className="faq-page">
      <section className="faq-hero">
        <div className="faq-container">
          <h1 className="faq-hero-title">Frequently Asked Questions</h1>
          <p className="faq-hero-sub">
            Everything you need to know about parking your license and working with Toronto Real Estate Realty Plus.
          </p>
        </div>
      </section>

      <section className="faq-content">
        <div className="faq-container">
          <div className="faq-intro">
            <h2 className="faq-section-title">Parking Your Real Estate License</h2>
            <p className="faq-section-desc">
              Learn more about how parking your license works, your flexibility options, and how to stay active as a RECO-licensed agent.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "faq-item--open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 8L10 11L13 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="faq-cta">
        <div className="faq-container">
          <div className="faq-ctaCard">
            <h2 className="faq-ctaCard-title">Still Have Questions?</h2>
            <p className="faq-ctaCard-text">
              Our team is here to help. Reach out to us directly or schedule a call with one of our brokers.
            </p>
            <div className="faq-ctaCard-actions">
              <a className="faq-btn faq-btn-gold" href="#home-schedule">
                Schedule a Call
              </a>
              <a className="faq-btn faq-btn-outline" href="mailto:info@torontorealestaterealty.com">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
