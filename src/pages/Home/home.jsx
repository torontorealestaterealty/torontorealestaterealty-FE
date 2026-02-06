import "./home.css";
import heroBg from "../../assets/images/home/meetingHero.png";
import ctaBg from "../../assets/images/home/agent.png";
import searchIcon from "../../assets/images/home/resources/search.png";
import handshakeIcon from "../../assets/images/home/resources/handshake.png";
import buildingIcon from '../../assets/images/home/resources/building.png';
import computerIcon from '../../assets/images/home/resources/computer.png'; 
import checkmarkIcon from '../../assets/images/home/resources/checkmark.png';
import suitcaseIcon from '../../assets/images/home/resources/suitcase.png';
import homeHowBg from "../../assets/images/home/home-howBg.png";

export default function Home() {
    return (
        <main id="home-page" className="home-page">
        {/* HERO */}
        <section
        id="home-hero"
        className="home-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="home-hero-overlay" />

                <div className="home-container home-hero-wrap">
                    <div className="home-hero-left">
                        <h1 className="home-hero-title">
                            The Smarter Brokerage
                            <br />
                            for Ontario Realtors
                        </h1>

                        <p className="home-hero-sub">
                            Keep 100% of Your Commission.
                            <br />
                            No Desk Fees. No Franchise Fees. No Splits.
                        </p>

                        <div className="home-hero-ctaRow">
                            <a className="home-btn home-btn-gold" href="#home-apply">
                                Apply to Join the Brokerage
                            </a>
                            <a className="home-btn home-btn-darkOutline" href="#home-schedule">
                                Schedule a Private Call
                            </a>
                        </div>
                    </div>
                </div>
        </section>

        {/* WHITE FEATURE CARDS */}
        <section id="home-cards" className="home-cards">
        <div className="home-container">
          <h2 className="home-section-title home-section-title--center">
            A Member Brokerage Supporting Agents Across Ontario
          </h2>

          <div className="home-cardGrid">
            <article className="home-infoCard">
              <div className="home-infoCard-icon">
                <img src={searchIcon} alt="Search" />
              </div>
              <h3 className="home-infoCard-title">Choosing the Right Brokerage</h3>
              <p className="home-infoCard-text">
                Get with the times and stop wasting time and money. Choose a brokerage
                built for today’s agents.
              </p>
                <div className="home-infoCard-action">
                  <a className="home-linkGold" href="#home-why">See Details →</a>
                </div>
            </article>

            <article className="home-infoCard">
              <div className="home-infoCard-icon">
                <img src={handshakeIcon} alt="Handshake" />
              </div>
              <h3 className="home-infoCard-title">One Simple Plan. All Agents.</h3>
              <p className="home-infoCard-text">
                No franchise fee. No desk fee. No commission splits. Keep 100%
                commission with a straightforward transaction fee model.
              </p>
              <div className="home-infoCard-action">
                <a className="home-linkGold" href="#home-plans">View Plan →</a>
              </div>
            </article>

            <article className="home-infoCard">
              <div className="home-infoCard-icon">
                <img src={buildingIcon} alt="Building " />
              </div>
              <h3 className="home-infoCard-title">Built by Brokerage Leaders</h3>
              <p className="home-infoCard-text">
                Experienced leadership, modern systems, and agent-first support—so
                you can focus on closing.
              </p>
              <div className="home-infoCard-action">
                <a className="home-linkGold" href="#home-apply">Apply Now →</a>
              </div>
            </article>
          </div>
        </div>
        </section>

      {/* HOW IT WORKS STRIP */}
        <section id="home-plans" className="home-how" style={{ backgroundImage: `url(${homeHowBg})` }}>

            <div className="home-container">
            <h2 className="home-how-title">How It Works</h2>

            <div className="home-how-row">
                <div className="home-how-step">
                <div className="home-how-icon">
                    <img src={computerIcon} alt="Apply Online" />
                </div>
                <div className="home-how-stepTitle">Apply Online</div>
                <div className="home-how-stepText">Submit your details in minutes.</div>
                </div>

                <div className="home-how-line" />

                <div className="home-how-step">
                <div className="home-how-icon">
                    <img src={checkmarkIcon} alt="Get Approved" />
                </div>
                <div className="home-how-stepTitle">Get Approved</div>
                <div className="home-how-stepText">Fast review with clear next steps.</div>
                </div>

                <div className="home-how-line" />

                <div className="home-how-step">
                <div className="home-how-icon">
                    <img src={suitcaseIcon} alt="Start Selling" />
                </div>
                <div className="home-how-stepTitle">Keep 100% of Your Commission</div>
                <div className="home-how-stepText">No splits. No monthly fees.</div>
                </div>
            </div>
            </div>
        </section>

{/* WHO WE WORK WITH (top card over image) */}
        <section id="home-join" className="home-join" > 
        <div className="home-container home-join-grid"  >

            {/* LEFT – TOP */}
            <div className="home-join-left home-join-top">
            <h2 className="home-who-title">Who We Work With</h2>

            <div className="home-who-columns">
                <div className="home-who-col">
                <h3 className="home-who-colTitle">New Agents</h3>
                <ul className="home-who-list">
                    <li>Mentorship.</li>
                    <li>Systems.</li>
                    <li>No pressure.</li>
                </ul>
                </div>

                <div className="home-who-divider" />

                <div className="home-who-col">
                <h3 className="home-who-colTitle">Experienced Agents</h3>
                <ul className="home-who-list">
                    <li>No splits,</li>
                    <li>Full control,</li>
                    <li>Cloud-based brokerage.</li>
                </ul>
                </div>
            </div>
            </div>

            {/* LEFT – BOTTOM */}
            <div className="home-join-left home-join-bottom" style={{ backgroundImage: `url(${homeHowBg})`}} >
                <h2 className="home-cta-title">
                    Ready to Join a Brokerage<br />
                    That Works for You?
                </h2>

                <div className="home-cta-buttons">
                    <a className="home-btn home-btn-darkOutline" href="#home-applyForm">
                    Apply Now
                    </a>
                    <a className="home-btn home-btn-gold" href="#home-schedule">
                    Talk to Us First
                    </a>
            </div>
            </div>

            <div
            className="home-join-image"
            style={{ backgroundImage: `url(${ctaBg})` }}
            aria-hidden="true"
            />

        </div>
        </section>



      {/* FOOTER (simple) */}
      <footer id="home-footer" className="home-footer">
        <div className="home-container home-footer-wrap">
          <div className="home-footer-col">
            <div className="home-footer-brand">Toronto Real Estate Realty</div>
            <div className="home-footer-muted">Independently owned and operated.</div>
          </div>

          <div className="home-footer-col">
            <div className="home-footer-title">Address</div>
            <div className="home-footer-muted">Toronto, ON</div>
            <div className="home-footer-muted">Markham, ON</div>
            <div className="home-footer-muted">Barrie, ON</div>
          </div>

          <div className="home-footer-col">
            <div className="home-footer-title">Contact Us</div>
            <div className="home-footer-muted">support@torontorealestaterealty.ca</div>
          </div>
        </div>

        <div className="home-footer-bottom">
          © {new Date().getFullYear()} Toronto Real Estate Realty. All Rights Reserved.
        </div>
      </footer>

      {/* anchor targets */}
      <div id="home-schedule" className="home-anchor" />
      <div id="home-applyForm" className="home-anchor" />
      <div id="home-why" className="home-anchor" />
    </main>
  );
}
