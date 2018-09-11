var express = require('express');
var router = express.Router();

router.get('/update/:goalId', function(req, res){
  res.render('update')
})
router.post('/update/:goalId', function(req, res){
  // handle form data here
  res.redirect('/')
})

module.exports = router;