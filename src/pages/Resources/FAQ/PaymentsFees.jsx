import "./faq.css";
import Footer from "../../../components/Footer/footer.jsx";
import FAQTemplate from "./FAQTemplate.jsx";
import paymentsData from "../../FAQ/payments-fees.json";

export default function PaymentsFeesFAQ() {
  return (
    <main id="faq-page" className="faq-page">
      {/* HERO */}
      <section className="faq-hero">
        <div className="faq-container">
          <h1 className="faq-hero-title">Payments & Fees</h1>
          <p className="faq-hero-sub">
            Understand our transparent commission structure and fee model.
          </p>
        </div>
      </section>

      <FAQTemplate faqData={paymentsData} />

      {/* CTA SECTION */}
      <section className="faq-cta">
        <div className="faq-container">
          <div className="faq-ctaCard">
            <h2 className="faq-ctaCard-title">100% Commission, No Monthly Fees</h2>
            <p className="faq-ctaCard-text">
              Keep what you earn with our transparent, flat-fee transaction model.
            </p>
            <div className="faq-ctaCard-actions">
              <a className="faq-btn faq-btn-gold" href="https://share.hsforms.com/" target="_blank" rel="noreferrer">
                Join Now
              </a>
              <a className="faq-btn faq-btn-outline" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
