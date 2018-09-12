var express = require('express');
var router = express.Router();
var appid = "921b848f07654d3288ba264ea63aaa58"



router.get('/goal/:goalId', function(req, res){

  const goalId = req.params.goalId
  console.log(goalId)

  const dummyData = {
    title: "Workout",
    description: "Gonna go to the gym and do all the things and get ripped."

  }
  res.render('goal', {dummyData})
})

// 'channel_key': 'test_key2',
//             'buddy': 'mojache1234@gmail.com',
//             'goal_title': 'Work Out',
//             'goal_desc': 'Pump 5 sick ass pushups',
//             'commitment': 'call me maybe <3',
//             'consequence': 5.0,
//             'datetime': str(datetime.datetime.now() + datetime.timedelta(days=6))

module.exports = router;

