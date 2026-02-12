import "./RegisteringWithRecoPage.css";
import heroBg from "../../../assets/images/home/agent.jpg";
import Footer from "../../../components/Footer/footer.jsx";
export default function RegisteringWithRecoPage() {
  return (
    <main className="reco-page">
      <section className="reco-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="reco-heroOverlay" />
        <div className="reco-container reco-heroWrap">
          <div className="reco-eyebrow">RECO Registration Guide</div>

          <h1 className="reco-heroTitle">Registering with RECO</h1>

          <p className="reco-heroSub">
            Whether you’re a recent graduate, new agent, or returning to full-time work, the best option is to register
            with the Real Estate Council of Ontario (RECO) within the required timeframe and keep your license active —
            even if you decide to park it for now.
          </p>

          <div className="reco-heroPills">
            <span className="reco-pill">Register on time</span>
            <span className="reco-pill">Park your license if needed</span>
            <span className="reco-pill">Avoid franchise overhead</span>
            <span className="reco-pill">Get full brokerage support</span>
          </div>

          <div className="reco-heroActions">
            <a className="reco-btn reco-btnGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
              Schedule a Zoom Meeting
            </a>
            <a className="reco-btn reco-btnOutline" href="https://share.hsforms.com/" target="_blank" rel="noreferrer">
              Send Us Your Info
            </a>
          </div>

          <div className="reco-heroNote">
            A changed market doesn’t mean you pause your career — it means you choose a smarter setup.
          </div>
        </div>
      </section>

      <section className="reco-section">
        <div className="reco-container">
          <div className="reco-card">
            <h2 className="reco-title">Why Register Even If You’re Not Going Full-Time Yet?</h2>

            <p className="reco-text">
              Today’s market is challenging for many students in the middle of their course or recent graduates. Some
              new agents return to full-time employment as sales decline. Even so, if you’ve passed the registration
              exam, you should register with RECO within the allowed timeframe.
            </p>

            <div className="reco-callouts">
              <div className="reco-callout">
                <div className="reco-calloutTitle">Register on time</div>
                <div className="reco-calloutText">
                  It doesn’t matter if you plan to work full-time, part-time, or park your license — register within the
                  required timeframe so you don’t lose the opportunity.
                </div>
              </div>

              <div className="reco-callout">
                <div className="reco-calloutTitle">Parking can be a smart move</div>
                <div className="reco-calloutText">
                  Parking helps avoid franchise fees, high splits, and desk fees — while still allowing you to trade
                  with full broker support when you choose to do deals.
                </div>
              </div>

              <div className="reco-callout">
                <div className="reco-calloutTitle">Keep 100% commission</div>
                <div className="reco-calloutText">
                  Agents keep 100% commission on successful transactions and pay only a transaction fee — one of the most
                  comprehensive options for both new and seasoned realtors.
                </div>
              </div>
            </div>
          </div>

          <div className="reco-card reco-cardDark">
            <h2 className="reco-title reco-titleLight">Our Experience</h2>
            <p className="reco-text reco-textLight">
              With more than 35 years in the real estate market, we’ve seen every cycle — ups and downs. We owned and
              operated RE/MAX Vision Realty Inc. for 16 years, and Royal LePage Realty for 4 years. We understand how to
              help agents build sustainably, especially in uncertain markets.
            </p>
          </div>

          <div className="reco-card">
            <h2 className="reco-title">The Process After Completing Your Courses</h2>
            <p className="reco-muted">
              Below is a simple step-by-step overview to help you complete registration smoothly.
            </p>

            <div className="reco-steps">
              <div className="reco-step">
                <div className="reco-stepLeft">
                  <div className="reco-stepNum">STEP 1</div>
                  <div className="reco-stepLine" />
                </div>

                <div className="reco-stepBody">
                  <div className="reco-stepTitle">Requirements to Start Registration</div>
                  <div className="reco-stepText">
                    Have your course results ready. RECO commonly requires a police report known as a{" "}
                    <strong>Criminal Record & Judicial Matters Check (Level 2)</strong> to assess suitability for
                    registration under REBBA 2002 and now TRESA.
                  </div>

                  <ul className="reco-list">
                    <li>
                      Visit your nearest police station and request a <strong>Level 2</strong> report (often takes ~3–4
                      weeks).
                    </li>
                    <li>
                      Some third-party providers can deliver the same day, but RECO acceptance can vary — confirm with
                      RECO before purchasing.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="reco-step">
                <div className="reco-stepLeft">
                  <div className="reco-stepNum">STEP 2</div>
                  <div className="reco-stepLine" />
                </div>

                <div className="reco-stepBody">
                  <div className="reco-stepTitle">Create Access to RECO (MyWeb)</div>
                  <div className="reco-stepText">
                    Log in to the Real Estate Council of Ontario website and access <strong>MyWeb</strong>. Sign up for
                    MyWeb access to complete your application and upload your educational documentation and Level 2
                    police report.
                  </div>
                </div>
              </div>

              <div className="reco-step reco-stepLast">
                <div className="reco-stepLeft">
                  <div className="reco-stepNum">STEP 3</div>
                </div>

                <div className="reco-stepBody">
                  <div className="reco-stepTitle">Application Review & Payment</div>
                  <div className="reco-stepText">
                    In most cases, licensing fees are paid once the application is reviewed and approved (pending payment).
                    You will also need to provide the brokerage you will be associated with.
                  </div>

                  <div className="reco-brokerBox">
                    <div className="reco-brokerTitle">Our Brokerage Information</div>
                    <div className="reco-brokerGrid">
                      <div>
                        <div className="reco-brokerLabel">Brokerage</div>
                        <div className="reco-brokerValue">Toronto Real Estate Realty</div>
                      </div>
                      <div>
                        <div className="reco-brokerLabel">Address</div>
                        <div className="reco-brokerValue">
                          1 Edgewater Drive, Ste 216, Toronto ON M5A 0L1
                        </div>
                      </div>
                      <div>
                        <div className="reco-brokerLabel">Phone</div>
                        <div className="reco-brokerValue">416-289-2890</div>
                      </div>
                      <div>
                        <div className="reco-brokerLabel">Email</div>
                        <div className="reco-brokerValue">support@torontorealestaterealty.com</div>
                      </div>
                      <div>
                        <div className="reco-brokerLabel">Broker of Record</div>
                        <div className="reco-brokerValue">Daljinder Gill</div>
                      </div>
                      <div>
                        <div className="reco-brokerLabel">RECO Registration</div>
                        <div className="reco-brokerValue">4764977</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reco-cta">
            <div className="reco-ctaTitle">Let Us Help You Move Forward</div>
            <div className="reco-ctaSub">
              Whether you’re parking your license, working part-time, or going full-time, you need a brokerage that
              understands your needs and helps you stay cost-efficient while reaching your goals.
            </div>

            <div className="reco-ctaActions">
              <a className="reco-btn reco-btnGold" href="https://share.hsforms.com/" target="_blank" rel="noreferrer">
                Send Us Your Info
              </a>
              <a className="reco-btn reco-btnOutline" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
                Schedule a Zoom Meeting
              </a>
            </div>

            <div className="reco-ctaFine">
              Support • Flexibility • Cost-effective options in today’s market
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
