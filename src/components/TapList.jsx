import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapList(props) {
  return(
    <div>
      <style jsx>{`
        .taplist-wrapper {
          padding: 75px 25px 50px;
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
          {props.tapList.map((keg) =>
            <Tap
              img={keg.img}
              name={keg.name}
              brewer={keg.brewer}
              description={keg.description}
              abv={keg.abv}
              price={keg.price}
              remaining={keg.remaining}
              key={keg.id} />
          )}
        </div>
      </div>
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
};

export default TapList;
