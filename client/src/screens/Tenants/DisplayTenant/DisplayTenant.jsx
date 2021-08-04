import "./DisplayTenant.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneTenant } from "../../../services/tenant";

export default function DisplayTenant(props) {
  const [tenantItem, setTenantItem] = useState(null);
  const { id } = useParams();
  const { handleTenantDelete } = props;

  useEffect(() => {
    const fetchTenantItem = async () => {
      const tenantData = await getOneTenant(id);
      console.log(tenantData);
      setTenantItem(tenantData);
    };
    fetchTenantItem();
  }, [id]);

  return (
    <div className="display-tenant-container">
      <div className="tenant-display-header">
        <div className="display-name">
          <h1 className='tenant-name'>{tenantItem?.name} -</h1>
        </div>
        <div className="display-property">
          <h3 className="tenant-property-name">{tenantItem?.property.name}</h3>
          <h3 className="tenant-property-address">
            {tenantItem?.property.address}
          </h3>
        </div>
      </div>
      <div className="topdisplay-tenant-details">
        <div className="display-tenant-details">
          <div className="edit-delete-container">
            <Link className="display-property-edit" to={`/tenants/${id}/edit`}>
              EDIT
            </Link>
            <button
              className="display-property-delete"
              onClick={() => handleTenantDelete(tenantItem?.id)}
            >
              DELETE
            </button>
          </div>
          <div className="subdisplay-tenant-details">
            <div className="previous-address-container">
              <p className="edit-tenant-subheader">PREVIOUS ADDRESS:</p>
              <p className="previous-address">{tenantItem?.previous_address}</p>
            </div>

            <p className="edit-tenant-subheader">CITY: </p>
            <p>{tenantItem?.city}</p>
            <p className="edit-tenant-subheader">STATE: </p>
            <p>{tenantItem?.state}</p>
            <p className="edit-tenant-subheader">ZIP CODE: </p>
            <p>{tenantItem?.zip_code}</p>

            <p className="edit-tenant-subheader">EMAIL:</p>
            <p> {tenantItem?.email}</p>
            <p className="edit-tenant-subheader">PRIMARY NUMBER:</p>
            <p> {tenantItem?.primary_number}</p>
            <p className="edit-tenant-subheader">ALTERNATE NUMBER:</p>
            <p> {tenantItem?.alt_number}</p>
            <p className="edit-tenant-subheader">
              PREFERRED METHOD OF CONTACT:
            </p>
            <p> {tenantItem?.preferred_contact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
