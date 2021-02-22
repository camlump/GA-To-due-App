import React from 'react';
import { Link} from 'react-router-dom'
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
import Footer from './components/Footer.jsx'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/"><img src="https://i.imgur.com/EuAjXUK.png" className="img-fluid" alt="Responsive image"></img> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://slack.com/" target="_blank">Slack.com</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.meetup.com/" target="_blank">Meetup.com</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           To-dos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to="/homework">Homework</Link>
         <Link to="/project"  className="dropdown-item">Projects</Link>
          <Link className="dropdown-item" to="/deliverables">Deliverables</Link>
          <Link className="dropdown-item" to="/jobtracker">Jobtracker</Link>
          <Link className="dropdown-item" to="/meetups">Meetups</Link>

        </div>
      </li>
    </ul>
  </div>
</nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/classwork" component={ Classwork }/>
          <Route exact path="/homework" component={ Homework} />
          <Route exact path="/homework/:homeworkId" component={ SingleHomework } />
          <Route exact path="/project" component={ Projects } />
          <Route exact path="/project/:projectId" component={ SingleProject } />
          <Route exact path="/outcomes" component={ Outcomes} />
          <Route exact path="/deliverables" component={ Deliverable } />
          <Route exact path="/deliverables/:deliverableId" component={ SingleDeliverable} />
          <Route exact path="/jobtracker" component={ Jobtracker } />
          <Route exact path="/Jobtracker/:jobtrackerId" component={ SingleJobTracker } />
          <Route exact path="/meetups" component={ Meetup} />
          <Route exact path="/meetup/:meetupId" component={ SingleMeetup } />
          

         
        </Switch>
     
      </Router>
          {/* <div className="footer">
            <div className="footerbox1">
              <div className="row">
                <div className="col footer">
                <h2>Resources</h2>
                        <ul>
                            <li><a href="">General Assembly</a></li><hr/>
                            <li><a href="">Linkedin</a></li><hr/>
                            <li><a href="">Slack</a></li><hr/>
                            <li><a href="">Meetup</a></li><hr/>
                            <li><a href="">StackOverflow</a></li>
                        </ul>

                </div>
                 
                    
                    <div className="col footer">
                        <h2>Education</h2>
                        <ul>
                            <li><a href="">Software Engineering</a></li><hr/>
                            <li><a href="">UX Design Immersive</a></li><hr/>
                            <li><a href="">Data Science Immersive</a></li><hr/>
                            <li><a href="">Front-End Web Development</a></li><hr/>
                            <li><a href="">Product Management</a></li><hr/>
                            <li><a href="">Data Analytics</a></li>
                            
                        </ul>


              </div>

            </div>

          </div>
        </div> */}
                

                   
                
       
    </div>
  );
}

export default App;
