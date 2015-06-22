var express = require('express');
var router = express.Router();

var member = {
  taro:"yamada",
  hanako:"flower"
};



/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.login==true)res.redirect("/login");
  res.render('index');

});

router.post('/login', function(req, res, next) {
  var user = req.body.user;
  var password = req.body.password;
  var pass_member = member[user];

  if(pass_member==password){
    req.session.login = true;
    req.session.name = user;
    req.session.msg = '"'+user+'"でログインしました';
  }else{
    req.session.login = false;
    req.session.msg = "ログインに失敗しました";
  };

  res.render('login',{msg:req.session.msg});

});

router.get('/login', function(req, res, next) {
  if(req.session.login==true){
    res.set('Content-Type', 'text/html');
    res.status(200);
    res.render("login",{msg:req.session.msg});
  }else{
    res.redirect("/");
  }


});


router.get("/1",function(req,res,next){


  var cookie = req.cookies.cookie_name;
  if(cookie == req.session.value){
    res.send("認証成功");
  }else{
    res.send("認証失敗");
  };

});

module.exports = router;
