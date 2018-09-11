var express = require('express');
var router = express.Router();

router.get('/account', function(req, res){
  res.render('account')
})
router.post('/account', function(req, res){
  // update account stuff
  res.redirect('/account')
})

module.exports = router;