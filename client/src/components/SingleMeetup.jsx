import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


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
            return <Redirect to="/meetup" />
        }
        if(this.state.submitEditForm){
            return <Redirect to="/meetup" />
        }

        const { name, time, } = this.state.meetup
        return (
            <div>
                <h2>{ name }</h2>
                <h3>{ time }</h3>

                <form onSubmit={this.submitEditForm }>
                    <input type="text" name="name" value={ this.state.editMeetup.name} onChange={this.changeInput } placeholder="change name"/>
                    <input type="Date" name="time" value={ this.state.editMeetup.time} onChange={this.changeInput} placeholder="change date"/>
                    <input type="submit" value="Update"/>
                </form>
                
            </div>
        )
    }
}
