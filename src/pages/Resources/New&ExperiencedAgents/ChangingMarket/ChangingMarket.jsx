import "./ChangingMarket.css";
import heroBg from "../../../../assets/images/home/agent.jpg";
import Footer from "../../../../components/Footer/footer.jsx";
export default function NewAgentsChangingMarketPage() {
  return (
    <main className="mkt-page">
      <section className="mkt-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="mkt-heroOverlay" />
        <div className="mkt-container mkt-heroWrap">
          <div className="mkt-eyebrow">New Agents</div>

          <h1 className="mkt-heroTitle">New Agents and Today’s Changing Marketplace</h1>

          <p className="mkt-heroSub">
            In today’s rapidly changing real estate market, having the right information is essential for success.
            Choosing the right brokerage can make all the difference in navigating these challenges.
            At <strong>Toronto Real Estate Realty Plus</strong>, we offer the expertise and support you need to thrive.
          </p>

          <div className="mkt-heroPills">
            <span className="mkt-pill">Market insight</span>
            <span className="mkt-pill">Mentorship support</span>
            <span className="mkt-pill">Social media leverage</span>
            <span className="mkt-pill">Client-first guidance</span>
          </div>

          <div className="mkt-heroActions">
            <a className="mkt-btn mkt-btnGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
              Schedule a Zoom Meeting
            </a>
            <a className="mkt-btn mkt-btnOutline" href="https://share.hsforms.com/" target="_blank" rel="noreferrer">
              Send Us Your Info
            </a>
          </div>

          <div className="mkt-heroNote">
            Stay informed. Stay confident. Build a business that lasts.
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mkt-section">
        <div className="mkt-container">
          {/* Intro card */}
          <div className="mkt-card">
            <h2 className="mkt-title">Why Informed Real Estate Agents Are Essential</h2>
            <p className="mkt-text">
              In a fluctuating market, informed agents help both buyers and sellers make better decisions. Knowledgeable
              agents provide insights into property values, market trends, and local conditions — creating transparency
              and confidence in every transaction.
            </p>

            <div className="mkt-miniGrid">
              <div className="mkt-mini">
                <div className="mkt-miniTitle">Market Insights</div>
                <div className="mkt-miniText">
                  Current data helps you offer more accurate pricing guidance — especially as conditions shift.
                </div>
              </div>

              <div className="mkt-mini">
                <div className="mkt-miniTitle">Educating Clients</div>
                <div className="mkt-miniText">
                  Set expectations, identify opportunities for buyers/investors, and guide sellers to act before value
                  declines further.
                </div>
              </div>

              <div className="mkt-mini">
                <div className="mkt-miniTitle">Navigating Challenges</div>
                <div className="mkt-miniText">
                  Pricing strategy, negotiation tactics, and deal structure get easier with an experienced Broker Mentor.
                </div>
              </div>
            </div>
          </div>

          <div className="mkt-card mkt-cardDark">
            <h2 className="mkt-title mkt-titleLight">The Role of Social Media</h2>
            <p className="mkt-text mkt-textLight">
              In today’s digital landscape, social media is essential for agents looking to connect with buyers and
              sellers. Platforms like Facebook, Instagram, and LinkedIn can expand reach, build credibility, and generate
              quality leads — when used consistently and professionally.
            </p>

            <div className="mkt-socialGrid">
              <div className="mkt-socialItem">
                <div className="mkt-socialTitle">Engagement</div>
                <div className="mkt-socialText">
                  Showcase listings, answer questions, and build trust through consistent posts and short-form videos.
                </div>
              </div>
              <div className="mkt-socialItem">
                <div className="mkt-socialTitle">Education</div>
                <div className="mkt-socialText">
                  Share market updates and explain trends so clients understand what’s happening and what to do next.
                </div>
              </div>
              <div className="mkt-socialItem">
                <div className="mkt-socialTitle">Lead Quality</div>
                <div className="mkt-socialText">
                  With the right strategy, social media can attract and qualify leads — without relying on franchise hype.
                </div>
              </div>
            </div>

            <div className="mkt-darkNote">
              Savvy agents use social media to build their personal brand and pipeline — especially in challenging markets.
            </div>
          </div>

          <div className="mkt-card">
            <h2 className="mkt-title">The Challenges of Being a New Agent</h2>
            <p className="mkt-text">
              Whether you’re going full-time or parking your license, challenges like marketing properties, attracting
              buyers and sellers, and taking the right steps can feel overwhelming. Always prioritize your clients’
              best interests — and make decisions based on real data, not assumptions.
            </p>

            <div className="mkt-split">
              <div className="mkt-splitCard">
                <div className="mkt-splitTitle">Accurate Valuations</div>
                <div className="mkt-splitText">
                  Use current market data to determine fair value. In some markets, today’s value may be the highest you
                  see for a while — waiting can mean missing the best window.
                </div>
              </div>

              <div className="mkt-splitCard">
                <div className="mkt-splitTitle">Tailored Guidance</div>
                <div className="mkt-splitText">
                  Every property and client is unique — there is no one solution that fits all. Ask the right questions,
                  understand the client’s needs, and build a strategy that fits their situation.
                </div>
              </div>
            </div>
          </div>

          <div className="mkt-card mkt-cardSoft">
            <h2 className="mkt-title">Conclusion</h2>
            <p className="mkt-text">
              With over 35 years of real estate experience, Toronto Real Estate Realty Plus is your partner in success.
              New agents benefit most from a brokerage that stays current with today’s market trends — and provides real
              guidance when decisions matter.
            </p>
            <p className="mkt-text">
              Simply schedule a Zoom meeting with us. It gives us both time to see if we’re the perfect fit — and how we
              can support your goals.
            </p>
          </div>

          <div className="mkt-cta">
            <div className="mkt-ctaTitle">Take the Next Step</div>
            <div className="mkt-ctaSub">
              Don’t wait. Schedule a Zoom meeting today and discover how we can help you build your career with clarity
              and confidence.
            </div>

            <div className="mkt-ctaActions">
              <a className="mkt-btn mkt-btnGold" href="https://meetings.hubspot.com/" target="_blank" rel="noreferrer">
                Schedule a Zoom Meeting
              </a>
              <a className="mkt-btn mkt-btnOutline" href="https://share.hsforms.com/" target="_blank" rel="noreferrer">
                Send Us Your Info
              </a>
            </div>

            <div className="mkt-ctaFine">
              Market-ready mentorship • Social media support • Client-first guidance
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}
