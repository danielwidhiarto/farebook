import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
    // TODO: Integrasi dengan backend API
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="logo">farebook</h1>
        <div className="login-box">
          <h2>Log in to FaREbook</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email address or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Log in</button>
          </form>
          <a href="#" className="forgot-password">
            Forgotten account?
          </a>
          <div className="divider">or</div>
          <button
            className="create-account"
            onClick={() => navigate("/register")}
          >
            Create new account
          </button>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">English (UK)</a>
          <a href="#">Bahasa Indonesia</a>
          <a href="#">Basa Jawa</a>
          <a href="#">Bahasa Melayu</a>
          <a href="#">日本語</a>
          <a href="#">Français (France)</a>
          <a href="#">Español</a>
          <a href="#">Português (Brasil)</a>
          <a href="#">Deutsch</a>
          <a href="#">More...</a>
        </div>
        <hr />
        <div className="footer-links">
          <a href="#">Sign Up</a>
          <a href="#">Log in</a>
          <a href="#">Messenger</a>
          <a href="#">Facebook Lite</a>
          <a href="#">Watch</a>
          <a href="#">Places</a>
          <a href="#">Games</a>
          <a href="#">Marketplace</a>
          <a href="#">Meta Pay</a>
          <a href="#">Meta Store</a>
          <a href="#">Instagram</a>
        </div>
        <p>Meta © 2025</p>
      </footer>
    </div>
  );
};

export default Login;
