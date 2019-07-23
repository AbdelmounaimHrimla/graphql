import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../../components/Home/Home';
import Books from '../../components/Books/Books';
import Authors from '../../components/Authors/Authors';
import AddBook from '../../components/AddBook/AddBook';
import AddAuthor from '../../components/AddAuthor/AddAuthor';
import Book from '../../components/Book/Book';
import Author from '../../components/Author/Author';
import EditBook from '../../components/EditBook/EditBook';
import EditAuthor from '../../components/EditAuthor/EditAuthor';





class Blog extends Component {
    render() {
        return (
            <div className="myBlog">
                <NavBar />
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/books" component={Books} />
                    <Route path="/authors" component={Authors} />
                    <Route path="/add-book" component={AddBook} />
                    <Route path="/add-author" component={AddAuthor} />
                    <Route path="/book/1" component={Book} />
                    <Route path="/author/1" component={Author} />
                    <Route path="/edit-book/1" component={EditBook} />
                    <Route path="/edit-author/1" component={EditAuthor} />
                </Switch>    
            </div>
        );
    }
}

export default Blog;