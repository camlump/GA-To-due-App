import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
export default class Homework extends Component {
    state = {
        homework: [],
        isHomeworkDone: false,
        newHomework : {
            name: '',
        },
        hwForm: false
    }



    getHomeworks =()=>{
        axios.get('/api/homework').then((response)=>{
            const foundHomework = response.data;
            this.setState({
                homework: foundHomework
            });
        });
    }

    changeInput = (event) => {
        const addedHw = {...this.state.newHomework}
        addedHw[event.target.name] = event.target.value
        this.setState({
            newHomework: addedHw
        })
    }

    toggleHwForm = ()=>{
        const newHwForm = !this.state.hwForm
            this.setState({
                hwForm: newHwForm
            })
    }
   onSubmitHw = (event) => {
        event.preventDefault();
        axios.post('/api/homework', this.state.newHomework).then(()=>{
            this.toggleHwForm();
            this.getHomeworks();
        })
    }

   
   


    componentDidMount(){
        this.getHomeworks();
    }
    render() {

        const renderHomework = (homework, i) =>{
            return (
                <tr key={i}>
                   
                    <td> <Link className="mappedTodos" to={'homework/'+ homework._id}>{homework.name}</Link></td>
                    <td>{homework.time}</td>
                    <td>{homework.todo}</td>
                </tr>
            )
        }
       
        return (
            <div>
        
            
                        {
                            this.state.hwForm ? <form onSubmit={ this.onSubmitHw }>
                                <input type="text" name="name" onChange={this.changeInput } placeholder="Assingment Name"/><br/><br/>
                                <input type="Date" name="time" onChange={this.changeInput } placeholder="Due date"/><br/><br/>
                                <input type="text" name="todo"  onChange={ this.changeInput} placeholder="To-Do"/><br/><br/>
                                <input className="submit" type="submit" value="Add"/>
                            </form> : null
                        }

                 
  

                {
                    <table class="table table-hover table-bordered">
                    <thead>
                     <tr>
                        <th scope="col">name</th>
                       <th scope="col">Date</th>
                       <th scope="col">Description</th>
                     </tr>
                   </thead>
                   <tbody>
                        {this.state.homework.map(renderHomework)}
                  </tbody>
                 </table>
                     
                    }

       
<button className="redButton" onClick={ this.toggleHwForm  }>Add new Homework</button>
     
                
               
            </div>
        )
    }
}
