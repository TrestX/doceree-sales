import {HomePageCustomCard} from '../cards/cards';
import * as React from 'react';
import './homepagecard.css';
const HomePageCards = () => {
    return (
   <div className="custP" >
    <div className="p-grid">
        <div className="p-sm-12 p-md-12 p-lg-4">
        <HomePageCustomCard imagePath='assets/bargraph.png' title='Sales Manager' description='Lorem Ipsum has been the industry standard dummy text ever since the 1500s.' imgWidth='45px' clickHandler={() => { console.log('clicked'); }} />
        </div>
        <div className="p-sm-12 p-md-12 p-lg-4">
        <HomePageCustomCard imagePath='assets/adopa.png' title='AdOps Manager' description='Lorem Ipsum has been the industry standard dummy text ever since the 1500s.' imgWidth='45px' clickHandler={() => { console.log('clicked'); }} />
        </div>
        <div className="p-sm-12 p-md-12 p-lg-4">
        <HomePageCustomCard imagePath='assets/wallet.png' title='Finance Manager' description='Lorem Ipsum has been the industry standard dummy text ever since the 1500s.' imgWidth='45px' clickHandler={() => { console.log('clicked'); }} /> 
        </div>
    </div>
    </div>);
};

export default HomePageCards;