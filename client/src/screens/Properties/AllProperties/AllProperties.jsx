import "./AllProperties.css";
import { Link } from "react-router-dom";

export default function AllProperties(props) {
  const { properties } = props;

  

  return (
    <div className="allprops-container">
      <div className="all-property-header">
        <h1 className='prop-header'>PROPERTIES</h1>
      </div>
      {properties.map((property) => (
        <div 
        key={`${property.id}-${Math.random()}`}>
          <Link
            className="property-container"
            to={`/properties/${property.id}`}
          >
            <div className='property-cards'>
            <div className="all-property-img">
              <img
                className="property-img"
                src={property.img_url}
                alt="Property"
              />
            </div>
            <div className="all-property-details">
              <div className="orange-container">
                <div className="property-rent">
                  <p>${property.rent}</p>
                </div>
                <div className="prop-address-name">
                  <h3 className='all-prop-name'>{property.name}</h3>
                  <p>{property.address}</p>
                </div>
              </div>
              <div className="white-container">
                <div className='white-left'>
                <div className="bed-container">
                  <p className='bed-bath-text'>{property.beds}</p>
                  <p className='bed-bath-text'>Beds</p>
                </div>
                <div className="bath-container">
                  <p className='bed-bath-text'>{property.bath}</p>
                  <p className='bed-bath-text'>Baths</p>
                </div>
                <div className="amenities-container">
                  <p className='amenities-text'>Amenities:</p>
                  <p className='amenities-text'>{property.amenities}</p>
                </div>
                </div>
                <div className="tenant-container">
                  <p>Tenant:</p>
                    {property.tenants?.map((tenant) => (
                      <p key={`${tenant.id}-${Math.random()}`}>{ tenant.name}</p>
                    ))}
                </div>
              </div>
            </div>
            </div>
          </Link>
        </div>
      ))}
      <Link className='createproperty'
        to="/properties/new">
        <button className='prop-button'>+ Property</button>
      </Link>
    </div>
  );
}
