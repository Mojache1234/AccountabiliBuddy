var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
  res.render('login')
})
router.post('/login', function(req, res){
  // handle form data here
  res.redirect('/')
})

router.get('/sign-up', function(req, res){
  res.render('sign-up')
})
router.post('/sign-up', function(req, res){
  // handle form data here
  res.redirect('/')
})

router.get('/account', function(req, res){
  res.render('account')
})
router.post('/account', function(req, res){
  // update account stuff
  res.redirect('/account')
})

router.get('/goal/:goalId', function(req, res){
  const goalId = req.params.goalId
  console.log(goalId)
  res.render('goal', {goalId})
})

router.get('/new-goal', function(req, res){
  res.render('new-goal')
})
router.post('/new-goal', function(req, res){
  // add new goal to db here
  res.redirect('/')
})

router.get('/update/:goalId', function(req, res){
  res.render('update')
})
router.post('/update/:goalId', function(req, res){
  // handle form data here
  res.redirect('/')
})

router.get('/delete/:goalId', function(req, res){
  res.render('delete')
})
router.post('/delete/:goalId', function(req, res){
  // delete stuff here
  res.redirect('/')
})

module.exports = router;
