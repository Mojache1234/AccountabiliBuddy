var express = require('express');
var router = express.Router();

router.get('/new-goal', function(req, res){
  res.render('new-goal')
})
router.post('/new-goal', function(req, res){
  // add new goal to db here
  res.redirect('/')
})

module.exports = router;