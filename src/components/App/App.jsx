import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';

//COMPONENTS
import FeelingComponent from '../FeelingComponent/FeelingComponent';
import UnderComponent from '../UnderComponent/UnderComponent';
import SupportComponent from '../SupportComponent/SupportComponent';
import CommentComponent from '../CommentComponent/CommentComponent';
import ReviewComponent from '../ReviewComponent/ReviewComponent';
import AdminComponent from '../AdminComponent/AdminComponent';
import { Typography } from '@material-ui/core';
import axios from 'axios';

function App() {

  const dispatch = useDisoatch();

  const getFeedback = () => {
    axios.
  };

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
            <AdminComponent />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
