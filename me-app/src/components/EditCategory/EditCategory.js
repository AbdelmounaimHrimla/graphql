import React, { Component, Fragment } from 'react';
import './css/EditCategory.css';
import { NavLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

const CATEGORY_QUERY = gql`
    query CategoryQuery($id : Int!) {
        category(id: $id) {
            id
            libelle
        }
    }
`;
const UPDATE_CATEGORY = gql`
    mutation UpdateCategory($id: Int!, $libelle: String! ) {
        updateCategory(id: $id, libelle: $libelle) {
            id
            libelle
        }
    }
`;
class EditCategory extends Component {
    state = {
        id:'',
        libelle : ''
    }
    render() {
        let {id} = this.props.match.params;
        id = parseInt(id);
        return (
            <Fragment>
                 <div className="editCategory">
                <div className="inside-editCategory">
                    <h1 className="title-editCategory">Edit Category</h1>
                    <button className="btn-back"><NavLink to="/categories">Go Back</NavLink></button>
                </div>
                <div className="content-editCategory">
                <Query query={CATEGORY_QUERY} variables={{id}}>
                
                    {
                        ({loading, error, data}) => {
                            if(loading) return <h1>Loading...</h1>
                            if(error) return error
                            console.log(data);
                            const {
                                id,
                                libelle
                            } = data.category
                            
                            return (
                                <form className="myForm"
                                onSubmit={
                                    (event) => {
                                        event.preventDefault();
                                    }
                                }
                                >
                                    <div className="myGroup">
                                        <label className="myLabel" htmlFor="libelle">Libellle :</label>
                                        <input 
                                        className="myInput" 
                                        type="text" 
                                        id="libelle" 
                                        value={libelle}
                                        required="required" 
                                        placeholder="Libellle"
                                        onChange={
                                            event => this.setState({libelle: event.target.value})
                                        }                                        
                                        />    
                                    </div>
                        <Mutation mutation={UPDATE_CATEGORY}>
                            {
                                (updateCategory, {loading, error}) => {
                                    return (
                                         <div className="">
                                            <button
                                            type="submit"  
                                            className="btn-edit"
                                            onClick={
                                                event => {
                                                    updateCategory({
                                                        variables: {
                                                            id: parseInt(id),
                                                            libelle : this.state.libelle
                                                        }
                                                    })
                                                }
                                            } 
                                            >Edit Book</button>
                                        </div>
                                    )
                                }
                            }

                        </Mutation>
                       

                    </form>
                            )
                        }
                    }
                    
               </Query> 
               </div>
            </div>
            </Fragment>
        );
    }
}

export default EditCategory;