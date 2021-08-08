import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {register}from '../../redux/userReducer'
import { registerUser } from "../../services/auth";
import faker from 'faker'


export default function Register() {
  const [formData, setFormData] = useState({
    name: faker.name.firstName(),
    username: faker.name.firstName(),
    email: faker.internet.email(),
    password: 'touchdown',
  });
  const { name, username, email, password } = formData;
  // Redux 
  async function handleRegister()
  {
    const userData = await registerUser(formData);
    register(userData)
    // history.push("/properties");
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const user = useSelector((state) => {
    console.log(state)
  })
  return (
    <div className='background-container'>
    <div className="register-form-container">
      <div className="register-quotes">
        <h4 className='quote'>MANAGE COMMUNICATIONS.</h4>
        <h4 className='quote'>SAVE TIME AND MONEY.</h4>
        <h4 className='quote'>ACCESS YOUR PROPERTIES FROM</h4>
        <h4 className='anywhere'>ANYWHERE.</h4>
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
    </div>
  );
}
