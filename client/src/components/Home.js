import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';



export default class Home extends Component {
    render() {
        return (
            <div className="home container">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-lg">
                        <Link  to={"/classwork"} style={{ textDecoration: 'none'}}><h1 className="Home">Classwork</h1> <img src="https://i.imgur.com/KlPcTk1.jpg" className="img-fluid" alt="Responsive image"></img> </Link>
                        </div>
                        <div className="col-lg">
                        <Link  to={"/Outcomes"} style={{ textDecoration: 'none'}}><h1 className="Home">Outcomes</h1> <img src="https://i.imgur.com/K8Wd8Hm.jpg" className="img-fluid" alt="Responsive image"></img> </Link>
                        </div>
                        <div className="col-lg">
                        <Link  to={"/Meetups"} style={{ textDecoration: 'none'}}><h1 className="Home">Meetups</h1> <img src="https://i.imgur.com/fDnrGcL.jpg" className="img-fluid" alt="Responsive image"></img> </Link>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <hr id="sectionBreaks"></hr>
            <div id="middleContent" className="container-fluid">
            {/* <img src="" class="img-fluid" alt="Responsive image"></img> */}
            <div className="media">
                    <img src="https://i.imgur.com/8ku6RTa.png" className="mr-3" alt="Linkedin png"/>
                    <div class="media-body">
                        <h5 className="mt-0">Linkedin</h5>
                        Linkedin is a Professional network. that allows users to connect and strengthen profressional relationships
                        using Linkedin can help lead you to finding a the right internship, job, strengthen Professional relationships
                        and build new ones. Linkedin also allows user to showcase their Professional skills as learn new skills to suceed 
                        in their careers.
                    </div>
                    </div>
                   </div>
                   <br></br>
                    <br></br>
                    <br></br>
                   <hr id="sectionBreaks"></hr>
            <div id="homeContent" className="row">
                    <div class="col">
                        <div>
                           <h3>About Slack</h3>
                        </div>
                     <p>Slack is a versatile resource. That allows there users to communicate over various channels. At General Assembly
                         it helps students stay in contact with eachother, share resources, ask for help and also a way to reach out 
                         to there instructors 
                     </p>
                    </div>
                    <div class="col">
                        <h3>About Meetup</h3>
                    <p>Meetup is a social networking site that allows users to find and join groups related to their 
                        own personal interest. this allows people to organize in-person meetups around the users area. this is 
                        beneficial for General Assembly students it a valuable resource for networking and learning beyond the 
                        classroom.
                    </p>
                    </div>
                </div>
                <br></br>
                <br></br>
                <hr id="sectionBreaks"></hr>
             
            </div>
           
            
            
        )
    }
}
