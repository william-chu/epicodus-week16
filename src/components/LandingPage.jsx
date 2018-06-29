import React from 'react';
import landingPageMasthead from '../assets/images/header-masthead.jpg';

function LandingPage() {
  return (
    <div>
      <style jsx>{`
        .masthead {
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

        .masthead h1 {
          margin: 0;
          font-family: cursive;
          font-weight: lighter;
          font-size: 3.5rem;
        }

        .masthead p {
          font-size: 1.2rem;
        }

        @media (min-width: 1000px) {
          .masthead h1 {
            font-size: 5.5rem;
          }

          .masthead p {
            font-size: 2rem;
          }
        }
      `}</style>
      <div className="masthead">
        <h1>Bloodborne Brewery</h1>
        <p><em>Fear the old blood, drink beer instead...</em></p>
      </div>
    </div>
  );
}

export default LandingPage;
