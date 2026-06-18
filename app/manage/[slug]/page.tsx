'use client'

import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import { Plus, Settings, Trash2, Globe, Users, Image as ImageIcon, Heart, MapPin, Palette, Mail, Gift as GiftIcon, QrCode as QrCodeIcon, ArrowLeft, Music, Activity, Save } from 'lucide-react'
import '../../admin/admin.css'
import { api } from '../../../api/api'

export default function ManageDashboard() {
  const params = useParams()
  const searchParams = useSearchParams()
  const slug = params.slug as string
  const token = searchParams.get('token')

  const [view, setView] = useState<'dashboard' | 'edit' | 'tamu'>('dashboard')
  
  const [activeId, setActiveId] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [alertMsg, setAlertMsg] = useState<{ type: string, message: string } | null>(null)

  // Guest States
  const [guests, setGuests] = useState<any[]>([])
  const [guestForm, setGuestForm] = useState({ nama_tamu: '' })
  const [editingGuestId, setEditingGuestId] = useState<number | null>(null)
  const [loadingGuests, setLoadingGuests] = useState(false)

  const initialForm = {
    slug: '', tema: 'aruma-jawa',
    foto_wanita: null as File | string | null, nama_lengkap_wanita: '', nama_panggilan_wanita: '', nama_ayah_wanita: '', nama_ibu_wanita: '', alamat_wanita: '', instagram_wanita: '', whatsapp_wanita: '',
    foto_pria: null as File | string | null, nama_lengkap_pria: '', nama_panggilan_pria: '', nama_ayah_pria: '', nama_ibu_pria: '', alamat_pria: '', instagram_pria: '', whatsapp_pria: '',
    alamat_akad: '', tanggal_akad: '', jam_mulai_akad: '', jam_selesai_akad: '',
    alamat_resepsi: '', tanggal_resepsi: '', jam_mulai_resepsi: '', jam_selesai_resepsi: '', 
    link_google_maps: '', link_google_maps_resepsi: '',
    nomor_rekening_pria: '', nama_bank_pria: '', atas_nama_pria: '',
    nomor_rekening_wanita: '', nama_bank_wanita: '', atas_nama_wanita: '',
    qr_code: null as File | string | null,
    musik: null as File | string | null,
    galeri: [] as (File | string | null)[],
    love_stories: [] as { judul: string, cerita: string }[],
    dresscodes: [] as { warnaHex: string, title: string, deskripsi: string }[]
  }

  const [formData, setFormData] = useState<any>(initialForm)

  const loadData = async () => {
    setLoading(true)
    try {
      const res = await api.getUndanganBySlug(slug)
      const targetUndangan = res.data?.data
      setActiveId(targetUndangan.id)
      populateForm(targetUndangan)
    } catch (err: any) {
      console.error(err)
      alert("Undangan tidak ditemukan.")
    }
    setLoading(false)
  }

  const populateForm = (d: any) => {
    const safeParseArray = (val: any) => {
      if (!val) return []
      if (Array.isArray(val)) return val
      if (typeof val === 'string') {
        try { return JSON.parse(val) } catch(e) { return [] }
      }
      return []
    }

    setFormData({
      ...initialForm,
      ...d,
      galeri: safeParseArray(d.galeri),
      love_stories: safeParseArray(d.love_stories),
      dresscodes: safeParseArray(d.dresscodes)
    })
  }

  useEffect(() => {
    if (!token) {
      alert("Akses ditolak: Token tidak ada.")
    } else if (slug) {
      loadData()
    }
  }, [slug, token])

  // --- GUESTS HANDLERS ---
  const openGuests = () => {
    setView('tamu')
    if (slug && token) loadGuests()
  }

  const loadGuests = async () => {
    setLoadingGuests(true)
    try {
      const res = await api.clientGetGuests(slug, token!)
      setGuests(res.data?.data || [])
    } catch (err) {
      console.error(err)
    }
    setLoadingGuests(false)
  }

  const handleGuestSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!guestForm.nama_tamu.trim() || !token) return
    
    try {
      if (editingGuestId) {
        await api.clientUpdateGuest(slug, editingGuestId, guestForm, token)
      } else {
        await api.clientCreateGuest(slug, guestForm, token)
      }
      setGuestForm({ nama_tamu: '' })
      setEditingGuestId(null)
      loadGuests()
    } catch (err) {
      alert("Gagal menyimpan data tamu. Mungkin token tidak valid.")
    }
  }

  const handleEditGuest = (guest: any) => {
    setGuestForm({ nama_tamu: guest.nama_tamu })
    setEditingGuestId(guest.id)
  }

  const handleDeleteGuest = async (id: number) => {
    if (!confirm("Hapus tamu ini?") || !token) return
    try {
      await api.clientDeleteGuest(slug, id, token)
      loadGuests()
    } catch (err) {
      alert("Gagal menghapus data tamu")
    }
  }
  // --- END GUESTS HANDLERS ---

  const openEdit = () => {
    setAlertMsg(null)
    setView('edit')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string, index?: number, arrayName?: string) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (arrayName && index !== undefined) {
      const newArray = [...(formData[arrayName] || [])]
      newArray[index] = file 
      setFormData({ ...formData, [arrayName]: newArray })
    } else {
      setFormData({ ...formData, [fieldName]: file })
    }
  }

  const addGaleri = () => setFormData({ ...formData, galeri: [...(formData.galeri || []), null] })
  const removeGaleri = (index: number) => {
    const newArr = [...formData.galeri]; newArr.splice(index, 1); setFormData({ ...formData, galeri: newArr })
  }

  const addLoveStory = () => setFormData({ ...formData, love_stories: [...(formData.love_stories || []), { judul: '', cerita: '' }] })
  const removeLoveStory = (index: number) => {
    const newArr = [...formData.love_stories]; newArr.splice(index, 1); setFormData({ ...formData, love_stories: newArr })
  }
  const changeLoveStory = (index: number, e: any) => {
    const newArr = [...formData.love_stories]; newArr[index][e.target.name] = e.target.value; setFormData({ ...formData, love_stories: newArr })
  }

  const addDresscode = () => setFormData({ ...formData, dresscodes: [...(formData.dresscodes || []), { warnaHex: '#000000', title: '', deskripsi: '' }] })
  const removeDresscode = (index: number) => {
    const newArr = [...formData.dresscodes]; newArr.splice(index, 1); setFormData({ ...formData, dresscodes: newArr })
  }
  const changeDresscode = (index: number, e: any) => {
    const newArr = [...formData.dresscodes]; newArr[index][e.target.name] = e.target.value; setFormData({ ...formData, dresscodes: newArr })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!token || !activeId) {
       alert("Token akses tidak valid")
       return
    }
    
    setLoadingSubmit(true)
    setAlertMsg(null)

    const fd = new FormData()

    Object.keys(formData).forEach(key => {
      if (formData[key] === null || formData[key] === undefined) return
      
      if (key === 'galeri') {
        formData.galeri.forEach((file: File | string, i: number) => {
          if (file instanceof File) {
            fd.append('galeri[]', file)
          } else if (typeof file === 'string') {
            fd.append('galeri_existing[]', file)
          }
        })
      } else if (key === 'love_stories') {
        formData.love_stories.forEach((ls: any, i: number) => {
          fd.append(`love_stories[${i}][judul]`, ls.judul || '')
          fd.append(`love_stories[${i}][cerita]`, ls.cerita || '')
        })
      } else if (key === 'dresscodes') {
        formData.dresscodes.forEach((dc: any, i: number) => {
          fd.append(`dresscodes[${i}][warnaHex]`, dc.warnaHex || '#000000')
          fd.append(`dresscodes[${i}][title]`, dc.title || '')
          fd.append(`dresscodes[${i}][deskripsi]`, dc.deskripsi || '')
        })
      } else if (key !== 'created_at' && key !== 'updated_at' && key !== 'id') {
        if (formData[key] instanceof File) {
          fd.append(key, formData[key])
        } else {
          fd.append(key, formData[key] as string)
        }
      }
    })

    try {
      await api.clientUpdateUndangan(activeId, fd, token)
      setAlertMsg({ type: 'success', message: 'Undangan berhasil diupdate!' })
      // reload data 
      loadData()
      setTimeout(() => setView('dashboard'), 1500)
    } catch (err: any) {
      setAlertMsg({ type: 'error', message: err?.response?.data?.message || err.message })
    }
    
    setLoadingSubmit(false)
  }

  const getPreviewUrl = (fileOrStr: File | string | null) => {
    if (!fileOrStr) return null;
    if (typeof fileOrStr === 'string') return fileOrStr; // It's an existing URL from backend
    return URL.createObjectURL(fileOrStr);
  }

  if (!token) {
    return <div className="p-8 text-center text-red-500 font-bold">Akses Ditolak. Token manajemen tidak ditemukan.</div>
  }

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Memuat profil...</div>
  }

  // Edit View
  if (view === 'edit') {
    return (
      <div className="admin-layout flex-col md:flex-row">
        {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}
        <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header border-b pb-4 mb-4">
            <h2 className="text-xl">👩‍❤️‍👨 Portal Pasangan</h2>
            <p className="text-sm opacity-80 mt-1">Undangan: {slug}</p>
          </div>
          <nav className="sidebar-nav">
            <button className="nav-item text-gray-500 hover:text-black mt-4" onClick={() => { setView('dashboard'); loadData(); }}><ArrowLeft size={18} /> Kembali</button>
          </nav>
        </aside>

        <main className="admin-main bg-gray-50 overflow-y-auto w-full">
          <header className="admin-header md:hidden flex justify-between items-center w-full px-4 py-3 bg-white border-b">
            <h1 className="font-bold">Portal Pasangan</h1>
            <button className="menu-toggle block" onClick={() => setIsSidebarOpen(true)}>☰</button>
          </header>
          <div className="max-w-4xl mx-auto p-4 md:p-8">
            <h1 className="text-3xl font-bold mb-6">Edit Detail Undangan</h1>
            {alertMsg && <div className={`alert alert-${alertMsg.type} mb-4`}>{alertMsg.message}</div>}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* === TEMA === */}
              <div className="admin-card p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Settings size={20} /> Informasi Dasar</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                     <label className="form-label">Tema</label>
                     <select className="form-select w-full" name="tema" value={formData.tema} onChange={handleChange}>
                       <option value="aruma-jawa">Aruma Jawa</option>
                       <option value="aruma-japan-v2">Aruma Japan v2</option>
                       <option value="aruma-chinese">Aruma Chinese</option>
                     </select>
                  </div>
                </div>
              </div>

              {/* === MEMPELAI WANITA === */}
              <div className="admin-card p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Users size={20} /> Mempelai Wanita</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="form-label">Foto Mempelai Wanita</label>
                    <div className="flex gap-4 items-center">
                      <input type="file" accept="image/*" className="form-input flex-1" onChange={(e) => handleFileUpload(e, 'foto_wanita')} />
                      {getPreviewUrl(formData.foto_wanita) && <img src={getPreviewUrl(formData.foto_wanita)!} className="w-12 h-12 object-cover rounded-full" />}
                    </div>
                  </div>
                  <div><label className="form-label">Nama Panjang / Lengkap</label><input className="form-input w-full" name="nama_lengkap_wanita" value={formData.nama_lengkap_wanita} onChange={handleChange} /></div>
                  <div><label className="form-label">Nama Panggilan</label><input className="form-input w-full" name="nama_panggilan_wanita" value={formData.nama_panggilan_wanita} onChange={handleChange} /></div>
                  <div><label className="form-label">Nama Ayah</label><input className="form-input w-full" name="nama_ayah_wanita" value={formData.nama_ayah_wanita} onChange={handleChange} /></div>
                  <div><label className="form-label">Nama Ibu</label><input className="form-input w-full" name="nama_ibu_wanita" value={formData.nama_ibu_wanita} onChange={handleChange} /></div>
                  <div><label className="form-label">Instagram</label><input className="form-input w-full" name="instagram_wanita" value={formData.instagram_wanita} onChange={handleChange} /></div>
                  <div><label className="form-label">No. Whatsapp</label><input className="form-input w-full" name="whatsapp_wanita" value={formData.whatsapp_wanita} onChange={handleChange} /></div>
                  <div className="col-span-2"><label className="form-label">Alamat</label><textarea className="form-input w-full" name="alamat_wanita" value={formData.alamat_wanita} onChange={handleChange} rows={2}></textarea></div>
                </div>
              </div>

              {/* === MEMPELAI PRIA === */}
              <div className="admin-card p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Users size={20} /> Mempelai Pria</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="form-label">Foto Mempelai Pria</label>
                    <div className="flex gap-4 items-center">
                      <input type="file" accept="image/*" className="form-input flex-1" onChange={(e) => handleFileUpload(e, 'foto_pria')} />
                      {getPreviewUrl(formData.foto_pria) && <img src={getPreviewUrl(formData.foto_pria)!} className="w-12 h-12 object-cover rounded-full" />}
                    </div>
                  </div>
                  <div><label className="form-label">Nama Panjang / Lengkap</label><input className="form-input w-full" name="nama_lengkap_pria" value={formData.nama_lengkap_pria} onChange={handleChange} /></div>
                  <div><label className="form-label">Nama Panggilan</label><input className="form-input w-full" name="nama_panggilan_pria" value={formData.nama_panggilan_pria} onChange={handleChange} /></div>
                  <div><label className="form-label">Nama Ayah</label><input className="form-input w-full" name="nama_ayah_pria" value={formData.nama_ayah_pria} onChange={handleChange} /></div>
                  <div><label className="form-label">Nama Ibu</label><input className="form-input w-full" name="nama_ibu_pria" value={formData.nama_ibu_pria} onChange={handleChange} /></div>
                  <div><label className="form-label">Instagram</label><input className="form-input w-full" name="instagram_pria" value={formData.instagram_pria} onChange={handleChange} /></div>
                  <div><label className="form-label">No. Whatsapp</label><input className="form-input w-full" name="whatsapp_pria" value={formData.whatsapp_pria} onChange={handleChange} /></div>
                  <div className="col-span-2"><label className="form-label">Alamat</label><textarea className="form-input w-full" name="alamat_pria" value={formData.alamat_pria} onChange={handleChange} rows={2}></textarea></div>
                </div>
              </div>

              {/* === GALERI === */}
              <div className="admin-card p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><ImageIcon size={20} /> Galeri Foto</h3>
                <div className="space-y-4">
                  {(formData.galeri || []).map((fileOrStr: File | string | null, index: number) => (
                    <div key={index} className="flex gap-4 items-center bg-white p-2 border rounded">
                      <input type="file" accept="image/*" className="form-input flex-1" onChange={(e) => handleFileUpload(e, '', index, 'galeri')} />
                      {getPreviewUrl(fileOrStr) && <img src={getPreviewUrl(fileOrStr)!} alt="Galeri" className="w-12 h-12 object-cover border" />}
                      <button type="button" className="btn btn-sm btn-danger px-3 py-2" onClick={() => removeGaleri(index)}><Trash2 size={16} /></button>
                    </div>
                  ))}
                  <button type="button" className="btn btn-outline w-full justify-center" onClick={addGaleri}><Plus size={18} /> Tambah Foto Galeri</button>
                </div>
              </div>

              {/* === LOVE STORY === */}
              <div className="admin-card p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Heart size={20} /> Kisah Cinta (Love Story)</h3>
                <div className="space-y-4">
                  {(formData.love_stories || []).map((ls: any, index: number) => (
                    <div key={index} className="flex gap-4 items-start bg-white p-4 border rounded relative">
                      <div className="flex-1 space-y-2">
                        <input className="form-input w-full font-bold" name="judul" value={ls.judul || ''} onChange={(e) => changeLoveStory(index, e)} placeholder="Contoh: Agustus 2019 - Awal Bertemu" />
                        <textarea className="form-input w-full" name="cerita" value={ls.cerita || ''} onChange={(e) => changeLoveStory(index, e)} rows={3} placeholder="Tulis cerita di sini..."></textarea>
                      </div>
                      <button type="button" className="btn btn-sm btn-danger px-3 py-2 mt-1" onClick={() => removeLoveStory(index)}><Trash2 size={16} /></button>
                    </div>
                  ))}
                  <button type="button" className="btn btn-outline w-full justify-center" onClick={addLoveStory}><Plus size={18} /> Tambah Love Story</button>
                </div>
              </div>

              {/* === WAKTU & TEMPAT === */}
              <div className="admin-card p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><MapPin size={20} /> Waktu & Tempat</h3>
                <div className="grid grid-cols-2 gap-8">
                  {/* Akad */}
                  <div className="space-y-4">
                    <h4 className="font-bold border-b pb-2">Akad Nikah</h4>
                    <div><label className="form-label">Tanggal Akad</label><input type="date" className="form-input w-full" name="tanggal_akad" value={formData.tanggal_akad ? formData.tanggal_akad.split('T')[0] : ''} onChange={handleChange} /></div>
                    <div className="flex gap-2">
                      <div className="w-1/2"><label className="form-label">Jam Mulai</label><input type="time" className="form-input w-full" name="jam_mulai_akad" value={formData.jam_mulai_akad} onChange={handleChange} /></div>
                      <div className="w-1/2"><label className="form-label">Jam Selesai</label><input type="time" className="form-input w-full" name="jam_selesai_akad" value={formData.jam_selesai_akad} onChange={handleChange} /></div>
                    </div>
                    <div><label className="form-label">Alamat Tempat Akad</label><textarea className="form-input w-full" name="alamat_akad" value={formData.alamat_akad} onChange={handleChange} rows={2}></textarea></div>
                  </div>

                  {/* Resepsi */}
                  <div className="space-y-4">
                    <h4 className="font-bold border-b pb-2">Resepsi Nikah</h4>
                    <div><label className="form-label">Tanggal Resepsi</label><input type="date" className="form-input w-full" name="tanggal_resepsi" value={formData.tanggal_resepsi ? formData.tanggal_resepsi.split('T')[0] : ''} onChange={handleChange} /></div>
                    <div className="flex gap-2">
                      <div className="w-1/2"><label className="form-label">Jam Mulai</label><input type="time" className="form-input w-full" name="jam_mulai_resepsi" value={formData.jam_mulai_resepsi} onChange={handleChange} /></div>
                      <div className="w-1/2"><label className="form-label">Jam Selesai</label><input type="time" className="form-input w-full" name="jam_selesai_resepsi" value={formData.jam_selesai_resepsi} onChange={handleChange} /></div>
                    </div>
                    <div><label className="form-label">Alamat Tempat Resepsi</label><textarea className="form-input w-full" name="alamat_resepsi" value={formData.alamat_resepsi} onChange={handleChange} rows={2}></textarea></div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Link Google Maps (Akad)</label>
                    <input className="form-input w-full" name="link_google_maps" value={formData.link_google_maps} onChange={handleChange} placeholder="https://maps.google.com/..." />
                  </div>
                  <div>
                    <label className="form-label">Link Google Maps (Resepsi)</label>
                    <input className="form-input w-full" name="link_google_maps_resepsi" value={formData.link_google_maps_resepsi} onChange={handleChange} placeholder="https://maps.google.com/..." />
                  </div>
                </div>
              </div>

              {/* === DRESSCODE === */}
              <div className="admin-card p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Palette size={20} /> Dresscode</h3>
                <div className="space-y-4">
                  {(formData.dresscodes || []).map((dc: any, index: number) => (
                    <div key={index} className="flex gap-4 items-center bg-white p-2 border rounded relative">
                      <input type="color" className="w-12 h-10 cursor-pointer" name="warnaHex" value={dc.warnaHex || '#000000'} onChange={(e) => changeDresscode(index, e)} />
                      <input className="form-input flex-1" name="title" value={dc.title || ''} onChange={(e) => changeDresscode(index, e)} placeholder="Contoh: Putih" />
                      <input className="form-input flex-1" name="deskripsi" value={dc.deskripsi || ''} onChange={(e) => changeDresscode(index, e)} placeholder="Deskripsi/Info" />
                      <button type="button" className="btn btn-sm btn-danger px-3 py-2" onClick={() => removeDresscode(index)}><Trash2 size={16} /></button>
                    </div>
                  ))}
                  <button type="button" className="btn btn-outline w-full justify-center" onClick={addDresscode}><Plus size={18} /> Tambah Dresscode</button>
                </div>
              </div>

              {/* === GIFT === */}
              <div className="admin-card p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><GiftIcon size={20} /> Wedding Gift</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-bold border-b pb-2">Rekening Pria</h4>
                    <div><label className="form-label">Nama Bank</label><input className="form-input w-full" name="nama_bank_pria" value={formData.nama_bank_pria} onChange={handleChange} /></div>
                    <div><label className="form-label">Nomor Rekening</label><input className="form-input w-full" name="nomor_rekening_pria" value={formData.nomor_rekening_pria} onChange={handleChange} /></div>
                    <div><label className="form-label">Atas Nama</label><input className="form-input w-full" name="atas_nama_pria" value={formData.atas_nama_pria} onChange={handleChange} /></div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold border-b pb-2">Rekening Wanita</h4>
                    <div><label className="form-label">Nama Bank</label><input className="form-input w-full" name="nama_bank_wanita" value={formData.nama_bank_wanita} onChange={handleChange} /></div>
                    <div><label className="form-label">Nomor Rekening</label><input className="form-input w-full" name="nomor_rekening_wanita" value={formData.nomor_rekening_wanita} onChange={handleChange} /></div>
                    <div><label className="form-label">Atas Nama</label><input className="form-input w-full" name="atas_nama_wanita" value={formData.atas_nama_wanita} onChange={handleChange} /></div>
                  </div>
                </div>
              </div>

              {/* === MUSIK & QR === */}
              <div className="grid grid-cols-2 gap-8">
                <div className="admin-card p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Music size={20} /> Musik (Audio .mp3)</h3>
                  <div>
                    <input type="file" accept="audio/mp3,audio/*" className="form-input w-full mb-2" onChange={(e) => handleFileUpload(e, 'musik')} />
                    {formData.musik && <div className="mt-2 text-sm text-green-600 bg-green-50 p-2 border border-green-200 rounded break-all">✅ Tersimpan: {formData.musik instanceof File ? formData.musik.name : 'Audio URL tersemat'}</div>}
                  </div>
                </div>

                <div className="admin-card p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><QrCodeIcon size={20} /> QR Code Kehadiran</h3>
                  <div>
                    <input type="file" accept="image/*" className="form-input w-full mb-2" onChange={(e) => handleFileUpload(e, 'qr_code')} />
                    {getPreviewUrl(formData.qr_code) && <img src={getPreviewUrl(formData.qr_code)!} alt="QR Code" className="mt-2 w-24 h-24 object-contain border" />}
                  </div>
                </div>
              </div>

              {/* Floating Submit Button */}
              <div className="sticky bottom-4 z-50 flex justify-end pb-8">
                <button type="submit" className="btn btn-primary text-lg px-8 py-3 shadow-xl rounded-full flex gap-2 items-center" disabled={loadingSubmit}>
                  <Save size={20} />
                  {loadingSubmit ? 'Menyimpan...' : 'Simpan Undangan'}
                </button>
              </div>

            </form>
          </div>
        </main>
      </div>
    )
  }

  // Dashboard / Tamu View
  return (
    <div className="admin-layout flex-col md:flex-row">
      {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}
      {/* SIDEBAR */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header border-b pb-4 mb-4">
          <h2 className="text-xl flex gap-2 items-center"><Heart size={20} color="#e84aa9"/> Portal Pasangan</h2>
          <p className="text-sm opacity-80 mt-1 truncate">Undangan: {slug}</p>
        </div>
        <nav className="sidebar-nav">
          <button className={`nav-item ${view === 'dashboard' ? 'active' : ''}`} onClick={() => setView('dashboard')}><Activity size={18} /> Ringkasan Undangan</button>
          <button className={`nav-item ${view === 'tamu' ? 'active' : ''}`} onClick={openGuests}><Users size={18} /> Kelola Tamu</button>
        </nav>
      </aside>

      <main className="admin-main bg-gray-50 flex-1 w-full overflow-auto">
        <header className="admin-header md:hidden flex items-center justify-between w-full px-4 py-3 bg-white border-b">
          <h1 className="font-bold flex gap-2 items-center"><Heart size={20} color="#e84aa9"/> Portal Pasangan</h1>
          <button className="menu-toggle block" onClick={() => setIsSidebarOpen(true)}>☰</button>
        </header>
        
        <div className="p-4 md:p-8">
        {view === 'dashboard' && (
          <div className="max-w-4xl">
            <h1 className="text-2xl font-bold mb-6">Manajemen Akses Client</h1>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6 flex justify-between items-center flex-wrap gap-4">
              <div>
                <h3 className="text-lg font-bold">Undangan: {formData.slug}</h3>
                <p className="text-sm text-gray-500 mt-1">Tema: {formData.tema}</p>
              </div>
              <div className="flex gap-2">
                <a href={`/themes/${formData.tema}/${formData.slug}`} target="_blank" className="btn btn-outline flex gap-2 items-center"><Globe size={18} /> Lihat Web Preview</a>
                <button className="btn btn-primary flex gap-2 items-center" onClick={openEdit}><Settings size={18} /> Edit Konten Umum</button>
              </div>
            </div>
          </div>
        )}

        {view === 'tamu' && (
           <div className="max-w-5xl">
            <header className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold">Daftar Tamu Spesifik</h1>
                <p className="text-gray-500">Kelola dan bagikan link custom untuk setiap tamu undangan Anda.</p>
              </div>
            </header>

            <div className="admin-card p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">{editingGuestId ? 'Edit Tamu' : 'Tambah Tamu'}</h3>
              <form onSubmit={handleGuestSubmit} className="flex gap-4">
                <input className="form-input flex-1" value={guestForm.nama_tamu} onChange={e => setGuestForm({ nama_tamu: e.target.value })} placeholder="Nama Lengkap Tamu" required />
                <button type="submit" className="btn btn-primary px-8">{editingGuestId ? 'Update' : 'Tambah'}</button>
                {editingGuestId && <button type="button" className="btn btn-outline" onClick={() => { setEditingGuestId(null); setGuestForm({ nama_tamu: '' }) }}>Batal</button>}
              </form>
            </div>

            <div className="admin-card p-6">
              {loadingGuests ? <p>Memuat tamu...</p> : (
                <div className="admin-table-wrapper">
                  <table className="admin-table w-full text-left">
                    <thead>
                      <tr>
                        <th className="p-3 bg-gray-50 border-b w-12">No</th>
                        <th className="p-3 bg-gray-50 border-b">Nama Tamu</th>
                        <th className="p-3 bg-gray-50 border-b min-w-[200px]">Aksi Share Link</th>
                        <th className="p-3 bg-gray-50 border-b min-w-[120px]">Edit / Hapus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {guests.map((g, i) => (
                        <tr key={g.id} className="border-b">
                          <td className="p-3">{i + 1}</td>
                          <td className="p-3 font-bold">{g.nama_tamu}</td>
                          <td className="p-3">
                            <div className="flex gap-2">
                              {(() => {
                                const tema = formData.tema || 'aruma-jawa';
                                const constructedUrl = `${window.location.origin}/themes/${tema}/${slug}/${encodeURIComponent(g.nama_tamu)}`;
                                return (
                                  <>
                                    <a href={constructedUrl} target="_blank" className="btn btn-sm btn-outline"><Globe size={14} /> Link Unik</a>
                                    <button className="btn btn-sm border border-green-500 text-green-600 hover:bg-green-50" onClick={() => {
                                      const namaPria = formData.nama_panggilan_pria || 'Mempelai Pria';
                                      const namaWanita = formData.nama_panggilan_wanita || 'Mempelai Wanita';
                                      const message = `Assalamu'alaikum Wr. Wb.\n\nBismillahirahmanirrahim.\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami:\n\n${namaPria} & ${namaWanita}\n\nBerikut klik link untuk info lengkap dari acara kami :\n${constructedUrl}\n\nMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\n\nWassalamu'alaikum Wr. Wb.\n\nTerima Kasih..`;
                                      const waLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
                                      window.open(waLink, '_blank');
                                    }}>Kirim WhatsApp</button>
                                  </>
                                );
                              })()}
                            </div>
                          </td>
                          <td className="p-3">
                            <div className="flex gap-2 w-max">
                              <button className="btn btn-sm btn-outline" onClick={() => handleEditGuest(g)}>Edit</button>
                              <button className="btn btn-sm btn-danger" onClick={() => handleDeleteGuest(g.id)}><Trash2 size={14} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {guests.length === 0 && (
                        <tr><td colSpan={4} className="text-center p-4">Belum ada tamu undangan yang ditambahkan.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
        </div>
      </main>
    </div>
  )
}
