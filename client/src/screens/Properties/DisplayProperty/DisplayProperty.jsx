import "./DisplayProperty.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneProperty } from "../../../services/property";

export default function DisplayProperty(props) {
  // const [propertyItem, setPropertyItem] = useState(null)
  const { id } = useParams();
  const { handleDelete, propertyItem, setPropertyItem } = props;

  useEffect(() => {
    const fetchPropertyItem = async () => {
      const propertyData = await getOneProperty(id);
      setPropertyItem(propertyData);
    };
    fetchPropertyItem();
  }, [id]);

  return (
    <div className="display-prop-background">
      <div className="display-header">
        <h1 className="display-header-font">{propertyItem?.name}</h1>
      </div>
      <div className="display-prop-container">
        <div className="display-grey-background">
          <div className="edit-delete-container">
            <Link
              className="display-property-edit"
              to={`/properties/${id}/edit`}
            >
              EDIT
            </Link>
            <button
              className="display-property-delete"
              onClick={() => handleDelete(propertyItem?.id)}
            >
              DELETE
            </button>
          </div>
          <div className="display-prop">
            <div className="property-display-container">
              <img
                className="display-property-img"
                src={propertyItem?.img_url}
                alt="Property"
              />
              <div className="display-details">
                <div className='display-details-top'>
                  <div className='display-details-rent'>
                    <p className='display-rent'>${propertyItem?.rent}</p>
                  </div>
                  <div className="display-details-spacing" >
                    <div className='display-details-bed'>
                <p>{propertyItem?.beds}</p>
                    <p className='display-details-subheader'>Beds</p>
                    </div>
                    <div className='display-details-bath'>
                <p>{propertyItem?.bath}</p>
                <p className='display-details-subheader'>Baths</p>
                    </div>
                    <div className='display-details-sqft'>
                <p>{propertyItem?.sq_ft}</p>
                    <p className='display-details-subheader'>sq. ft.</p>
                    </div>
                    </div>
</div>
                <p>{propertyItem?.address}</p>
                <div className='overview-bottom-border'></div>
                <p className='display-overview-header'>OVERVIEW:</p>
                <p>Current Tenant:</p>
                {/* <p>{propertyItem?.current_tenant}</p> */}
                {propertyItem?.tenants.map((tenant) => (
                  <p>{tenant.name}</p>
                ))}
                <p>Rental Agreement:</p>
                <p>{propertyItem?.rental_agreement}</p>
                <p>Next Scheduled Maintenance:</p>
                <p>{propertyItem?.next_maintenance}</p>
                <p className='display-amenities-header'>AMENITIES</p>
                <p>{propertyItem?.amenities}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
