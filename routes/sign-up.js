var express = require('express');
var router = express.Router();

router.get('/sign-up', function(req, res){
  res.render('sign-up')
})
router.post('/sign-up', function(req, res){
  // handle form data here
  res.redirect('/')
})

module.exports = router;