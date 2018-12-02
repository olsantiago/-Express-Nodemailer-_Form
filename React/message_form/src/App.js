import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Contact from './components/contact'


class App extends Component {
  render() {
    return (
    <div className='App'>
    <div className='body-part'>
      <Contact/>
    </div>
    </div>

    );
  }
}



export default App;
