import { useState } from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse;
    try {
      const res = await axios.post(
        `http://localhost:8000/api/auth/google/callback`,
        { token: credential }
      );
      localStorage.setItem("token", res.data.token);
      // Redirect to dashboard or set user context
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleFailure = (error: any) => {
    console.error("Google login failed", error);
    setErrorMessage("Failed to login with Google. Please try again.");
    // Optionally, implement retry logic here or elsewhere in your component
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => handleFailure(new Error("Google Login Failed"))}
          useOneTap
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
