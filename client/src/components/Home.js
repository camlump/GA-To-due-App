import React, { Component } from 'react'
import { Link } from 'react-router-dom'


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
            <div id="middleContent" className="container-fluid">
            {/* <img src="" class="img-fluid" alt="Responsive image"></img> */}
            <div className="media">
                    <img src="" className="mr-3" alt="..."/>
                    <div class="media-body">
                        <h5 className="mt-0">Linkedin</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                    </div>
                    <div class="media">
                    <img src="..." className="mr-3" alt="..."/>
                    <div class="media-body">
                        <h5 className="mt-0">Media heading</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                    </div>
             
                      
                    

           
            </div>
            <div id="homeContent" className="row">
                    <div class="col">
                        <div>
                           <h2>About Slack</h2>
                        </div>
                     <p>Slack is a versatile resource. that allow there users to communicate over various channels. At General Assembly
                         it helps students stay in contact with eachother, share resources, ask for help and also a way to reach out 
                         to there instructors 
                     </p>
                    </div>
                    <div class="col">
                        <h2>About Meetup</h2>
                    <p>Meetup is a social networking site that allows users to find and join groups related to their 
                        own personal interest. this allows people to organize in-person meetups around the users area. this is 
                        beneficial for General Assembly students it a valuable resource for networking and learning beyond the 
                        classroom.
                    </p>
                    </div>
                </div>
            </div>
            
            
        )
    }
}
