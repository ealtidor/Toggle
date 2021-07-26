import "./App.css";
import Layout from "./layout/Layout";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import { useState, useEffect } from "react";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";
import MainContainer from "./containers/MainContainer";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/properties");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/properties");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/login");
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route exact path="/">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
      <footer>
    <p>© Emanuella Altidor, 2021</p>
  </footer>
    </div>
  );
}

export default App;
