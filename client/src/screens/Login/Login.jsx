import { useState } from "react";
import './Login.css'

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
    <form onSubmit={(e) => {
      e.preventDefault()
      handleLogin(formData)
    }}>
      <h3>LOGIN</h3>
      <label>
        USERNAME
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <label>
        PASSWORD
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button>SUBMIT</button>
    </form>
  );
}
