import './DisplayTenant'
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
    <div>
      <h1>{tenantItem?.name }</h1>
      
    </div>
  )
}
