const booksType = require('./books');
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

//For Exports A Type
/*module.exports.authorsType = {
    AuthorsType = new GraphQLObjectType({
        name : 'Author',
        fields : () => ({
            id : {type : GraphQLID},
            firstName : {type : GraphQLString},
            lastName : {type : GraphQLString},
            age : {type : GraphQLInt},
            //books : {type : booksType.booksType}
    
        })
    })
}*/
//Table Authors
const AuthorsType = new GraphQLObjectType({
    name : 'Author',
    fields : () => ({
        id : {type : GraphQLID},
        firstName : {type : GraphQLString},
        lastName : {type : GraphQLString},
        age : {type : GraphQLInt},
        //books : {type : booksType.booksType}

    })
});


module.exports.authors = {
    type : GraphQLList(AuthorsType),
    resolve(parent, args) {
        return new Promise(
            function(resolve, reject){
                var selectBooks = "SELECT * FROM expressdb.authors";
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

module.exports.author = {
    type : AuthorsType,
    args : {
        id : {type : GraphQLInt}
    },
    resolve(parent, args) {
        return new Promise(
            function(resolve, reject){
                var id = args.id;
                var selectBook = "SELECT * FROM expressdb.authors WHERE id = " +id;
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


module.exports.createTableAuthors = {
    type : AuthorsType,
    resolve(parent, args) {
        return new Promise(
            function(resolve, reject){
                var createTableAuthorsQuery = "CREATE TABLE authors(id INT PRIMARY KEY, firstName VARCHAR(50), lastName VARCHAR(50), age INT)";
                connection.query(createTableAuthorsQuery, function(error, result){
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

module.exports.addAuthor = {
    type : AuthorsType,
    args : {
        firstName : {type : new GraphQLNonNull(GraphQLString)},
        lastName : {type : new GraphQLNonNull(GraphQLString)},
        age : {type : new GraphQLNonNull(GraphQLInt)},
    },
    resolve(parent, args) {
        var myValues = {
            firstName : args.firstName,
            lastName : args.lastName,
            age : args.age
        }
        return new Promise(
            function(resolve, reject){
                var addAuthorQuery = "INSERT INTO expressdb.authors SET ?";
                connection.query(addAuthorQuery, myValues, function(error, result){
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

module.exports.deleteAuthor = {
    type : AuthorsType,
    args : {
        id : {type : new GraphQLNonNull(GraphQLInt)}
    },
    resolve(parent, args) {
        var  id = args.id
        return new Promise(
            function(resolve, reject){
                var deleteAuthorQuery = "DELETE FROM authors WHERE id = " + id;
                connection.query(deleteAuthorQuery, id, function(error, result){
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

module.exports.updateAuthor = {
    type : AuthorsType,
    args : {
        id : {type : new GraphQLNonNull(GraphQLInt)},
        firstName : {type : new GraphQLNonNull(GraphQLString)},
        lastName : {type : new GraphQLNonNull(GraphQLString)},
        age : {type : new GraphQLNonNull(GraphQLInt)}
    },
    resolve(parent, args) {
        var  id = args.id;
        var  firstName = args.firstName;
        var  lastName = args.lastName;
        var  age = args.age;
        return new Promise(
            function(resolve, reject){
                connection.query("UPDATE authors SET firstName = ?, lastName = ?, age = ? WHERE id = ?", [firstName, lastName, age, id], function(error, result){
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

