var connection = require("./connection.js");

var orm = {

    selectAll: function(cb){

        connection.query("SELECT * FROM burgers",function(err,data){

            if(err) throw err;

            cb(data);
        });

    },

    insertOne:function(burgerName,cb){


            connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?,?)",[burgerName, false], 
            
            function(err,result){
                if(err) throw err;

                cb(result)
            });
       

    },

    updateOne:function(id,cb){

        
            connection.query("UPDATE burgers SET devoured = true WHERE id = ? ",[id],function(err,result){
                if(err) throw err;
                
                cb(result);
            });

    }

};

module.exports = orm;