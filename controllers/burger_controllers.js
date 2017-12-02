var express = require("express");

var router = express.Router();

var burger = require("./../models/burger.js");

router.get("/",function(req,res){
    burger.GetAll(function(data){
        var hbsObject = {
            burgers: data
        };

        res.render("index",hbsObject);
    });
});

router.post("/api/burgers",function(req,res){
    console.log(req);
    burger.InsertNewBurger(req.body.burger_name,function(result){

        res.json({id:result.insertID});
    })
});

router.put("/api/burgers/:id",function(req,res){

        burger.DevourBurger(req.params.id,function(result){
            if(result.changedRows === 0){
                return res.status(400).end();
            }else{
                res.status(200).end();
            }
        });

});

module.exports = router;