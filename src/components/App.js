import React from 'react';
import Navbar from './Navbar';
import { container, heading, bgimg } from './App.css';

const App = () => (
  <React.Fragment>
    <Navbar />
    <div className={container}>
      <h1 className={heading}>My React Boilerplate</h1>
    </div>
  </React.Fragment>
);

export default App;