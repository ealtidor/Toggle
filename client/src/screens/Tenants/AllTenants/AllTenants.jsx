import React from 'react'

export default function AllTenants(props) {

  const {tenants, properties} = props
  return (
    <div>
      <div className='tenants-container'>
      <h1>TENANTS</h1>
      {tenants.map((tenant) => (
        <div className='tenant-list' key={tenant.id}>
          <p>{tenant.name}</p>
          <p>{ tenant.property_id}</p>
        </div>
      ))}
      </div>
    </div>
  )
}
