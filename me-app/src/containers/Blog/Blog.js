import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../../components/Home/Home';
import Books from '../../components/Books/Books';
import Authors from '../../components/Authors/Authors';
import Categories from '../../components/Categories/Categories';
import AddCategory from '../../components/AddCategory/AddCategory';
import AddBook from '../../components/AddBook/AddBook';
import AddAuthor from '../../components/AddAuthor/AddAuthor';
import Book from '../../components/Book/Book';
import Author from '../../components/Author/Author';
import EditBook from '../../components/EditBook/EditBook';
import EditCategory from '../../components/EditCategory/EditCategory';
import EditAuthor from '../../components/EditAuthor/EditAuthor';





class Blog extends Component {
    render() {
        return (
            <div className="myBlog">
                <NavBar />
                <Switch>
                    <Route path="/" component={Home} exact/>

                    <Route path="/books" component={Books} />
                    <Route path="/add-book" component={AddBook} />
                    <Route path="/edit-book/1" component={EditBook} />
                    <Route path="/book/:id" component={Book} />

                    <Route path="/authors" component={Authors} />        
                    <Route path="/add-author" component={AddAuthor} />
                    <Route path="/edit-author/1" component={EditAuthor} />   
                    <Route path="/author/:id" component={Author} />

                    <Route path="/categories" component={Categories}/>
                    <Route path="/add-category" component={AddCategory} />
                    <Route path="/edit-category/1" component={EditCategory} />
                    
                </Switch>    
            </div>
        );
    }
}

export default Blog;