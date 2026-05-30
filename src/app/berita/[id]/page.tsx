"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag, Share2, Link2, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Database Mini Berita (Lengkap dengan paragraf isi konten)
const detailBerita: Record<string, any> = {
  "penerimaan-siswa-baru-2026": {
    title: "Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 Resmi Dibuka",
    category: "Pengumuman",
    date: "28 Mei 2026",
    author: "Panitia PPDB",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    content: [
      "SMK Fauzaniyyah kembali membuka pendaftaran untuk calon siswa baru Tahun Ajaran 2026/2027. Pendaftaran ini terbuka untuk seluruh lulusan SMP/MTs sederajat yang ingin melanjutkan pendidikan vokasi berkualitas dan siap kerja di era modern.",
      "Pada tahun ajaran ini, SMK Fauzaniyyah menawarkan 4 program keahlian unggulan yang telah disesuaikan dengan kebutuhan industri saat ini, yaitu: Tata Busana (Busana Butik), Teknik Kendaraan Ringan Otomotif (TKRO), Desain Komunikasi Visual (DKV), dan Agribisnis Tanaman Pangan & Hortikultura (ATPH).",
      "Kabar gembiranya, tersedia kuota beasiswa khusus bagi calon siswa yang memiliki prestasi akademik maupun non-akademik di tingkat kabupaten/kota, provinsi, hingga nasional. Selain itu, kami juga menyediakan jalur afirmasi untuk keluarga yang membutuhkan agar tetap bisa mendapatkan akses pendidikan yang sangat layak.",
      "Pendaftaran dilakukan sepenuhnya secara online melalui menu 'PPDB Online' di website resmi SMK Fauzaniyyah. Calon pendaftar diharapkan mempersiapkan dokumen persyaratan dalam bentuk digital (scan) seperti Kartu Keluarga, Akta Kelahiran, Pas Foto, dan Surat Keterangan Lulus (SKL) dari SMP/MTs asal."
    ]
  },
  "juara-1-lks-provinsi": {
    title: "Siswa TKRO SMK Fauzaniyyah Sabet Juara 1 LKS Tingkat Provinsi Jawa Barat",
    category: "Prestasi",
    date: "15 Mei 2026",
    author: "Humas Sekolah",
    img: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Prestasi membanggakan kembali ditorehkan oleh siswa jurusan Teknik Kendaraan Ringan Otomotif (TKRO) SMK Fauzaniyyah dalam ajang Lomba Kompetensi Siswa (LKS) Tahun 2026 tingkat Provinsi Jawa Barat yang diselenggarakan di Bandung akhir pekan lalu.",
      "Mochammad Rizky, siswa kelas XII TKRO, berhasil mengalahkan puluhan kontestan dari berbagai SMK unggulan lainnya dalam bidang 'Automobile Technology'. Rizky menunjukkan kecepatan, ketepatan, dan analisis yang sangat akurat dalam melakukan troubleshooting sistem Engine Management System (EMS) pada mesin bensin injeksi modern.",
      "'Kami sangat bangga dengan pencapaian Rizky. Ini membuktikan bahwa fasilitas praktik yang kami sediakan di bengkel sekolah serta bimbingan dari para guru produktif sudah sangat relevan dengan standar yang dilombakan di tingkat provinsi bahkan nasional,' ujar Kepala Sekolah.",
      "Dengan kemenangan ini, Rizky berhak mewakili Provinsi Jawa Barat untuk melaju ke ajang LKS Tingkat Nasional yang akan digelar pada bulan Agustus mendatang di Jakarta. Mari kita doakan agar perwakilan SMK Fauzaniyyah dapat kembali mengharumkan nama sekolah di kancah nasional!"
    ]
  },
  "kunjungan-industri-toyota": {
    title: "Kunjungan Industri Kelas XI ke Pabrik Perakitan Toyota Astra Motor",
    category: "Berita Sekolah",
    date: "02 Mei 2026",
    author: "Tim Jurnalistik",
    img: "https://images.unsplash.com/photo-1580981433608-5d9e50337a6a?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Sebagai bagian dari program penyelarasan kurikulum dengan dunia industri, sebanyak 120 siswa kelas XI SMK Fauzaniyyah melaksanakan Kunjungan Industri (KI) ke pabrik perakitan PT Toyota Motor Manufacturing Indonesia (TMMIN) di Karawang.",
      "Selama kunjungan, para siswa diajak berkeliling melihat langsung proses perakitan kendaraan mulai dari proses stamping, pengelasan (welding), pengecatan (painting), hingga proses perakitan akhir (assembling) dan quality control.",
      "Kegiatan ini diharapkan dapat membuka wawasan siswa tentang budaya kerja industri yang disiplin, aman, dan efisien (Kaizen), serta memberikan gambaran nyata tentang prospek karir yang menanti mereka setelah lulus nanti."
    ]
  },
  "default": {
    title: "Artikel Sedang Dalam Penulisan",
    category: "Informasi",
    date: "Hari ini",
    author: "Admin Web",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Mohon maaf, isi detail dari artikel ini sedang dalam tahap penyuntingan oleh tim redaksi kami.",
      "Silakan kembali lagi nanti untuk membaca informasi selengkapnya."
    ]
  }
};

export default function DetailBeritaPage() {
  const params = useParams();
  const id = params?.id as string;

  const article = detailBerita[id] || detailBerita["default"];

  if (!article) {
    return <div className="min-h-screen flex items-center justify-center">Memuat...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* HEADER GAMBAR BESAR */}
      <div className="relative w-full h-[40vh] md:h-[50vh] bg-slate-900">
        <div className="absolute inset-0">
          <img src={article.img} alt={article.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 w-full">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <Link href="/berita" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium mb-6 transition-colors bg-slate-900/50 px-4 py-2 rounded-full backdrop-blur-sm text-sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Berita
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-emerald-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm">
                {article.category}
              </span>
              <span className="flex items-center text-slate-300 text-sm font-medium">
                <Calendar className="w-4 h-4 mr-1.5" /> {article.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight md:leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* KONTEN ARTIKEL */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8 md:p-12">
          
          {/* Info Penulis & Bagikan */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-slate-100 mb-8 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                <User size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Ditulis oleh</p>
                <p className="font-bold text-slate-800">{article.author}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-500 mr-2 flex items-center"><Share2 className="w-4 h-4 mr-2" /> Bagikan:</span>
              {/* Ikon bagikan diubah menjadi Link, Pesan, dan Mail yang 100% aman dari error */}
              <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-600 transition-colors" title="Salin Tautan"><Link2 className="w-4 h-4" /></button>
              <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-600 transition-colors" title="Kirim via Chat"><MessageCircle className="w-4 h-4" /></button>
              <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-600 transition-colors" title="Kirim Email"><Mail className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Paragraf Isi Berita */}
          <div className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed">
            {article.content.map((paragraf: string, idx: number) => (
              <p key={idx} className="mb-6 text-lg">{paragraf}</p>
            ))}
          </div>

          {/* Tags Section */}
          <div className="pt-8 mt-12 border-t border-slate-100 flex flex-wrap gap-2">
            <Tag className="w-5 h-5 text-slate-400 mr-2 mt-1" />
            <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">SMK Bisa</span>
            <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">Pendidikan Vokasi</span>
            <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">Jawa Barat</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}
