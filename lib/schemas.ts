import * as z from 'zod'

export const undanganSchema = z.object({
  slug: z.string().min(1, 'Slug wajib diisi').regex(/^[a-z0-9-]+$/, 'Hanya huruf kecil, angka, dan strip'),
  tema: z.string().min(1, 'Tema wajib diisi')
})

export const mempelaiSchema = z.object({
  // Mempelai Wanita
  fotoWanita: z.string().optional(),
  namaLengkapWanita: z.string().min(1, 'Nama lengkap wajib diisi'),
  namaPanggilanWanita: z.string().min(1, 'Nama panggilan wajib diisi'),
  namaAyahWanita: z.string().optional(),
  namaIbuWanita: z.string().optional(),
  alamatWanita: z.string().optional(),
  instagramWanita: z.string().optional(),
  whatsappWanita: z.string().optional(),
  
  // Mempelai Pria
  fotoPria: z.string().optional(),
  namaLengkapPria: z.string().min(1, 'Nama lengkap wajib diisi'),
  namaPanggilanPria: z.string().min(1, 'Nama panggilan wajib diisi'),
  namaAyahPria: z.string().optional(),
  namaIbuPria: z.string().optional(),
  alamatPria: z.string().optional(),
  instagramPria: z.string().optional(),
  whatsappPria: z.string().optional(),
})

export const waktuTempatSchema = z.object({
  alamatAkad: z.string().optional(),
  tanggalAkad: z.string().optional(),
  jamMulaiAkad: z.string().optional(),
  jamSelesaiAkad: z.string().optional(),
  
  alamatResepsi: z.string().optional(),
  tanggalResepsi: z.string().optional(),
  jamMulaiResepsi: z.string().optional(),
  jamSelesaiResepsi: z.string().optional(),
  
  linkGoogleMaps: z.string().optional()
})

export const loveStorySchema = z.object({
  id: z.number().optional(), // For update/delete
  judul: z.string().min(1, 'Judul wajib diisi'),
  cerita: z.string().min(1, 'Cerita wajib diisi'),
  urutan: z.number().default(0),
})

export const dresscodeSchema = z.object({
  id: z.number().optional(),
  warnaHex: z.string().length(7, 'Format warna hex tidak valid (contoh: #FFFFFF)'),
  title: z.string().min(1, 'Title wajib diisi'),
  deskripsi: z.string().optional(),
})

export const giftSchema = z.object({
  namaBankPria: z.string().optional(),
  nomorRekeningPria: z.string().optional(),
  atasNamaPria: z.string().optional(),
  namaBankWanita: z.string().optional(),
  nomorRekeningWanita: z.string().optional(),
  atasNamaWanita: z.string().optional(),
})

export const musikSchema = z.object({
  musik: z.string().optional(),
})

export const qrCodeSchema = z.object({
  qrCode: z.string().optional(),
})
