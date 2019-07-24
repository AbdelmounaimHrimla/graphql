const express = require('express');
const app = express();
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const exported_from_categories = require('./models/categories');
const exported_from_books = require('./models/books');
const exported_from_authors = require('./models/authors');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
    name : 'RootQuery',
    fields : {
        books : exported_from_books.books,
        book : exported_from_books.book,
        categories : exported_from_categories.categories,
        category : exported_from_categories.category,
        authors : exported_from_authors.authors,
        author : exported_from_authors.author,
    }
});


const mutation = new GraphQLObjectType({
    name : 'Mutation',
    fields : {
        createTableCategories : exported_from_categories.createTableCategories,
        createTableBooks : exported_from_books.createTableBooks,
        addCategory : exported_from_categories.addCategory,
        addBook : exported_from_books.addBook,
        deleteBook : exported_from_books.deleteBook,
        updateBook : exported_from_books.updateBook,
        createTableAuthors : exported_from_authors.createTableAuthors,
        addAuthor : exported_from_authors.addAuthor,
        deleteAuthor : exported_from_authors.deleteAuthor,
        updateAuthor : exported_from_authors.updateAuthor,
        updateCategory : exported_from_categories.updateCategory,
        deleteCategory : exported_from_categories.deleteCategory,

    }
});
app.use(cors());
app.options('*', cors());

app.use('/mygraphiql', graphqlHTTP ({
    graphiql : true,
    schema : new GraphQLSchema({
        query : RootQuery,
        mutation
    })
}));


  

const port = 8000;
app.listen(port, () =>  
    {
        console.log(`Now You Can See  Us On ${port}` ),
        console.log(`---------------------------` )
    }   
);