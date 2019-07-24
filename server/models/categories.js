const express = require('express');
const router = express.Router();
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

//Table Categories
CategoriesType = new GraphQLObjectType({
    name : 'Category',
    fields : () => ({
        id : {type : GraphQLInt},
        libelle : {type : GraphQLString}
    })
});


module.exports.categories = {
    type : GraphQLList(CategoriesType),
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
              });
            }
        )
    }
}

module.exports.category = {
    type : CategoriesType,
    args : {
        id : {type : GraphQLInt}
    },
    resolve(parent, args) {
        return new Promise(
            function(resolve, reject) {
                var id = args.id;
                var selectCategory = "SELECT * FROM expressdb.categories WHERE id = " +id;
                connection.query(selectCategory,  id, function(error, result) {
                    if(error){
                        return reject(error);
                    } else {
                        console.log(result[0]);
                        return resolve(result[0]);
                    }
                })
            }
        )
    }
}

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

module.exports.deleteCategory = {
    type : CategoriesType,
    args : {
        id : {type : new GraphQLNonNull(GraphQLInt)}
    },
    resolve(parent, args) {
        var  id = args.id
        return new Promise(
            function(resolve, reject){
                var deleteCategoryQuery = "DELETE FROM categories WHERE id = " + id;
                connection.query(deleteCategoryQuery, id, function(error, result){
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

module.exports.updateCategory = {
    type : CategoriesType,
    args : {
        id : {type : new GraphQLNonNull(GraphQLInt)},
        libelle : {type : new GraphQLNonNull(GraphQLString)}
    },
    resolve(parent, args) {
        var  id = args.id;
        var  libelle = args.libelle;
        return new Promise(
            function(resolve, reject){
                connection.query("UPDATE categories SET libelle = ? WHERE id = ?", [libelle, id], function(error, result){
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
