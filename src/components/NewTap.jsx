import React from 'react';
import NewTapForm from './NewTapForm';

function NewTap() {
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
        <NewTapForm/>
      </div>
    </div>
  );
}

export default NewTap;
