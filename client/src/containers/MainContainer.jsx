import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
// Custom Components
import AllProperties from "../screens/Properties/AllProperties/AllProperties";
import CreateProperty from '../screens/Properties/CreateProperty/CreateProperty'
// Services
import { getAllProperties, postProperty } from "../services/property";

export default function MainContainer() {
  const [properties, setProperties] = useState([]);
  const history = useHistory()

  // Get All Properties
  useEffect(() => {
    const fetchProperties = async () => {
      const propertyList = await getAllProperties();
      setProperties(propertyList);
    };
    fetchProperties();
  }, []);

  // Create a Property
  const handleCreate = async (formData) => {
    const propertyItem = await postProperty(formData)
    setProperties((prevState) => [...prevState, propertyItem])
    history.push('/properties')
  }

  return (
    <div>
      <Switch>
        <Route path="/properties/new">
          <CreateProperty handleCreate={ handleCreate}/>
        </Route>
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
