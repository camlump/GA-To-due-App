import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Classwork from './components/Classwork.jsx'
import Homework from './components/Homework.jsx';
import singleHomework from './components/SingleHomework'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/classwork" component={ Classwork }/>
          <Route exact path="/homework" component={ Homework} />
          <Route exact path="/:homeworkId" component={ singleHomework } />

          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
