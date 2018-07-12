import React from 'react';
import PropTypes from 'prop-types';

import textureConcrete from '../assets/images/concrete_seamless.png';
import kegUnspecified from '../assets/images/keg_unspecified.jpg';
import kegBell from '../assets/images/keg_bellringer.png';
import kegCelestial from '../assets/images/keg_celestial.png';
import kegCainhurst from '../assets/images/keg_cainhurst.png';
import kegCrow from '../assets/images/keg_crow.png';
import kegDog from '../assets/images/keg_dog.png';
import kegHuntsman from '../assets/images/keg_huntsman.png';
import kegMadOne from '../assets/images/keg_madone.png';
import kegSpider from '../assets/images/keg_spider.png';

class EditTapForm extends React.Component {

  constructor(props){
    super(props);
    this.tapId = this.props.selectedTapId;
    this.state = {
      img: this.props.tapList[this.tapId].img
    };
    this.name = this.props.tapList[this.tapId].name;
    this.price = this.props.tapList[this.tapId].price;
    this.brewer = this.props.tapList[this.tapId].brewer;
    this.description = this.props.tapList[this.tapId].description;
    this.remaining = this.props.tapList[this.tapId].remaining;
    this.abv = this.props.tapList[this.tapId].abv;
    this.handleImageSelect = this.handleImageSelect.bind(this);
    this.handleEditTapFormSubmission = this.handleEditTapFormSubmission.bind(this);
  }

  handleImageSelect(e) {
    e.preventDefault();
    if (e.target.value === '') {
      this.setState({img: kegUnspecified});
    } else {
      this.setState({img: e.target.value});
    }
  }

  handleEditTapFormSubmission(e) {
    e.preventDefault();
    this.props.onEditTap(this.tapId, {img: this.state.img, name: this.name.value, price: parseInt(this.price.value), brewer: this.brewer.value, description: this.description.value, remaining: parseInt(this.remaining.value), abv: parseFloat(this.abv.value)});
    this.props.path.history.push('/taplist');
  }

  render() {
    return (
      <div>
        <style jsx>{`
          .edittapform-container {
            height: 100%;
            padding: 75px 25px 50px;
            max-width: 900px;
            display: block;
            margin: 0 auto;
          }

          .edittapform-wrapper{
            color: #2b2b2b;
            background: linear-gradient(to bottom, rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${textureConcrete});
            border-radius: 5px;
            padding: 20px 10px;
          }

          .edittapform-wrapper h1 {
            font-family: sans-serif;
            font-weight: lighter;
            text-align: center;
            font-size: 3rem;
            letter-spacing: 2px;
            margin: 0;
          }

          .edittapform-wrapper form {
            max-width: 725px;
            display: block;
            margin: auto;
          }

          .edittapform-wrapper select {
            width: 100%;
            max-width: 300px;
            display: block;
            margin: 20px auto;
            font-size: 1em;
            height: 2.5em;
            background: white;
            outline: none;
            box-shadow: none;
          }

          .edittapform-wrapper img {
            display: block;
            margin: 20px auto;
            width: 100%;
            max-width: 270px;
            border-radius: 5px;
            box-shadow: 0 0 10px black;
          }

          .form-section-grid {
            display: grid;
            grid-template-columns: 1fr;
          }

          @media (min-width: 800px) {
            .form-section-grid {
              grid-template-columns: 1fr 1fr;
              align-items: center;
            }
          }

          .form-input-flex {
            display: flex;
            flex-direction: column;
          }

          .form-input-flex input {
            padding: 10px 10px;
            width: 96%;
            border: none;
            border-radius: 5px;
            font-size: 1.4rem;
            max-width: 290px;
            display: block;
            margin: 8px auto;
            outline: none;
            box-shadow: none;
          }

          .edittapform-wrapper button {
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

          .edittapform-wrapper button:hover {
            opacity: .7;
          }

        `}</style>
        <div className="edittapform-container">
          <div className="edittapform-wrapper">
            <h1>EDIT TAP</h1>
            <form onSubmit={this.handleEditTapFormSubmission}>
              <div className="form-section-grid">
                <div>
                  <select defaultValue={this.state.img} onChange={this.handleImageSelect} required>
                    <option value="">Select an image</option>
                    <option value={kegBell}>Bell Ringer</option>
                    <option value={kegCainhurst}>Cainhurst Spirit</option>
                    <option value={kegCelestial}>Celestial Emissary</option>
                    <option value={kegCrow}>Carrion Crow</option>
                    <option value={kegDog}>Rabid Dog</option>
                    <option value={kegHuntsman}>Huntsman</option>
                    <option value={kegMadOne}>Mad One</option>
                    <option value={kegSpider}>Nightmare Apostle</option>
                  </select>
                  <img src={this.state.img} />
                </div>
                <div className="form-input-flex">
                  <input
                    defaultValue={this.name}
                    type='text'
                    id='name'
                    placeholder='Enter beer name'
                    required
                    ref={(input) => {this.name = input;}} />
                  <input
                    defaultValue={this.brewer}
                    id='brewer'
                    placeholder='Enter brewer name'
                    required
                    ref={(input) => {this.brewer = input;}} />
                  <input
                    defaultValue={this.description}
                    id='description'
                    placeholder='Enter beer description'
                    required
                    ref={(input) => {this.description = input;}} />
                  <input
                    defaultValue={this.price}
                    id='price'
                    type="number"
                    min="1"
                    max="15"
                    placeholder='Enter price per pint'
                    required
                    ref={(input) => {this.price = input;}} />
                  <input
                    defaultValue={this.remaining}
                    id='remaining'
                    type="number"
                    min="1"
                    max="248"
                    placeholder='Enter pints in keg'
                    required
                    ref={(input) => {this.remaining = input;}} />
                  <input
                    defaultValue={this.abv}
                    id='abv'
                    type="number"
                    step=".1"
                    min="0.1"
                    max="70"
                    placeholder='Enter ABV'
                    required
                    ref={(input) => {this.abv = input;}} />
                </div>
              </div>
              <button type='submit'>EDIT BEER</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

EditTapForm.propTypes = {
  path: PropTypes.object.isRequired,
  selectedTapId: PropTypes.string.isRequired,
  tapList: PropTypes.object.isRequired,
  onEditTap: PropTypes.func.isRequired,
};

export default EditTapForm;
