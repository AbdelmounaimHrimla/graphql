import React, { Component } from 'react';
import './css/Books.css';
import { NavLink } from 'react-router-dom';
class Books extends Component {
    render() {
        return (
            <div className="myBooks">
                <div className="inside-books">
                    <h1 className="title-books">Books</h1>
                    <button className="btn-new"><NavLink to='/add-book'>+ New Book</NavLink></button>
                </div>
                <div className="content-books">
                    <table className="table-books">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TITLE</th>
                                <th>BODY</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Title 1</td>
                                <td>Body 1</td>
                                <td>
                                    <button className="btn-show"><NavLink to='/book/1'>Show</NavLink></button>
                                    <button className="btn-edit"><NavLink to='/edit-book/1'>Edit</NavLink></button>
                                    <button className="btn-delete"><NavLink to='/books'>Delete</NavLink></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Books;