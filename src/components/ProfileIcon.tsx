// ProfileIcon.tsx
import React from "react";

const ProfileIcon: React.FC = () => {
  return (
    <div className="flex items-center">
      <img
        src="path-to-profile-image"
        alt="User Profile"
        className="w-8 h-8 rounded-full mr-2"
      />
      <span className="text-sm font-semibold">Username</span>
    </div>
  );
};

export default ProfileIcon;
