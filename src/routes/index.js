var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title:"Hello World",body:"こんにちは"});
});


router.post("/create",function(req,res,next){
  res.render("form",{value:req.body.name1});
});

module.exports = router;
