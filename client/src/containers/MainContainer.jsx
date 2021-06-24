import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AllProperties from "../screens/Properties/AllProperties/AllProperties";
import { getAllProperties } from "../services/property";

export default function MainContainer() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const propertyList = await getAllProperties();
      setProperties(propertyList);
    };
    fetchProperties();
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/properties/:id"></Route>
        <Route path="/properties">
          <AllProperties properties={ properties}/>
        </Route>
        <Route path="/tenants">
          <h2>TENANTS</h2>
        </Route>
      </Switch>
    </div>
  );
}
