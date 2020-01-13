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
  console.log(req.body)
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);
  await bcrypt.genSalt(10, async(err,salt) =>
  await bcrypt.hash(req.body.password, salt, function(err, hash){

    })
  )
  const request = "INSERT INTO users (user_id,user_name,user_email,user_password) VALUES (DEFAULT,$1,$2,$3 )"
  const args = [req.body.name, req.body.mail,hash]
  const client = await pool.connect()
  const result = await client.query(request,args,(err,result) => {
    res.send(result)
    client.end()});
});

module.exports = router;
,