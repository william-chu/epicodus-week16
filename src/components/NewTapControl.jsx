import React from 'react';
import NewTapForm from './NewTapForm';
import PropTypes from 'prop-types';


function NewTapControl(props) {
  return (
    <div>
      <style jsx>{`
        .newtapcontrol-wrapper{
          padding: 50px 25px;
          max-width: 900px;
          height: 100vh;
          display: block;
          margin: 0 auto;
          min-height: 350px;
        }
      `}</style>
      <div className="newtapcontrol-wrapper">
        <NewTapForm onNewTapCreation={props.onNewTapCreation}/>
      </div>
    </div>
  );
}

NewTapControl.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapControl;
