import React, { Component } from 'react'
import axios from 'axios';

import { Link, Redirect } from 'react-router-dom';

export default class SingleDeliverable extends Component {
    state={
        deliverable: {},
        redirectToDeliverables: false,
        editDelive: {}
    }

    getDeliverables = () =>{
        const deliverableId = this.props.match.params.deliverableId;
        axios.get('/api/deliverables/' + deliverableId).then((response)=>{
            this.setState({
                deliverable: response.data,
                editDelive: response.data
            })
        })
    }
    
    changeInput=(event) =>{
        const updatedDelive = {...this.state.editDelive}
        updatedDelive[event.target.name] = event.target.value;
            this.setState({
                editDelive: updatedDelive
            })
    }

    submitEditForm = (event) =>{
        event.preventDefault();
        const deliverableId = this.props.match.params.deliverableId;
        axios.put('/api/deliverables/' + deliverableId, this.state.editDelive).then(()=>{
            this.getDeliverables()
            this.setState({
                redirectToDeliverables: true
            })
        })
    }

    deleteDeliverables = () =>{
        const deliverableId = this.props.match.params.deliverableId;
        axios.delete('/api/deliverables/' + deliverableId).then(()=>{
            this.setState({
                redirectToDeliverables: true
            })
        })
    }

    componentDidMount(){
        this.getDeliverables()
    }
    render() {
        if(this.state.redirectToDeliverables){
            return <Redirect to="/deliverables" />
        }
        if(this.state.submitEditForm){
            return <Redirect to="/deliverables" />
        }

        const { name, time, todo } = this.state.deliverable
        return (
            <div>
                <Link className="RedirectLinks" to="/deliverables">Back to Deliverables page</Link>
                <h2>{ name}</h2>
                <h3>{ time }</h3>
                <p>{ todo }</p>

                <form onSubmit={ this.submitEditForm}>
                    <input type="text" name="name" value={ this.state.editDelive.name } onChange={ this.changeInput} placeholder="name"/><br/><br/>
                    <input type="Date" name="time" value={ this.state.editDelive.time } onChange={ this.changeInput} placeholder="time"/><br/><br/>
                    <input type="text" name="todo" value={ this.state.editDelive.todo } onChange={ this.changeInput} placeholder="To-Do"/><br/><br/>
                    <input className="submit" type="submit" value="Update"/>
                </form>
                <button onClick={ this.deleteDeliverables}>Delete</button>
            </div>
        )
    }
}
