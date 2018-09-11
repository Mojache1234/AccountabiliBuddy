var express = require('express');
var router = express.Router();

router.get('/goal/:goalId', function(req, res){
  const goalId = req.params.goalId
  console.log(goalId)
  res.render('goal', {goalId})
})

module.exports = router;