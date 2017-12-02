var orm  = require("./../config/orm.js");


var burger = {


    DevourBurger:function(id, cb){
        orm.updateOne(id,function(res){
            cb(res);
        });
        
    },


    GetAll:function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },

    InsertNewBurger:function(nameOfBurger,cb){
        orm.insertOne(nameOfBurger,function(res){
            cb(res);
        });

    }
};

module.exports = burger;