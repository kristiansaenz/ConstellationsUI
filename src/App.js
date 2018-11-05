import React, { Component } from 'react';
import './App.css';
import Person from './Person/person.js';
import Navbar from './components/Navbar';
import Dropdownmenu from './components/Dropdownmenu';
import sky from './images/sky.jpg'
import Constellation from './components/Constellation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="Banner"> 
          <h1>Constellations</h1>
        </div>
        <Dropdownmenu/>
        {/* <Person/> */}
        <Constellation/>
        <Navbar/>
      </div>
    );
  }
}

export default App;
