"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, Calendar, User, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

// Kategori Berita (Tanpa Prestasi)
const categories = ["Semua", "Berita Sekolah", "Pengumuman", "Artikel Pendidikan"];

// Data Dummy Berita (Prestasi dihapus)
const newsData = [
  {
    id: "penerimaan-siswa-baru-2026",
    title: "Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 Resmi Dibuka",
    excerpt: "SMK Fauzaniyyah kembali membuka pendaftaran untuk calon siswa baru. Tersedia kuota beasiswa untuk siswa berprestasi dan kurang mampu...",
    category: "Pengumuman",
    date: "28 Mei 2026",
    author: "Panitia PPDB",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "kunjungan-industri-toyota",
    title: "Kunjungan Industri Kelas XI ke Pabrik Perakitan Toyota Astra Motor",
    excerpt: "Untuk mengenalkan dunia kerja secara langsung, sebanyak 120 siswa melakukan kunjungan industri ke pabrik perakitan mobil...",
    category: "Berita Sekolah",
    date: "02 Mei 2026",
    author: "Tim Jurnalistik",
    img: "https://images.unsplash.com/photo-1580981433608-5d9e50337a6a?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "pentingnya-soft-skill",
    title: "Mengapa Soft Skill Sama Pentingnya dengan Hard Skill di Dunia Kerja?",
    excerpt: "Banyak lulusan yang unggul secara teknis namun gagal saat wawancara kerja. Mari bahas pentingnya komunikasi dan kerja sama tim...",
    category: "Artikel Pendidikan",
    date: "20 April 2026",
    author: "Bimbingan Konseling",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "launching-tefa-dkv",
    title: "Peresmian Studio Teaching Factory (TeFa) Jurusan DKV",
    excerpt: "Sekolah resmi meluncurkan studio multimedia berstandar industri yang akan menerima proyek desain dan percetakan dari klien luar...",
    category: "Berita Sekolah",
    date: "10 April 2026",
    author: "Kepala Jurusan DKV",
    img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "jadwal-ujian-akhir",
    title: "Jadwal Ujian Akhir Semester (UAS) Genap 2025/2026",
    excerpt: "Diberitahukan kepada seluruh siswa kelas X dan XI bahwa Ujian Akhir Semester genap akan dilaksanakan pada awal bulan Juni mendatang...",
    category: "Pengumuman",
    date: "05 April 2026",
    author: "Kurikulum",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    featured: false,
  }
];

export default function BeritaPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredNews = activeCategory === "Semua" 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory);

  const featuredArticle = activeCategory === "Semua" ? newsData.find(item => item.featured) : null;
  const regularArticles = activeCategory === "Semua" ? newsData.filter(item => !item.featured) : filteredNews;

  return (
    <div className="min-h-screen bg-slate-50 py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-sm font-bold tracking-wide uppercase">
            <Newspaper className="w-4 h-4 mr-2" />
            Pusat Informasi
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Berita & Artikel Terkini</h1>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/30 scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            {featuredArticle && (
              <div className="mb-12">
                <Link href={`/berita/${featuredArticle.id}`} className="block group">
                  <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-200 flex flex-col lg:flex-row hover:shadow-xl transition-all duration-300">
                    <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                      <img src={featuredArticle.img} alt={featuredArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <span className="text-emerald-600 font-bold mb-4 block">{featuredArticle.category}</span>
                      <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{featuredArticle.title}</h2>
                      <p className="text-slate-600 mb-8">{featuredArticle.excerpt}</p>
                      <span className="text-emerald-600 font-bold flex items-center">Baca Selengkapnya <ArrowRight className="ml-2 w-4 h-4" /></span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((item) => (
                <Link href={`/berita/${item.id}`} key={item.id} className="block group">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="h-56 overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <p className="text-emerald-600 text-[10px] font-bold uppercase mb-2">{item.category}</p>
                      <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
