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
        return (
            <div>
                <div>
                    <button className="redButton" onClick={this.toggleDeliveForm}>Add new Deliverables task</button>
                </div><br/><br/>
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
                                this.state.deliverable.map((deliverable, i) => {
                                    return (
                                        
                                        <div key={ i }>
                                        <table class="table table-striped table-dark">
            <thead>
                <tr>
                
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Finish</th>
                </tr>
            </thead>
                                        
            <tbody>
                <tr>

                <th scope="row">{ deliverable.time}</th>
                <td>
                    <Link className="mappedTodos" to={'deliverables/'+ deliverable._id }>{ deliverable.name }</Link>

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
