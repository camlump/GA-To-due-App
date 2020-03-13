import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Classwork from './components/Classwork.jsx'
import Homework from './components/Homework.jsx';
import SingleHomework from './components/SingleHomework.jsx'
import Projects from './components/Projects.jsx'
import SingleProject from './components/SingleProject.jsx'
import Outcomes from './components/Outcomes.jsx'
import Deliverable from './components/Deliverable.jsx'
import SingleDeliverable from './components/SingleDeliverable'
import Jobtracker from './components/Jobtracker.jsx'
import SingleJobTracker from './components/SingleJobTracker'
import Meetup from './components/Meetup.jsx'
import SingleMeetup from './components/SingleMeetup'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://slack.com/">Slack</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.meetup.com/">Meetup</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          my Todos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/homework">Homework</a>
          <a class="dropdown-item" href="/projects">Projects</a>
          <a class="dropdown-item" href="/deliverables">Deliverables</a>
          <a class="dropdown-item" href="/jobtracker">Jobtracker</a>
          <a class="dropdown-item" href="/meetups">Meetups</a>

        </div>
      </li>
    </ul>
  </div>
</nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/classwork" component={ Classwork }/>
          <Route exact path="/homework" component={ Homework} />
          <Route exact path="/Hw/:homeworkId" component={ SingleHomework } />
          <Route exact path="/projects" component={ Projects } />
          <Route exact path="/PJ/:projectId" component={ SingleProject } />
          <Route exact path="/outcomes" component={ Outcomes} />
          <Route exact path="/deliverables" component={ Deliverable } />
          <Route exact path="/D/:deliverablesId" component={ SingleDeliverable} />
          <Route exact path="/jobtracker" component={ Jobtracker } />
          <Route exact path="/JT/:jobetrackerId" component={ SingleJobTracker } />
          <Route exact path="/meetups" component={ Meetup} />
          <Route exact path="/MU/:meetupId" component={ SingleMeetup } />
          

          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
