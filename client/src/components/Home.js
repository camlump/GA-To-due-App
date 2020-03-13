import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
             <div>
            <Link to={"/classwork"}><h1>Classwork</h1></Link>
             </div>
             <div>
                 <Link to={"/Outcomes"}><h1>Outcomes</h1></Link>
             </div>
             <div>
                 <Link to={"/Meetups"}><h1>Meetup</h1></Link>
             </div>
            </div>
        )
    }
}
