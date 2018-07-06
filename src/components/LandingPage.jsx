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
          min-height: 350px;
        }

        .landing-wrapper h1 {
          margin: 0;
          font-family: 'Tangerine', serif;
          font-weight: lighter;
          font-size: 12rem;
        }

        .landing-wrapper p {
          font-size: 1.8rem;
        }

        .landing-wrapper .author-text {
          font-size: 1.8rem;
          padding-left: 175px;
          font-family: serif;
        }

        @media (min-width: 600px) {
          .landing-wrapper h1 {
            font-size: 17rem;
          }

          .landing-wrapper p {
            font-size: 2.5rem;
          }

          .landing-wrapper .author-text {
            font-size: 2.2rem;
            padding-left: 250px;
          }
        }

        @media (min-width: 1200px) {
          .landing-wrapper h1 {
            font-size: 20rem;
          }

          .landing-wrapper p {
            font-size: 3rem;
          }

          .landing-wrapper .author-text {
            font-size: 2.5rem;
            padding-left: 250px;
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
