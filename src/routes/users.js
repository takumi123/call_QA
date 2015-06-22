var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var date = new Date();
  res.send(date.now());
});

router.get("/aaa",function(req,res,next){
  res.send("index");
});

module.exports = router;//requireしたファイルではrouterオブジェクトが渡される。
