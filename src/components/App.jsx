import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import TapList from './TapList';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Tangerine');
        
        body, html {
          margin: 0;
          height: 100%;
        }

        .app-wrapper {
          font-family: sans-serif;
          background-color: #0c0c0c;
        }

        a {
          color: white;
          text-decoration: none;
          font-weight: lighter;
          letter-spacing: 2px;
        }
      `}</style>
      <div className="app-wrapper">
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/taplist' component={TapList} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
