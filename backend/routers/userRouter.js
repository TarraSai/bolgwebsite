//user routers
const express = require('express');
const router = express.Router();

const { signin, signup, googleAuth } = require("../controllers/userController");
router.post('/api/register', signup)
router.post('/api/login', signin)
router.post("/api/googleAuth", googleAuth);

module.exports = router;