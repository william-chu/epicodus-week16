import React from 'react';
import NewTapForm from './NewTapForm';
import PropTypes from 'prop-types';


function NewTapControl(props) {
  return (
    <div>
      <style jsx>{`
        .newtapcontrol-wrapper{
          height: 100%;
          padding: 75px 25px 50px;
          max-width: 900px;
          display: block;
          margin: 0 auto;
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
