// DEPENDENCIES
const connection = require("./connection");

// CREATE THE ORM
const orm = {

    // SELECT ALL BURGERS
    selectAll: function (tableInput, callback) {

        let queryString = `SELECT * FROM ${tableInput}`;

        connection.query(queryString, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },

    // ADD A NEW BURGER
    insertOne: function (table, column, values, callback) {

        let queryString = `INSERT INTO ?? (??) VALUES (?)`;
        
        connection.query(queryString, [table,column,values], function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    
    // DEVOUR A CURRENT BURGER
    updateOne: function (table, column, condition, values, callback) {

        let queryString = `UPDATE ?? SET ??=? WHERE id=?`;
        
        connection.query(queryString, [table,column,condition,values], function (error, result) {
            if (error) throw error;
            callback(result);
        });
    }
}

// EXPORTS
module.exports = orm;
