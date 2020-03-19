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
        return (
            <div>
                <div>
                    <button className="redButton" onClick={ this.toggleMeetupForm}>Add Meetup</button>
                </div><br/><br/>
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
                                this.state.meetup.map((meetup, i) => {
                                    return (
                                        
                                        <div key={ i }>
                                        <table class="table table-striped table-dark">
            <thead>
                <tr>
                
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Finish</th>
                </tr>
            </thead>
                                        
            <tbody>
                <tr>

                <th scope="row">{ meetup.time}</th>
                <td>
                    <Link className="mappedTodos" to={'meetup/'+ meetup._id }>{ meetup.name }</Link>

                </td>
                <td>
                <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="defaultUnchecked"></input>
            <label class="custom-control-label" for="defaultUnchecked"></label>
            </div>
                </td>
                </tr>
                
            </tbody>
            </table>
                                
                                
                 </div>
                            
                )
            })
        }
        </div>




                {/* {
                    this.state.meetup.map((meetup, i)=>{
                        return (
                            <div key={i}>
                                <Link to={'meetup/' + meetup._id }>{ meetup.name}</Link>
                            </div>
                        )
                    })
                } */}


                
            </div>

        )
    }
}
