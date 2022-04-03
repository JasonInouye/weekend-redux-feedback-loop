import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';

//COMPONENTS
import FeelingComponent from '../FeelingComponent/FeelingComponent';
import UnderComponent from '../UnderComponent/UnderComponent';
import SupportComponent from '../SupportComponent/SupportComponent';
import CommentComponent from '../CommentComponent/CommentComponent';
import ReviewComponent from '../ReviewComponent/ReviewComponent';
import FeedbackComponent from '../FeedbackComponent/FeedbackComponent';
import { Typography } from '@material-ui/core';

import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  const getFeedback = () => {
    axios.get('/api/admin')
    .then(response => {
      console.log(response.data);
      dispatch({ type: 'SET_FEEDBACK_LIST', payload: response.data })
    })
    .catch(err => {
      console.log( 'error in getting feedback', err);
    })
  };

  useEffect(() => {
    console.log('in useEffect');
    getFeedback();
  }, []);





  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Typography
            variant="h1"
          >
            Feedback!
          </Typography>
          <Typography
            variant="h3"
          >
            Don't forget it!
          </Typography>
        </header>
        <div className="container">
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
          <Route path="/admin">
            <FeedbackComponent />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
