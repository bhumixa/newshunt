
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import Home from './components/Home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import ContactUs from './components/ContactUs';

export default class App extends Component {
  name = "bhumi"
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="general" country="in" category='general' />}> </Route>
            <Route exact path="home" element={<News key="general" country="in" category='general' />} />
            <Route exact path="business" element={<News key="business" country="in" category='business' />} />
            <Route exact path="entertainment" element={<News key="entertainment" country="in" category='entertainment' />} />
            <Route exact path="health" element={<News key="health" country="in" category='health' />} />
            <Route exact path="science" element={<News key="science" country="in" category='science' />} />
            <Route exact path="sports" element={<News key="sports" country="in" category='sports' />} />
            <Route exact path="technology" element={<News key="technology" country="in" category='technology' />} />
          </Routes>
        </BrowserRouter>

        <div className="container">

        </div>
      </>
    )
  }
}

