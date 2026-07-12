import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';
const BASE_URL = `${API_URL}/undangan`;
const INVITATION_URL = `${API_URL}/invitation`;

export const api = {
  getUndangan: () => axios.get(`${BASE_URL}?t=${new Date().getTime()}`),
  getUndanganBySlug: (slug: string) => axios.get(`${INVITATION_URL}/${slug}?t=${new Date().getTime()}`),
  createUndangan: (data: FormData) => axios.post(BASE_URL, data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  updateUndangan: (id: number, data: FormData) => axios.post(`${BASE_URL}/${id}?_method=PUT`, data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  deleteUndangan: (id: number) => axios.delete(`${BASE_URL}/${id}`),

  // Guest APIs
  getGuests: (slug: string) => axios.get(`${BASE_URL}/${slug}/guests?t=${new Date().getTime()}`),
  createGuest: (slug: string, data: { nama_tamu: string }) => axios.post(`${BASE_URL}/${slug}/guests`, data),
  updateGuest: (slug: string, guestId: number, data: { nama_tamu: string }) => axios.put(`${BASE_URL}/${slug}/guests/${guestId}`, data),
  deleteGuest: (slug: string, guestId: number) => axios.delete(`${BASE_URL}/${slug}/guests/${guestId}`),

  // RSVP APIs
  storeRsvp: (slug: string, data: FormData | object) =>
    axios.post(`${API_URL}/rsvps/${slug}`, data, {
      headers: data instanceof FormData ? { 'Content-Type': 'multipart/form-data' } : undefined
    }),
  getRsvpsBySlug: (slug: string) =>
    axios.get(`${API_URL}/rsvps/${slug}`),

  // Client (Magic Link) APIs
  clientUpdateUndangan: (id: number, data: FormData, token: string) => axios.post(`${API_URL}/client/undangan/${id}?_method=PUT`, data, {
    headers: { 'Content-Type': 'multipart/form-data', 'X-Client-Token': token }
  }),
  clientGetGuests: (slug: string, token: string) => axios.get(`${BASE_URL}/${slug}/guests?t=${new Date().getTime()}`), // Public GET
  clientCreateGuest: (slug: string, data: { nama_tamu: string }, token: string) => axios.post(`${API_URL}/client/undangan/${slug}/guests`, data, {
    headers: { 'X-Client-Token': token }
  }),
  clientUpdateGuest: (slug: string, guestId: number, data: { nama_tamu: string }, token: string) => axios.put(`${API_URL}/client/undangan/${slug}/guests/${guestId}`, data, {
    headers: { 'X-Client-Token': token }
  }),
  clientDeleteGuest: (slug: string, guestId: number, token: string) => axios.delete(`${API_URL}/client/undangan/${slug}/guests/${guestId}`, {
    headers: { 'X-Client-Token': token }
  }),
};
