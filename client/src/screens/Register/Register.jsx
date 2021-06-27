import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register(props) {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const { name, username, email, password } = formData;
  const { handleRegister } = props;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="register-form-container">
      <div className="register-quotes">
        <h4>MANAGE COMMUNICATIONS.</h4>
        <h4>SAVE TIME AND MONEY.</h4>
        <h4>ACCESS YOUR PROPERTIES FROM</h4>
        <h4>ANYWHERE.</h4>
      </div>
      <div className="register-form-border">
        <form
          className="register-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(formData);
          }}
        >
          <h3>REGISTER TODAY!</h3>
          <div className="register-form-fields">
            <label>NAME</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <label>USERNAME</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <label>EMAIL</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <label>PASSWORD</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <Link className="register-login-link" to="/login">
            Already A User?
          </Link>
          <button className="register-button">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
