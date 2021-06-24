import "./App.css";
import Layout from "./layout/Layout";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./screens/Login/Login";
import Register from './screens/Register/Register'
import { useState } from 'react'
import { loginUser, registerUser } from './services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData)
    setCurrentUser(userData)
    history.push('/')
  }
  
  const handleRegister = async (formData) => {
		const userData = await registerUser(formData);
		setCurrentUser(userData);
		history.push('/');
	};


  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/properties">
            <h3>PROPERTIES</h3>
          </Route>
          <Route path="/login">
            <Login handleLogin={ handleLogin}/>
          </Route>
          <Route path="/register">
            <Register handleRegister={handleRegister }/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
