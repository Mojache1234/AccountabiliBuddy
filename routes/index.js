var express = require('express');
var router = express.Router();

const account = require('./account')
const deleteGoal = require('./delete')
const goal = require('./goal')
const login = require('./login')
const newGoal = require('./new-goal')
const signUp = require('./sign-up')
const update = require('./update')

/* GET home page. */
router.get('/', function(req, res, next) {
  const dummyData = [{
    id: 1,
    title: "Resume",
    description: "Make progress on writing resume",
    commitment: "Friday 2pm",
    consequence: "Pay $5 to charity",
    buddy: "Ariel"
  },
  {
    id: 2,
    title: "Workout",
    description: "Go to gym 3 times this week",
    commitment: "Wednesday 7pm",
    consequence: "Pay $2 to charity",
    buddy: "Mike"
  }]
  res.render('index', { goals:dummyData});
});

router.use('/', account)
router.use('/', deleteGoal)
router.use('/', goal)
router.use('/', login)
router.use('/', newGoal)
router.use('/', signUp)
router.use('/', update)


module.exports = router;
