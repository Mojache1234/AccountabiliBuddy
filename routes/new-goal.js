var mongo = require('mongodb');
var monk = require('monk')('34.222.253.29/AccountabiliBuddy');
var goals = monk.get('goalSessions');
var express = require('express');
var router = express.Router();

router.get('/new-goal', function(req, res){
  res.render('new-goal');
})
router.post('/new-goal', function(req, res){
	key = get_channel();
	params = {
		channel_key : "key"
	}
	goals.insert(params, {}, function(err){
		console.log(err);
	});

  // add new goal to db here
  res.redirect('/');
})

module.exports = router;


function get_channel(){
 var date = new Date();
 var components = [
    date.getYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
];

	var id = components.join("");
	var id2 = id.toString()

	return id2;
}