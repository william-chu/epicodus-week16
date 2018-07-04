import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import textureConcrete from '../assets/images/concrete_seamless.png';

function NewTapForm(props) {
  let img = null;
  let name = null;
  let price = null;
  let brewer = null;
  let description = null;
  let remaining = null;
  let abv = null;

  function handleNewTapFormSubmission(e) {
    e.preventDefault();
    props.onNewTapCreation({img: img.value, name: name.value, price: price.value, brewer: brewer.value, description: description.value, remaining: remaining.value, abv: abv.value, id: v4()});
    img.value = '';
    name.value = '';
    price.value = '';
    brewer.value = '';
    description.value = '';
    remaining.value = '';
    abv.value = '';
  }

  return (
    <div>
      <style jsx>{`
        .newtapform-wrapper{
          color: #2b2b2b;
          background: linear-gradient(to bottom, rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${textureConcrete});
          border-radius: 5px;
          padding: 25px 25px;
        }

        .newtapform-wrapper h1 {
          font-family: sans-serif;
          font-weight: lighter;
          text-align: center;
          font-size: 3rem;
          letter-spacing: 2px;
          margin: 0;
        }

        .newtapform-wrapper form {
          display: grid;
          grid-template-columns: 1fr;
          align-items: start;
          padding: 10px;
        }

        .form-section {
          display: flex;
          flex-direction: column;
        }

        .form-section input, .form-section button {
          margin: 5px;
          padding: 10px;
          border-radius: 5px;
          font-size: 1rem;
        }

        .form-section button {
          background-color: #2b2b2b;
          border: none;
          color: white;
          width: 150px;
          display: block;
          margin: 5px auto;
        }

        .form-section button:hover {
          opacity: .7;
        }

        @media (min-width: 800px) {
          .newtapform-wrapper form {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `}</style>
      <div className="newtapform-wrapper">
        <h1>+ NEW TAP</h1>
        <form onSubmit={handleNewTapFormSubmission}>
          <div className="form-section">
            <input
              type='text'
              id='img'
              placeholder='Select an image url'
              ref={(input) => {img = input;}}
            />
          </div>
          <div className="form-section">
            <input
              type='text'
              id='name'
              placeholder='Enter beer name'
              ref={(input) => {name = input;}} />
            <input
              id='price'
              placeholder='Enter price per pint'
              ref={(input) => {price = input;}} />
            <input
              id='brewer'
              placeholder='Enter brewer name'
              ref={(input) => {brewer = input;}} />
            <input
              id='description'
              placeholder='Enter beer description'
              ref={(input) => {description = input;}} />
          </div>
          <div className="form-section">
            <input
              id='remaining'
              placeholder='Enter pints in keg'
              ref={(input) => {remaining = input;}} />
            <input
              id='abv'
              placeholder='Enter abv'
              ref={(input) => {abv = input;}} />
            <button type='submit'>ADD BEER</button>
          </div>
        </form>
      </div>
    </div>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;
