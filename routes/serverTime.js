var express = require('express');
var router = express.Router();
const catchErrors = require('../lib/async-error');

router.post('/setTime', catchErrors(async(req, res, next) =>  {
    /* Database setting example.
    var usersetTime = new ServerTime({
      seller_id: req.user._id,
      name: req.body.name,
      university: req.body.university,
      major: req.body.major,
      introduce: req.body.introduce,
    }); 
    */
    var usersetHours = req.body.usersetHours;
    var usersetMinutes = req.body.usersetMinutes;
}));


module.exports = router;
