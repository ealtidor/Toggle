import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
// Custom Components
import AllProperties from "../screens/Properties/AllProperties/AllProperties";
import CreateProperty from "../screens/Properties/CreateProperty/CreateProperty";
import DisplayProperty from "../screens/Properties/DisplayProperty/DisplayProperty";
import EditProperty from "../screens/Properties/EditProperty/EditProperty";
import AllTenants from "../screens/Tenants/AllTenants/AllTenants";
import DisplayTenant from "../screens/Tenants/DisplayTenant/DisplayTenant";
import CreateTenant from "../screens/Tenants/CreateTenant/CreateTenant";

// Services
import {
  deleteProperty,
  getAllProperties,
  postProperty,
  putProperty,
} from "../services/property";
import { getAllTenants, postTenant} from "../services/tenant";

export default function MainContainer() {
  const [properties, setProperties] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [propertyItem, setPropertyItem] = useState(null);
  const history = useHistory();

  // Get All Properties
  useEffect(() => {
    const fetchProperties = async () => {
      const propertyList = await getAllProperties();
      setProperties(propertyList);
    };
    fetchProperties();
  }, []);

  // Get All Tenants
  useEffect(() => {
    const fetchTenants = async () => {
      const tenantList = await getAllTenants();
      setTenants(tenantList);
    };
    fetchTenants();
  }, []);

  // Create a Property
  const handleCreate = async (formData) => {
    const propertyItem = await postProperty(formData);
    setProperties((prevState) => [...prevState, propertyItem]);
    history.push("/properties");
  };

  // // Create a Tenant
  const handleTenantCreate = async (id, formData) => {
    const tenantItem = await postTenant(id, formData);
    console.log({ tenantItem });
    setTenants((prevState) => [...prevState, tenantItem]);
    // history.push(`/properties/${id}`)
  };

  // Update Property
  const handleUpdate = async (id, formData) => {
    const propertyItem = await putProperty(id, formData);
    setProperties((prevState) =>
      prevState.map((property) => {
        return property.id === Number(id) ? propertyItem : property;
      })
    );
    history.push("/properties/:id");
  };

  // Delete Property
  const handleDelete = async (id) => {
    await deleteProperty(id);
    setProperties((prevState) =>
      prevState.filter((property) => property.id !== id)
    );
    history.push("/properties");
  };

  return (
    <div>
      <Switch>
        <Route path="/properties/:id/tenants/new">
          <CreateTenant handleTenantCreate={handleTenantCreate} />
        </Route>
        <Route path="/properties/:id/edit">
          <EditProperty properties={properties} handleUpdate={handleUpdate} />
        </Route>
        <Route path="/properties/new">
          <CreateProperty handleCreate={handleCreate} />
        </Route>
        <Route path="/properties/:id">
          <DisplayProperty
            handleDelete={handleDelete}
            setPropertyItem={setPropertyItem}
            propertyItem={propertyItem}
          />
        </Route>
        <Route path="/properties">
          <AllProperties properties={properties} />
        </Route>
        <Route path="/tenants/:id">
          <DisplayTenant handleDelete={handleDelete} />
        </Route>
        <Route path="/tenants">
          <AllTenants tenants={tenants} />
        </Route>
      </Switch>
    </div>
  );
}