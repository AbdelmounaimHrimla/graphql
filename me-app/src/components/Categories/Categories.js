import React, { Component } from 'react';
//import './css/Categories.css';
import { NavLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


const CATEGORIES_QUERY = gql`
    query CategoriesQuery {
        categories {
            id
            libelle
        }
    }
`;
class Categories extends Component {
    render() {
        
        return ( 

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
                                                        <button className="btn-edit"><NavLink to='/edit-category/1'>Edit</NavLink></button>
                                                        <button className="btn-delete"><NavLink to='/categories'>Delete</NavLink></button>
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

export default Categories;