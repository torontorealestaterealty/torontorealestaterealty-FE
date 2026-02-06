import { Outlet } from "react-router";
import "./header.css";
import logo from "../../assets/images/logo/logo.png";

export default function Header() {
  return (
    <>
      <header id="header-root" className="header">
        <div className="header-container">

          {/* Logo */}
          <div className="header-brand">
            <img
              src={logo}
              alt="Toronto Real Estate Realty"
              className="header-logo"
            />
          </div>

          {/* Nav */}
          <nav className="header-nav">
            <a href="/" className="header-nav-item header-nav-item--active">Home</a>
            <a href="/plans" className="header-nav-item">Plans</a>
            <a href="/why" className="header-nav-item">Why Us</a>
            <a href="/boards" className="header-nav-item">Boards</a>
            <a href="/resources" className="header-nav-item">Resources</a>
          </nav>

          {/* CTA */}
          <div className="header-actions">
            <a href="/apply" className="header-btn header-btn--primary">
              Apply to Join
            </a>
          </div>

        </div>
      </header>

      {/* 👇 THIS IS REQUIRED FOR ROUTES TO RENDER */}
      <Outlet />
    </>
  );
}
