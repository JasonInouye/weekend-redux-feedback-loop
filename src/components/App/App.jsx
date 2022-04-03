import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

//COMPONENTS
import FeelingComponent from '../FeelingComponent/FeelingComponent';
import UnderComponent from '../UnderComponent/UnderComponent';
import SupportComponent from '../SupportComponent/SupportComponent';
import CommentComponent from '../CommentComponent/CommentComponent';
import ReviewComponent from '../ReviewComponent/ReviewComponent';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route path="/" exact>
          <FeelingComponent />
        </Route>
        <Route path="/understanding">
          <UnderComponent />
        </Route>
        <Route path="/support">
          <SupportComponent />
        </Route>
        <Route path="/comment">
          <CommentComponent />
        </Route>
        <Route path="/review">
          <ReviewComponent />
        </Route>
      </div>
    </Router>
  );
}

export default App;
