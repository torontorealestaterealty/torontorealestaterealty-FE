import "./faq.css";
import Footer from "../../../components/Footer/footer.jsx";
import FAQTemplate from "./FAQTemplate.jsx";
import mlsData from "../../FAQ/mls-board-access.json";

export default function MLSBoardAccessFAQ() {
  return (
    <main id="faq-page" className="faq-page">
      {/* HERO */}
      <section className="faq-hero">
        <div className="faq-container">
          <h1 className="faq-hero-title">MLS & Board Access</h1>
          <p className="faq-hero-sub">
            Learn about MLS access, board listings, and property information options.
          </p>
        </div>
      </section>

      <FAQTemplate faqData={mlsData} />

      {/* CTA SECTION */}
      <section className="faq-cta">
        <div className="faq-container">
          <div className="faq-ctaCard">
            <h2 className="faq-ctaCard-title">Questions About MLS Access?</h2>
            <p className="faq-ctaCard-text">
              Our team can help you understand how MLS and board systems work with our brokerage.
            </p>
            <div className="faq-ctaCard-actions">
              <a className="faq-btn faq-btn-gold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
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
