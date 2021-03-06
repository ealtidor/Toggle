import "./DisplayProperty.css";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneProperty } from "../../../services/property";

export default function DisplayProperty(props) {
  const { id } = useParams();
  const { handleDelete, propertyItem, setPropertyItem } = props;

  useEffect(() => {
    const fetchPropertyItem = async () => {
      const propertyData = await getOneProperty(id);
      setPropertyItem(propertyData);
    };
    fetchPropertyItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="display-prop-background">
      <div className="display-header">
        <h1 className="display-header-font">{propertyItem?.name}</h1>
      </div>
      <div className="display-prop-container">
        <div className="display-grey-background">
          <div className="property-edit-delete-container">
                <Link
                  className="display-property-delete"
                  to={`/properties/${id}/tenants/new`}>ADD TENANT</Link>
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
                <div className="display-details-top">
                  <div className="display-details-rent">
                    <p className="display-rent">${propertyItem?.rent}</p>
                  </div>
                  <div className="display-details-spacing">
                    <div className="display-details-bed">
                      <p>{propertyItem?.beds}</p>
                      <p className="display-details-subheader">Beds</p>
                    </div>
                    <div className="display-details-bath">
                      <p>{propertyItem?.bath}</p>
                      <p className="display-details-subheader">Baths</p>
                    </div>
                    <div className="display-details-sqft">
                      <p>{propertyItem?.sq_ft}</p>
                      <p className="display-details-subheader">sq. ft.</p>
                    </div>
                  </div>
                </div>
                <p>{propertyItem?.address}</p>
                <div className="overview-bottom-border"></div>
                <p className="display-overview-header">OVERVIEW:</p>
                <p className="property-display-subheader">Current Tenant:</p>
                {propertyItem?.tenants?.map((tenant) => (
                  <Link
                    className="property-tenant-name"
                    to={`/tenants/${tenant.id}`}
                    key={tenant.id}
                  >
                    <p>{tenant.name}</p>
                  </Link>
                ))}
                <p className="property-display-subheader">Rental Agreement:</p>
                <p>{propertyItem?.rental_agreement}</p>
                <p className="property-display-subheader">
                  Next Scheduled Maintenance:
                </p>
                <p>{propertyItem?.next_maintenance}</p>
                <p className="display-amenities-header">AMENITIES</p>
                <p>{propertyItem?.amenities}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
