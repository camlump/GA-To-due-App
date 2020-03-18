import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                    <div class="container">
                        <div class="row">
                        <div class="col-sm">
                        <Link to={"/classwork"}><h1>Classwork</h1></Link>
                        </div>
                        <div class="col-sm">
                        <Link to={"/Outcomes"}><h1>Outcomes</h1></Link>
                        </div>
                        <div class="col-sm">
                        <Link to={"/Meetups"}><h1>Meetup</h1></Link>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
