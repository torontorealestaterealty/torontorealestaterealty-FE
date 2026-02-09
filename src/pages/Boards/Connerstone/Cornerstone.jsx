import "./Cornerstone.css";
import ctaBg from "../../../assets/images/home/agent.jpg";
import Footer from "../../../components/Footer/footer.jsx";

export default function CornerstonePage() {
  return (
    <main className="treb-boardPage cs-page">
      <section className="treb-boardHero cs-hero" style={{ backgroundImage: `url(${ctaBg})` }}>
        <div className="treb-boardHero-overlay cs-heroOverlay" />

        <div className="treb-container treb-boardHero-wrap">
          <div className="treb-boardHero-eyebrow">Cornerstone Association of REALTORS®</div>

          <h1 className="treb-boardHero-title">
            Toronto Real Estate Realty Plus is a Member Broker of Cornerstone
          </h1>

          <p className="treb-boardHero-sub">
            Keep full MLS access, earn 100% commission, and work with a flexible cloud-based brokerage model —
            fully integrated for Cornerstone agents.
          </p>

          <div className="treb-boardHero-actions">
            <a className="treb-btn treb-btn-gold" href="https://share.hsforms.com/" target="_blank" rel="noreferrer">
              Join Us Now
            </a>
            <a className="treb-btn treb-btn-outlineGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
              Schedule a Zoom Meeting
            </a>
          </div>

          <div className="treb-boardHero-note">
            Integrated with Cornerstone • TRREB • BDAR • OnePoint — plus Park & Trade options
          </div>
        </div>
      </section>

      <section className="treb-boardSection treb-boardWhy cs-intro">
        <div className="treb-container">
          <div className="treb-boardCardLight cs-card">
            <h2 className="treb-serifTitle">About Cornerstone Association of REALTORS®</h2>

            <p className="treb-mutedDark">
              Cornerstone Association of REALTORS® is a newly formed Real Estate Association in Ontario that brings
              together four major boards, making it Ontario’s second-largest real estate board with nearly 9,000 REALTORS®.
            </p>

            <div className="cs-boardGrid">
              <div className="cs-boardItem">Mississauga Real Estate Board (MREB)</div>
              <div className="cs-boardItem">Realtors Association of Hamilton-Burlington (RAHB)</div>
              <div className="cs-boardItem">Waterloo Region Association of REALTORS® (WRAR)</div>
              <div className="cs-boardItem">Simcoe & District Real Estate Board (SDREB)</div>
            </div>

            <div className="cs-regionRow">
              <span className="cs-pill">Mississauga</span>
              <span className="cs-pill">Burlington</span>
              <span className="cs-pill">Hamilton</span>
              <span className="cs-pill">Waterloo Region</span>
              <span className="cs-pill">Niagara North</span>
              <span className="cs-pill">Haldimand County</span>
              <span className="cs-pill">Norfolk County</span>
            </div>
          </div>
        </div>
      </section>

      <section className="treb-boardSection treb-boardSection--dark cs-integrated">
        <div className="treb-container">
          <h2 className="treb-serifTitle treb-serifTitle--light">
            Toronto Real Estate Realty Plus + Cornerstone
          </h2>

          <div className="cs-twoCol">
            <div className="cs-darkCard">
              <div className="cs-darkTitle">Seamless Transition</div>
              <div className="cs-darkText">
                When you join Toronto Real Estate Realty Plus, you don’t give up anything. Whether you’re an active member
                of Cornerstone, TRREB, BDAR, OnePoint, or you’re parking your license without board membership — you keep
                access to the tools and services you currently enjoy.
              </div>
            </div>

            <div className="cs-darkCard">
              <div className="cs-darkTitle">Fully Integrated Systems</div>
              <div className="cs-darkText">
                Cornerstone uses a dedicated MLS system exclusive to Cornerstone REALTORS®. TRREB/BDAR/OnePoint agents use
                Proptx. We ensure that whichever MLS system you use, your listings maintain reach and visibility across
                the audiences that matter.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="treb-boardSection cs-mls">
        <div className="treb-container">
          <div className="cs-mlsCard">
            <h2 className="treb-serifTitle">MLS Listings & How It Works</h2>

            <div className="cs-mlsGrid">
              <div className="cs-mlsBlock">
                <div className="cs-mlsLabel">Cornerstone Agents</div>
                <div className="cs-mlsText">
                  Cornerstone members use the Cornerstone MLS system (exclusive to Cornerstone REALTORS®) for listings
                  across Mississauga, Burlington, Hamilton, Waterloo Region, Niagara North, Haldimand, and Norfolk.
                </div>
              </div>

              <div className="cs-mlsBlock">
                <div className="cs-mlsLabel">TRREB / BDAR / OnePoint Agents</div>
                <div className="cs-mlsText">
                  These boards commonly use Proptx as their MLS system. If you’re on TRREB, BDAR, or OnePoint, you’ll
                  continue working as you normally do through Proptx.
                </div>
              </div>

              <div className="cs-mlsBlock">
                <div className="cs-mlsLabel">Visibility Across Systems</div>
                <div className="cs-mlsText">
                  Toronto Real Estate Realty Plus ensures that no matter which MLS system you’re using, your listings
                  maintain visibility and reach — helping you successfully list and sell properties.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NON-BOARD */}
      <section className="treb-boardSection treb-boardSection--dark cs-nonboard">
        <div className="treb-container">
          <h2 className="treb-serifTitle treb-serifTitle--light">For Agents Not Belonging to Any Board</h2>

          <div className="cs-nonboardCard">
            <p className="cs-nonboardText">
              If you’re licensed with RECO but are not a member of any real estate board, you can still join Toronto Real
              Estate Realty Plus. While you won’t have MLS board access, you will still have access to REALTOR.ca (public
              listings), and we can support you with additional tools and resources to help with offers and transactions.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="treb-boardSection treb-boardSection--dark cs-benefits">
        <div className="treb-container">
          <h2 className="treb-serifTitle treb-serifTitle--light">
            Why Join as a Cornerstone Agent?
          </h2>

          <div className="treb-benefitsGrid">
            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Seamless Transition</div>
              <div className="treb-benefitText">
                Keep your Cornerstone tools and services — fully integrated. No loss of MLS access or benefits.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">MLS Visibility</div>
              <div className="treb-benefitText">
                Strong listing visibility within Cornerstone and across the broader network of boards and audiences.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">100% Commission + Flat Fee Model</div>
              <div className="treb-benefitText">
                $495 + HST buying/selling • $199.99 + HST leasing/referrals — no splits, no franchise fees, no desk fees.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Cloud-Based Brokerage</div>
              <div className="treb-benefitText">
                Work remotely with full flexibility and strong support — without traditional office overhead.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">No Hidden Fees</div>
              <div className="treb-benefitText">
                Low annual fees and predictable pricing — no desk fees, no monthly fees, no franchise fees.
              </div>
            </div>

            <div className="treb-benefitCard">
              <div className="treb-benefitTitle">Flexible</div>
              <div className="treb-benefitText">
                Stay active, park your license, or work remotely — choose the model that suits your lifestyle.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="treb-boardSection treb-boardSection--dark treb-boardPricing cs-pricing">
        <div className="treb-container">
          <h2 className="treb-serifTitle treb-serifTitle--light">Pricing</h2>

          <div className="treb-pricingCard">
            <div className="treb-pricingRow">
              <div className="treb-pricingLabel">Buying & Selling Transactions</div>
              <div className="treb-pricingValue">$495.00 + HST</div>
            </div>

            <div className="treb-pricingRow">
              <div className="treb-pricingLabel">Leasing & Referral Transactions</div>
              <div className="treb-pricingValue">$199.99 + HST</div>
            </div>

            <div className="treb-pricingDivider" />

            <div className="treb-pricingRow">
              <div className="treb-pricingLabel">Annual Fee (Active Cornerstone Member)</div>
              <div className="treb-pricingValue">$149.99</div>
            </div>

            <div className="treb-pricingRow">
              <div className="treb-pricingLabel">Non-Board MLS Member (keep license active)</div>
              <div className="treb-pricingValue">$129.99</div>
            </div>

            <div className="treb-pricingNote">
              No commission splits • No franchise fees • No desk fees
            </div>
          </div>
        </div>
      </section>

      <section className="treb-boardSection cs-next">
        <div className="treb-container">
          <div className="cs-nextCard">
            <h2 className="treb-serifTitle">Ready to Join Us?</h2>

            <p className="treb-mutedDark">
              If you’re a Cornerstone REALTOR® or an agent looking for a flexible, commission-driven brokerage with access
              to MLS systems across multiple boards, Toronto Real Estate Realty Plus is the perfect place to build and grow
              your business.
            </p>

            <div className="cs-nextActions">
              <a className="treb-btn treb-btn-gold" href="https://share.hsforms.com/" target="_blank" rel="noreferrer">
                Join Us Now
              </a>
              <a className="treb-btn treb-btn-outlineGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
                Schedule a Zoom Meeting
              </a>
              <a className="treb-btn treb-btn-linkGold" href="https://mylicense.ca" target="_blank" rel="noreferrer">
                Looking to just Park for now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer band */}
      <div className="treb-footerBand">
        <Footer />
      </div>
    </main>
  );
}
