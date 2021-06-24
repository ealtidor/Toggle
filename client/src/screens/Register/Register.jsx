import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const { name, username, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form>
      <h3>REGISTER TODAY!</h3>
      <label>
        NAME
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange} />
      </label>
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
        EMAIL
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange} />
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
      <Link to="/login">Already A User?</Link>
      <button>SUBMIT</button>
    </form>
  );
}
