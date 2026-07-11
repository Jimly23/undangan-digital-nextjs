import type { Metadata } from 'next';
import axios from 'axios';

type Props = {
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const paramsData = await params;
  const slugParam = paramsData.slug;
  const slug = Array.isArray(slugParam) && slugParam.length > 1 ? slugParam[1] : '';

  let ogImage = '/logo.png';
  let title = 'Youvitation - Khitan Invitation';
  let description = 'Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.';

  if (slug) {
    try {
      const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';
      const res = await axios.get(`${BASE_URL}/invitation/${slug}`);
      const data = res.data?.data || res.data;
      if (data) {
        title = `Walimatul Khitan ${data.nama_panggilan_pria || 'Nama Anak'}`;
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

export default function ThemeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
