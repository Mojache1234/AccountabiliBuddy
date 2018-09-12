var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('34.222.253.29:27017/AccountabiliBuddy');
var loginTable = db.get('loginTable');
var session = require('express-session')

router.get('/login', function(req, res) {
  console.log('Hello!')
  db.then(() => { console.log('Connected correctly to server') })
  res.render('login')
})

// router.post('/login', function(req, res){
//   // handle form data here
//   res.redirect('/')
// })

router.post('/login', function(req, res, next) {
  loginTable.find(
    {
      'email': req.body.email,
      'password': req.body.password
    }, {}, (err, docs) => {
      if (err) res.json(500, err)
      else {
        // Create a session
        res.redirect('/account/')
      }
    })
})

module.exports = router;

/* MongoDB Login Page Test */
// router.post('/mongoCreate', (req, res, next) => {
//   var db = req.db;
//   var loginTable = db.get('loginTable');
//
//   loginTable.insert({username: req.body.username, password: req.body.password}, {}, function(err, acc) {
//     params = {
//       username: loginTable.username,
//       password: loginTable.password,
//       data: loginTable.data
//     };
//   });
//
//   res.render('mongoLoginTry', params)
// });
