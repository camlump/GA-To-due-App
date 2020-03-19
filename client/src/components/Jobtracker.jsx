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
        return (
            <div>
        <div>
            <button className="redbutton" onClick={ this.toggleJtForm }>Add new task</button>
        </div>
                            {
                                this.state.jobTrackerForm? <form onSubmit={ this.onSubmitJobTracker }>
                                    <input type="text" name="name" onChange={this.changeInput } placeholder="Assingment Name"/><br/><br/>
                                    <input type="Date" name="time" onChange={this.changeInput } placeholder="Due date"/><br/><br/>
                                    <input type="text" name="todo"  onChange={ this.changeInput} placeholder="To-Do"/><br/><br/>
                                    <input className="submit" type="submit" value="Add"/>
                                </form> : null
                            }
                        <div>
                        {
                                this.state.jobtracker.map((jobtracker, i) => {
                                    return (
                                        
                                        <div key={ i }>
                                        <table class="table table-striped table-dark">
            <thead>
                <tr>
                
                <th scope="col">Homework</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Finish</th>
                </tr>
            </thead>
                                        
            <tbody>
                <tr>

                <th scope="row">{ jobtracker.time }</th>
                <td>
                    <Link className="mappedTodos" to={'jobtracker/'+ jobtracker._id }>{ jobtracker.name }</Link>

                </td>
                <td>
                <div class="form-group">
  <label for="sel1"></label>
  <select class="form-control" id="sel1">
    <option>Pinned</option>
    <option>Applied</option>
    <option>Interview</option>
    <option>Technical</option>
    <option>offered</option>
  </select>
</div>
                </td>
               
                
                <td>
                <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="defaultUnchecked"></input>
            <label class="custom-control-label" for="defaultUnchecked"></label>
            </div>
                </td>
                </tr>
                
            </tbody>
            </table>
                                
                                
                 </div>
                            
                )
            })
        }
        </div>


                
                {/* {
                    this.state.JobTracker.map((JobTracker, i )=>{
                        return(
                            <div key={i}>
                                <Link to={'jobtracker/' + JobTracker._id}>{ JobTracker.name }</Link>

                            </div>
                        )
                    })
                } */}
                
            </div>
        )
    }
}
