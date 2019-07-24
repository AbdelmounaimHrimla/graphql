import React, { Component } from 'react';
import './css/Book.css';
import { NavLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const BOOK_QUERY = gql`
    query BookQuery($id : Int!) {
        book(id: $id) {
            id
            title
            body
        }
    }
`;
class Book extends Component {
    render() {
        let {id} = this.props.match.params;
        id = parseInt(id);
        return (
            <div className="myBook">
                <div className="inside-myBook">
                    <h1 className="title-myBook">Book : {id}</h1>
                    <button className="btn-back"><NavLink to="/books">Go Back</NavLink></button>
                </div>
                <div className="content-myBook">
                    <Query query={BOOK_QUERY} variables={{id}}>
                        {
                            ({loading, error, data}) => {
                                if(loading) return <h1>It's Loading...</h1>
                                if(error) console.log(error)
                                console.log("BOOOK", data);
                                const {
                                    title,
                                    body
                                } = data.book;
                                return(
                                    <div className="card-myBook">
                                        <h2 className="book-title">{title} </h2>
                                        <p className="book-paragraph">
                                            {body}
                                        </p>
                                        <button className="btn-delete"><NavLink to="/books">Delete</NavLink></button>
                                    </div>
                                );
                            }
                        }

                    </Query>
                </div>
            </div>
        );
    }
}

export default Book;