import api from './api-config'

export const getAllTenants = async () => {
  const resp = await api.get('/tenants');
  return resp.data
};

export const getOneTenant = async (id) => {
  const resp = await api.get(`/tenants/${id}`)
  return resp.data
};

export const postTenant = async (id, tenantData) => {
  const resp = await api.post(`/properties/${id}/tenants`, { tenant: tenantData });
  return resp.data
};

export const putTenant = async (id, tenantData) => {
  const resp = await api.put(`/tenants/${id}`, { tenant: tenantData })
  return resp.data
};

export const deleteTenant = async (id) => {
  const resp = await api.delete(`/tenants/${id}`)
  return resp;
};

