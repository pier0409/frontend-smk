"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Konfigurasi Animasi
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function SejarahPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop" 
            alt="Gedung Sekolah" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        
        {/* Konten Hero */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Sejarah SMK Fauzaniyyah
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
            Membangun generasi unggul melalui pendidikan vokasi modern sejak tahun 2005.
          </p>
        </motion.div>
      </section>

      {/* 2. THE BEGINNING SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Teks */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp}
            >
              <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3">
                The Beginning
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Jejak Langkah Menuju Masa Depan
              </h2>
              <div className="text-slate-600 space-y-5 leading-relaxed">
                <p>
                  SMK Fauzaniyyah didirikan dengan visi besar untuk menjawab tantangan industri yang berkembang pesat. Berawal dari fasilitas sederhana dengan komitmen yang luar biasa, kami terus bertransformasi menjadi pusat keunggulan pendidikan vokasi di wilayah ini.
                </p>
                <p>
                  Setiap tonggak sejarah yang kami lalui adalah bukti kerja keras pendidik, staf, dan tentu saja para siswa yang telah mengukir prestasi di berbagai bidang teknologi dan bisnis.
                </p>
              </div>
            </motion.div>

            {/* Gambar & Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop" 
                  alt="Foto Sejarah" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Badge Mengambang */}
              <div className="absolute -bottom-8 -left-8 bg-emerald-600 text-white p-6 md:p-8 rounded-2xl shadow-xl border-4 border-white hidden sm:block">
                <h3 className="text-4xl font-black mb-1">19+</h3>
                <p className="text-sm font-medium text-emerald-50">Tahun Berdedikasi</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. TIMELINE SECTION */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} 
            className="text-center mb-20"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Timeline Perjalanan</h2>
            <p className="text-slate-600">Melihat kembali momen-momen yang membentuk jati diri kami.</p>
          </motion.div>

          <div className="relative">
            {/* Garis Tengah Vertikal */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-emerald-200 -ml-[1px]"></div>

            {[
              { 
                year: "2005", title: "Founding Year", 
                desc: "Peresmian SMK Fauzaniyyah dengan dua program keahlian awal: Teknik Komputer dan Jaringan serta Akuntansi.",
                img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
              },
              { 
                year: "2012", title: "Digital Expansion", 
                desc: "Pembangunan laboratorium komputer modern dan integrasi kurikulum berbasis industri teknologi digital.",
                img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
              },
              { 
                year: "2018", title: "National Recognition", 
                desc: "Meraih akreditasi 'A' Unggul dan memenangkan penghargaan sebagai SMK Model Tingkat Provinsi.",
                img: "https://images.unsplash.com/photo-1560523159-4a9692d222ef?q=80&w=800&auto=format&fit=crop"
              },
              { 
                year: "2024", title: "Modernist Excellence", 
                desc: "Peluncuran program magang internasional dan gedung pusat inovasi teknologi terbaru.",
                img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
              }
            ].map((item, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 last:mb-0 group">
                  
                  {/* Titik Tengah Timeline */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-600 border-4 border-slate-50 z-20 group-hover:scale-150 transition-transform duration-300"></div>

                  {/* KONTEN (Teks & Gambar Bergantian) */}
                  <>
                    {/* Sisi Kiri (Teks jika Even, Gambar jika Odd) */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12 order-2 md:order-1 mt-8 md:mt-0' : 'md:pr-12 order-1'}`}>
                      {isEven ? (
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-800 text-white text-sm font-bold mb-4 shadow-md">{item.year}</span>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                          <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
                        </motion.div>
                      ) : (
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                          <img src={item.img} alt={item.title} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                        </motion.div>
                      )}
                    </div>

                    {/* Sisi Kanan (Gambar jika Even, Teks jika Odd) */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:pl-12 order-1 md:order-2' : 'md:pl-12 order-2 mt-8 md:mt-0'}`}>
                      {isEven ? (
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                          <img src={item.img} alt={item.title} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                        </motion.div>
                      ) : (
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-800 text-white text-sm font-bold mb-4 shadow-md">{item.year}</span>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                          <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
                        </motion.div>
                      )}
                    </div>
                  </>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ARSIP VISUAL SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Arsip Visual</h2>
              <p className="text-slate-600">Kumpulan foto bersejarah dari masa ke masa.</p>
            </motion.div>
            <Link href="/galeri" className="text-emerald-700 font-medium hover:text-emerald-800 flex items-center mt-4 md:mt-0 group">
              Lihat Galeri Lengkap <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop"
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden bg-slate-100 cursor-pointer group"
              >
                <img src={img} alt={`Arsip ${idx+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STATS BAR (Sesuai Referensi Bawah Gambar) */}
      <section className="bg-emerald-800 py-16 text-white border-b-4 border-emerald-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-emerald-700/50">
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-2">3.5k+</h3>
              <p className="text-emerald-100 text-sm font-medium">Lulusan Sukses</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-2">120+</h3>
              <p className="text-emerald-100 text-sm font-medium">Partner Industri</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-2">45+</h3>
              <p className="text-emerald-100 text-sm font-medium">Penghargaan Nasional</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-2">19</h3>
              <p className="text-emerald-100 text-sm font-medium">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
