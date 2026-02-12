import "./home.css";
import heroBg from "../../assets/images/home/meetingHero.png";
import ctaBg from "../../assets/images/home/agent.jpg";
import searchIcon from "../../assets/images/home/resources/search.png";
import handshakeIcon from "../../assets/images/home/resources/handshake.png";
import buildingIcon from '../../assets/images/home/resources/building.png';
import computerIcon from '../../assets/images/home/resources/computer.png'; 
import checkmarkIcon from '../../assets/images/home/resources/checkmark.png';
import suitcaseIcon from '../../assets/images/home/resources/suitcase.png';
import homeHowBg from "../../assets/images/home/home-howBg.png";
import Footer from "../../components/Footer/footer.jsx";

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
                          <br />
                          100% commission real estate brokerage in Ontario with no monthly fees.
                          <br />
                          No desk fees. No franchise fees. No splits.
                        </p>

                        <div className="home-hero-ctaRow">
                          <a className="home-btn home-btn-gold" href="#home-apply">
                            Keep 100% of Your Commission. No monthly fees.
                          </a>
                        </div>
                    </div>
                </div>
        </section>
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
                commission with a straightforward transaction fee model and no monthly fees.
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

        <section id="home-plans" className="home-how" >

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



        <section
        id="home-join"
        className="home-join2"
        style={{ backgroundImage: `url(${ctaBg})` }}
        >
        <div className="home-join2-overlay" />

        <div className="home-container home-join2-wrap">
            <div className="home-join2-header">
            <h2 className="home-join2-title">Who We Work With</h2>
            <p className="home-join2-sub">
              Built for new and experienced agents who want flexibility, support, and full commission control.
              A 100% commission brokerage in Ontario with no monthly fees at all.
            </p>
            </div>

            <div className="home-join2-grid">
            <div className="home-join2-card">
                <div className="home-join2-cardTop">
                <div className="home-join2-tag">New Agents</div>
                </div>
                <ul className="home-join2-list">
                <li>Mentorship & onboarding</li>
                <li>Systems & templates</li>
                <li>No pressure, clear steps</li>
                </ul>
            </div>

            <div className="home-join2-card">
                <div className="home-join2-cardTop">
                <div className="home-join2-tag">Experienced Agents</div>
                </div>
                <ul className="home-join2-list">
                <li>No splits — keep your commission</li>
                <li>Full control over your business</li>
                <li>Cloud-based brokerage support</li>
                </ul>
            </div>
            </div>

            <div className="home-join2-ctaBar">
            <div className="home-join2-ctaText">
                <div className="home-join2-ctaTitle">Ready to join a brokerage that works for you?</div>
                <div className="home-join2-ctaSub">Talk to us first, or apply in minutes.</div>
            </div>

            <div className="home-join2-actions">
                <a className="home-btn home-btn-gold" href="#home-schedule">Talk to Us First</a>
                <a className="home-btn home-btn-darkOutline" href="#home-applyForm">Apply Now</a>
            </div>
            </div>
        </div>
        </section>



        <Footer />

      <div id="home-schedule" className="home-anchor" />
      <div id="home-applyForm" className="home-anchor" />
      <div id="home-why" className="home-anchor" />
    </main>
  );
}
