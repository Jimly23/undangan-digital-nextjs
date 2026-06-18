import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/undangan';
const INVITATION_URL = 'http://127.0.0.1:8000/api/invitation';

export const api = {
  getUndangan: () => axios.get(BASE_URL),
  getUndanganBySlug: (slug: string) => axios.get(`${INVITATION_URL}/${slug}`),
  createUndangan: (data: FormData) => axios.post(BASE_URL, data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  updateUndangan: (id: number, data: FormData) => axios.post(`${BASE_URL}/${id}?_method=PUT`, data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  deleteUndangan: (id: number) => axios.delete(`${BASE_URL}/${id}`),

  // Guest APIs
  getGuests: (slug: string) => axios.get(`${BASE_URL}/${slug}/guests`),
  createGuest: (slug: string, data: { nama_tamu: string }) => axios.post(`${BASE_URL}/${slug}/guests`, data),
  updateGuest: (slug: string, guestId: number, data: { nama_tamu: string }) => axios.put(`${BASE_URL}/${slug}/guests/${guestId}`, data),
  deleteGuest: (slug: string, guestId: number) => axios.delete(`${BASE_URL}/${slug}/guests/${guestId}`),

  // RSVP APIs
  storeRsvp: (slug: string, data: { nama: string; nomor_telepon: string; email?: string; status: string; pesan?: string }) =>
    axios.post(`http://127.0.0.1:8000/api/rsvps/${slug}`, data),
  getRsvpsBySlug: (slug: string) =>
    axios.get(`http://127.0.0.1:8000/api/rsvps/${slug}`),

  // Client (Magic Link) APIs
  clientUpdateUndangan: (id: number, data: FormData, token: string) => axios.post(`http://127.0.0.1:8000/api/client/undangan/${id}?_method=PUT`, data, {
    headers: { 'Content-Type': 'multipart/form-data', 'X-Client-Token': token }
  }),
  clientGetGuests: (slug: string, token: string) => axios.get(`http://127.0.0.1:8000/api/undangan/${slug}/guests`), // Public GET, token not strictly required but we can use it, in my routes the GET is public!
  clientCreateGuest: (slug: string, data: { nama_tamu: string }, token: string) => axios.post(`http://127.0.0.1:8000/api/client/undangan/${slug}/guests`, data, {
    headers: { 'X-Client-Token': token }
  }),
  clientUpdateGuest: (slug: string, guestId: number, data: { nama_tamu: string }, token: string) => axios.put(`http://127.0.0.1:8000/api/client/undangan/${slug}/guests/${guestId}`, data, {
    headers: { 'X-Client-Token': token }
  }),
  clientDeleteGuest: (slug: string, guestId: number, token: string) => axios.delete(`http://127.0.0.1:8000/api/client/undangan/${slug}/guests/${guestId}`, {
    headers: { 'X-Client-Token': token }
  }),
};
