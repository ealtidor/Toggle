import "./App.css";
import Layout from "./layout/Layout";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/properties'>
            <h3>PROPERTIES</h3>
          </Route>
          <Route path='/login'>
<h3>LOGIN</h3>
          </Route>
          <Route path='/'>
            <h3>REGISTER</h3>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
