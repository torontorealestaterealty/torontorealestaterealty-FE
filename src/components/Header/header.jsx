import { useState } from "react";
import { Outlet, Link } from "react-router";
import "./header.css";
import logo from "../../assets/images/logo/logo.png";
import ScrollToTop from "../ScrollToTop";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const closeMenu = () => setOpenMenu(null);

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <>

      <ScrollToTop />
      <header id="header-root" className="header">
        <div className="header-container">
          <Link to="/" className="header-brand">
            <img
              src={logo}
              alt="Toronto Real Estate Realty"
              className="header-logo"
            />
          </Link>

          <nav className="header-nav">
            <Link to="/" className="header-nav-item header-nav-item--active">
              Home
            </Link>
            <div className="header-nav-item dropdown">
              <button
                type="button"
                className="header-nav-link dropdown-trigger"
                onClick={() => toggleMenu("plans")}
                aria-expanded={openMenu === "plans"}
              >
                Plans <span className="caret">▾</span>
              </button>

              <div className={`dropdown-menu ${openMenu === "plans" ? "is-open" : ""}`}>
                <Link to="/plans" className="dropdown-item" onClick={closeMenu}>Parking And Active</Link>
                <Link to="/plans/fulltimeagents" className="dropdown-item" onClick={closeMenu}>Full Time Agent Commissions</Link>
                <Link to="/plans/trading" className="dropdown-item" onClick={closeMenu}>TREB or NON TREB Trading</Link>
              </div>
            </div>


            <div className="header-nav-item dropdown">
              <button
                type="button"
                className="header-nav-link dropdown-trigger"
                onClick={() => toggleMenu("why")}
                aria-expanded={openMenu === "why"}
              >
                Why Us <span className="caret">▾</span>
              </button>

              <div className={`dropdown-menu ${openMenu === "why" ? "is-open" : ""}`}>
                <Link to="/why" className="dropdown-item" onClick={closeMenu}>Why Toronto Real Estate Realty Plus</Link>
                <Link to="/why/choosing-brokerage" className="dropdown-item" onClick={closeMenu}>Choosing the Right Real Estate Brokerage</Link>
                <Link to="/why/about-us" className="dropdown-item" onClick={closeMenu}>About Us</Link>
                <Link to="/why/cloud-vs-traditional" className="dropdown-item" onClick={closeMenu}>Full-Time Real Estate Brokerage</Link>

              </div>
            </div>

            <div className="header-nav-item dropdown">
              <button
                type="button"
                className="header-nav-link dropdown-trigger"
                onClick={() => toggleMenu("boards")}
                aria-expanded={openMenu === "boards"}
              >
                Boards <span className="caret">▾</span>
              </button>

              <div className={`dropdown-menu ${openMenu === "boards" ? "is-open" : ""}`}>
                <Link to="/boards/treb" className="dropdown-item" onClick={closeMenu}>Toronto Real Estate Board</Link>
                <Link to="/boards/onepointar" className="dropdown-item" onClick={closeMenu}>OnePoint Association of Realtors</Link>
                <Link to="/boards/bdar" className="dropdown-item" onClick={closeMenu}>Barrie and District Association of Realtors</Link>
                <Link to="/boards/cornerstone" className="dropdown-item" onClick={closeMenu}>Cornerstone Association of Realtors</Link>

              </div>
            </div>

            <Link to="/resources" className="header-nav-item">
              Resources
            </Link>
          </nav>

          {/* CTA */}
          <div className="header-actions">
            <Link to="/apply" className="header-btn header-btn--primary">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}
