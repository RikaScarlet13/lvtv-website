// import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useLocation,
} from "react-router-dom";
import {
  AuthProvider,
  // useAuth
} from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
// import LoginPage from "./pages/LoginPage";
// import Navbar from "./components/Navbar";
import AdminLoginPage from "./pages/admin/LoginPage";
// import Header from "./components/admin/Header";
import Footer from "./components/Footer";
import Archives from "./pages/Archives";
import OurStory from "./pages/OurStory";
import Teleradio from "./pages/Teleradio";
import Bab from "./pages/courses/Bab";
import BsaBsais from "./pages/courses/BsaBsais";
import BsisAct from "./pages/courses/BsisAct";
import Bssw from "./pages/courses/Bssw";

// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <LoginPage />;
// };

const App = () => {
  // const location = useLocation(); // Step 1: Get the current location

  // const isAdminRoute = location.pathname.startsWith("/admin"); // Step 2: Check if it's an admin route
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        {/* {!isAdminRoute && <Navbar />} */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/admin/login" element={<AdminLoginPage />} />

          <Route path="/Archives" element={<Archives />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/OurStory" element={<OurStory />} />
          <Route path="/Teleradio" element={<Teleradio />} />
          <Route path="courses/Bab" element={<Bab />} />
          <Route path="courses/BsaBsais" element={<BsaBsais />} />
          <Route path="courses/BsisAct" element={<BsisAct />} />
          <Route path="courses/Bssw" element={<Bssw />} />

          {/* MOVE TO PROTECTED ROUTES */}

          <Route path="/home" element={<HomePage />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          {/* <Route path="/admin/dashboard" element={<Header />} /> */}

          {/* END MOVE TO PROTECTED ROUTES */}
          <Route
            path="/app"
            element={
              <AuthProvider>
                <ProtectedRoutes />
              </AuthProvider>
            }
          />
          {/* <Route path="/admin/login" element={<AdminLoginPage />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

const ProtectedRoutes = () => {
  return <Routes>{/* Add more authenticated routes here */}</Routes>;
};

export default App;
