import React, { Component } from 'react';
import './css/AddBook.css';
import { NavLink } from 'react-router-dom';
class AddBook extends Component {
    render() {
        return (
            <div className="addBook">
                <div className="inside-addBook">
                    <h1 className="title-addBook">New Book</h1>
                    <NavLink to="/books"><button className="btn-back">Go Back</button></NavLink>
                </div>
                <div className="content-addBook">
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
                            <NavLink to="/books"><button className="btn-add">Add Book</button></NavLink>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddBook;