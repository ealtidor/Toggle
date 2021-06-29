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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [properties]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="edit-container-background">
      <div className='edit-holder'>
    <form
      className="edit-container"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
          <div className='edit-details-background'>
          <button className='edit-screen-save'>SAVE</button>
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
                <label
                className='edit-label-fields'>
                  PROPERTY NAME
          </label>
                <input
                  className='edit-input-fields'
        placeholder="PROPERTY NAME"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
          />
          <label className='edit-label-fields'>
            MONTHLY RENT
          </label>
                <input
                  className='edit-input-fields'
              type="integer"
              name="rent"
              value={rent}
              onChange={handleChange}
            />
          <label className='edit-label-fields'>
            # OF BEDS
          </label>
                <input
                  className='edit-input-fields'
              type="integer"
              name="beds"
              value={beds}
              onChange={handleChange}
            />
          <label className='edit-label-fields'>
            # OF BATHS
          </label>
            <input
            className='edit-input-fields'
              type="integer"
              name="bath"
              value={bath}
              onChange={handleChange}
            />
          <label className='edit-label-fields'>
            SQ. FT.
          </label >
            <input
              type="integer"
              name="sq_ft"
              value={sq_ft}
              onChange={handleChange}
            />
          <label className='edit-label-fields'>
            ADDRESS
          </label>
                <input
                  className='edit-input-fields'
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
            />
          <label className='edit-label-fields'>
            CURRENT TENANT
          </label>
            <input
              type="text"
              name="current_tenant"
              value={current_tenant}
              onChange={handleChange}
            />

          <label className='edit-label-fields'>
            RENTAL AGREEMENT
          </label>
                <input
                  className='edit-input-fields'
              type="text"
              name="rental_agreement"
              value={rental_agreement}
              onChange={handleChange}
            />
          <label className='edit-label-fields'>
            NEXT SCHEDULED MAINTENANCE
          </label>
                <input
                  className='edit-input-fields'
              type="text"
              name="next_maintenance"
              value={next_maintenance}
              onChange={handleChange}
            />
          <label className='edit-label-fields'>
            AMENITIES
          </label>
                <input
                  className='edit-input-fields'
              type="text"
              name="amenities"
              value={amenities}
              onChange={handleChange}
            />
        </div>
      </div>
          </div>
    </form>
      </div>
    </div>
  );
}
