var express = require('express');
var router = express.Router();
var db = require('monk')('34.222.253.29:27017/AccountabiliBuddy');
var loginTable = db.get('loginTable');

router.get('/sign-up', function(req, res){
  res.render('sign-up')
})
router.post('/sign-up', function(req, res){
  console.log(req.body)
  if (req.body.password === req.body.confirm)
  new_user = {
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    goals: []
  }
  loginTable.insert(new_user)
  res.redirect('/')
})

module.exports = router;