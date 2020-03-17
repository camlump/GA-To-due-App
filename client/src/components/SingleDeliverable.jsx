import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class SingleDeliverable extends Component {
    state = {
        deliverable: {},
        redirectToDelive: false,
        editDelive: {}
    }
    getDeliverable = ()=>{
        const deliverableId = this.props.match.params.deliverableId;
        axios.get('/api/deliverables/' + deliverableId).then((response)=>{
            this.setState({
                deliverable: response.data,
                editDelive: response.data
            })
        })
    }
    changeInput= (event)=>{
        const updatedDelive = {...this.state.editDelive}
        updatedDelive[event.target.name] = event.target.value
            this.setState({
                editDelive: updatedDelive
            })
    }

    submitEditForm = (event)=>{
        event.preventDefult();
        const deliverableId = this.props.match.params.deliverableId;
        axios.put('/api/deliverables/' + deliverableId, this.state.editDelive).then(()=>{
            this.getDeliverable()
        });
    }
    deleteDeliverable= ()=>{
        const deliverableId = this.props.match.params.deliverableId;
        axios.delete('/api/deliverables/' + deliverableId).then(()=>{
            this.setState({
                redirectToDelive: true
            })
        })
    }

    componentDidMount(){
        this.getDeliverable()
    }
    render() {
        if(this.state.redirectToDelive){
            return <Redirect to="/jobtracker" />
        }

        if(this.state.submitEditForm) {
            return <Redirect to="/jobtracker" />
        }

        const { name, time, todo } = this.state.deliverable
        return (
            <div>
                <h2>Name: { name }</h2>
                <h3> Time:{ time }</h3>
                <p> Doing:{ todo }</p>

                <form onSubmit={ this.submitEditForm}>
                <input type="text" name="name" value={this.state.name} onChange={ this.changeInput} placeholder="change name"/><br/><br/>
                    <input type="Date" name="time" value={this.state.time} onChange={ this.changeInput} placeholder="change time"/><br/><br/>
                    <input type="text" name="todo" value={this.state.todo} onChange={ this.changeInput} placeholder="change task"/><br/><br/>
                    <input  type="submit" value="Update"/>
                </form>

                <button onClick={ this.deleteDeliverable}>Delete</button>
                
            </div>
        )
    }
}
