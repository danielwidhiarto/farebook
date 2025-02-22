import { useState } from "react";
import "../styles/login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <button className="create-account">Create new account</button>
        </div>
      </div>
      <footer>
        <p>Meta © 2025</p>
      </footer>
    </div>
  );
};

export default Login;
