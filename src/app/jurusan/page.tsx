"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Wrench, Monitor, Sprout, ArrowRight, X, User, Calendar } from "lucide-react";
import Link from "next/link";

// Data Jurusan
const jurusanData = [
  {
    id: "tata-busana",
    title: "Tata Busana (Busana Butik)",
    icon: <Scissors className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop",
    desc: "Mempelajari teknik desain, pembuatan pola, dan penjahitan busana dengan standar industri fashion dan butik terkini.",
    kompetensi: ["Fashion Illustration", "Pattern Making", "Garment Production"],
    peluang: "Fashion Designer, Pattern Maker, Quality Control Garment, Entrepreneur."
  },
  {
    id: "tkro",
    title: "Teknik Kendaraan Ringan Otomotif (TKRO)",
    icon: <Wrench className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop",
    desc: "Fokus pada perawatan, perbaikan, dan analisis sistem otomotif kendaraan ringan sesuai standar industri ATPM.",
    kompetensi: ["Engine Maintenance", "Electrical Systems", "Chassis & Suspension"],
    peluang: "Mekanik Profesional, Service Advisor, Teknisi Perakitan Otomotif."
  },
  {
    id: "dkv",
    title: "Desain Komunikasi Visual (DKV)",
    icon: <Monitor className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    desc: "Mengembangkan kreativitas dalam perancangan media komunikasi visual, branding, dan produksi multimedia interaktif.",
    kompetensi: ["Graphic Design", "Videography", "Digital Branding"],
    peluang: "Graphic Designer, Video Editor, Illustrator, Creative Director."
  },
  {
    id: "atph",
    title: "Agribisnis Tanaman Pangan & Hortikultura",
    icon: <Sprout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c13?q=80&w=1000&auto=format&fit=crop",
    desc: "Mempelajari agribisnis tanaman pangan, hortikultura, hingga teknik budidaya pertanian modern dan hidroponik.",
    kompetensi: ["Crop Production", "Hydroponics", "Agribusiness Management"],
    peluang: "Pengusaha Agribisnis, Konsultan Pertanian, Penyuluh Pertanian."
  }
];

// Data Karya Spesifik (dengan tambahan pembuat & tanggal)
const karyaData = [
  { img: "https://images.unsplash.com/photo-1550614000-4b95d415d183?q=80&w=800&auto=format&fit=crop", title: "Koleksi Busana Muslim Modern", tag: "TATA BUSANA", author: "Siti Aisyah", date: "15 Mei 2026" },
  { img: "https://images.unsplash.com/photo-1635338661906-8bceb812f845?q=80&w=800&auto=format&fit=crop", title: "Restorasi Mesin EFI", tag: "TKRO", author: "Budi & Tim", date: "10 April 2026" },
  { img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop", title: "Branding Identitas UMKM", tag: "DKV", author: "Reza Fahlevi", date: "22 Maret 2026" },
  { img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8dd?q=80&w=800&auto=format&fit=crop", title: "Produk Olahan Pangan Organik", tag: "ATPH", author: "Kelompok Tani Siswa", date: "05 Februari 2026" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function JurusanPage() {
  // State untuk melacak karya mana yang sedang diklik (dibuka pop-up-nya)
  const [selectedKarya, setSelectedKarya] = useState<any>(null);

  return (
    <div className="min-h-screen bg-slate-50 py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3">
            Kompetensi Keahlian
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Program Keahlian Unggulan
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Mempersiapkan tenaga profesional yang kompeten, inovatif, dan siap bersaing di dunia industri global melalui kurikulum berbasis praktik terkini.
          </p>
        </motion.div>

        {/* KARTU JURUSAN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {jurusanData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative group">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 text-emerald-700">
                  {item.icon}
                  <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">{item.desc}</p>
                <div className="mb-6">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Kompetensi Utama</p>
                  <div className="flex flex-wrap gap-2">
                    {item.kompetensi.map((komp, i) => (
                      <span key={i} className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-md">{komp}</span>
                    ))}
                  </div>
                </div>
                <div className="mb-8 flex-grow">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Peluang Kerja</p>
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed">{item.peluang}</p>
                </div>
                <Link href={`/jurusan/${item.id}`} className="mt-auto">
                  <button className="w-full py-3 px-4 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white font-bold rounded-xl flex items-center justify-center transition-colors group">
                    Pelajari Selengkapnya <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION KARYA SISWA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center pt-16 border-t border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Karya & Hasil Kreativitas Siswa</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
            Inspirasi dan bukti nyata kompetensi siswa-siswi SMK Fauzaniyyah dalam menghasilkan karya inovatif berstandar industri.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {karyaData.map((karya, idx) => (
              <div key={idx} className="text-left group cursor-pointer" onClick={() => setSelectedKarya(karya)}>
                <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] mb-4 relative">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors z-10"></div>
                  <img src={karya.img} alt={karya.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">{karya.tag}</p>
                <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{karya.title}</h3>
              </div>
            ))}
          </div>

          <Link href="/galeri">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
              Lihat Semua Karya &rarr;
            </button>
          </Link>
        </motion.div>
      </div>

      {/* MODAL POP-UP DETAIL KARYA */}
      <AnimatePresence>
        {selectedKarya && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4"
            onClick={() => setSelectedKarya(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam kotak menutup pop-up
            >
              <button onClick={() => setSelectedKarya(null)} className="absolute top-4 right-4 bg-white/50 hover:bg-white p-2 rounded-full transition-colors z-20">
                <X size={20} className="text-slate-900" />
              </button>
              
              <div className="relative h-80 w-full bg-slate-100">
                <img src={selectedKarya.img} alt={selectedKarya.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-8">
                <div className="inline-block px-3 py-1 mb-4 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest rounded-md">
                  {selectedKarya.tag}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{selectedKarya.title}</h2>
                
                <div className="grid grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-emerald-600"><User size={20} /></div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pembuat</p>
                      <p className="font-semibold text-slate-800">{selectedKarya.author}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-emerald-600"><Calendar size={20} /></div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tanggal</p>
                      <p className="font-semibold text-slate-800">{selectedKarya.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
