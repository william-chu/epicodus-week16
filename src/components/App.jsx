import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header'
import Error404 from './Error404';

function App(){
  return (
    <div>
      <style jsx global>{`
        .app-wrapper {
          font-family: sans-serif;
        }
      `}</style>
      <div className="app-wrapper">
        <Header />
        <Switch>
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
