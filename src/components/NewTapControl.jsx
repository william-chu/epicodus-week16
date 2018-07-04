import React from 'react';
import NewTapForm from './NewTapForm';
import PropTypes from 'prop-types';


function NewTapControl(props) {
  return (
    <div>
      <style jsx>{`
        .newtap-wrapper{
          padding: 50px 25px;
          max-width: 900px;
          height: 100vh;
          display: block;
          margin: 0 auto;
        }
      `}</style>
      <div className="newtap-wrapper">
        <NewTapForm onNewTapCreation={this.props.onNewTapCreation}/>
      </div>
    </div>
  );
}

NewTap.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTap;
