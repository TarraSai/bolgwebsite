const { v2: cloudinary } = require("cloudinary");
const multer = require("multer");

// Cloudinary Configuration
cloudinary.config({
  cloud_name: "dvvzlrakm", // Replace with your Cloudinary cloud_name
  api_key: "175377633934835", // Replace with your Cloudinary API key
  api_secret: "HxubFkqplMeSBxLk41CGDRdQ2WA", // Replace with your API secret
});

// Mock Database (Replace this with your actual database logic)
const users = {}; // Example: { userId: { profileImageUrl: '' } }

// Multer Setup for Parsing Multipart Form Data
const storage = multer.diskStorage({});
const upload = multer({ storage });

exports.uploadMiddleware = upload.single("profileImage");

// Controller to Handle Image Upload for a User
exports.uploadProfileImage = async (req, res) => {
  const { userId } = req.params;

  try {
    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "profile_images", // Optional folder to store profile images
      public_id: `user_${userId}`, // Unique ID for the image based on userId
      overwrite: true, // Replace the old image if it exists
    });

    // Update the user's profile image URL in the database
    users[userId] = { profileImageUrl: result.secure_url };

    res.json({
      message: "Image uploaded successfully!",
      profileImageUrl: result.secure_url,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to upload image", details: error.message });
  }
};
