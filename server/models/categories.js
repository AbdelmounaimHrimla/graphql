
const mysql = require('mysql');
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
CategoriesType = new GraphQLObjectType({
    name : 'Category',
    fields : () => ({
        id : {type : GraphQLInt},
        libelle : {type : GraphQLString}
    })
});


module.exports.RootQueryCategory = new GraphQLObjectType({
    name : 'RootQueryCategory',
    fields : {
        categories : {
            resolve(parent, args) {
                return new Promise(
                    function(resolve, reject) {
                        var selectCategories = "SELECT * FROM expressdb.categories";
                        connection.query(selectCategories, function(error, result) {
                            if(error){
                                return reject(error);
                            } else {

                                 console.log(result);
                                return resolve(result);

                            }
                        })
                    }
                )
            }
        },
        category : {
          type : CategoriesType,
          args : {id: {type : GraphQLInt}},
            resolve(parent, args) {
                return new Promise(
                    function(resolve, reject) {
                        var selectCategory = "SELECT * FROM expressdb.categories WHERE id = " +args.id;
                        connection.query(selectCategory, args.id, function(error, result) {
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


module.exports.createTableCategories = {
    type : CategoriesType,
    resolve(parent, args) {
        return new Promise(
            function(resolve, reject){
                var createTableCategoriesQuery = "CREATE TABLE expressdb.categories(id INT PRIMARY KEY, libelle VARCHAR(20))";
                connection.query(createTableCategoriesQuery, function(error, result){
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

module.exports.addCategory = {
    type : CategoriesType,
    args : {
        id : {type : new GraphQLNonNull(GraphQLInt)},
        libelle : {type : new GraphQLNonNull(GraphQLString)}
    },
    resolve(parent, args) {
        var myValues = {
            id : args.id,
            libelle : args.libelle
        }
        return new Promise(
            function(resolve, reject){
                var addCategoryQuery = "INSERT INTO expressdb.categories SET ?";
                connection.query(addCategoryQuery, myValues, function(error, result){
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
