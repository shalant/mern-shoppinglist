const express = require('express');
const router = express.Router();

//User model
const User = require('../../models/User')

//@route GET require to api/users
//@desc register new users
//@access public
router.get('/', (req, res) => {
    res.send('register')
});


    

module.exports = router;