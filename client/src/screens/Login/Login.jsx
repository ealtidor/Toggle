import { useState } from "react";
import "./Login.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <div className="form-border">
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData);
          }}
        >
          <h3 className="login-header">LOGIN</h3>
          
          <label className="login-username">
            USERNAME
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </label>
          <label className="login-password">
            PASSWORD
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <button className="login-button">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
