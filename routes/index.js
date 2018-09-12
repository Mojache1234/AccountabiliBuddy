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
  console.log('I\'m here')
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
router.use('/', newGoal)
router.use('/', update)


module.exports = router;
