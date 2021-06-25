import "./AllProperties.css";
import { Link } from "react-router-dom";

export default function AllProperties(props) {
  const { properties } = props;

  return (
    <div>
      <h1>PROPERTIES</h1>
      {properties.map((property) => (
        <div className="property-container" key={property.id}>
          <Link to={`/properties/${property.id}`}>
            <img
              className="property-img"
              src={property.img_url}
              alt="Property"
            />
            <div className="orange-container">
              <h3>{property.name}</h3>
              <p>${property.rent}</p>
              <p>{property.address}</p>
            </div>
            <div className="white-container">
              <div className="bed-container">
                <p>{property.beds}</p>
                <p>Beds</p>
              </div>
              <div className="bath-container">
                <p>{property.bath}</p>
                <p>Baths</p>
              </div>
              <div className="amenities-container">
                <p>Amenities:</p>
                <p>{property.amenities}</p>
              </div>
              <div className="tenant-container">
                <p>Tenant:</p>
                <p>{property.current_tenant}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <Link to="/properties/new">
        <button>+ Property</button>
      </Link>
    </div>
  );
}
