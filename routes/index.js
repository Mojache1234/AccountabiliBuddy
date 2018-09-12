var express = require('express');
var router = express.Router();

const session = require('express-session')
const account = require('./account')
const deleteGoal = require('./delete')
const goal = require('./goal')
const login = require('./login')
const newGoal = require('./new-goal')
const signUp = require('./sign-up')
const update = require('./update')

router.use('/', login)
router.use('/', signUp)

router.use((req, res, next) => {
  let loggedIn = false
  let data = null
  if (req.session.data) {
    loggedIn = true
    data = req.session.data
  }
  res.locals = {
    loggedIn,
    data
  }
  next()
})

router.use((req, res, next) => {
  if (req.session.data) {
    next()
  } else {
    res.redirect('/login')
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  var i = 0
  var data = []
  for (var i = 0; i < req.session.data.goals.length; i++) {
    var goal = req.session.data.goals[i]
    var time = new Date(goal.datetime)
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    entry = {
      id: i,
      title: goal.goal_title,
      description: goal.goal_desc,
      commitment: weekday[time.getDay()] + ' ' + time.getMonth() + ' ' + time.getDate(),
      consequence: goal.consequence,
      buddy: goal.buddy
    }
    data.push(entry)
  }
  res.render('index', { goals: data });
});

router.use('/', account)
router.use('/', deleteGoal)
router.use('/', goal)
router.use('/', newGoal)
router.use('/', update)


module.exports = router;
