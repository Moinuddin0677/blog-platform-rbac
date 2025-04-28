// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import BlogList from "./components/BlogList";
import AdminDashboard from "./components/AdminDashboard";

function Nav() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav style={{ marginBottom: "24px" }}>
      <Link to="/">Home</Link>
      {token ? (
        <>
          {role === "admin" && (
            <Link to="/admin" style={{ marginLeft: 16 }}>
              Admin Dashboard
            </Link>
          )}
          <button
            onClick={handleLogout}
            style={{
              marginLeft: 16,
              background: "transparent",
              border: "none",
              color: "#007bfc",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginLeft: 16 }}>
            Login
          </Link>
          <Link to="/signup" style={{ marginLeft: 16 }}>
            Signup
          </Link>
        </>
      )}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
