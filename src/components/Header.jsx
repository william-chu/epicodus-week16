import React from 'react';
import headerMasthead from '../assets/images/header-masthead.jpg';

function Header() {
  return (
    <div>
      <style jsx>{`
        .header-masthead {
          background: linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${headerMasthead});
          background-size: cover;
          background-position: center;
          padding: 200px 0;
          color: white;
          font-weight: lighter;
          text-align: center;
          box-shadow: 0 3px 6px gray;
        }

        .header-masthead h1 {
          font-family: cursive;
          font-weight: lighter;
          font-size: 3.5rem;
        }

        .header-masthead p {
          font-size: 1.2rem;
        }
      `}</style>
      <div className="header-masthead">
        <h1>Bloodborne Brewery</h1>
        <p><em>Fear the old blood, drink beer instead...</em></p>
      </div>
    </div>
  );
}

export default Header;
