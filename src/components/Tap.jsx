import React from 'react';
import PropTypes from 'prop-types';
import textureConcrete from '../assets/images/concrete_seamless.png';

function Tap(props) {
  return(
    <div>
      <style jsx>{`
        .tap-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          grid-gap: 5px;
          margin: 25px 50px;
          padding: 10px;
          color: #2b2b2b;
          background: linear-gradient(to bottom, rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${textureConcrete});
          border-radius: 5px;
        }

        @media (min-width: 800px) {
          .tap-wrapper {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        .tap-wrapper h1 {
          text-align: center;
          font-family: serif;
          font-size: 1.5rem;
          border-bottom: 2px dotted #2b2b2b;
          padding-bottom: 20px;
          font-weight: lighter;
        }

        .tap-wrapper h2, .tap-wrapper h3, .tap-wrapper p {
          font-weight: lighter;
          padding-left: 30px;
        }

        .tap-wrapper img {
          width: 100%;
          border-radius: 5px;
          box-shadow: 0 0 10px black;
        }
      `}</style>
      <div className="tap-wrapper">
        <img src={props.img} />
        <div>
          <h1>{props.name} • ${props.price}</h1>
          <h3>{props.brewer}</h3>
          <p>{props.description}</p>
        </div>
        <div>
          <h2>{props.abv} ABV</h2>
          <h3>Pints Remaining: {props.remaining}</h3>
        </div>
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
