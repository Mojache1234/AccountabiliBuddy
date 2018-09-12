var express = require('express');
var router = express.Router();
var db = require('monk')('34.222.253.29:27017/AccountabiliBuddy');
var loginTable = db.get('loginTable');

const createCookieAndRedirect = (req, res, data) => {
  req.session.data = data
  req.session.save((error) => {
    if (error) {
      console.error('Error saving session')
      throw error
    } else {
      res.redirect('/account')
    }
  })
}

router.get('/login', function(req, res) {
  res.render('login')
})

router.post('/login', function(req, res, next) {
  loginTable.findOne(
    {
      'email': req.body.email,
      'password': req.body.password
    }, {}, (err, results) => {
      console.log('results: ', results)
      if (err) res.json(500, err)
      else if (results) {
        data = {
          'email': results.email,
          'name': results.name,
          'goals': results.goals
        }
        req.session.data = data
        res.redirect('/')
      } else {
        res.redirect('/')
      }
    })
})

module.exports = router;
