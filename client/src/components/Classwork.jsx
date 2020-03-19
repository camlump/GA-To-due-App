import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'




export default class Classwork extends Component {
    state ={
        homework:[],
        projects: []
    }

    getHomeworks =()=>{
        axios.get('/api/homework').then((response)=>{
            const foundHomework = response.data;
            this.setState({
                homework: foundHomework
            });
        });
    }
    getProjects =()=>{
        axios.get('/api/project').then((response)=>{
            const foundProjects = response.data;
            this.setState({
                projects: foundProjects
            });
        });
    }

    componentDidMount(){
        this.getHomeworks();
        this.getProjects();
    }
    render() { 
      


    
return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md">
                        <Link to={"/homework"} style={{ textDecoration: 'none'}}><h1 className="red">Homework</h1></Link>
                        <div><span className="listNum">{this.state.homework.length}</span></div>
                        </div>
                        <div className="col-md">
                        <Link to={"/project"} style={{ textDecoration: 'none'}}><h1 className="red">Projects</h1></Link>
                        <div><span className="listNum">{this.state.projects.length}</span></div>
                        </div>
                    </div>
                </div>
              
                
            </div>
        )
    }
}

