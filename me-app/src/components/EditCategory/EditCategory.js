import React, { Component } from 'react';
//import './css/EditCategory.css';
import { NavLink } from 'react-router-dom';
class EditCategory extends Component {
    render() {
        return (
            <div className="editCategory">
                <div className="inside-editCategory">
                    <h1 className="title-editCategory">Edit Category</h1>
                    <button className="btn-back"><NavLink to="/categories">Go Back</NavLink></button>
                </div>
                <div className="content-editCategory">
                    <form className="myForm">
                        <div className="myGroup">
                            <label className="myLabel" htmlFor="libelle">Libellle :</label>
                            <input className="myInput" type="text" id="libelle" required="required" placeholder="Libellle" />
                        </div>
                        <div className="">
                            <button className="btn-edit"><NavLink to="/authors">Edit Category</NavLink></button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditCategory;