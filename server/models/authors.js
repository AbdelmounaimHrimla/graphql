
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

//Table Author
AuthorsType = new GraphQLObjectType({
    name : 'Author',
    fields : () => ({
        id : {type : GraphQLInt},
        firstName : {type : GraphQLString},
        lastName : {type : GraphQLString},
        age : {type : GraphQLInt},

    })
});


module.exports.RootQueryAuthor = new GraphQLObjectType({
    name : 'RootQueryAuthor',
    fields : {
        authors : {
            resolve(parent, args) {
                return new Promise(
                    function(resolve, reject) {
                        var selectAuthors = "select * from authors";
                        connection.query(selectAuthors, function(error, result) {
                            if(error){
                              return reject(error);
                            } else {
                              return resolve(result);
                            }

                        });
                    }   
                )
                
            }
        },
        author : {
          type : AuthorsType,
          args : {id: {type : GraphQLInt}},
            resolve(parent, args) {
                return new Promise(
                    function(resolve, reject) {
                        var selectAuthor = "SELECT * FROM authors WHERE id = " + args.id;
                        connection.query(selectAuthor, args.id, function(error, result) {
                            if(error){
                              return reject(error);
                            } else {
                              console.log(result);
                              return resolve(result[0]);
                            }

                        });
                    }   
                )
                
            }
        }
    }
});


module.exports.createTableAuthors = {
    type : BooksType,
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
        id : {type : new GraphQLNonNull(GraphQLInt)},
        firstName : {type : new GraphQLNonNull(GraphQLString)},
        lastName : {type : new GraphQLNonNull(GraphQLString)},
        age : {type : new GraphQLNonNull(GraphQLInt)},
    },
    resolve(parent, args) {
        var myValues = {
            id : args.id,
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

