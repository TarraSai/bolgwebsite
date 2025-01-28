import { Button, TextInput } from 'flowbite-react';
import { useApi } from '../context/ContextApi';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function DashProfilePaage() {
  const { userData, updateUserData } = useApi(); // `updateUserData` can refresh context data after upload
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(userData.profilePic || '/default-profile.png');
  const fileInputRef = useRef();

  // Handle Image Change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file)); // Temporary preview
    }
  };

  // Upload Image to Backend
  const UploadIamge = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append('profileImage', image);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/upload/${userData.id}`, // Use the user's ID
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      if (response.data.profileImageUrl) {
        // Update Profile Picture URL
        setImageUrl(response.data.profileImageUrl);

        // Optionally, refresh user data in the context
        updateUserData({ profilePic: response.data.profileImageUrl });

        alert('Profile picture updated successfully!');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    }
  };

  // Trigger Upload on Image Selection
  useEffect(() => {
    if (image) {
      UploadIamge();
    }
  }, [image]);

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          hidden
        />
        {/* Profile Picture */}
        <div
          className="w-36 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
          onClick={() => fileInputRef.current.click()}
        >
          <img
            src={imageUrl}
            alt="profile"
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
          />
        </div>
        {/* Input Fields */}
        <TextInput
          type="text"
          id="Username"
          defaultValue={userData.username}
          placeholder="Username"
        />
        <TextInput
          type="email"
          id="email"
          defaultValue={userData.email}
          placeholder="Email"
        />
        <TextInput
          type="password"
          id="password"
          placeholder="password"
          defaultValue="*********"
        />
        {/* Update Button */}
        <Button
          type="submit"
          className="self-center"
          gradientDuoTone="purpleToBlue"
        >
          Update
        </Button>
      </form>
      {/* Footer Links */}
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delete account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}

export default DashProfilePaage;
