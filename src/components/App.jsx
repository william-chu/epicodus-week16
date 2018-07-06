import React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import TapList from './TapList';
import NewTapControl from './NewTapControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';

import kegHuntsman from '../assets/images/keg_huntsman.png';
import kegMadOne from '../assets/images/keg_madone.png';
import kegCelestial from '../assets/images/keg_celestial.png';
import kegCainhurst from '../assets/images/keg_cainhurst.png';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTapList: {
        '1' : {
          img: kegCainhurst,
          name: 'Cainhurst Cider',
          brewer: 'Silver Lady Orchard',
          description: 'Refreshingly dry cider',
          abv:  5.9,
          price: 6,
          remaining: 75,
        },
        '2' : {
          img: kegHuntsman,
          name: 'Huntsman Red',
          brewer: 'Yharnam Brewing',
          description: 'Full-bodied red ale',
          abv: 6.8,
          price: 7,
          remaining: 248,
        },
        '3' : {
          img: kegMadOne,
          name: 'The Mad One',
          brewer: 'Hemwick Hops',
          description: 'IPA that will drive you crazy',
          abv: 8,
          price: 7,
          remaining: 60,
        },
        '4' : {
          img: kegCelestial,
          name: 'Celestial Saison',
          brewer: 'Iosefka\'s Clinic',
          description: 'Spicy pale ale with fruit notes',
          abv: 4.7,
          price: 5,
          remaining: 124,
        }
      }
    };
    this.handleAddingNewTapToList = this.handleAddingNewTapToList.bind(this);
    // this.handleSellBeer = this.handleSellBeer.bind(this);
  }

  handleAddingNewTapToList(newTap) {
    let newTapId = v4();
    let newMasterTapList = Object.assign({}, this.state.masterTapList, {
      [newTapId]: newTap
    });
    this.setState({masterTapList: newMasterTapList});
  }

  // handleSellBeer() {
  //   let newPintsRemaining = this.state.masterTapList.slice();
  // }

  render() {
    return (
      <div>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Tangerine');
          @import url('https://fonts.googleapis.com/css?family=Bilbo+Swash+Caps');
          * {
            box-sizing: border-box;
          }

          body, html {
            margin: 0;
            width:100%;
            height: 100%;
            background-color: #0c0c0c;
          }

          .app-wrapper {
            font-family: sans-serif;
            color: white;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
          }

          .app-wrapper a {
            color: white;
            text-decoration: none;
            letter-spacing: 2px;
          }

          .app-wrapper a:hover {
            opacity: .7;
          }
        `}</style>
        <div className="app-wrapper">
          <Header />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/taplist' render={()=><TapList tapList={this.state.masterTapList} />} />
            <Route exact path='/new-tap' render={()=><NewTapControl onNewTapCreation={this.handleAddingNewTapToList} />} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
