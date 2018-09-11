var express = require('express');
var router = express.Router();

router.get('/delete/:goalId', function(req, res){
  res.render('delete')
})
router.post('/delete/:goalId', function(req, res){
  // delete stuff here
  res.redirect('/')
})

module.exports = router;