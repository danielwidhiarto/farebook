import { useState } from "react";
import "../styles/register.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    birthDay: "12",
    birthMonth: "Jul",
    birthYear: "2023",
    gender: "Female",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering with", formData);
    // TODO: Integrasi dengan backend API
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1 className="logo">farebook</h1>
        <div className="register-box">
          <h2>Create a new account</h2>
          <p>It's quick and easy.</p>
          <form onSubmit={handleSubmit}>
            <div className="name-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Mobile number or email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="New password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="dob-group">
              <label>Date of birth</label>
              <div className="dob-select">
                <select
                  name="birthDay"
                  value={formData.birthDay}
                  onChange={handleChange}
                >
                  {[...Array(31)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select
                  name="birthMonth"
                  value={formData.birthMonth}
                  onChange={handleChange}
                >
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ].map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  name="birthYear"
                  value={formData.birthYear}
                  onChange={handleChange}
                >
                  {[...Array(100)].map((_, i) => (
                    <option key={2023 - i} value={2023 - i}>
                      {2023 - i}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="gender-group">
              <label>Gender</label>
              <div className="gender-options">
                <label className="gender-box">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                  />
                  Female
                </label>
                <label className="gender-box">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label className="gender-box">
                  <input
                    type="radio"
                    name="gender"
                    value="Custom"
                    checked={formData.gender === "Custom"}
                    onChange={handleChange}
                  />
                  Custom
                </label>
              </div>
            </div>

            <p className="terms-text">
              By clicking Sign Up, you agree to our <a href="#">Terms</a>,{" "}
              <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>.
              You may receive SMS notifications from us and can opt out at any
              time.
            </p>
            <button type="submit" className="sign-up-btn">
              Sign Up
            </button>
          </form>
          <a href="/" className="login-link">
            Already have an account?
          </a>
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

export default Register;
