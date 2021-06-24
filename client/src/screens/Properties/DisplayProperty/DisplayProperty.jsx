import './DisplayProperty.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getOneProperty} from '../../../services/property'

export default function DisplayProperty() {
  const [propertyItem, setPropertyItem] = useState(null)
  const { id } = useParams()
  
  useEffect(() => {
    const fetchPropertyItem = async () => {
      const propertyData = await getOneProperty(id);
setPropertyItem(propertyData)
    }
    fetchPropertyItem()
  }, [id])
  


  return (
    <div>
      <h1>{propertyItem?.name}</h1>
      <div className='property-display-container'>
        <img className='display-property-img' src={propertyItem?.img_url} alt='Property' />
        <div className='display details'>
        <p>{propertyItem?.rent}</p>
        <div className='display-bed-container'>
            <p>{propertyItem?.beds}</p>
            <p>Beds</p>
            </div>
            <div className='display-bath-container'>
            <p>{propertyItem?.baths}</p>
              <p>Baths</p>
        </div>
        <div className='display-sqft-container'>
            <p>{propertyItem?.sq_ft}</p>
              <p>sq. ft.</p>
        </div>
        <p>{propertyItem?.address}</p>

        <p>OVERVIEW</p>
        <div className='display-tenant-container'>
              <p>Current Tenant:</p>
              <p>{ propertyItem?.current_tenant}</p>
        </div>
        <div className='display-agreement-container'>
              <p>Rental Agreement:</p>
              <p>{ propertyItem?.rental_agreement}</p>
        </div>
        <div className='display-maintenance-container'>
              <p>Next Scheduled Maintenance:</p>
              <p>{ propertyItem?.next_maintenance}</p>
        </div>
        <div className='display-amenities-container'>
              <p>AMENITIES</p>
              <p>{ propertyItem?.amenities}</p>
            </div>
        </div>
      </div>
    </div>
  )
}
