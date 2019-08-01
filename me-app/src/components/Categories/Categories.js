import React, { Component, Fragment } from 'react';
import './css/Categories.css';
import { NavLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';


const CATEGORIES_QUERY = gql`
    query CategoriesQuery {
        categories {
            id
            libelle
        }
    }
`;

const DELETE_CATEGORY = gql`
    mutation DeleteCategory($id : Int!) {
        deleteCategory(id: $id) {
            id
            libelle
        }
    }
`;
class Categories extends Component {
    render() {
        
        return ( 
            <Fragment>
                <div className="myCategories">     
                    <div className="inside-categories">
                        <h1 className="title-categories">Categories</h1>
                        <button className="btn-new"><NavLink to='/add-category'>+ New Category</NavLink></button>
                    </div>
                    <div className="content-categories">
                        <table className="table-categories">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>LIBELLE</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            <Query query={CATEGORIES_QUERY}>
                                {
                                    ({loading, error, data}) => {
                                        if(loading) return <tr><td>loading...</td></tr>
                                        if(error) console.log(error)
                                        console.log("DATA SHOULD BE => ", data);
                                        return (
                                            data.categories.map(category => (
                                                <tr key={category.id}>
                                                    <td>{category.id}</td>
                                                    <td>{category.libelle}</td>
                                                    <td>
                                                        <button className="btn-show"><NavLink to={`/category/${category.id}`}>Show</NavLink></button>
                                                        <button className="btn-edit"><NavLink to={`/edit-category/${category.id}`}>Edit</NavLink></button>
                                                        <Mutation mutation={DELETE_CATEGORY}>
                                                            {
                                                                (deleteCategory, {loading, error}) => {
                                                                    return (
                                                                        <button 
                                                                        className="btn-delete" 
                                                                        onClick={
                                                                            event => {
                                                                                deleteCategory({
                                                                                    variables : {
                                                                                        id : parseInt(category.id)
                                                                                    }
                                                                                })
                                                                            }
                                                                        }
                                                                        ><NavLink to='/categories'>Delete</NavLink></button>

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

export default Categories;