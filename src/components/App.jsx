import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import TapList from './TapList';
import NewTap from './NewTap';
import Error404 from './Error404';

class App extends React.component {

  constructor(props) {
    super(props);
    this.state = {
      masterTapList: []
    };
  }

  render() {
    return (
      <div>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Tangerine');
          @import url('https://fonts.googleapis.com/css?family=Bilbo+Swash+Caps');

          body, html {
            margin: 0;
            width:100%;
            height: 100%;
          }

          .app-wrapper {
            font-family: sans-serif;
            background-color: #0c0c0c;
            color: white;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
          }

          a {
            color: white;
            text-decoration: none;
            letter-spacing: 2px;
          }

          a:hover {
            opacity: .7;
          }
        `}</style>
        <div className="app-wrapper">
          <Header />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/taplist' component={TapList} />
            <Route path='/new-tap' component={NewTap} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
