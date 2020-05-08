import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class Projects extends Component {
    state = {
        projects: [],
        didPresent: false,
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

    togglePresent = () =>{
        const present = !this.state.didPresent
        this.setState({
            didPresent: present
        })
    }
    
    onSubmitProject = (event) => {
        event.preventDefault();
        axios.post('/api/project', this.state.newProject).then(()=>{
            this.toggleProjectForm();
            this.getProjects();
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
        this.getProjects();
    }
        
    
    render() {
        const renderProjects = (project, i) => {
            return (
                <tr key={i}>
                    <td> <Link className="mappedTodos" to={'project/'+ project._id }>{project.name}</Link></td>
                    <td>{project.time}</td>
                    <td>{project.todo}</td>
                    <td><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input> </td>
                    {/* <td>{project.isDone}</td>
                    <td>{project.didPresent}</td> */}
                </tr>
            )
        }
        return (
            <div>
                {
                this.state.projectForm ? <form onSubmit={ this.onSubmitProject}>
                    <input type="text" name="name" onChange={this.changeInput} placeholder="Project Name"/> <br/> <br/>
                    <input type="Date" name="time" onChange={this.changeInput} placeholder="Due Date"/> <br/> <br/>
                    <input type="text" name="todo" onChange={this.changeInput} placeholder="To-Do"/> <br/> <br/>
                   
                    <input className="submit" type="submit" value="Add"/>
                
                </form> : null
                }
             {
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map(renderProjects)}
                    </tbody>
                </table>
             }
<div>
    <button className="redButton" onClick={ this.toggleProjectForm }>Add new Project</button>
</div>

 
      {/* <td>
      <div class="form-group">
      <label for="sel1"></label>
  <select onSelect class="form-control" id="sel1">
    <option>No</option>
    <option>yes</option>
    
  </select>
</div>

      </td> */}
      {/* <td>
      <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="defaultUnchecked"></input>
            <label class="custom-control-label" for="defaultUnchecked"></label>
            </div>
      </td> */}
   
                       
                                
                           
                            
               
            </div>
        )
    }
}
