import React, { Component } from 'react';
import './css/EditAuthor.css';
import { NavLink } from 'react-router-dom';
class EditAuthor extends Component {
    render() {
        return (
            <div className="editAuthor">
                <div className="inside-editAuthor">
                    <h1 className="title-editAuthor">Edit Author</h1>
                    <button className="btn-back"><NavLink to="/authors">Go Back</NavLink></button>
                </div>
                <div className="content-editAuthor">
                    <form className="myForm">
                        <div className="myGroup">
                            <label className="myLabel" htmlFor="firstName">First Name :</label>
                            <input className="myInput" type="text" id="firstName" required="required" placeholder="First Name" />
                        </div>
                        <div className="myGroup">
                            <label className="myLabel" htmlFor="lastName">Last Name :</label>
                            <input className="myInput" type="text" id="lastName" required="required" placeholder="Last Name" />
                        </div>
                        <div className="myGroup">
                            <label className="myLabel" htmlFor="age">Age :</label>
                            <input className="myInput" type="text" id="age" required="required" placeholder="age" />
                        </div>
                        <div className="">
                            <button className="btn-edit"><NavLink to="/authors">Edit Author</NavLink></button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditAuthor;