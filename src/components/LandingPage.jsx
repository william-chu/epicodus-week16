import React from 'react';
import landingPageMasthead from '../assets/images/header_masthead.jpg';

function LandingPage() {
  return (
    <div>
      <style jsx>{`
        .landing-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: radial-gradient(rgba(0,0,0,.2) 50%, rgba(0,0,0,.8)), url(${landingPageMasthead});
          background-size: cover;
          background-position: center;
          height: 100vh;
          color: white;
          font-weight: lighter;
          text-align: center;
        }

        .landing-wrapper h1 {
          margin: 0;
          font-family: 'Tangerine', serif;
          font-weight: lighter;
          font-size: 6rem;
        }

        .landing-wrapper p {
          font-size: 1.2rem;
        }

        .landing-wrapper .author-text {
          font-size: 1rem;
          padding-left: 200px;
        }

        @media (min-width: 1000px) {
          .landing-wrapper h1 {
            font-size: 8rem;
          }

          .landing-wrapper p {
            font-size: 1.8rem;
          }

          .landing-wrapper .author-text {
            font-size: 1.5rem;
            padding-left: 300px;
            font-family: serif;
          }
        }
      `}</style>
      <div className="landing-wrapper">
        <h1>LoveCraft</h1>
        <p><em>Fear the old blood, drink beer instead...</em></p>
        <p className="author-text">- Provost Willem</p>
      </div>
    </div>
  );
}

export default LandingPage;
