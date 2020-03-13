import React, { Component } from 'react'

import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class SingleHomework extends Component {
    state = {
        homework: {},
        redirectToHWs: false,
        editHw: {},
        
    }

    getHomework = () =>{
        const homeworkId = this.props.match.params.homeworkId;
        axios.get('/api/homework/' + homeworkId).then((response)=>{
            this.setState({
                homework: response.data,
                editHw : response.data
            })
        })
    }
    changeInput = (event)=>{
        const editedHw = {...this.state.editHw}
        editedHw[event.target.name] = event.target.value
            this.setState({
                editHw: editedHw
            });
    }

    submitEditForm = (event)=>{
        event.preventDefault();
        const homeworkId = this.props.match.params.homeworkId;
        axios.put('/api/homework/' + homeworkId, this.state.homeworkId).then(()=>{
            this.getHomework()
             
        });
    }

    deletehomework =()=>{
        const homeworkId = this.props.match.params.homeworkId;
        axios.delete('/api/homework/' + homeworkId).then(()=>{
            this.setState({
                redirectToHWs : true
            });
        });
    }
            componentDidMount(){
                this.getHomework()
            }

    render() {
        if( this.state.redirectToHWs) {
            return <Redirect to="/homework" />
        }
        
        const {  name, time, todo } = this.state.homework
        return (
            <div>
                <h2>Name: { name }</h2>
                <h3> Time:{ time }</h3>
                <p> Doing:{ todo }</p>

                <form onSubmit={this.submitEditForm}>
                    <input type="text" name="name" value={this.state.name} onChange={ this.changeInput} placeholder="change name"/><br/><br/>
                    <input type="Date" name="time" value={this.state.time} onChange={ this.changeInput} placeholder="change time"/><br/><br/>
                    <input type="text" name="todo" value={this.state.todo} onChange={ this.changeInput} placeholder="change task"/><br/><br/>
                    <input type="submit" value="Update"/>
                    
                </form>
                <button onClick={this.deletehomework}>Delete</button>
            </div>
        )
    }
}
