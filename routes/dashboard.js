const express = require('express');
const router = express.Router();
const requireAuth =require('../middleware/authMiddleware')

const dashboard = require('../controller/dashboard');

router.get('/',requireAuth, dashboard.dashboard);

 
 



 
 

module.exports = router;