import React, { Component } from 'react';
import './css/AddBook.css';
import { NavLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_BOOK = gql`
    mutation AddBook($title: String!, $body: String!){
        addBook(title: $title, body: $body){
            id
            title
            body
        }
    }
`;
class AddBook extends Component {
    state = {
        title : '',
        body : ''
    }

    render() {
        return (
            <div className="addBook">
                <div className="inside-addBook">
                    <h1 className="title-addBook">New Book</h1>
                    <NavLink to="/books"><button className="btn-back">Go Back</button></NavLink>
                </div>
                <Mutation mutation={ADD_BOOK} >
                    {
                        (addBook, {data}) => (
                            <div className="content-addBook">
                                <form className="myForm" 
                                onSubmit={
                                    (event) => {
                                        event.preventDefault();
                                        addBook({
                                            variables : {
                                                title: this.state.title, 
                                                body : this.state.body
                                            }
                                        })
                                    }
                                }
                                >
                                    
                                    <div className="myGroup">
                                        <label className="myLabel" htmlFor="title">Title :</label>
                                        <input 
                                            className="myInput" 
                                            type="text" 
                                            id="title" 
                                            required="required" 
                                            placeholder="Title" 
                                            value ={this.state.title}
                                            onChange={
                                                event => this.setState({title : event.target.value})
                                            }
                                            
                                            />
                                    </div>
                                    <div className="myGroup">
                                        <label className="myLabel" htmlFor="body">Body :</label>
                                        <textarea 
                                        className="myInput" 
                                        value="" 
                                        type="text" 
                                        id="body" 
                                        required="required" 
                                        placeholder="Body" 
                                        value ={this.state.body} 
                                        onChange={event => this.setState({body : event.target.value})} 
                                        
                                        ></textarea>
                                    </div>
                                    <div className="">
                                        <button type="submit" className="btn-add">Add Book</button>
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

export default AddBook;