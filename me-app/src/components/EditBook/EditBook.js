import React, { Component } from 'react';
import './css/EditBook.css';
import { NavLink } from 'react-router-dom';
class EditBook extends Component {
    render() {
        return (
            <div className="editBook">
                <div className="inside-editBook">
                    <h1 className="title-editBook">Edit Book</h1>
                    <button className="btn-back"><NavLink to="/books">Go Back</NavLink></button>
                </div>
                <div className="content-editBook">
                    <form className="myForm">
                        <div className="myGroup">
                            <label className="myLabel" htmlFor="title">Title :</label>
                            <input className="myInput" type="text" id="title" required="required" placeholder="Title" />
                        </div>
                        <div className="myGroup">
                            <label className="myLabel" htmlFor="body">Body :</label>
                            <textarea className="myInput" type="text" id="body" required="required" placeholder="Body"></textarea>
                        </div>
                        <div className="">
                            <button className="btn-edit"><NavLink to="/books">Edit Book</NavLink></button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditBook;