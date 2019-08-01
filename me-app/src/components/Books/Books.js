import React, { Component, Fragment } from 'react';
import './css/Books.css';
import { NavLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';


const BOOKS_QUERY = gql`
    query BooksQuery {
        books {
            id
            title
            body
        }
    }
`;

const DELETE_BOOK = gql`
    mutation DeleteBook($id : Int!) {
        deleteBook(id: $id) {
            id
            title
            body
        }
    }
`;
class Books extends Component {
    render() {
        
        return ( 
            <Fragment>
            <div className="myBooks">     
                    <div className="inside-books">
                        <h1 className="title-books">Books</h1>
                        <button className="btn-new"><NavLink to='/add-book'>+ New Book</NavLink></button>
                    </div>
                    <div className="content-books">
                        <table className="table-books">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>TITLE</th>
                                    <th>BODY</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            <Query query={BOOKS_QUERY}>
                                {
                                    ({loading, error, data}) => {
                                        if(loading) return <tr><td>loading...</td></tr>
                                        if(error) console.log(error)
                                        console.log("DATA SHOULD BE => ", data);
                                        return (
                                            data.books.map(book => (
                                                <tr key={book.id}>
                                                    <td>{book.id}</td>
                                                    <td>{book.title}</td>
                                                    <td>{book.body}</td>
                                                    <td>
                                                        <button className="btn-show"><NavLink to={`/book/${book.id}`}>Show</NavLink></button>
                                                        <button className="btn-edit"><NavLink to='/edit-book/1'>Edit</NavLink></button>
                                                        <Mutation mutation={DELETE_BOOK}>
                                                            {
                                                                (deleteBook, {loading, error}) => {
                                                                    return (
                                                                        <button 
                                                                        className="btn-delete" 
                                                                        onClick={
                                                                            event => {
                                                                                deleteBook({
                                                                                    variables : {
                                                                                        id : parseInt(book.id)
                                                                                    }
                                                                                })
                                                                            }
                                                                        }
                                                                        >Delete</button>
                                                                    )
                                                                }
                                                            }
                                                        </Mutation>
                                                    </td>
                                                </tr>
                                            ))
                                        )
                                        
                                    }
                                }
                            </Query>
                            </tbody>
                        </table>
                    </div> 
                </div>
            </Fragment>
        );
    }
}

export default Books;