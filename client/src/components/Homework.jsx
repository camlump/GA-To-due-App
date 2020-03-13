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

    toggleHwForm = ()=>{
        const newHwForm = !this.state.hwForm
            this.setState({
                hwForm: newHwForm
            })
    }


    componentDidMount(){
        this.getHomeworks();
    }
    render() {
        return (
            <div>
                 {
                    this.state.homework.map((hw, i) => {
                        return (
                            <div key={ i }>
                                <Link to={ hw._id }>{ hw.name }</Link>
                            </div>
                        )
                    })
                }
                <div>
                    <button onClick={ this.toggleHwForm }>Add new Homework</button>
                </div>
               
            </div>
        )
    }
}
