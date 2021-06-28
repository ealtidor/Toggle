import './DisplayTenant.css'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {getOneTenant} from '../../../services/tenant'

export default function DisplayTenant(props) {
const [tenantItem, setTenantItem] = useState(null)
  const { id } = useParams()
  const { handleDelete } = props
  
  useEffect(() => {
    const fetchTenantItem = async () => {
      const tenantData = await getOneTenant(id);
      console.log(tenantData)
      setTenantItem(tenantData)
    }
    fetchTenantItem()
  }, [id])


  return (
    <div className='display-tenant-container'>
      <div className='tenant-display-header'>
        <div className='display-name'>
      <h1>{tenantItem?.name} -</h1>
        </div>
        <div className='display-property'>
      <h3 className='tenant-property-name'>{tenantItem?.property.name}</h3>
      <h3 className='tenant-property-address'>{tenantItem?.property.address }</h3>
        </div>
      </div>
      <div className="topdisplay-tenant-details">

      <div className="display-tenant-details">
        <div className='subdisplay-tenant-details'>
        <div className='previous-address-container'>
        <p>PREVIOUS ADDRESS:</p>
        <p className='previous-address'>{tenantItem?.previous_address}</p>
        </div>
        <div className="address-details">
        <p>CITY: {tenantItem?.city}</p>
        <p>STATE: {tenantItem?.state}</p>
        <p>ZIP CODE: {tenantItem?.zip_code}</p>
        </div>
        <p>EMAIL:</p>
        <p> {tenantItem?.email}</p>
        <p>PRIMARY NUMBER:</p>
        <p> {tenantItem?.primary_number}</p>
        <p>ALTERNATE NUMBER:</p>
        <p> {tenantItem?.alt_number}</p>
        <p>PREFERRED METHOD OF CONTACT:</p>
        <p> { tenantItem?.preferred_contact}</p>

      </div>
        </div>
      </div>
    </div>
  )
}
