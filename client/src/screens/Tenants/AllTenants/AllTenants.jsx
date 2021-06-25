import './AllTenants.css'
import { Link } from "react-router-dom";

export default function AllTenants(props) {
  const { tenants} = props;
  return (
    <div>
        <h1>TENANTS</h1>
      <div className="tenants-container">
        <div className='table-header'>
          <div className='tenant-header'>
<h3>TENANTS</h3>
          </div>
          <div className='property-header'>
<h3>PROPERTY</h3>
          </div>
        </div>
        {tenants.map((tenant) => (
          <div className="tenant-list" key={tenant.id}>
              <div className="table-container">
                <div className="tenant-column">
            <Link to={`/tenants/${tenant.id}`}>
                  <p>{tenant.name}</p>
            </Link>
                </div>
              <div className='property-column'>
                <Link to={`/properties/${tenant.property.id}`}>
              <p>{tenant.property.name}</p>
                </Link>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
