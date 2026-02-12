import "./faq.css";
import Footer from "../../../components/Footer/footer.jsx";
import FAQTemplate from "./FAQTemplate.jsx";
import parkingData from "../../FAQ/parking-license.json";

export default function ParkingLicenseFAQ() {
  return (
    <main id="faq-page" className="faq-page">
      {/* HERO */}
      <section className="faq-hero">
        <div className="faq-container">
          <h1 className="faq-hero-title">Parking Your License</h1>
          <p className="faq-hero-sub">
            Understand how parking your real estate license works with Toronto Real Estate Realty Plus.
          </p>
        </div>
      </section>

      <FAQTemplate faqData={parkingData} />

      {/* CTA SECTION */}
      <section className="faq-cta">
        <div className="faq-container">
          <div className="faq-ctaCard">
            <h2 className="faq-ctaCard-title">Ready to Get Started?</h2>
            <p className="faq-ctaCard-text">
              Join Toronto Real Estate Realty Plus and enjoy 100% commission with no monthly fees.
            </p>
            <div className="faq-ctaCard-actions">
              <a className="faq-btn faq-btn-gold" href="https://share.hsforms.com/" target="_blank" rel="noreferrer">
                Join Us Now
              </a>
              <a className="faq-btn faq-btn-outline" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
