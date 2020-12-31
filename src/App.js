import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/';
import './App.scss';

export class App extends Component {

   render() {
      return (
         <div>
            <Navbar />
            <TourList />
         </div>
      )
   }
}

export default App;
