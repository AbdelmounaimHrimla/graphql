
const connection = require('./connect.js');
const graphql = require('graphql');
const {
   
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType
} = graphql;

//Table Books
BooksType = new GraphQLObjectType({
    name : 'Book',
    fields : () => ({
        id : {type : GraphQLInt},
        title : {type : GraphQLString},
        body : {type : GraphQLString}
    })
});


module.exports.books = {
    type : GraphQLList(BooksType),
    resolve(parent, args) {
        return new Promise(
            function(resolve, reject){
                var selectBooks = "SELECT * FROM expressdb.books";
                connection.query(selectBooks, function(error, result){
                    if(error) {
                        return reject(error);
                    } else {
                        console.log(result);
                        return resolve(result);
                    }
                });
            }   
        )
    }
}

module.exports.book = {
    type : BooksType,
    args : {
        id : {type : GraphQLInt}
    },
    resolve(parent, args) {
        return new Promise(
            function(resolve, reject){
                var id = args.id;
                var selectBook = "SELECT * FROM expressdb.books WHERE id = " +id;
                connection.query(selectBook, id, function(error, result){
                    if(error) {
                        return reject(error);
                    } else {
                        console.log(result[0]);
                        return resolve(result[0]);
                    }
                });
            }   
        )
    }
}
    


module.exports.createTableBooks = {
    type : BooksType,
    resolve(parent, args) {
        return new Promise(
            function(resolve, reject){
                var createTableBooksQuery = "CREATE TABLE expressdb.books(id INT PRIMARY KEY, title VARCHAR(50), body VARCHAR(250))";
                connection.query(createTableBooksQuery, function(error, result){
                    if(error) {
                        return reject(error);
                    } else {
                        return resolve(result);
                    }
                });
            }   
        )
    }
}

module.exports.addBook = {
    type : BooksType,
    args : {
        id : {type : new GraphQLNonNull(GraphQLInt)},
        title : {type : new GraphQLNonNull(GraphQLString)},
        body : {type : new GraphQLNonNull(GraphQLString)}
    },
    resolve(parent, args) {
        var myValues = {
            id : args.id,
            title : args.title,
            body : args.body
        }
        return new Promise(
            function(resolve, reject){
                var addBookQuery = "INSERT INTO expressdb.books SET ?";
                connection.query(addBookQuery, myValues, function(error, result){
                    if(error) {
                        return reject(error);
                    } else {
                        return resolve(result);
                    }
                });
            }   
        )
    }
}

module.exports.deleteBook = {
    type : BooksType,
    args : {
        id : {type : new GraphQLNonNull(GraphQLInt)}
    },
    resolve(parent, args) {
        var  id = args.id
        return new Promise(
            function(resolve, reject){
                var deleteBookQuery = "DELETE FROM books WHERE id = " + id;
                connection.query(deleteBookQuery, id, function(error, result){
                    if(error) {
                        return reject(error);
                    } else {
                        return resolve(result);
                    }
                });
            }   
        )
    }
}

module.exports.updateBook = {
    type : BooksType,
    args : {
        id : {type : new GraphQLNonNull(GraphQLInt)},
        title : {type : new GraphQLNonNull(GraphQLString)},
        body : {type : new GraphQLNonNull(GraphQLString)}
    },
    resolve(parent, args) {
        var  id = args.id;
        var  title = args.title;
        var  body = args.body;
        return new Promise(
            function(resolve, reject){
                connection.query("UPDATE books SET title = ?, body = ? WHERE id = ?", [title, body, id], function(error, result){
                    if(error) {
                        return reject(error);
                    } else {
                        return resolve(result);
                    }
                });
            }   
        )
    }
}
