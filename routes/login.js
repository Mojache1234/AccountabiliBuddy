var express = require('express');
var router = express.Router();

router.get('/login', function(req, res) {
  res.render('login')
})
router.post('/login', function(req, res){
  // handle form data here
  res.redirect('/')
})

module.exports = router;