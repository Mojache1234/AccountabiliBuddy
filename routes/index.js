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
  res.render('index', { title: 'Express' });
});

router.use('/', account)
router.use('/', deleteGoal)
router.use('/', goal)
router.use('/', login)
router.use('/', newGoal)
router.use('/', signUp)
router.use('/', update)


module.exports = router;
