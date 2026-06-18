import type { Metadata } from 'next';
import axios from 'axios';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const paramsData = await params;
  const slug = paramsData.slug;

  let ogImage = '/logo.png';
  let title = 'Youvitation - Portal Kelola Undangan';
  let description = 'Akses khusus untuk mengelola undangan digital dan daftar tamu Anda.';

  if (slug) {
    try {
      const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';
      const res = await axios.get(`${BASE_URL}/invitation/${slug}`);
      const data = res.data?.data || res.data;
      if (data) {
        title = `Dashboard Undangan - ${data.nama_panggilan_pria || 'Mempelai Pria'} & ${data.nama_panggilan_wanita || 'Mempelai Wanita'}`;
        
        if (data.foto_pria_url) ogImage = data.foto_pria_url;
        else if (data.foto_wanita_url) ogImage = data.foto_wanita_url;
      }
    } catch (e) {
      console.error(e);
    }
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function ManageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
