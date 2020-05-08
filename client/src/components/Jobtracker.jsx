import React, { Component } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

export default class JobTracker extends Component {
    state = {
        jobtracker: [],
        isJobTrackerDone: false,
        newJobTracker: {
            name: '',
        },
        jobTrackerForm: false,
        redirectToJts: false

    }

    
    getJobTracker=()=>{
        axios.get('/api/jobtracker').then((response)=>{
            this.setState({
                jobtracker: response.data
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

    deleteJobTracker= () => {
        const jobtrackerId = this.props.match.params.jobtrackerId
        axios.delete('/api/jobtracker/' + jobtrackerId).then(()=>{
            this.setState({
                redirectToJts: true
            })
        })
       }

    componentDidMount(){
        this.getJobTracker()
    }

    render() {
    const renderJobTracker = (jobtracker, i)=>{
        return (
            <tr key={i}>
                <td><Link className="mappedTodos" to={'jobtracker/' + jobtracker._id}>{jobtracker.name}</Link></td>
                <td>{jobtracker.time}</td>
                <td>{jobtracker.todo}</td>
                <td><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input> </td>

            </tr>
        )
    }

        return (
            <div>
                            {
                                this.state.jobTrackerForm? <form onSubmit={ this.onSubmitJobTracker }>
                                    <input type="text" name="name" onChange={this.changeInput } placeholder="Assingment Name"/><br/><br/>
                                    <input type="Date" name="time" onChange={this.changeInput } placeholder="Due date"/><br/><br/>
                                    <input type="text" name="todo"  onChange={ this.changeInput} placeholder="To-Do"/><br/><br/>
                                    <input className="submit" type="submit" value="Add"/>
                                </form> : null
                            }
                        
                        {
                            <table className="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Descrption</th>
                                        <th>Status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.jobtracker.map(renderJobTracker)}
                                </tbody>

                            </table>

                        }
        <div>
            <button className="redbutton" onClick={ this.toggleJtForm }>Add new task</button>
        </div>
                      


                
          
                
            </div>
        )
    }
}
