var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/:username', function(req, res) {
  const username = req.params.username;
  const user = { id: 1, username, password: '*****' };
  res.send(user);
});

module.exports = router;
