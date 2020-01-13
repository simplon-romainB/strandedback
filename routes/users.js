var express = require('express');
var router = express.Router();
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

 pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

/* GET users listing. */
router.post('/', async(req, res, next) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);
  bcrypt.genSalt(10, function(err,salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash){

    })
  })
  const request = "INSERT INTO user (user_id,user_name,user_email) VALUES (DEFAULT,$1,$2,$3 )"
  const args = [req.body.name, req.body.email,hash]
  const client = await pool.connect()
  const result = await client.query(request,args,(err,result) => {
    res.send(result)
    client.end()});
});

module.exports = router;
