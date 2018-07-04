import React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import TapList from './TapList';
import NewTapControl from './NewTapControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

import kegHuntsman from '../assets/images/keg_huntsman.png';
import kegMadOne from '../assets/images/keg_madone.png';
import kegCelestial from '../assets/images/keg_celestial.png';
import kegCainhurst from '../assets/images/keg_cainhurst.png';

class App extends React.component {

  constructor(props) {
    super(props);
    this.state = {
      masterTapList: [
        {
          img: kegHuntsman,
          name: 'Huntsman Red',
          brewer: 'Yharnam Brewing',
          description: 'Full-bodied red ale',
          abv: '6.8%',
          price: '7',
          remaining: '20'
        },
        {
          img: kegMadOne,
          name: 'The Mad One',
          brewer: 'Hemwick Hops',
          description: 'Double IPA that will drive you crazy',
          abv: '8%',
          price: '7',
          remaining: '60'
        },
        {
          img: kegCelestial,
          name: 'Celestial Saison',
          brewer: 'Iosefka\'s Clinic',
          description: 'Spicy pale ale with fruit notes',
          abv: '4.7%',
          price: '5',
          remaining: '65'
        },
        {
          img: kegCainhurst,
          name: 'Cainhurst Cider',
          brewer: 'Silver Lady Orchard',
          description: 'A refreshingly dry cider',
          abv:  '5.9%',
          price: '6',
          remaining: '75'
        }
      ]
    };
    this.handleAddingNewTapToList = this.handleAddingNewTapToList.bind(this);
  }

  handleAddingNewTapToList(newTap) {
    let newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.push(newTap);
    this.setState({masterTapList: newMasterTapList});
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
            <Route path='/taplist' render={()=><TapList tapList={this.state.masterTapList} />} />
            <Route path='/new-tap' render={()=><NewTapControl onNewTapCreation={this.handleAddingNewTapToList} />} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
