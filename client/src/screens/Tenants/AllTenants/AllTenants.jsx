import React from 'react'
import { Link } from "react-router-dom";


export default function AllTenants(props) {

  const {tenants, properties} = props
  return (
    <div>
      <div className='tenants-container'>
      <h1>TENANTS</h1>
      {tenants.map((tenant) => (
        <div className='tenant-list' key={tenant.id}>
          <Link to={`/tenants/${tenant.id}`}>
          <p>{tenant.name}</p>
          <p>{ tenant.property_id}</p>
          </Link>
        </div>
      ))}
      </div>
    </div>
  )
}
