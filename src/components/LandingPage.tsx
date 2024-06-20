// LandingPage.tsx
import React from "react";
import Header from "./Header";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <h2>Landing Page Content</h2>
        {/* Add landing page specific content here */}
      </div>
    </div>
  );
};

export default LandingPage;
