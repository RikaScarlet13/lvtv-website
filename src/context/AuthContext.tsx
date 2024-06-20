import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

interface AuthContextProps {
  user: any;
  loginWithGoogle: () => void;
  loginAsAdmin: (username: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loginWithGoogle: () => {},
  loginAsAdmin: () => {},
  logout: () => {},
  isAuthenticated: false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/user");
        setUser(data);
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };
    fetchUser();
  }, []);

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const { data } = await axios.post("/api/auth/callback/google", {
          token: tokenResponse.access_token,
        });
        setUser(data);
        navigate("/home");
      } catch (error) {
        console.error("Google login error", error);
      }
    },
    onError: (error) => {
      console.error("Google login error", error);
    },
  });

  const loginAsAdmin = async (username: string, password: string) => {
    try {
      const { data } = await axios.post("/api/admin/login", {
        username,
        password,
      });
      setUser(data.user);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Admin login error", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post("/api/logout");
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithGoogle,
        loginAsAdmin,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
