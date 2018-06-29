import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div>
      <style jsx>{`
        .header-wrapper {
          background-color: rgba(0,0,0,.7);
          display: flex;
          justify-content: space-around;
          padding: 10px 0;
          position: fixed;
          width: 100%;
          z-index: 10;
        }
      `}</style>
      <div className="header-wrapper">
        <Link to='/'>HOME</Link>
        <Link to='/taplist'>TAPLIST</Link>
        <Link to='/new-tap'>+ NEW TAP</Link>
      </div>
    </div>
  );
}

export default Header;
