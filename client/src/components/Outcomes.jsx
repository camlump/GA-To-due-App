import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Outcomes extends Component {
    state = {
        deliverables: [],
        jobTracker: []
    }
    getDeliverables = ()=>{
        axios.get('/api/deliverables').then((response)=>{
            this.setState({
                deliverables: response.data
            })
        })
    }

    getJobtracker =()=>{
        axios.get('/api/jobtracker').then((response)=>{
            this.setState({
                jobTracker: response.data
            })
        })
    }

    componentDidMount(){
        this.getDeliverables()
        this.getJobtracker()
    }

    render() {
        return (
            <div>
                <Link to={"/deliverables"}><h1>Deliverables</h1></Link>
                    <div>{this.state.deliverables.length}</div>
                <Link to={"/jobtracker"}><h1>Jobtracker</h1></Link>
                <div>{this.state.jobTracker.length}</div>
            </div>
        )
    }
}
