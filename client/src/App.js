import "./App.css";
import Layout from "./layout/Layout";
import { Switch, Route } from "react-router-dom";
import Login from "./screens/Login/Login";
import Register from './screens/Register/Register'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/properties">
            <h3>PROPERTIES</h3>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
          <Register/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
