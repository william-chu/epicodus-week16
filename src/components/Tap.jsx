import React from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import textureConcrete from '../assets/images/concrete_seamless.png';

function Tap(props) {
  let percentRemaining = parseInt((props.remaining/248)*100);
  let progressBarDisplay = <ProgressBar bsStyle="danger" now={percentRemaining} label={`${percentRemaining}%`}/>;
  let kegWarning = null;
  let tapStatus = .3;
  let buttonStatus = null;

  if (props.remaining === 0) {
    progressBarDisplay = null;
    kegWarning = 'REPLACE KEG';
    tapStatus = .7;
    buttonStatus = 'hide';
  }

  function handleSellBeerClick() {
    props.onSellBeer(props.tapId);
  }

  function handleDeleteTapClick() {
    if(window.confirm('Are you sure you want to remove this tap?')) {
      props.onDeleteTap(props.tapId);
    }
  }

  return(
    <div>
      <style jsx>{`
        .hide {
          visibility: hidden;
        }

        .tap-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          padding: 10px;
          color: #2b2b2b;
          background: linear-gradient(to bottom, rgba(0,0,0,${tapStatus}),rgba(0,0,0,${tapStatus})), url(${textureConcrete});
          border-radius: 5px;
        }

        .tap-wrapper h1 {
          text-align: center;
          font-family: 'Tangerine', serif;
          border-bottom: 1px dotted #808284;
          font-size: 5rem;
          padding-bottom: 20px;
        }

        .tap-wrapper h2, .tap-wrapper h3, .tap-wrapper h4, .tap-wrapper h5, .tap-wrapper p {
          text-align: center;
        }

        .tap-wrapper h4, .tap-wrapper h3, .tap-wrapper p {
          font-weight: lighter;
        }

        .tap-wrapper h5 {
          color: #d9534d;
          font-size: 3rem;
          font-weight: bold;
        }

        .tap-wrapper p {
          padding: 10px 15px 0;
          font-size: 1.8rem;
          font-family: serif;
        }

        .tap-wrapper img {
          width: 100%;
          border-radius: 5px;
          box-shadow: 0 0 10px black;
          max-width: 300px;
          display: block;
          margin: 0 auto 20px;
        }

        .tap-wrapper button {
          background-color: #2b2b2b;
          color: white;
          width: 150px;
          border: none;
          border-radius: 5px;
          font-size: 1.4rem;
          display: block;
          padding: 10px;
          margin: 20px auto 10px;
          outline: none;
        }

        .tap-wrapper .button-flex {
          display: flex;
          justify-content: space-around;
        }

        .tap-wrapper .delete-button {
          background-color: #d9534d;
          width: 30px;
          display: inline;
          padding: 5px;
          margin: auto;

        }

        .tap-wrapper .edit-button {
          width: 60px;
          display: inline;
          padding: 5px;
          margin: auto;
        }

        .tap-wrapper button:hover {
          opacity: .7;
        }

        .tap-wrapper .delete-button:hover {
          opacity: 1;
          background-color: #c14b47;
        }

        .tap-wrapper .keg-stats {
          margin-top : 25px;
        }

        @media (min-width: 800px) {
          .tap-wrapper {
            grid-template-columns: 1fr 1fr 1fr;
          }

          .tap-wrapper h1 {
            border-bottom: none;
          }

          .tap-wrapper img {
            margin: auto;
          }

          .left-border {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding-left: 10px;
            border-left: 1px dashed #808284;
            height: 100%;
          }
        }
      `}</style>
      <div className="tap-wrapper">
        <img src={props.img} />
        <div>
          <h1>{props.name}<br/>${props.price}</h1>
          <h3>- {props.brewer} -</h3>
          <p><em>{props.description}</em></p>
        </div>
        <div className="left-border">
          <div className="keg-stats">
            {progressBarDisplay}
            <h5>{kegWarning}</h5>
            <h4>Pints Remaining: {props.remaining}</h4>
          </div>
          <button className={buttonStatus} onClick={handleSellBeerClick}>SELL BEER</button>
          <h2>{props.abv}% ABV</h2>
          <div className="button-flex">
            <button className="edit-button">
              <Link to={{
                pathname: '/edit-tap',
                state: { tapId: 2 }
              }}>EDIT
              </Link>
            </button>
            <button className="delete-button" onClick={handleDeleteTapClick}>X</button>
          </div>
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
  abv: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  tapId: PropTypes.string.isRequired,
  onSellBeer: PropTypes.func,
  onDeleteTap: PropTypes.func,
};

export default Tap;
