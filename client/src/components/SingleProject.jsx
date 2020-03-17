import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';


export default class SingleProject extends Component {
    state = {
        project: {},
        redirectToProject: false,
        editProject: {},
    }
    
    getProject = () =>{
        const projectId = this.props.match.params.projectId;
        axios.get('/api/project/' + projectId).then((response)=>{
            this.setState({
                project: response.data,
                editProject : response.data
            })
        })
    }


    changeInput = (event) =>{
        const updatedProject = {...this.state.editProject}
        updatedProject[event.target.name] = event.target.value;
            this.setState({
                editProject: updatedProject
            });
    }

    submitEditForm = (event) =>{
        event.preventDefault();
        const projectId = this.props.match.params.projectId;
        axios.put('/api/project/' + projectId, this.state.editProject).then(()=>{
            this.getProject()
        })    
    }

    deleteProject = () =>{
        const projectId = this.props.match.params.projectId;
        axios.delete('/api/project/' + projectId).then(()=>{
            this.setState({
                redirectToProject: true
            });
        });
    }

    componentDidMount(){
        this.getProject()
    }

    render() { 
        if(this.state.redirectToProject) {
            return <Redirect to="/project" />
        }

        if(this.state.submitEditForm) {
            return <Redirect to="/project" />
        }

        const { name, time, todo } = this.state.project
        return (
            <div>
                <h2>name: { name }</h2>
                 <h3>time: { time }</h3>
                <p>Doing: { todo }</p>
                
               <form onSubmit={this.submitEditForm }>
                   <input type="text" name="name" value={ this.state.editProject.name } onChange={ this.changeInput} placeholder="name"/><br/><br/>
                   <input type="Date" name="time" value={ this.state.editProject.time } onChange={ this.changeInput} placeholder="name"/><br/><br/>
                   <input type="text" name="todo" value={ this.state.editProject.todo} onChange={ this.changeInput} placeholder="name"/><br/><br/>
                   <input type="submit" value="Update"/>
                   
               </form>

               <button onClick={ this.deleteProject }> Delete </button>
            </div>
        )
    }
}


