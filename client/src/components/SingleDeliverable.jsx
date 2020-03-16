import React, { Component } from 'react'
import axios from 'axios'


export default class SingleDeliverable extends Component {
    state = {
        deliverable: {},
        redirectToDelive: false,
        editDelive: {}
    }
    getDeliverable = ()=>{
        const deliverableId = this.state.match.params.deliverableId;
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
        const deliverableId = this.state.match.params.deliverableId;
        axios.put('/api/deliverables' + deliverableId, this.state.editDelive).then(()=>{
            this.getDeliverable()
        })
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
