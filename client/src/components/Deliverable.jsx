import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Deliverables extends Component {
    state = {
        deliverable: [],
        isDeliverableDone: false,
        newDeliverable: {
            name: '',
        },
        deliverableForm: false
    }
    getDeliverables = () =>{
        axios.get('/api/deliverables').then((response)=>{
            this.setState({
                deliverable: response.data
            });
        });
    }

    changeInput = (event)=>{
        const addDelive = {...this.state.newDeliverable};
        addDelive[event.target.name] = event.target.value
            this.setState({
                newDeliverable: addDelive
            })
    }

    toggleDeliveForm = () =>{
        const newDeliveForm = !this.state.deliverableForm
            this.setState({
                deliverableForm: newDeliveForm
            })
    }

    onsubmitDeliveravble = (event) =>{
        event.preventDefault()
        axios.post('/api/deliverables', this.state.newDeliverable).then(()=>{
            this.toggleDeliveForm();
            this.getDeliverables();
        })
    }

    deleteDeliverables = () =>{
        const deliverableId = this.props.match.params.deliverableId;
        axios.delete('/api/deliverables' + deliverableId).then(()=>{
            this.setState({
                redirectToDeliverables: true
            })
        })
    }

    componentDidMount(){
        this.getDeliverables()
    }
    render() {
        const renderDeliverables = (deliverable, i) =>{
            return (
                <tr key={i}>
                    <td>{deliverable.name}</td>
                     <td>{deliverable.time}</td>
                    <td>{deliverable.todo}</td>
                     {/* <td>{deliverable.isDone}</td> */}
                </tr>
            )
        }
        return (
            <div>
                
                    {
                        this.state.deliverableForm ? <form onSubmit={this.onsubmitDeliveravble}>
                            <input type="text" name="name" onChange={this.changeInput } placeholder="Deliverable name"/><br/><br/>
                            <input type="Date" name="time" onChange={this.changeInput } placeholder="Due Date"/><br/><br/>
                            <input type="text" name="todo" onChange={this.changeInput } placeholder="To-Do"/><br/><br/>
                            <input className="submit" type="submit" value="Add"/>
                        </form> : null
                    }
                       
                       {
                           <table className="table">
                               <thead>
                                   <tr>
                                       <th>Name</th>
                                       <th>Date</th>
                                       <th>Todo</th>
                                   </tr>
                               </thead>
                               <tbody>
                                   {this.state.deliverable.map(renderDeliverables)}
                               </tbody>
                           </table>
                       }
        
                <div>
                    <button className="redButton" onClick={this.toggleDeliveForm}>Add new Deliverables task</button>
                </div>







                {/* {
                    this.state.deliverable.map((deliverable, i )=>{
                        return(
                            <div key={i}>
                                <Link to={'deliverables/'+ deliverable._id }>{ deliverable.name }</Link>
                                <select name="name" id=""></select>
                            </div>
                        )
                    })
                } */}
            </div>
        )
    }
}
