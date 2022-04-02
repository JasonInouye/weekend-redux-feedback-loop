import React from 'react';
import axios from 'axios';
import './App.css';

//COMPONENTS
import FeelingComponent from '../FeelingComponent/FeelingComponent';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <FeelingComponent />
    </div>
  );
}

export default App;