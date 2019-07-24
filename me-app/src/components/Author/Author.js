import React, { Component, Fragment } from 'react';
import './css/Author.css';
import { NavLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const AUTHOR_QUERY = gql`
    query AuthorQuery($id : Int!) {
        author(id: $id) {
            id
            firstName
            lastName
            age
        }
    }
`;
class Author extends Component {
    render() {
        let {id} = this.props.match.params;
        id = parseInt(id);
        return (
            <div className="myAuthor">
                <div className="inside-myAuthor">
                    <h1 className="title-myAuthor">Author</h1>
                    <NavLink to="/authors"><button className="btn-back">Go Back</button></NavLink>
                </div>
                <div className="content-myAuthor">
                <Query query={AUTHOR_QUERY} variables={{id}}>
                        {
                            ({loading, error, data}) => {
                                if(loading) return <h1>It's Loading...</h1>
                                if(error) console.log(error)
                                console.log("Author", data);
                                const {
                                    firstName,
                                    lastName,
                                    age
                                } = data.author;
                                return(
                                    <Fragment>
                                    <table className="table-myAuthor">
                                        <tbody>
                                            <tr className="myGroup">
                                                <td className="label">First Name :</td>
                                                <td className="span">{firstName}</td>
                                            </tr>
                                            <tr className="myGroup">
                                                <td className="label">Last Name :</td>
                                                <td className="span">{lastName}</td>
                                            </tr>
                                            <tr className="myGroup">
                                                <td className="label">Age :</td>
                                                <td className="span">{age} ans</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <NavLink to="/authors"><button className="btn-delete">Delete</button></NavLink>
                                    </Fragment>
                                );
                            }
                        }

                    </Query>

                </div>
            </div>
        );
    }
}

export default Author;