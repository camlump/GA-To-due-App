import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-sm">
                        <Link to={"/classwork"}><h1 className="red">Classwork</h1> <img src="https://i.imgur.com/KlPcTk1.jpg" className="img-fluid" alt="Responsive image"></img> </Link>
                        </div>
                        <div className="col-sm">
                        <Link to={"/Outcomes"}><h1 className="red">Outcomes</h1> <img src="https://i.imgur.com/K8Wd8Hm.jpg" className="img-fluid" alt="Responsive image"></img> </Link>
                        </div>
                        <div className="col-sm">
                        <Link to={"/Meetups"}><h1 className="red">Meetup</h1> <img src="https://i.imgur.com/fDnrGcL.jpg" className="img-fluid" alt="Responsive image"></img> </Link>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
