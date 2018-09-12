var express = require('express');
var router = express.Router();
var appid = "921b848f07654d3288ba264ea63aaa58"



router.get('/goal/:goalId', function(req, res){
  const goalId = req.params.goalId
  console.log(goalId)
  res.render('goal', {goalId})
})

module.exports = router;

