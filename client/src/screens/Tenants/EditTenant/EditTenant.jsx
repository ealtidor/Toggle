import "./EditTenant.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditTenant(props) {
  const [formData, setFormData] = useState({
    name: '',
    previous_address: '',
    city: '',
    state: '',
    email: '',
    primary_number: '',
    alt_number: '',
    preferred_contact: '',
    zip_code:'',
  })
  
  const {
    name,
    previous_address,
    city,
    state,
    email,
    zip_code,
    primary_number,
    alt_number,
    preferred_contact,
  } = formData;

  const { tenants, handleTenantUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleTenant = tenants.find((tenant) => tenant.id === Number(id));
      setFormData({
        name: singleTenant.name,
        previous_address: singleTenant.previous_address,
        city: singleTenant. city,
        state: singleTenant.state,
        zip_code: singleTenant.zip_code,
        email: singleTenant.email,
        primary_number: singleTenant.primary_number,
        alt_number: singleTenant.alt_number,
        preferred_contact: singleTenant.preferred_contact,
        
      });
    };
    if (tenants.length) {
      prefillFormData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tenants]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div >
      <div className='tenant-create-formcontainer'>
      <form
        className='tenant-create-form'
        onSubmit={(e) => {
          e.preventDefault()
          handleTenantUpdate (id, formData)
      }}
        >
          <button className='create-screen-save'>SAVE</button>
          <div className='create-tenant-details'>
          <label
            className='create-tenant-label' >NAME:</label>
          <input
            className='create-tenant-inputs'
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />

        <label className='create-tenant-label'>PREVIOUS ADDRESS:</label>
          <input
            className='create-tenant-inputs'
          type='text'
          name='previous_address'
          value={previous_address}
          onChange={handleChange}
        />
 <label className='create-tenant-label'>CITY:</label>
          <input
            className='create-tenant-inputs'
          type='text'
          name='city'
          value={city}
          onChange={handleChange}
        />
         <label className='create-tenant-label'>STATE:</label>
          <input
            className='create-tenant-inputs'
          type='text'
          name='state'
          value={state}
          onChange={handleChange}
            />
             <label className='create-tenant-label'>ZIP CODE:</label>
          <input
            className='create-tenant-inputs'
          type='text'
          name='zip_code'
          value={zip_code}
          onChange={handleChange}
        />
         <label className='create-tenant-label'>EMAIL:</label>
          <input
            className='create-tenant-inputs'
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />

<label className='create-tenant-label'>PRIMARY NUMBER:</label>
          <input
            className='create-tenant-inputs'
          type='text'
          name='primary_number'
          value={primary_number}
          onChange={handleChange}
        />
 <label className='create-tenant-label'>ALTERNATE NUMBER:</label>
          <input
            className='create-tenant-inputs'
          type='text'
          name='alt_number'
          value={alt_number}
          onChange={handleChange}
        />

          <label className='create-tenant-label'>PREFERRED CONTACT METHOD:</label>
          <select
            className='create-tenant-inputs'
            type='text'
            name='preferred_contact'
            value={preferred_contact}
            onChange={handleChange}
          >
            <option disabled={preferred_contact} selected>
            Pick One
          </option>
            <option value='phone'>PHONE</option>
            <option value='email'>EMAIL</option>
          </select>
          </div>
      </form>
      </div>
    </div>
  );
}
