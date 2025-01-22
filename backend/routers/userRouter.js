//user routers
const express = require('express');
const router = express.Router();
const { signin,signup } = require('../controllers/userController');
router.post('/api/register', signin)
router.post('/api/login', signup)
module.exports = router;