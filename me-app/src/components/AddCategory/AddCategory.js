import React, { Component } from 'react';
import './css/AddCategory.css';
import { NavLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';


const ADD_CATEGORY = gql`
    mutation AddCategory($libelle: String!){
        addCategory(libelle: $libelle){
            libelle
        }
    }
`;
class AddCategory extends Component {
    state = {
        libelle : ''
    }
    render() {
        return (
            <div className="addCategory">
                <div className="inside-addCategory">
                    <h1 className="title-addCategory">New Category</h1>
                    <NavLink to="/categories"><button className="btn-back">Go Back</button></NavLink>
                </div>
                <Mutation mutation={ADD_CATEGORY} >
                    {
                        (addCategory, {data}) => (
                            <div className="content-addCategory">
                                <form className="myForm"
                                onSubmit={
                                    (event) => {
                                        event.preventDefault();
                                        addCategory({
                                            variables : {
                                                libelle : this.state.libelle
                                            }
                                        })
                                    }
                                }
                                >
                                    <div className="myGroup">
                                        <label className="myLabel" htmlFor="libelle">Libelle :</label>
                                        <input 
                                        className="myInput" 
                                        type="text" id="libelle" 
                                        required="required" 
                                        placeholder="Libelle" 
                                        value = {this.state.libelle}
                                        onChange={
                                            event => this.setState({libelle : event.target.value})
                                        }
                                        />
                                    </div>
                                    <div className="">
                                        <button type="submit" className="btn-add">Add Category</button>
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

export default AddCategory;