import React, { useState, useEffect } from 'react';

const EssaysPage = () => {
  const [essays, setEssays] = useState([]);

  useEffect(() => {
    const generateEssays = () => {
      const essayCount = 30;
      const essaysArray = [];

      for (let i = 1; i <= essayCount; i++) {
        essaysArray.push({
          id: i,
          title: `Essay ${i}: Title Placeholder`,
          content: `Essay content goes here for Essay ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, justo eget condimentum luctus, erat tellus malesuada massa, vitae sodales urna ipsum nec nisi.`,
        });
      }

      setEssays(essaysArray);
    };

    generateEssays();
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Essays Page</title>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 0;
              padding: 0;
              background-color: #f2f2f2;
            }

            header {
              background-color: #333;
              color: #fff;
              text-align: center;
              padding: 10px 0;
            }

            .container {
              max-width: 800px;
              margin: 20px auto;
            }

            .essay-box {
              background-color: #fff;
              border: 1px solid #ccc;
              border-radius: 5px;
              padding: 20px;
              margin-bottom: 20px;
            }

            .essay-box h2 {
              font-size: 1.5rem;
              margin-bottom: 10px;
            }

            .essay-box p {
              font-size: 1rem;
              color: #333;
            }

            footer {
              background-color: #0a4275;
              color: #fff;
              text-align: center;
              padding: 20px 0;
            }

            footer a {
              color: #fff;
              text-decoration: none;
              margin: 0 10px;
              font-size: 1rem;
              transition: color 0.3s ease;
            }

            footer a:hover {
              color: #66bb6a;
            }

            .footer-container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 20px;
            }

            .footer-row {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }

            .footer-column {
              flex: 1;
              min-width: 250px;
              margin-bottom: 20px;
            }

            .footer-column h5 {
              margin-bottom: 15px;
            }

            .footer-column p, .footer-column ul, .footer-column table {
              margin-bottom: 10px;
            }

            .footer-column ul {
              list-style: none;
              padding: 0;
            }

            .footer-column ul li {
              margin-bottom: 10px;
            }

            .footer-column ul li span {
              margin-left: 10px;
            }

            .footer-column table {
              width: 100%;
            }

            .footer-column table td {
              padding: 5px;
            }

            .footer-social a {
              display: inline-block;
              margin-right: 10px;
            }

            .footer-social a i {
              font-size: 1.5rem;
              color: #fff;
            }

            .footer-social a:hover i {
              color: #66bb6a;
            }
          `,
        }}
      />
      <header>
        <h1>Explore Our Essays</h1>
      </header>
      <div className="container">
        {essays.map((essay) => (
          <div key={essay.id} className="essay-box">
            <h2>{essay.title}</h2>
            <p>{essay.content}</p>
          </div>
        ))}
      </div>
      <footer className="text-center text-white" style={{ backgroundColor: '#0a4275' }}>
        <div className="container p-4 pb-0">
          <section>
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">Order A Paper : </span>

              <button type="button" className="btn btn-outline-light btn-rounded" onClick={() => window.location.href = 'mailto:ericmwangi837@gmail.com'}>
                Write For Me
              </button>
            </p>
          </section>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">excellentessays.com</a>
        </div>
      </footer>
    </>
  );
};

export default EssaysPage;
