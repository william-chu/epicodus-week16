import React from 'react';
import Tap from './Tap';
import TAPLIST from '../data/data';

function TapList() {
  return(
    <div>
      <style jsx>{`
        .taplist-wrapper {
          padding: 50px 25px;
          max-width: 900px;
          display: block;
          margin: 0 auto;
        }

        .taplist-grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 20px;
        }

        @media (min-width: 600px) {
          .taplist-grid {
            grid-template-columns: 1fr 1fr;
          }

        @media (min-width: 800px) {
          .taplist-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="taplist-wrapper">
        <div className="taplist-grid">
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
    </div>
  );
}

export default TapList;
