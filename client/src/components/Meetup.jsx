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

    componentDidMount(){
        this.getMeetups()
    }
    render() {
        return (
            <div>
                {
                    this.state.meetup.map((meetup, i)=>{
                        return (
                            <div key={i}>
                                <Link to={'meetup/' + meetup._id }>{ meetup.name}</Link>
                            </div>
                        )
                    })
                }
                <div>
                    <button className="redButton" onClick={ this.toggleMeetupForm}>Add Meetup</button>
                </div><br/><br/>

                {
                    this.state.meetupForm ? <form onSubmit={ this.onSubmitMeetup }>
                        <input type="text" name="name" onChange={ this.changeInput } placeholder="Change name"/>
                        <input type="Date" name="time" onChange={ this.changeInput } placeholder="Change Date"/>
                        <input type="Submit" value="Add"/>
                    </form> : null
                }

                
            </div>

        )
    }
}
