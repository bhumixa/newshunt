
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
// import Home from './components/Home';
// //import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
//import ContactUs from './components/ContactUs';

export default class App extends Component {
  name = "bhumi"
  render() {
    return (
      <>
        <NavBar />
        
        <div className="container">
          <Home country="in" category='business'/>
        </div>
      </>
    )
  }
}

