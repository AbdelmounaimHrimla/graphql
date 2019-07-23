
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

//Table Category
BooksType = new GraphQLObjectType({
    name : 'Book',
    fields : () => ({
        id : {type : GraphQLInt},
        title : {type : GraphQLString},
        body : {type : GraphQLString}
    })
});


module.exports.RootQueryBook = new GraphQLObjectType({
    name : 'RootQueryBook',
    fields : {
        books : {
            resolve(parent, args) {
                return new Promise(
                    function(resolve, reject) {
                        var selectBooks = "SELECT * FROM expressdb.books";
                        connection.query(selectBooks, function(error, result) {
                            if(error){
                              return reject(error);
                            } else {
                                console.log(result);
                              return resolve(result);
                            }

                        });
                    }   
                )
                
            }
        },
        book : {
          type : BooksType,
          args : {id: {type : GraphQLInt}},
            resolve(parent, args) {
                return new Promise(
                    function(resolve, reject) {
                        var selectBook = "SELECT * FROM expressdb.books WHERE id = " +args.id;
                        connection.query(selectBook, args.id, function(error, result) {
                            if(error){
                              return reject(error);
                            } else {
                              
                              return resolve(result);
                            }

                        });
                    }   
                )
                
            }
        }
    }
});


module.exports.createTableBooks = {
    type : BooksType,
    resolve(parent, args) {
        return new Promise(
            function(resolve, reject){
                var createTableBooksQuery = "CREATE TABLE expressdb.booksdd(id INT PRIMARY KEY, title VARCHAR(50), body VARCHAR(250))";
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

