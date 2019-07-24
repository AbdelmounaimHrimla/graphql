import React, { Component } from 'react';
import './css/Authors.css'; 
import { NavLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const AUTHORS_QUERY = gql`
    query AuthorsQuery {
        authors {
            id
            firstName
            lastName
            age
        }
    }
`;
class Authors extends Component {
    render() {
        return (
            <div className="myAuthors">
                <div className="inside-authors">
                    <h1 className="title-books">Authors</h1>
                    <NavLink to='/add-author'><button className="btn-new">+ New Author</button></NavLink>
                </div>
                <div className="content-authors">
                    <table className="table-authors">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>FIRST NAME</th>
                                <th>LAST NAME</th>
                                <th>AGE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                        <Query query={AUTHORS_QUERY}>
                            {
                                ({loading, error, data}) => {
                                    if(loading) return <tr><td>loading...</td></tr>
                                    if(error) console.log(error)
                                    console.log("DATA SHOULD BE => ", data);
                                    return (
                                        data.authors.map(author => (
                                            <tr key={author.id}>
                                                <td>{author.id}</td>
                                                <td>{author.firstName}</td>
                                                <td>{author.lastName}</td>
                                                <td>{author.age}</td>
                                                <td>
                                                    <button className="btn-show"><NavLink to={`/author/${author.id}`}>Show</NavLink></button>
                                                    <button className="btn-edit"><NavLink to='/edit-author/1'>Edit</NavLink></button>
                                                    <button className="btn-delete"><NavLink to='/authors'>Delete</NavLink></button>
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
        );
    }
}

export default Authors;