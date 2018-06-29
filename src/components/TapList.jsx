import React from 'react';
import Tap from './Tap';

function TapList() {
  return(
    <div>
      <style jsx>{`
        .taplist-wrapper {

        }
      `}</style>
      <div className="taplist-wrapper">
        Taplist works
        <Tap />
      </div>
    </div>
  );
}

export default TapList;
