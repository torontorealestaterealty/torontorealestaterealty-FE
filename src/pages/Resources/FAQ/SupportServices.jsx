import "./faq.css";
import Footer from "../../../components/Footer/footer.jsx";
import FAQTemplate from "./FAQTemplate.jsx";
import supportData from "../../FAQ/support-services.json";

export default function SupportServicesFAQ() {
  return (
    <main id="faq-page" className="faq-page">
      <section className="faq-hero">
        <div className="faq-container">
          <h1 className="faq-hero-title">Support & Services</h1>
          <p className="faq-hero-sub">
            Discover the brokerage support and services available to our agents.
          </p>
        </div>
      </section>

      <FAQTemplate faqData={supportData} />

      <section className="faq-cta">
        <div className="faq-container">
          <div className="faq-ctaCard">
            <h2 className="faq-ctaCard-title">Need Brokerage Support?</h2>
            <p className="faq-ctaCard-text">
              Our Broker of Record and support team are here to help you succeed.
            </p>
            <div className="faq-ctaCard-actions">
              <a className="faq-btn faq-btn-gold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
                Connect With Us
              </a>
              <a className="faq-btn faq-btn-outline" href="mailto:info@torontorealestaterealty.com">
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
