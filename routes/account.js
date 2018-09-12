var express = require('express');
var router = express.Router();

router.get('/account/:username/:data', function(req, res){
  params = {
    'username': req.params.username,
    'data': req.params.data
  }
  res.render('account', params)
})

router.post('/account', function(req, res){
  // update account stuff
  res.redirect('/account')
})

module.exports = router;
