import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {
  return(
    <div>
      <style jsx>{`
        .tap-wrapper {
        }
      `}</style>
      <div className="tap-wrapper">
        Tap works
      </div>
    </div>
  );
}

Tap.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired
};

export default Tap;
