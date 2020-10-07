const express = require('express');
const router = express.Router();

 
const signup = require('../controller/signup');

router.get('/', signup.signupForm);

router.post('/signup', signup.postSignupData);

module.exports = router;