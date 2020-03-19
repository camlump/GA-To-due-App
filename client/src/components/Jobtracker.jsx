import React, { Component } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

export default class JobTracker extends Component {
    state = {
        JobTracker: [],
        isJobTrackerDone: false,
        newJobTracker: {
            name: '',
        },
        jobTrackerForm: false
    }
    getJobTracker=()=>{
        axios.get('/api/jobtracker').then((response)=>{
            this.setState({
                JobTracker: response.data
            });
        });
    }

    changeInput = (event) =>{
        const addJobtracker = {...this.state.newJobTracker}
        addJobtracker[event.target.name] = event.target.value
                this.setState({
                    newJobTracker: addJobtracker
                })
    }

    toggleJtForm = () =>{
        const newJobTrackerForm = !this.state.jobTrackerForm
        this.setState({
            jobTrackerForm: newJobTrackerForm
        })
    }

    onSubmitJobTracker = (event)=>{
        event.preventDefault()
        axios.post('/api/jobtracker', this.state.newJobTracker).then(()=>{
            this.toggleJtForm();
            this.getJobTracker()
        })
    }

    componentDidMount(){
        this.getJobTracker()
    }

    render() {
        return (
            <div>
                {
                    this.state.JobTracker.map((JobTracker, i )=>{
                        return(
                            <div key={i}>
                                <Link to={'jobtracker/' + JobTracker._id}>{ JobTracker.name }</Link>

                            </div>
                        )
                    })
                }
                <div>
                    <button className="redbutton" onClick={ this.toggleJtForm }>Add new task</button>
                </div>
                {
                    this.state.jobTrackerForm? <form onSubmit={ this.onSubmitJobTracker }>
                        <input type="text" name="name" onChange={this.changeInput } placeholder="Assingment Name"/><br/><br/>
                        <input type="Date" name="time" onChange={this.changeInput } placeholder="Due date"/><br/><br/>
                        <input type="text" name="todo"  onChange={ this.changeInput} placeholder="To-Do"/><br/><br/>
                        <input type="submit" value="Add"/>
                    </form> : null
                }
                
            </div>
        )
    }
}
