import React from 'react';

const Theses = () => {
  return (
    <div className="theses-container">
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
            text-align: center; /* Center align body content */
          }

          header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
          }

          .theses {
            max-width: 800px;
            margin: 20px auto;
            text-align: left; /* Left align theses content */
          }

          .thesis-box {
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 20px;
            margin-bottom: 20px;
            text-align: left; /* Left align thesis content */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Example shadow */
          }

          .thesis-box h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }

          .thesis-box p {
            font-size: 1rem;
            color: #333;
          }
          .footer {
            background-color: #0a4275;
            color: #fff;
            text-align: center;
            padding: 2rem 0;
          }
          .footer p {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1rem;
          }

          .footer .btn-rounded {
            margin-left: 10px;
          }

          .footer .copyright {
            background-color: rgba(0, 0, 0, 0.2);
            padding: 1rem 0;
          }
        `}
      </style>
      <header>
        <h1>Explore Our Theses and Dissertations</h1>
      </header>
      <div className="theses">
        {/* Thesis/Dissertation 1 */}
        <div className="thesis-box">
          <h3>Thesis 1: Impact of Climate Change on Coastal Ecosystems</h3>
          <p>
            This thesis explores the effects of climate change on coastal ecosystems, focusing on biodiversity loss and habitat degradation due to rising sea levels and temperature shifts.
          </p>
        </div>
        {/* Thesis/Dissertation 2 */}
        <div className="thesis-box">
          <h3>Thesis 2: Role of Artificial Intelligence in Healthcare</h3>
          <p>
            This dissertation examines how AI technologies are transforming healthcare delivery, enhancing diagnosis accuracy, treatment efficiency, and patient care outcomes.
          </p>
        </div>
        {/* Thesis/Dissertation 3 */}
        <div className="thesis-box">
          <h3>Thesis 3: Impacts of Globalization on Cultural Diversity</h3>
          <p>
            This thesis analyzes the cultural implications of globalization, exploring how increased interconnectedness affects cultural identities, languages, and traditions worldwide.
          </p>
        </div>
        {/* Thesis/Dissertation 4 */}
        <div className="thesis-box">
          <h3>Thesis 4: Sustainable Urban Development Strategies</h3>
          <p>
            This dissertation evaluates sustainable urban development practices, assessing their effectiveness in enhancing environmental quality, social equity, and economic prosperity.
          </p>
        </div>
        {/* Thesis/Dissertation 5 */}
        <div className="thesis-box">
          <h3>Thesis 5: Psychological Factors Influencing Consumer Behavior</h3>
          <p>
            This thesis investigates the psychological factors that shape consumer decision-making processes, exploring how perception, motivation, and emotions impact buying behavior.
          </p>
        </div>
        {/* Thesis/Dissertation 6 */}
        <div className="thesis-box">
          <h3>Thesis 6: Ethics in Artificial Intelligence Development</h3>
          <p>
            This dissertation explores ethical considerations in AI development, examining principles for responsible AI design, implementation, and governance across various industries.
          </p>
        </div>
        {/* Thesis/Dissertation 7 */}
        <div className="thesis-box">
          <h3>Thesis 7: Implications of Blockchain Technology in Finance</h3>
          <p>
            This thesis assesses the potential of blockchain technology to disrupt traditional financial systems, exploring its applications in enhancing security, transparency, and efficiency.
          </p>
        </div>
        {/* Thesis/Dissertation 8 */}
        <div className="thesis-box">
          <h3>Thesis 8: Role of Women in Leadership Positions</h3>
          <p>
            This dissertation examines the contributions of women in leadership roles, analyzing their impact on organizational performance, diversity initiatives, and gender equality in the workplace.
          </p>
        </div>
        {/* Thesis/Dissertation 9 */}
        <div className="thesis-box">
          <h3>Thesis 9: Economic Impacts of Climate Change Policies</h3>
          <p>
            This thesis evaluates the economic implications of climate change policies and initiatives, assessing their effects on industries, employment trends, and GDP growth.
          </p>
        </div>
        {/* Thesis/Dissertation 10 */}
        <div className="thesis-box">
          <h3>Thesis 10: Digital Transformation in Education</h3>
          <p>
            This dissertation explores the integration of digital technologies in educational institutions, examining their impact on teaching methodologies, student engagement, and learning outcomes.
          </p>
        </div>
        {/* Thesis/Dissertation 11 */}
        <div className="thesis-box">
          <h3>Thesis 11: Challenges of Cybersecurity in the Digital Age</h3>
          <p>
            This thesis investigates the evolving challenges of cybersecurity in the digital era, analyzing threats, vulnerabilities, and strategies for safeguarding data and privacy.
          </p>
        </div>
        {/* Thesis/Dissertation 12 */}
        <div className="thesis-box">
          <h3>Thesis 12: Role of Corporate Social Responsibility in Sustainable Business Practices</h3>
          <p>
            This dissertation examines the role of CSR in promoting sustainable business practices, exploring its impact on corporate reputation, stakeholder engagement, and environmental stewardship.
          </p>
        </div>
        {/* Thesis/Dissertation 13 */}
        <div className="thesis-box">
          <h3>Thesis 13: Impacts of Artificial Intelligence on Employment Patterns</h3>
          <p>
            This thesis analyzes how AI technologies are reshaping labor markets, exploring their impact on job roles, skills requirements, and workforce dynamics across industries.
          </p>
        </div>
        {/* Thesis/Dissertation 14 */}
        <div className="thesis-box">
          <h3>Thesis 14: Healthcare Access and Equity in Underserved Communities</h3>
          <p>
            This dissertation examines disparities in healthcare access and outcomes among underserved populations, exploring strategies for promoting equity, improving healthcare delivery, and reducing disparities.
          </p>
        </div>
        {/* Thesis/Dissertation 15 */}
        <div className="thesis-box">
          <h3>Thesis 15: Implications of Artificial Intelligence in Legal Systems</h3>
          <p>
            This thesis investigates the implications of AI technologies in legal systems, examining their potential to enhance legal processes, access to justice, and decision-making.
          </p>
        </div>
        {/* Thesis/Dissertation 16 */}
        <div className="thesis-box">
          <h3>Thesis 16: Role of Renewable Energy in Mitigating Climate Change</h3>
          <p>
            This dissertation evaluates the role of renewable energy sources in reducing carbon emissions, addressing energy security, and fostering sustainable development globally.
          </p>
        </div>
        {/* Thesis/Dissertation 17 */}
        <div className="thesis-box">
          <h3>Thesis 17: Effects of Social Media on Political Discourse</h3>
          <p>
            This thesis examines the influence of social media platforms on political discourse, analyzing their role in shaping public opinion, mobilizing voters, and influencing electoral outcomes.
          </p>
        </div>
        {/* Thesis/Dissertation 18 */}
        <div className="thesis-box">
          <h3>Thesis 18: Sustainable Tourism Practices in Developing Countries</h3>
          <p>
            This dissertation explores sustainable tourism practices in developing countries, evaluating their impact on environmental conservation, cultural preservation, and socio-economic development.
          </p>
        </div>
        {/* Thesis/Dissertation 19 */}
        <div className="thesis-box">
          <h3>Thesis 19: Impact of E-commerce on Traditional Retail Businesses</h3>
          <p>
            This thesis assesses the impact of e-commerce growth on traditional retail businesses, examining challenges, opportunities, and strategies for adaptation in a digital economy.
          </p>
        </div>
        {/* Thesis/Dissertation 20 */}
        <div className="thesis-box">
          <h3>Thesis 20: Role of Big Data Analytics in Business Decision-Making</h3>
          <p>
            This dissertation investigates the application of big data analytics in enhancing business decision-making processes, strategy formulation, and performance evaluation across industries.
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="container my-5">
          <section>
            <footer className="text-white" style={{ backgroundColor: '#0a4275' }}>
              <div className="container p-4 pb-0">
                <section>
                  <p className="d-flex justify-content-center align-items-center">
                    <span className="me-3">Register for free</span>
                    <button type="button" className="btn btn-outline-light btn-rounded" onClick={() => window.location.href = 'mailto:ericmwangi837@gmail.com'}>
                Write For Me
              </button>
                  </p>
                </section>
              </div>
              <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <b>The fastest, easiest and most reliable way to have content written for your website. © 2024 Copyright:</b>
                <a className="text-white" href="https://example.com/">Your Website</a>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Theses;
