import './EditTenant.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditTenant(props) {
  const [formData, setFormData] = useState({
    previous_address: "",
    city: 0,
    state: 0,
    zip_code: 0,
    email: 0,
    primary_number: "",
    preferred_contact: "",
  });
  

  const {
    previous_address,
    city,
    state,
    zip_code,
    email,
    primary_number,
    preferred_contact,
  } = formData;

  const { tenants, handleTenantUpdate} = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleTenant = tenants.find(
        (tenant) => tenant.id === Number(id)
      );
      setFormData({
        name: singleTenant.name,
        rent: singleTenant.current_tenant,
        beds: singleTenant.beds,
        bath: singleTenant.bath,
        sq_ft: singleTenant.sq_ft,
        address: singleTenant.address,
        current_tenant: singleTenant.current_tenant,
        rental_agreement: singleTenant.rental_agreement,
        next_maintenance: singleTenant.next_maintenance,
        amenities: singleTenant.amenities,
        img_url: singleTenant.img_url,
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
    <div>
      
      
    </div>
  )
}
