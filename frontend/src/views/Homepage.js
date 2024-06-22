import React from 'react';

function Homepage() {
  return (
    <div>
      <>
        <main role="main" style={{ marginTop: 50 }}>
          {/* Main jumbotron for a primary marketing message or call to action */}
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">Excellent Writers</h1>
              <p>
                Welcome to Excellent Writers Inc.! We specialize in delivering high-quality content tailored to your needs. Our team of skilled writers excels in various genres, ensuring your ideas are expressed compellingly and effectively.
              </p>
              <p>
                <a className="btn btn-primary btn-lg" href="mailto:contact@excellentwritersinc.com?subject=Inquiry&body=Hello," role="button">
                  Order A Paper
                </a>
                <h3>Never Pay A Dime Until You're 100% Satisfied With The Content We Write For You.</h3>
              </p>
            </div>
          </div>
          <div className="container">
            {/* Example row of columns */}
            <div className="row">
              <div className="col-md-4">
                <h2>Essays</h2>
                <p>
                  At Excellent Writers Inc., we craft exceptional essays that captivate and inform. Whether argumentative, descriptive, expository, or narrative, our essays are meticulously researched and flawlessly written to exceed academic standards.
                </p>
                <p>
                  <a className="btn btn-secondary" href="/essays" role="button">
                    View details »
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <h2>Research Papers</h2>
                <p>
                  Excellent Writers Inc. delivers top-tier research papers. We offer comprehensive literature reviews, robust methodologies, clear results, expository analyses, and insightful discussions, ensuring each paper is scholarly, precise, and impactful.
                </p>
                <p>
                  <a className="btn btn-secondary" href="/research_papers" role="button">
                    View details »
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <h2>Theses/Dissertations</h2>
                <p>
                  Trust Excellent Writers Inc. for your theses and dissertations. We ensure originality, in-depth analysis, expert structure, meticulous research, and flawless writing, creating authoritative documents that showcase your academic excellence.
                </p>
                <p>
                  <a className="btn btn-secondary" href="/theses" role="button">
                    View details »
                  </a>
                </p>
              </div>
            </div>
            <hr />
          </div>{" "}
          {/* /container */}
        </main>
        
        {/* Footer */}
        <footer className="text-center text-white" style={{ backgroundColor: '#0a4275', width: '100%', position: 'absolute', bottom: 0 }}>
          {/* Grid container */}
          <div className="container p-4">
            {/* Section: CTA */}
            <section>
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Order A Paper</span>
                <button type="button" className="btn btn-outline-light btn-rounded" onClick={() => window.location.href = 'mailto:ericmwangi837@gmail.com'}>
                Write For Me
              </button>
              </p>
            </section>
            {/* Section: CTA */}
          </div>
          {/* Grid container */}

          {/* Copyright */}
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2024-2025 Excellent Writers
          </div>
          {/* Copyright */}
        </footer>
        {/* End of Footer */}
      </>
    </div>
  );
}

export default Homepage;
