import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom' 

export default class Meetup extends Component {
    state = {
        meetup: [],
        isMeetupDone: false,
        newMeetup: {
            name: '',
        },
        meetupForm: false
    }
    getMeetups = () =>{
        axios.get('/api/meetup').then((response)=>{
            const FoundMeetup = response.data;
            this.setState({
                meetup: FoundMeetup
            })
        })
    }

    changeInput = (event) =>{
        const addedMeetup ={...this.state.newMeetup}
        addedMeetup[event.target.name] = event.target.value
        this.setState({
            newMeetup: addedMeetup
        })
    }
    toggleMeetupForm = () =>{
        const newMeetupForm = !this.state.meetupForm
        this.setState({
            meetupForm: newMeetupForm
        })
    }

    onSubmitMeetup = (event) =>{
        event.preventDefault();
        axios.post('/api/meetup', this.state.newMeetup).then(()=>{
            this.toggleMeetupForm();
            this.getMeetups();
        })
    }

    deleteMeetup =()=>{
        const meetupId = this.props.match.params.meetupId;
        axios.delete('/api/meetup/' + meetupId).then(()=>{
            this.setState({
                redirectToMeetups: true
            })
        })
    }

    componentDidMount(){
        this.getMeetups()
    }
    render() {
            const renderMeetups = (meetup, i) =>{ 
              return (  <tr key={i}>
                    <td><Link className="mappedTodos" to={'meetup/'+ meetup._id}>{meetup.name}</Link></td>
                    <td>{meetup.time}</td>
                    <td>{meetup.location}</td>
                    <td><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input></td>

                </tr>
              )
            }

        return (
            <div>
                   
                       {
                           this.state.meetupForm ? <form onSubmit={ this.onSubmitMeetup }>
                               <input type="text" name="name" onChange={ this.changeInput } placeholder="name"/> <br/><br/>
                               <input type="Date" name="time" onChange={ this.changeInput } placeholder="Date"/> <br/><br/>
                               <input type="text" name="location" onChange={ this.changeInput } placeholder="add location"/> <br/><br/>
                               <input className="submit" type="submit" value="Add"/>
                           </form> : null
                       }

                       {
                            <table className="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>name</th>
                                        <th>Date</th>
                                        <th>Location</th>
                                        <th>Status</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.meetup.map(renderMeetups)}
                                </tbody>
                            </table>
                       }
                      
                <div>
                    <button className="redButton" onClick={ this.toggleMeetupForm}>Add Meetup</button>
                </div>
         




                
            </div>

        )
    }
}
