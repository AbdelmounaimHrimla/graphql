import React, { Component } from 'react';
import './css/Authors.css'; 
import { NavLink } from 'react-router-dom';
class Authors extends Component {
    render() {
        return (
            <div className="myAuthors">
                <div className="inside-authors">
                    <h1 className="title-books">Authors</h1>
                    <NavLink to='/add-author'><button className="btn-new">+ New Author</button></NavLink>
                </div>
                <div className="content-authors">
                    <table className="table-authors">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>FIRST NAME</th>
                                <th>LAST NAME</th>
                                <th>AGE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>First Name 1</td>
                                <td>Last Name 1</td>
                                <td>11</td>
                                <td>
                                    <NavLink to='/author/1'><button className="btn-show">Show</button></NavLink>
                                    <NavLink to='/edit-author/1'><button className="btn-edit">Edit</button></NavLink>
                                    <NavLink to='/authors'><button className="btn-delete">Delete</button></NavLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Authors;