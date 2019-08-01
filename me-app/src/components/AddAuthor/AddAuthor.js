import React, { Component } from 'react';
import './css/AddAuthor.css';
import { NavLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_AUTHOR = gql`
    mutation AddAuthor($firstName: String!, $lastName: String!, $age: Int!){
        addAuthor(firstName: $firstName, lastName: $lastName, age: $age){
            id
            firstName
            lastName
            age
        }
    }
`;

class AddAuthor extends Component {
    state = {
        firstName : '',
        lastName : '',
        age : ''
    }
    render() {
        return (
            <div className="addAuthor">
                <div className="inside-addAuthor">
                    <h1 className="title-addAuthor">New Author</h1>
                    <NavLink to="/authors"><button className="btn-back">Go Back</button></NavLink>
                </div>
                <Mutation mutation={ADD_AUTHOR}>
                    {
                        (addAuthor, {data}) => (
                            <div className="content-addAuthor">
                                <form className="myForm"
                                onSubmit={
                                    event => {
                                        event.preventDefault();
                                        addAuthor({
                                            variables : {
                                                firstName : this.state.firstName,
                                                lastName : this.state.lastName,
                                                age : parseInt(this.state.age)
                                            }
                                        })
                                    }
                                }
                                >
                                    <div className="myGroup">
                                        <label className="myLabel" htmlFor="firstName">First Name :</label>
                                        <input 
                                        className="myInput" 
                                        type="text" id="firstName" 
                                        required="required" 
                                        placeholder="First Name" 
                                        value={this.state.firstName}
                                        onChange={
                                            event => this.setState({firstName: event.target.value})
                                        }
                                        />
                                    </div>
                                    <div className="myGroup">
                                        <label className="myLabel" htmlFor="lastName">Last Name :</label>
                                        <input className="myInput" 
                                        type="text" id="lastName" 
                                        required="required" 
                                        placeholder="Last Name" 
                                        value={this.state.lastName} 
                                        onChange={
                                            event => this.setState({lastName: event.target.value})
                                        }
                                        />
                                    </div>
                                    <div className="myGroup">
                                        <label className="myLabel" htmlFor="age">Age :</label>
                                        <input 
                                        className="myInput" 
                                        type="text" 
                                        id="age" 
                                        required="required" 
                                        placeholder="age" 
                                        value={this.state.age} 
                                        onChange={
                                            event => this.setState({age: event.target.value})}
                                        />
                                    </div>
                                    <div className="">
                                        <button className="btn-add">Add Author</button>
                                    </div>
                                </form>
                            </div>
                        )
                    }
                </Mutation>
            </div>
        );
    }
}

export default AddAuthor;