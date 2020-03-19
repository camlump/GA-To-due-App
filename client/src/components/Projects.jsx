import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class Projects extends Component {
    state = {
        projects: [],
        didpresent: false,
        newProject: {
            name: '',

        },
       projectForm: false

    
    }

    getProjects = () => {
        axios.get('/api/project').then((response)=>{
            const foundProject = response.data; 
                this.setState({
                    projects: foundProject
                });
        });
    }

    changeInput = (event) => {
        const addedProject = {...this.state.newProject}
        addedProject[event.target.name] = event.target.value
        this.setState({
            newProject: addedProject
        });
    }

    toggleProjectForm = () => {
        const newProjectForm = !this.state.projectForm
        this.setState({
            projectForm: newProjectForm
        });
    }
    
    onSubmitProject = (event) => {
        event.preventDefault();
        axios.post('/api/project', this.state.newProject).then(()=>{
            this.toggleProjectForm();
            this.getProjects();
        })
    }

    componentDidMount(){
        this.getProjects();
    }
        
    
    render() {
        return (
            <div>
                {
                    this.state.projects.map((project, i )=>{
                        return (
                            <div key={i}>
                                <Link to={'project/' + project._id }>{ project.name }</Link>
                            </div>
                        )
                    })
                }
                <div>
                    <button className="redButton" onClick={ this.toggleProjectForm }>Add new Project</button>
                </div><br/><br/>
                    {
                    this.state.projectForm ? <form onSubmit={ this.onSubmitProject}>
                        <input type="text" name="name" onChange={this.changeInput} placeholder="Project Name"/> <br/> <br/>
                        <input type="Date" name="time" onChange={this.changeInput} placeholder="Due Date"/> <br/> <br/>
                        <input type="text" name="todo" onChange={this.changeInput} placeholder="To-Do"/> <br/> <br/>
                       
                        <input type="submit" value="Add"/>

                    </form> : null
                    }
            </div>
        )
    }
}
