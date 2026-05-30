"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Medal, Calendar, Award, X, User, MapPin, Star } from "lucide-react";

const prestasiData = [
  { 
    id: 1, 
    title: "Juara 1 LKS Otomotif Tingkat Provinsi", 
    category: "Akademik", 
    year: "2026", 
    img: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?q=80&w=800&auto=format&fit=crop", 
    icon: <Trophy className="w-6 h-6" />,
    desc: "Kompetisi adu keterampilan teknis mesin kendaraan ringan. Siswa berhasil menyelesaikan troubleshooting mesin dengan waktu tercepat dan akurasi tinggi.",
    location: "Bandung, Jawa Barat",
    winner: "Mochammad Rizky"
  },
  { 
    id: 2, 
    title: "Medali Emas Pencak Silat Nasional", 
    category: "Non-Akademik", 
    year: "2026", 
    img: "https://images.unsplash.com/photo-1599586120429-48842e6d62b5?q=80&w=800&auto=format&fit=crop", 
    icon: <Medal className="w-6 h-6" />,
    desc: "Kejuaraan nasional yang diikuti oleh ratusan atlet dari berbagai sekolah di seluruh Indonesia. Atlet sekolah berhasil meraih emas di kelas berat 60kg.",
    location: "Jakarta",
    winner: "Siti Aisyah"
  },
  { 
    id: 3, 
    title: "Juara 3 Desain Grafis FLS2N", 
    category: "Akademik", 
    year: "2025", 
    img: "https://images.unsplash.com/photo-1626785774573-4b799315347d?q=80&w=800&auto=format&fit=crop", 
    icon: <Trophy className="w-6 h-6" />,
    desc: "Kompetisi seni desain poster bertemakan lingkungan hidup. Karya siswa dinilai kreatif dan memiliki pesan visual yang kuat.",
    location: "Surabaya",
    winner: "Reza Fahlevi"
  }
];

export default function PrestasiPage() {
  const [filter, setFilter] = useState("Semua");
  const [selected, setSelected] = useState<any>(null);

  const filteredData = filter === "Semua" ? prestasiData : prestasiData.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Galeri Prestasi Siswa</h1>
          <div className="flex justify-center gap-4">
            {["Semua", "Akademik", "Non-Akademik"].map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${filter === cat ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/20" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* MASONRY/GRID STYLE */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredData.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelected(item)}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-xl text-emerald-600">
                    {item.icon}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{item.category}</span>
                  <h3 className="font-bold text-slate-900 mt-1 mb-2 text-lg">{item.title}</h3>
                  <p className="text-slate-500 text-xs flex items-center gap-2">
                    <Calendar size={12} /> {item.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* POP-UP DETAIL */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-[2rem] overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black p-2 rounded-full text-white transition-colors"><X size={20} /></button>
              
              <img src={selected.img} alt={selected.title} className="w-full h-80 object-cover" />
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-emerald-600 mb-4">
                  <Star size={20} fill="currentColor" />
                  <span className="text-xs font-bold uppercase tracking-widest">{selected.category} • {selected.year}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{selected.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-8">{selected.desc}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                    <User className="text-emerald-600" />
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Pemenang</p>
                      <p className="font-bold text-slate-800">{selected.winner}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                    <MapPin className="text-emerald-600" />
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Lokasi</p>
                      <p className="font-bold text-slate-800">{selected.location}</p>
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
