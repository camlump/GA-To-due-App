import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class SingleJobTracker extends Component {
        state ={
            jobtracker: {},
            redirectToJts: false,
            editJobTracker: {},
        }
        getJobtracker = ()=>{
            const jobtrackerId = this.props.match.params.jobtrackerId
            axios.get('/api/jobtracker/' + jobtrackerId).then((response)=>{
                this.setState({
                    jobtracker: response.data,
                    editJobTracker: response.data
                });
            });
        }
        changeInput = (event) =>{
            const updatedJt = {...this.state.editJobTracker}
            updatedJt[event.target.name]= event.target.value
            this.setState({
                editJobTracker: updatedJt
            });
        }
       submitEditForm = (event) =>{
           event.preventDefault();
           const jobtrackerId = this.props.match.params.jobtrackerId
           axios.put('/api/jobtracker/' + jobtrackerId, this.state.editJobTracker).then(()=>{
               this.getJobtracker()
           });
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
           this.getJobtracker()
       }


    render() {
        if( this.state.redirectToJts){
            return <Redirect to="/jobtracker" />
        }
        if(this.state.submitEditForm){
            return <Redirect to="/jobtracker" />
        }

        const { name, time, todo } = this.state.jobtracker
        return (
            <div>
                 <h2>Name: { name }</h2>
                <h3> Time:{ time }</h3>
                <p> Doing:{ todo }</p>

                <form onSubmit={this.submitEditForm}>
                    <input type="text" name="name" value={this.state.name} onChange={ this.changeInput} placeholder="change name"/><br/><br/>
                    <input type="Date" name="time" value={this.state.time} onChange={ this.changeInput} placeholder="change time"/><br/><br/>
                    <input type="text" name="todo" value={this.state.todo} onChange={ this.changeInput} placeholder="change task"/><br/><br/>
                    <input  type="submit" value="Add"/>
                    
                </form>
                <button onClick={this.deleteJobTracker}>Delete</button>
                
            </div>
        )
    }
}
