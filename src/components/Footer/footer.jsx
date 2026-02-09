import "./footer.css";
import logo from "../../assets/images/logo/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-wrap">

        <div className="footer-col">
            <div className="footer-logo-box">
                <img
                src={logo}
                alt="Toronto Real Estate Realty"
                className="footer-logo"
                />
            </div>
          <div className="footer-muted">
            Independently owned and operated.
          </div>
        </div>

        <div className="footer-col">
            <div className="footer-title">Address</div>
            <div className="footer-title-minusub">TREB Office</div>
            <div className="footer-title-minusub">NON-TREB Office</div>
            <div className="footer-muted">
                <span>1 Edgewater Drive, </span>
                <span>Toronto, ON M5A 0L1</span>
            </div>
            <div className="footer-muted">
                <span>51 Teddington Avenue, </span>
                <span>Markham, ON L3R 6T6</span>
            </div>

            <div className="footer-title-minusub">Barrie Branch office address:</div>

            <div className="footer-muted">
                <span>132 Commerce Park Drive, Unit K, </span>
                <span>Barrie, ON L4N 8Z6</span>
            </div>


        </div>

        {/* Contact */}
        <div className="footer-col">
          <div className="footer-title">Contact Us</div>
          <div className="footer-muted">
            support@torontorealestaterealty.ca
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Toronto Real Estate Realty. All Rights Reserved.
      </div>
    </footer>
  );
}
