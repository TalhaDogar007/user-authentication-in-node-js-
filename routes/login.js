const express = require('express');
const router = express.Router();

const login = require('../controller/login');

router.get('/', login.loginForm);

router.post('/login', login.postLoginData);
 
router.get('/logout', login.logout);



 
 

module.exports = router;