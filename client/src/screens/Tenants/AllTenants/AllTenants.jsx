import './AllTenants.css'
import { Link } from "react-router-dom";

export default function AllTenants(props) {
  const { tenants} = props;
  return (
    <div className='all-tenants-container'>
        <h1 className='tenant-top-header'>TENANTS</h1>
      <div className="tenants-container">
        <div className='table-header'>
          <div className='tenant-header'>
<h3 className='header-text'>TENANTS</h3>
          </div>
          <div className='property-header'>
<h3 className='header-text'>PROPERTY</h3>
          </div>
        </div>
        {tenants?.map((tenant) => (
          <div className="tenant-list" key={tenant.id}>
              <div className="table-container">
                <div className="tenant-column">
            <Link  to={`/tenants/${tenant.id}`}>
                  <h5 className='column-width'>{tenant.name}</h5>
            </Link>
                </div>
              <div className='property-column'>
                <Link to={`/properties/${tenant.property.id}`}>
              <h5 className='column-width'>{tenant.property.name}</h5>
                </Link>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
