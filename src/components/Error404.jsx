import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){
  return (
    <div>
      <style jsx>{`
        .error-wrapper{
          padding: 50px 25px;
          max-width: 900px;
          display: block;
          margin: 0 auto;
        }

        .error-wrapper h1 {
          font-family: 'Tangerine', serif;
        }
      `}</style>
      <div className="error-wrapper">
        <h1>As you once did for the vacuous Rom, grant us eyes, grant us eyes. Plant eyes on our brains, to cleanse our beastly idiocy.</h1>
        <h2>The page {props.location.pathname} you are looking for does not exist!</h2>
        <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
      </div>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
