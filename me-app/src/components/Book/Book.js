import React, { Component } from 'react';
import './css/Book.css';
import { NavLink } from 'react-router-dom';
class Book extends Component {
    render() {
        return (
            <div className="myBook">
                <div className="inside-myBook">
                    <h1 className="title-myBook">Book</h1>
                    <button className="btn-back"><NavLink to="/books">Go Back</NavLink></button>
                </div>
                <div className="content-myBook">
                    <div className="card-myBook">
                        <h2 className="book-title">Title Book 1</h2>
                        <p className="book-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non 
                        risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
                         ultricies sed, dolor. 
                        </p>
                        <button className="btn-delete"><NavLink to="/books">Delete</NavLink></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;