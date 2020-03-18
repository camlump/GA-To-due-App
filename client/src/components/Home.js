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
            </div>
        )
    }
}
