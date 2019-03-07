import React, { Component } from 'react';
import Axios from 'axios';

class PersonList extends Component {
    constructor() {
        super();
        this.state = {
            persons: []
        }
    }

    componentDidMount(){
        Axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                this.setState({ persons: res.data })
            }).catch(error => {
                console.log('error occurred!', error)
            })
    }

    render() {
        return (
            <ul>
                {this.state.persons.map(person =>
                    <div key={person.id}>
                        <li>{person.name}</li>
                        <li>{person.email}</li>
                    </div>
                )}
            </ul>
        )
    }
}

export default PersonList;