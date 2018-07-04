import React from 'react';
import textureConcrete from '../assets/images/concrete_seamless.png';

function NewTapForm() {
  return (
    <div>
      <style jsx>{`
        .newtapform-wrapper{
          color: #2b2b2b;
          background: linear-gradient(to bottom, rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${textureConcrete});
          border-radius: 5px;
          padding: 25px 25px;
        }

        .newtapform-wrapper form {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
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
        }

        @media (min-width: 800px) {
          .newtapform-wrapper form {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `}</style>
      <div className="newtapform-wrapper">
        <form>
          <div className="form-section">
           <input
             type='text'
             id='img'
             placeholder='Select an image'/>
           </div>
           <div className="form-section">
             <input
               type='text'
               id='name'
               placeholder='Enter beer name'/>
             <input
               id='price'
               placeholder='Enter price per pint' />
             <input
               id='description'
               placeholder='Enter beer description'/>
           </div>
           <div className="form-section">
             <input
                id='remaining'
                placeholder='Enter pints in keg' />
             <input
               id='abv'
               placeholder='Enter abv' />
             <button type='submit'>ADD BEER</button>
           </div>
       </form>
      </div>
    </div>
  );
}

export default NewTapForm;
