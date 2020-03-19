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
    deletehomework =()=>{
        const homeworkId = this.props.match.params.homeworkId;
        axios.delete('/api/homework/' + homeworkId).then(()=>{
            this.setState({
                redirectToHWs : true
            });
        });
    }


    componentDidMount(){
        this.getHomeworks();
    }
    render() {
       
        return (
            <div>
               {
                     this.state.homework.map((homework, i) => {
                         return (
                             
                             <div key={ i }>
                             <table class="table table-striped table-dark">
  <thead>
    <tr>
      
      <th scope="col">Homework</th>
      <th scope="col">Name</th>
      <th scope="col">Finish</th>
    </tr>
  </thead>
                             
  <tbody>
    <tr>

      <th scope="row">Due</th>
      <td>
        <Link to={'homework/'+ homework._id }>{ homework.name }</Link>

      </td>
      <td>
          <button onClick={ this.deletehomework}>Done</button>
      </td>
    </tr>
     
  </tbody>
</table>
                                
                                
                            </div>
                            
                        )
                    })
                }

       
     
                
                <div>
                    <button className="redButton" onClick={ this.toggleHwForm  }>Add new Homework</button>
                </div><br/><br/>
                {
                    this.state.hwForm ? <form onSubmit={ this.onSubmitHw }>
                        <input type="text" name="name" onChange={this.changeInput } placeholder="Assingment Name"/><br/><br/>
                        <input type="Date" name="time" onChange={this.changeInput } placeholder="Due date"/><br/><br/>
                        <input type="text" name="todo"  onChange={ this.changeInput} placeholder="To-Do"/><br/><br/>
                        <input type="submit" value="Add"/>
                    </form> : null
                }
               
            </div>
        )
    }
}
