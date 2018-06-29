import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import errorMasthead from '../assets/images/error_masthead.jpg';

function Error404(props){
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
          height: 100vh;
          background-position: center;
          padding: 0 50px;
        }

        .error-wrapper h1 {
          padding-top: 50px;
          font-family: 'Bilbo Swash Caps', serif;
          font-size: 2rem;
          letter-spacing: 1px;
          margin: 0;
        }

        .error-wrapper h2 {
          font-weight: lighter;
        }

        @media (min-width: 1000px) {
          .error-wrapper h1 {
            font-size: 3rem;
            padding: 50px 50px 0;
          }

          .error-wrapper h2 {
            font-size: 2.5rem;
          }
        }
      `}</style>
      <div className="error-wrapper">
        <h1>"As you once did for the vacuous Rom, grant us eyes, grant us eyes. Plant eyes on our brains, to cleanse our beastly idiocy."</h1>
        <h2>Page Does Not Exist</h2>
        <h3><Link to="/">WAKE UP</Link></h3>
      </div>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
