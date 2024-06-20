// Header.tsx
import React from "react";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">LVTV</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
