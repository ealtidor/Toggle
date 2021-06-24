import "./CreateProperty.css";
import { useState } from "react";

export default function CreateProperty(props) {
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
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
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
      <label>
        PASTE IMAGE URL:
        <input
          type="text"
          name="img_url"
          value={img_url}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}
