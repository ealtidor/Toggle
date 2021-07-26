import "./CreateProperty.css";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CreateProperty(props) {
  const [formData, setFormData] = useState({
    name: "",
    rent: 0,
    beds: 0,
    bath: 0,
    sq_ft: 0,
    address: "",
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
    rental_agreement,
    next_maintenance,
    amenities,
    img_url,
  } = formData;
  const { handleCreate } = props;

  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const propImg = img_url
    ? img_url
    : "data:image/png;base64,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";

  return (
    <div className="create-details-background">
      <form
        className="create-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
        }}
      >
        <div className="create-save-background">
          <button className="create-screen-save">SAVE</button>
          <div className="create-details-holder">
            <div className="create-details-container">
              <div className="create-img-container">
                <img className="create-property-img" src={propImg} alt={name} />
                <div className="create-img-field">
                  <label className="create-label-fields" htmlFor="img_url">
                    PASTE IMAGE URL:
                  </label>
                  <input
                    className="create-input-fields"
                    type="text"
                    name="img_url"
                    value={img_url}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="create-fields">
                <label className="create-label-fields">PROPERTY NAME</label>
                <input
                  className="create-input-fields"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
                <label className="create-label-fields">MONTHLY RENT</label>
                <input
                  className="create-input-fields"
                  type="integer"
                  name="rent"
                  value={rent}
                  onChange={handleChange}
                />
                <label className="create-label-fields"># OF BEDS</label>
                <input
                  className="create-input-fields"
                  type="integer"
                  name="beds"
                  value={beds}
                  onChange={handleChange}
                />
                <label className="create-label-fields"># OF BATHS</label>
                <input
                  className="create-input-fields"
                  type="integer"
                  name="bath"
                  value={bath}
                  onChange={handleChange}
                />
                <label className="create-label-fields">SQ. FT.</label>
                <input
                  className="create-input-fields"
                  type="integer"
                  name="sq_ft"
                  value={sq_ft}
                  onChange={handleChange}
                />
                <label className="create-label-fields">ADDRESS</label>
                <input
                  className="create-input-fields"
                  type="text"
                  name="address"
                  value={address}
                  onChange={handleChange}
                />
                <label className="create-label-fields">CURRENT TENANT</label>
                {/* <input
                className='create-input-fields'
              type="text"
              name="tenants.name"
              value={tenants.name}
              onChange={handleChange}
            /> */}
                <Link
                  className="create-tenant-link"
                  to={`/properties/${id}/tenants/new`}>ADD TENANT</Link>
                <label className="create-label-fields">RENTAL AGREEMENT</label>
                <input
                  className="create-input-fields"
                  type="text"
                  name="rental_agreement"
                  value={rental_agreement}
                  onChange={handleChange}
                />
                <label className="create-label-fields">
                  NEXT SCHEDULED MAINTENANCE
                </label>
                <input
                  className="create-input-fields"
                  type="text"
                  name="next_maintenance"
                  value={next_maintenance}
                  onChange={handleChange}
                />
                <label className="create-label-fields">AMENITIES</label>
                <input
                  className="create-input-fields"
                  type="text"
                  name="amenities"
                  value={amenities}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
