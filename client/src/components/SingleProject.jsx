import React, { Component } from 'react'
import axios from 'axios'
import { response } from 'express';

export default class SingleProject extends Component {
    state = {
        project: {},
        redirectToProjects: false,
        editProject: {}
    }
    getProject = () =>{
        const projectId = this.props.match.params.projectId;
        axios.get('api/project' + projectId).then((response)=>{
                this.setState({
                    project: response.data,
                    editProject: response.data
                });
        });
    }
    changeInput = (event) =>{
        const editedProject = {...this.state.editProject}
        editedProject[event.target.name] = event.target.value
            this.setState({
                editProject: editedProject
            })
    }

    submitEditForm = (event) => {
        event.preventDefault();
        const projectId = this.props.match.params.projectId;
        axios.delete('/api/project' + projectId, this.state.projectId).then(()=>{
            this.setState({
                redirectToProjects: true
            });
        });
        
    }

    deleteProject = () =>{
        
        const projectId = this.props.match.params.projectId;
        axios.delete('/api/project' + projectId).then(()=>{
            this.setState({
                redirectToProjects: true
            })
        })
    }

    componentDidMount(){
        this.getProject()
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
