var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render("choices");
});

/* get turn */
router.get('/turn', function(req, res) {
  let playerChoice = req.query.choice;
  let pcChoice = getPcChoice(['rock','paper','scissors']);
  let winner = pickWinner(playerChoice, pcChoice);
  res.render('results', {
    playerChoice: playerChoice,
    pcChoice: pcChoice,
    winner: winner
  });
})

module.exports = router;



