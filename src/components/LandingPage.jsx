import React from 'react';
import landingPageMasthead from '../assets/images/header-masthead.jpg';

function LandingPage() {
  return (
    <div>
      <style jsx>{`
        .masthead {
          background: linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${landingPageMasthead});
          background-size: cover;
          background-position: center;
          padding: 200px 0;
          color: white;
          font-weight: lighter;
          text-align: center;
          box-shadow: 0 3px 6px gray;
        }

        .masthead h1 {
          font-family: cursive;
          font-weight: lighter;
          font-size: 3.5rem;
        }

        .masthead p {
          font-size: 1.2rem;
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
