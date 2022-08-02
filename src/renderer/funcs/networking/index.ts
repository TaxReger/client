import axios, { AxiosError } from 'axios';
import { getTokens, handleGenericAuthResponse, isTokenExpired } from '../auth';
import { API_URL } from '../constants';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(async (config) => {
  const tokens = getTokens();
  const accessToken = tokens?.accessToken;
  const refreshToken = tokens?.refreshToken;
  if (!accessToken) return config;
  const expired = isTokenExpired(accessToken);

  if (expired && refreshToken) {
    try {
      const response = await axios.get(`${API_URL}/auth/refresh`, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      await handleGenericAuthResponse(response.data);
      config.headers = { Authorization: `Bearer ${response.data.accessToken}` };
      return config;
    } catch (err) {
      return config;
    }
    // Refresh
  } else {
    config.headers = { Authorization: `Bearer ${accessToken}` };
    return config;
  }
});

export const searchStores = async (query: string, province: string) => {
  const response = await api.get('/store', {
    params: {
      q: query,
      province,
    },
  });

  return response.data.results;
};

export const searchPurchases = async (query: string) => {
  const response = await api.get('/purchases/search', {
    params: {
      i: query,
    },
  });

  return response.data.results;
};
export const addNewStore = async (
  name: string,
  address: string,
  hst: string,
  tps: string,
  tvq: string,
  prov: string
) => {
  const response = await api.post('/store/new', {
    name,
    address,
    hst,
    tps,
    tvq,
    provinceId: prov === 'on' ? 1 : 2,
  });
  return response.data.data;
};

export const addNewPurchase = async (
  storeId: number,
  itemName: string,
  cost: number,
  date: Date,
  beneficiary: string,
  invoiceNumber: string,
  chequeTotal: string
) => {
  const response = await api.post('/purchases/add', {
    storeId,
    dateOfInvoice: date,
    itemName,
    cost,
    beneficiary,
    invoiceNumber,
  });
  return response.data.data;
};

export const editPurchase = async (
  id: number,
  cost: number,
  itemName: string,

  dateOfInvoice: Date,
  beneficiary: string,
  invoiceNumber: string
) => {
  const response = await api.post(`/purchases/update/${id}`, {
    dateOfInvoice,
    itemName,
    cost,
    beneficiary,
    invoiceNumber,
  });

  return response.data.data;
};
