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
        axios.put('/api/project' + projectId, this.state.editProject).then(()=>{
                    this.getProject()
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

                <form onSubmit={this.submitEditForm}>
                    <input type="text" name="name" value={ this.state.editProject.name } onChange={ this.changeInput }/>
                    <input type="Date" name="time" value={ this.state.editProject.time } onChange={ this.changeInput }/>
                    <input type="text" name="todo" value={ this.state.editProject.todo} onChange={ this.changeInput }/>
                    <input type="submit" value="Add"/>
                </form>

                <button onClick={this.deleteProject}>Delete</button>
                
            </div>
        )
    }
}
