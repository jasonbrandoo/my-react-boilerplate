import React from 'react';
import { hot } from 'react-hot-loader';
import Navbar from './Navbar';
import './App.css';

const App = () => (
  <React.Fragment>
    <Navbar />
    <div className="container">
      <h1 className="heading">My React Boilerplate</h1>
    </div>
  </React.Fragment>
);

export default hot(module)(App);
