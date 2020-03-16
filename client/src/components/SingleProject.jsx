import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

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
        if(this.state.redirectToProjects){
            return <Redirect to="/project" />
        }
        if(this.state.submitEditForm) {
            return <Redirect to="/project" />
        }
        const { name, time, todo} = this.state.project
        return (
            <div>
                <h2>Name: { name }</h2>
                <h3> Date: { time }</h3>
                <p>Doing: { todo }</p>
                
            </div>
        )
    }
}
