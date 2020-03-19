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
                    <div class="container-fluid">
                    <div class="row">
                        <div class="col-md">
                        <Link to={"/deliverables"} style={{ textDecoration: 'none'}}><h1 className="red">Deliverables</h1></Link>
                                        <div><span className="listNum">{this.state.deliverables.length}</span></div>
                        </div>
                        <div class="col-md">
                        <Link to={"/jobtracker"} style={{ textDecoration: 'none'}}><h1 className="red">Jobtracker</h1></Link>
                                    <div><span className="listNum">{this.state.jobTracker.length}</span></div>
                        </div>
                    </div>
                </div>
            </div>
                    
            
        )
    }
}
