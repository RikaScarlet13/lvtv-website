// AuthenticatedPage.tsx
import React from "react";
import Header from "./Header";
import { useAuth } from "../context/AuthContext";

const AuthenticatedPage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <div>
      <Header />
      <div className="container mx-auto">
        <h2>Authenticated Page Content</h2>
        {/* Add authenticated page specific content here */}
      </div>
    </div>
  ) : null;
};

export default AuthenticatedPage;
