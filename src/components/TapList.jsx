import React from 'react';
import Tap from './Tap';
import TAPLIST from '../data/data';

function TapList() {
  return(
    <div>
      <style jsx>{`
        .taplist-wrapper {
          padding-top: 50px;
        }
      `}</style>
      <div className="taplist-wrapper">
        {TAPLIST.map((keg, index) =>
          <Tap
            img={keg.img}
            name={keg.name}
            brewer={keg.brewer}
            description={keg.description}
            abv={keg.abv}
            price={keg.price}
            remaining={keg.remaining}
            key={index} />
        )}
      </div>
    </div>
  );
}

export default TapList;
