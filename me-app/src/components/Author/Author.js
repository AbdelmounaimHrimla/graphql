import React, { Component } from 'react';
import './css/Author.css';
import { NavLink } from 'react-router-dom';
class Author extends Component {
    render() {
        return (
            <div className="myAuthor">
                <div className="inside-myAuthor">
                    <h1 className="title-myAuthor">Author</h1>
                    <NavLink to="/authors"><button className="btn-back">Go Back</button></NavLink>
                </div>
                <div className="content-myAuthor">
                    <table className="table-myAuthor">
                        <tbody>
                            <tr className="myGroup">
                                <td className="label">First Name :</td>
                                <td className="span">Abdelmounaim</td>
                            </tr>
                            <tr className="myGroup">
                                <td className="label">Last Name :</td>
                                <td className="span">Hrimla</td>
                            </tr>
                            <tr className="myGroup">
                                <td className="label">Age :</td>
                                <td className="span">26 ans</td>
                            </tr>
                        </tbody>
                    </table>
                    <NavLink to="/authors"><button className="btn-delete">Delete</button></NavLink>

                </div>
            </div>
        );
    }
}

export default Author;