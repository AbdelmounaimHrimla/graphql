import React, { Component } from 'react';
import './css/Home.css';
import { NavLink } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div className="myHome">
                <div className="inside-myHome">
                    <h1 className="title-myHome">Home</h1>
                    <span className="user-myHome">Hrimla</span>
                </div>
                <div className="content-myHome">
                    <NavLink to="/books">
                        <div className="card home-books">
                            Books
                        </div>
                    </NavLink>
                    <NavLink to="/authors">
                        <div className="card home-authors">
                            Authors
                        </div>
                    </NavLink>
                    <NavLink to="/add-book">
                        <div className="card home-addBook">
                            New Book
                        </div>
                    </NavLink>
                    <NavLink to="/add-author">
                        <div className="card home-addAuthor">
                            New Author
                        </div>
                    </NavLink>
                    <NavLink to="/categories">
                        <div className="card home-categories">
                            Categories
                        </div>
                    </NavLink>
                    <NavLink to="/add-category">
                        <div className="card home-addCategory">
                            New Category
                        </div>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Home;