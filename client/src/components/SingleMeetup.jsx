import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'


export default class SingleMeetup extends Component {
        state ={
            meetup: {},
            redirectToMeetups: false,
            editMeetup: {}
        }
        getMeetup= () => {
            const meetupId = this.props.match.params.meetupId;
            axios.get('/api/meetup/' + meetupId ).then((response)=>{
                this.setState({
                    meetup: response.data,
                    editMeetup: response.data
                })
            })
        }

        changeInput = (event) =>{
            const updatedMeetup = {...this.state.editMeetup}
            updatedMeetup[event.target.name]= event.target.value
            this.setState({
                editMeetup: updatedMeetup
            });
        }

        submitEditForm = (event) =>{
            event.preventDefault();
            const meetupId = this.props.match.params.meetupId;
            axios.put('/api/meetup/' + meetupId, this.state.editMeetup).then(()=>{
                this.getMeetup()
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
            this.getMeetup()
        }
        
    render() {
        if(this.state.redirectToMeetups){
            return <Redirect to="/meetups" />
        }
        if(this.state.submitEditForm){
            return <Redirect to="/meetups"/>
        }

        const { name, time, location } = this.state.meetup
        return (
            <div>
                <Link className="RedirectLinks" to="/meetups">Back to Meetups page</Link>
                <h2>{ name }</h2>
                <h3>{ time }</h3>
                <h3>{ location }</h3>


                <form onSubmit={this.submitEditForm }>
                    <input type="text" name="name" value={ this.state.editMeetup.name} onChange={this.changeInput } placeholder="change name"/><br/><br/>
                    <input type="Date" name="time" value={ this.state.editMeetup.time} onChange={this.changeInput} placeholder="change date"/><br/><br/>
                    <input type="text" name="location" value={ this.state.editMeetup.location} onChange={this.changeInput} placeholder="change location"/><br/><br/>
                    <input class="submit" type="submit" value="Update"/> 
                </form> <br/><br/>

                <button onClick={ this.deleteMeetup}>Delete</button>
                
            </div>
        )
    }
}
