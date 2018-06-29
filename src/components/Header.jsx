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
        }

  
      `}</style>
      <div className="header-wrapper">
        <Link className="link" to='/'>HOME</Link>
        <Link className="link" to='/taplist'>TAPLIST</Link>
      </div>
    </div>
  );
}

export default Header;
