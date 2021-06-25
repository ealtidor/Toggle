import "./EditProperty.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditProperty(props) {
  const [formData, setFormData] = useState({
    name: "",
    rent: 0,
    beds: 0,
    bath: 0,
    sq_ft: 0,
    address: "",
    current_tenant: "",
    rental_agreement: "",
    next_maintenance: "",
    amenities: "",
    img_url: "",
  });

  const {
    name,
    rent,
    beds,
    bath,
    sq_ft,
    address,
    current_tenant,
    rental_agreement,
    next_maintenance,
    amenities,
    img_url,
  } = formData;

  const { properties, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleProperty = properties.find(
        (property) => property.id === Number(id)
      );
      setFormData({
        name: singleProperty.name,
        rent: singleProperty.current_tenant,
        beds: singleProperty.beds,
        bath: singleProperty.bath,
        sq_ft: singleProperty.sq_ft,
        address: singleProperty.address,
        current_tenant: singleProperty.current_tenant,
        rental_agreement: singleProperty.rental_agreement,
        next_maintenance: singleProperty.next_maintenance,
        amenities: singleProperty.amenities,
        img_url: singleProperty.img_url,
      });
    };
    if (properties.length) {
      prefillFormData();
    }
  }, [properties]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="edit-container"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
      <button>SAVE</button>
      <input
        placeholder="PROPERTY NAME"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <div className="edit-details-container">
        <div className="edit-img-container">
          <img className="edit-property-image" src={img_url} alt={name} />
          <div className="edit-img-field">
            <label htmlFor="img_url">PASTE IMAGE URL:</label>
            <input
              type="text"
              name="img_url"
              value={img_url}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="edit-fields">
          <label>
            MONTHLY RENT
            <input
              type="integer"
              name="rent"
              value={rent}
              onChange={handleChange}
            />
          </label>
          <label>
            # OF BEDS
            <input
              type="integer"
              name="beds"
              value={beds}
              onChange={handleChange}
            />
          </label>
          <label>
            # OF BATHS
            <input
              type="integer"
              name="bath"
              value={bath}
              onChange={handleChange}
            />
          </label>
          <label>
            SQ. FT.
            <input
              type="integer"
              name="sq_ft"
              value={sq_ft}
              onChange={handleChange}
            />
          </label>
          <label>
            ADDRESS
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
            />
          </label>
          <label>
            CURRENT TENANT
            <input
              type="text"
              name="current_tenant"
              value={current_tenant}
              onChange={handleChange}
            />
          </label>

          <label>
            RENTAL AGREEMENT
            <input
              type="text"
              name="rental_agreement"
              value={rental_agreement}
              onChange={handleChange}
            />
          </label>
          <label>
            NEXT SCHEDULED MAINTENANCE
            <input
              type="text"
              name="next_maintenance"
              value={next_maintenance}
              onChange={handleChange}
            />
          </label>
          <label>
            AMENITIES
            <input
              type="text"
              name="amenities"
              value={amenities}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    </form>
  );
}
