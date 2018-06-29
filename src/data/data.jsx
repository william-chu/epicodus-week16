import kegHuntsman from '../assets/images/keg_huntsman.png';
import kegMadOne from '../assets/images/keg_madone.png';
import kegCelestial from '../assets/images/keg_celestial.png';
import kegCainhurst from '../assets/images/keg_cainhurst.png';

const TAPLIST = [
  {
    img: kegHuntsman,
    name: 'Huntsman IPA',
    brewer: 'Yharnam Brewing',
    description: 'Full-bodied IPA with ample hops',
    abv: '6.8%',
    price: '7',
    remaining: '20'
  },
  {
    img: kegMadOne,
    name: 'Mad One IIPA',
    brewer: 'Hemwick Hops',
    description: 'Double IPA with a kick',
    abv: '8%',
    price: '7',
    remaining: '60'
  },
  {
    img: kegCelestial,
    name: 'Celestial Saison',
    brewer: 'Iosefka\'s Clinic',
    description: 'Spicy Pale Ale',
    abv: '4.7%',
    price: '5',
    remaining: '65'
  },
  {
    img: kegCainhurst,
    name: 'Cainhurst Cider',
    brewer: 'Silver Lady Orchard',
    description: 'Refreshing Dry Cider',
    abv:  '5.9%',
    price: '6',
    remaining: '75'
  }
];

export default TAPLIST;
