import React from 'react';
import { Link } from 'react-router-dom';
import errorMasthead from '../assets/images/error_masthead.jpg';

function Error404(){
  return (
    <div>
      <style jsx>{`
        .error-wrapper{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          background: linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${errorMasthead});
          background-size: cover;
          background-position: center;
          height: 100vh;
          min-height: 350px;
          padding: 0 50px;
        }

        .error-wrapper h1 {
          font-family: 'Bilbo Swash Caps', serif;
          font-size: 4rem;
          letter-spacing: 1px;
          max-width: 900px;
          margin: 0;
          }

        .error-wrapper h2, .error-wrapper h3 {
          font-weight: lighter;
          }

        @media (min-width: 1000px) {
          .error-wrapper h1 {
            font-size: 5.6rem;
          }

          .error-wrapper h2, .error-wrapper h3 {
            font-size: 3.6rem;
          }
        }
      `}</style>
      <div className="error-wrapper">
        <div className="error-wrapper-content"></div>
        <h3>This page does not exist...</h3>
        <h1>"As you once did for the vacuous Rom, grant us eyes, grant us eyes. Plant eyes on our brains, to cleanse our beastly idiocy."</h1>
        <h2><Link to="/">WAKE UP</Link></h2>
      </div>
    </div>
  );
}

export default Error404;
