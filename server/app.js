const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const exported_from_categories = require('./models/categories');
const exported_from_books = require('./models/books');
const exported_from_authors = require('./models/authors');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
    name : 'RootQuery',
    fields : {
        books : {
            type : new GraphQLList(BooksType),
            books : exported_from_books.RootQueryBook      
        },
        book : {
            type : BooksType,
            args : {id: {type : GraphQLInt}},
            book : exported_from_books.RootQueryBook  
        },
        categories : {
            type : new GraphQLList(CategoriesType),
            categories : exported_from_categories.RootQueryCategory
        },
        category : {
            type : CategoriesType,
            args : {id: {type : GraphQLInt}},
            category : exported_from_categories.RootQueryCategory
        },
        authors : {
            type : new GraphQLList(AuthorsType),
            books : exported_from_authors.RootQueryBook      
        },
        author : {
            type : AuthorsType,
            args : {id: {type : GraphQLInt}},
            book : exported_from_authors.RootQueryBook  
        },       
    }
});


const mutation = new GraphQLObjectType({
    name : 'Mutation',
    fields : {
        createTableCategories : exported_from_categories.createTableCategories,
        createTableBooks : exported_from_books.createTableBooks,
        addCategory : exported_from_categories.addCategory,
        addBook : exported_from_books.addBook,
        createTableAuthors : exported_from_authors.createTableAuthors,
        addAuthor : exported_from_authors.addAuthor

    }
});

app.use('/mygraphiql', graphqlHTTP ({
    graphiql : true,
    schema : new GraphQLSchema({
        query : RootQuery,
        mutation
    })
}));




const port = 7000;
app.listen(port, () => 
    console.log(`Now You Can See  Us On ${port}` )
);