const express = require("express");
const {
  uploadMiddleware,
  uploadProfileImage,
} = require("../controllers/uploadController");

const router = express.Router();

// Route for uploading a profile image
router.post("/upload/:userId", uploadMiddleware, uploadProfileImage);

module.exports = router;
