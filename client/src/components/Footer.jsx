import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footerBox1">
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
                

                  
               
            </div>
        )
    }
}
