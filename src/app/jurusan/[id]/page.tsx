"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Briefcase, BookOpen, Wrench, GraduationCap } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation"; // <-- Kita gunakan useParams

// Database Mini untuk Detail Masing-masing Jurusan
const detailJurusan: Record<string, any> = {
  "tata-busana": {
    singkatan: "Tata Busana",
    title: "Tata Busana (Busana Butik)",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000&auto=format&fit=crop",
    desc: "Program keahlian Tata Busana menyiapkan peserta didik untuk memiliki kemampuan di bidang pembuatan busana, mulai dari desain, pembuatan pola, pemotongan bahan, hingga menjahit dan penyelesaian akhir (finishing) berstandar butik dan industri garmen.",
    materi: ["Dasar Desain & Fashion Illustration", "Pembuatan Pola (Pattern Making)", "Teknologi Menjahit", "Pembuatan Busana Custom Made", "Produksi Busana Industri", "Pembuatan Hiasan Busana (Bordir/Payet)"],
    fasilitas: ["Laboratorium Menjahit & Pola", "Mesin Jahit High-Speed Industri", "Mesin Obras, Neci, & Pasang Kancing", "Ruang Pameran (Fashion Gallery)"],
    peluang: ["Fashion Designer", "Pattern Maker", "Quality Control Garment", "Fashion Stylist", "Wirausaha Butik & Konveksi"]
  },
  "tkro": {
    singkatan: "TKRO",
    title: "Teknik Kendaraan Ringan Otomotif",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2000&auto=format&fit=crop",
    desc: "Program keahlian yang membekali peserta didik dengan ilmu kendaraan bermotor roda empat atau lebih. Fokus pada penguasaan keterampilan perawatan dan perbaikan mesin (Engine), sasis (Chassis), pemindah tenaga (Transmission), hingga kelistrikan (Electrical) sesuai standar ATPM.",
    materi: ["Gambar Teknik Otomotif", "Teknologi Dasar Otomotif", "Pemeliharaan Mesin Kendaraan Ringan", "Pemeliharaan Sasis & Pemindah Tenaga", "Pemeliharaan Kelistrikan Kendaraan", "Manajemen Bengkel"],
    fasilitas: ["Bengkel Otomotif Standar Industri", "Engine Scanner & Diagnostic Tools", "Car Lift, Spooring & Balancing Tools", "Unit Mobil Praktik Generasi Terbaru"],
    peluang: ["Teknisi/Mekanik Mobil Profesional", "Service Advisor", "Quality Control Pabrik Otomotif", "Operator Alat Berat", "Wirausaha Bengkel Otomotif"]
  },
  "dkv": {
    singkatan: "DKV",
    title: "Desain Komunikasi Visual",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    desc: "Desain Komunikasi Visual (sebelumnya Multimedia) mempelajari seni komunikasi menggunakan elemen visual. Siswa dibekali kemampuan desain grafis, ilustrasi, fotografi, videografi, hingga animasi untuk menyampaikan pesan secara efektif, kreatif, dan informatif di era digital.",
    materi: ["Dasar Seni Rupa & Tipografi", "Ilustrasi Digital & Manual", "Fotografi & Videografi", "Desain Grafis Percetakan & UI/UX", "Animasi 2D & 3D", "Desain Media Interaktif"],
    fasilitas: ["Laboratorium Komputer iMac/PC High-end", "Studio Fotografi & Videografi", "Drawing Tablet/Pen Tablet", "Ruang Produksi Podcast & Audio"],
    peluang: ["Graphic Designer", "Video Editor & Videographer", "Animator & Illustrator", "Art Director / Creative Director", "Content Creator & Social Media Specialist"]
  },
  "atph": {
    singkatan: "ATPH",
    title: "Agribisnis Tanaman Pangan & Hortikultura",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c13?q=80&w=2000&auto=format&fit=crop",
    desc: "Program keahlian yang mencetak technopreneur muda di bidang pertanian. Mempelajari dari proses pembibitan, penanaman, pemeliharaan, hingga panen dan pascapanen dengan menerapkan teknologi pertanian modern (seperti hidroponik dan smart farming) yang ramah lingkungan.",
    materi: ["Dasar Budidaya Tanaman", "Pembiakan Tanaman (Vegetatif & Generatif)", "Agribisnis Tanaman Pangan", "Agribisnis Tanaman Sayuran & Buah", "Agribisnis Tanaman Hias", "Teknik Hidroponik & Kultur Jaringan"],
    fasilitas: ["Lahan Pertanian Praktik Terpadu", "Greenhouse (Rumah Kaca) Modern", "Instalasi Hidroponik & Aquaponik", "Alat Mesin Pertanian (Alsintan)"],
    peluang: ["Pengusaha Agribisnis (Agripreneur)", "Konsultan & Penyuluh Pertanian", "Quality Control Produk Pertanian", "Mandor Perkebunan", "Peneliti Pertanian"]
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function DetailJurusanPage() {
  const params = useParams(); // Membaca URL secara aman di Next.js versi terbaru
  const id = params?.id as string;

  const data = detailJurusan[id];

  // Tampilan jika ID jurusan tidak ditemukan (mencegah Error 404 dari Server)
  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Mencari Data Jurusan...</h1>
        <p className="text-slate-500 mb-6">Jika halaman ini terus tampil, jurusan tidak ditemukan.</p>
        <Link href="/jurusan">
          <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">Kembali ke Daftar Jurusan</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] min-h-[400px] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link href="/jurusan" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Daftar Jurusan
          </Link>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight max-w-4xl">
            {data.title}
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="inline-block px-4 py-1.5 bg-emerald-600 text-white font-bold rounded-full text-sm">
            Program Keahlian
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* KOLOM KIRI (Deskripsi & Materi) */}
          <div className="lg:w-2/3 space-y-8">
            
            {/* Box Deskripsi */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Tentang Jurusan</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{data.desc}</p>
            </motion.div>

            {/* Box Materi yang Dipelajari */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><BookOpen className="w-6 h-6" /></div>
                <h2 className="text-2xl font-bold text-slate-900">Apa yang Dipelajari?</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.materi.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start bg-slate-50 p-4 rounded-2xl">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Box Fasilitas */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><Wrench className="w-6 h-6" /></div>
                <h2 className="text-2xl font-bold text-slate-900">Fasilitas Praktik</h2>
              </div>
              <ul className="space-y-4">
                {data.fasilitas.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center text-slate-600 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mr-4"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          {/* KOLOM KANAN (Sticky Card Peluang Kerja) */}
          <div className="lg:w-1/3">
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="sticky top-28 space-y-6">
              
              {/* Card Peluang Karir */}
              <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-slate-800 text-emerald-400 rounded-xl"><Briefcase className="w-6 h-6" /></div>
                  <h3 className="text-xl font-bold">Peluang Karir</h3>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Lulusan {data.singkatan} dipersiapkan untuk langsung terserap di dunia industri maupun berwirausaha mandiri:
                </p>
                <ul className="space-y-4 mb-8">
                  {data.peluang.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <GraduationCap className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-200 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-slate-800">
                  <p className="text-xs text-slate-400 text-center uppercase tracking-widest font-bold mb-4">Tertarik dengan jurusan ini?</p>
                  <Link href="/ppdb" className="block">
                    <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-emerald-900/50">
                      Daftar Sekarang
                    </button>
                  </Link>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

    </div>
  );
}
