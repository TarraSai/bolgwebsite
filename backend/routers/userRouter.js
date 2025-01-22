//user routers
const express = require('express');
const router = express.Router();
const { signin,signup } = require('../controllers/userController');
router.post('/api/register', signup)
router.post('/api/login', signin)
module.exports = router;