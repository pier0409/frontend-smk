"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ImageIcon, Calendar, User, X, ChevronLeft, ChevronRight } from "lucide-react";

// Kategori Filter
const categories = ["Semua", "Tata Busana", "TKRO", "DKV", "ATPH", "Kegiatan"];

// Data Dummy Galeri Foto
// Tambahkan properti "images" berupa array untuk item yang memiliki banyak foto
const galleryData = [
  { 
    id: 1, 
    title: "Koleksi Busana Muslim Modern", 
    category: "Tata Busana", 
    img: "https://images.unsplash.com/photo-1550614000-4b95d415d183?q=80&w=800&auto=format&fit=crop", 
    date: "15 Mei 2026", 
    author: "Siti Aisyah" 
  },
  { 
    id: 2, 
    title: "Restorasi Mesin EFI", 
    category: "TKRO", 
    img: "https://images.unsplash.com/photo-1635338661906-8bceb812f845?q=80&w=800&auto=format&fit=crop", 
    date: "10 April 2026", 
    author: "Budi Santoso" 
  },
  { 
    id: 3, 
    title: "Branding Identitas UMKM", 
    category: "DKV", 
    img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop", 
    date: "22 Maret 2026", 
    author: "Reza Fahlevi" 
  },
  { 
    id: 8, 
    title: "Lomba Kompetensi Siswa (LKS) Tingkat Provinsi", 
    category: "Kegiatan", 
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", 
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop"
    ],
    date: "15 September 2025", 
    author: "Humas SMK Fauzaniyyah" 
  },
  { 
    id: 10, 
    title: "Upacara Hari Kemerdekaan RI", 
    category: "Kegiatan", 
    img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop", 
    images: [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523580494112-071dcb85170d?q=80&w=800&auto=format&fit=crop"
    ],
    date: "17 Agustus 2025", 
    author: "Tim Dokumentasi OSIS" 
  },
];

export default function GaleriPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);
  
  // State khusus untuk melacak indeks foto pada slider
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fungsi untuk memfilter foto berdasarkan tombol yang diklik
  const filteredImages = activeFilter === "Semua" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  // Fungsi navigasi slider
  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation(); // Mencegah klik tembus ke background
    if (selectedPhoto?.images) {
      setCurrentSlide((prev) => (prev + 1) % selectedPhoto.images.length);
    }
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhoto?.images) {
      setCurrentSlide((prev) => (prev - 1 + selectedPhoto.images.length) % selectedPhoto.images.length);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-sm font-bold tracking-wide uppercase">
            <Camera className="w-4 h-4 mr-2" />
            Dokumentasi Sekolah
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Galeri Karya & Kegiatan</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Menampilkan momen-momen terbaik, hasil karya kreatif siswa, dan kegiatan inspiratif di lingkungan SMK Fauzaniyyah.
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/30 scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* MASONRY/GRID GALLERY */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                onClick={() => {
                  setSelectedPhoto(item);
                  setCurrentSlide(0); // Reset ke foto pertama setiap kali pop-up dibuka
                }}
                className="group relative bg-slate-200 rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer shadow-sm border border-slate-100"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 mb-3 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-lg leading-tight flex items-center">
                      <ImageIcon className="w-4 h-4 mr-2 text-emerald-300" />
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Indikator visual jika item ini berupa album (punya banyak foto) */}
                {item.images && item.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-lg flex items-center">
                    <ImageIcon className="w-3 h-3 mr-1" />
                    1/{item.images.length}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* MODAL DETAIL */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedPhoto(null)} className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black text-white transition-colors z-20">
                <X size={20} />
              </button>
              
              <div className="relative h-80 md:h-[400px] w-full bg-slate-900 group">
                {/* Menampilkan gambar aktif. Jika ada array images, gunakan slide aktif, jika tidak gunakan img tunggal */}
                <img 
                  src={selectedPhoto.images ? selectedPhoto.images[currentSlide] : selectedPhoto.img} 
                  alt={selectedPhoto.title} 
                  className="w-full h-full object-cover transition-opacity duration-300" 
                />

                {/* Tombol Navigasi Slider (Hanya muncul jika foto lebih dari 1) */}
                {selectedPhoto.images && selectedPhoto.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevSlide} 
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-black transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={nextSlide} 
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-black transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Dots Indicator di bawah foto */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {selectedPhoto.images.map((_: any, idx: number) => (
                        <div 
                          key={idx} 
                          className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? "bg-emerald-400 w-4" : "bg-white/50"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-8">
                <div className="inline-block px-3 py-1 mb-4 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest rounded-md">
                  {selectedPhoto.category}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{selectedPhoto.title}</h2>
                
                <div className="grid grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-emerald-600"><User size={20} /></div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pembuat / Tim</p>
                      <p className="font-semibold text-slate-800">{selectedPhoto.author}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-emerald-600"><Calendar size={20} /></div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tanggal</p>
                      <p className="font-semibold text-slate-800">{selectedPhoto.date}</p>
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
