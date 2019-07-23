import React, { Component } from 'react';
import './css/AddAuthor.css';
import { NavLink } from 'react-router-dom';
class AddAuthor extends Component {
    render() {
        return (
            <div className="addAuthor">
                <div className="inside-addAuthor">
                    <h1 className="title-addAuthor">New Author</h1>
                    <NavLink to="/authors"><button className="btn-back">Go Back</button></NavLink>
                </div>
                <div className="content-addAuthor">
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
                            <NavLink to="/authors"><button className="btn-add">Add Author</button></NavLink>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddAuthor;