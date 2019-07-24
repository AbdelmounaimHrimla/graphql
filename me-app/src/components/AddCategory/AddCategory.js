import React, { Component } from 'react';
//import './css/AddCategory.css';
import { NavLink } from 'react-router-dom';
class AddCategory extends Component {
    render() {
        return (
            <div className="addCategory">
                <div className="inside-addCategory">
                    <h1 className="title-addCategory">New Category</h1>
                    <NavLink to="/authors"><button className="btn-back">Go Back</button></NavLink>
                </div>
                <div className="content-addCategory">
                    <form className="myForm">
                        <div className="myGroup">
                            <label className="myLabel" htmlFor="libelle">Libelle :</label>
                            <input className="myInput" type="text" id="libelle" required="required" placeholder="Libelle" />
                        </div>
                        <div className="">
                            <NavLink to="/categories"><button className="btn-add">Add Category</button></NavLink>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddCategory;