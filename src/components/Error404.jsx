import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import errorMasthead from '../assets/images/error_masthead.jpg';
import errorImg from '../assets/images/error_img.png';

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
          position: relative;
          overflow: hidden;
        }

        .error-wrapper h1 {
          padding-top: 50px;
          font-family: 'Bilbo Swash Caps', serif;
          font-size: 2rem;
          letter-spacing: 1px;
          margin: 0;
          z-index: 5;
        }

        .error-wrapper h2 {
          font-weight: lighter;
          z-index: 5;
        }

        .error-wrapper img {
          position: absolute;
          right: -250px;
          bottom: -75px;
          overflow: hidden;
        }

        @media (min-width: 1000px) {
          .error-wrapper h1 {
            font-size: 2.6rem;
            padding: 50px 100px 0;
          }

          .error-wrapper h2 {
            font-size: 2rem;
          }
        }
      `}</style>
      <div className="error-wrapper">
        <h1>"As you once did for the vacuous Rom, grant us eyes, grant us eyes. Plant eyes on our brains, to cleanse our beastly idiocy."</h1>
        <h2>Page Does Not Exist</h2>
        <h2><Link to="/">WAKE UP</Link></h2>
        <img src={errorImg} />
      </div>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
