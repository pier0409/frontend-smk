"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ChevronRight, 
  GraduationCap, 
  Quote, 
  Wrench, 
  Monitor, 
  Sprout, 
  Scissors,
  Building,
  BookOpen
} from "lucide-react";
import Link from "next/link";

// Konfigurasi animasi standar
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Kiri: Teks */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={fadeUp}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-800 mb-6 font-medium">
                <span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2"></span>
                Pendaftaran PPDB Dibuka!
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-zinc-900 leading-[1.1] tracking-tight mb-6">
                Sekolah Kejuruan yang Membentuk <span className="text-emerald-700">Kompetensi</span>, Karakter, dan Masa Depan.
              </h1>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed max-w-xl">
                Mempersiapkan generasi unggul dengan kurikulum berbasis industri terkini, fasilitas modern, dan tenaga pendidik profesional yang berdedikasi tinggi.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/ppdb">
                  <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-full px-8">
                    Daftar PPDB <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/jurusan">
                  <Button size="lg" variant="outline" className="rounded-full px-8 text-zinc-700 border-zinc-300">
                    Lihat Jurusan
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Kanan: Komposisi Gambar */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block h-[500px]"
            >
              <div className="absolute top-0 right-0 w-[80%] h-[400px] bg-zinc-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop" alt="Kegiatan Kelas" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-[55%] h-[280px] bg-zinc-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" alt="Gedung Sekolah" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROFIL INSTITUSI */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Profil Institusi</h2>
            <p className="text-zinc-600 max-w-2xl">Mengenal lebih dekat visi, misi, dan pimpinan yang membawa SMK Fauzaniyyah menjadi pelopor pendidikan kejuruan.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card Kepala Sekolah */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-zinc-200">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Kepala Sekolah" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg text-zinc-900">Dr. H. Ahmad Fauzi, M.Pd</h3>
              <p className="text-sm text-emerald-700 mb-6">Kepala Sekolah</p>
              <Quote className="h-8 w-8 text-zinc-200 mb-2" />
              <p className="text-sm text-zinc-600 italic">"Kami berkomitmen mencetak lulusan yang tidak hanya cerdas secara akademis, tetapi juga memiliki keterampilan teknis mumpuni dan karakter kuat."</p>
            </motion.div>

            {/* Card Sejarah */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-6">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl text-zinc-900 mb-4">Sejarah Singkat</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Didirikan pada tahun 2005, SMK Fauzaniyyah bermula dari tekad untuk menjembatani kesenjangan antara pendidikan formal dan kebutuhan nyata industri. Berawal dari satu program keahlian, kini kami berkembang pesat menjadi pusat keunggulan vokasi.</p>
            </motion.div>

            {/* Card Visi Misi */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-emerald-800 p-8 rounded-3xl shadow-sm text-white">
              <div className="w-12 h-12 bg-emerald-700 text-white rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-4">Visi & Misi</h3>
              <ul className="space-y-3 text-sm text-emerald-50">
                <li className="flex items-start"><span className="mr-2">•</span> Menjadi lembaga pendidikan kejuruan berstandar internasional.</li>
                <li className="flex items-start"><span className="mr-2">•</span> Menyelenggarakan pembelajaran inovatif berbasis Teaching Factory.</li>
                <li className="flex items-start"><span className="mr-2">•</span> Membentuk karakter lulusan yang berakhlak mulia dan profesional.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAM KEAHLIAN */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Program Keahlian</h2>
              <p className="text-zinc-600">Pilihan jurusan berakreditasi yang dirancang bersama mitra industri untuk menjamin keterserapan kerja lulusan.</p>
            </motion.div>
            <Link href="/jurusan" className="text-emerald-700 font-medium hover:text-emerald-800 flex items-center mt-4 md:mt-0">
              Lihat Semua Jurusan <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Desain & Produksi Busana", desc: "Mengembangkan kreativitas dalam merancang busana, teknik pola, hingga produksi.", icon: <Scissors className="h-5 w-5" />, img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=500&auto=format&fit=crop" },
              { title: "Teknik Kendaraan Ringan", desc: "Mempelajari perawatan, perbaikan, dan manajemen bengkel otomotif dengan standar ATPM.", icon: <Wrench className="h-5 w-5" />, img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=500&auto=format&fit=crop" },
              { title: "Desain Komunikasi Visual", desc: "Fokus pada desain grafis, ilustrasi, videografi, dan media interaktif untuk menjawab era digital.", icon: <Monitor className="h-5 w-5" />, img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=500&auto=format&fit=crop" },
              { title: "Agribisnis Pengolahan Hasil", desc: "Mencetak technopreneur di bidang pertanian modern, teknologi pascapanen, hingga mutu pangan.", icon: <Sprout className="h-5 w-5" />, img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=500&auto=format&fit=crop" }
            ].map((item, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } } }} className="group bg-white rounded-3xl border border-zinc-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden bg-zinc-200">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-700 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-600 mb-4 line-clamp-3">{item.desc}</p>
                  <Link href={`/jurusan`} className="text-sm font-medium text-emerald-700 hover:text-emerald-800 flex items-center">
                    Pelajari <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FASILITAS (Layout Berbeda) */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Fasilitas Berstandar Industri</h2>
            <p className="text-zinc-600">Infrastruktur pendukung pembelajaran dirancang sedemikian rupa untuk mensimulasikan lingkungan kerja profesional yang sesungguhnya.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[450px]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2 relative rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop" alt="Lab Komputer" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Laboratorium Komputer & Studio DKV</h3>
                <p className="text-zinc-300">Dilengkapi dengan perangkat spesifikasi tinggi standar industri kreatif.</p>
              </div>
            </motion.div>
            <div className="grid grid-rows-2 gap-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }} className="relative rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=500&auto=format&fit=crop" alt="Bengkel Otomotif" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white text-center px-4">Bengkel Otomotif Terpadu</h3>
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { delay: 0.1 } } }} className="bg-emerald-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center text-white">
                <BookOpen className="h-10 w-10 mb-4 text-emerald-200" />
                <h3 className="text-xl font-bold mb-2">Perpustakaan Digital</h3>
                <p className="text-sm text-emerald-100">Akses ribuan e-book & jurnal referensi.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GURU & PENDIDIK */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-12">Tenaga Pendidik Profesional</h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "Siti Rahmawati, M.T.", role: "Ketua Jurusan DKV", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
              { name: "Budi Santoso, S.Pd.", role: "Kepala Program TKR", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&auto=format&fit=crop" },
              { name: "Dian Sastrowardoyo, S.Ds.", role: "Desain Program DPB", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" }
            ].map((guru, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-3xl p-6 border border-zinc-100 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-zinc-200">
                  <img src={guru.img} alt={guru.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-zinc-900 text-sm mb-1">{guru.name}</h3>
                <p className="text-xs text-zinc-500">{guru.role}</p>
              </div>
            ))}
            {/* Tombol Lihat Semua */}
            <div className="bg-white rounded-3xl p-6 border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center hover:border-emerald-500 hover:bg-emerald-50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ArrowRight className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-zinc-900 group-hover:text-emerald-700">Lihat Semua</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (CTA) */}
      <section className="pb-24 pt-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-800 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            {/* Dekorasi Latar */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-700 rounded-full blur-3xl opacity-50"></div>
            
            <div className="max-w-2xl relative z-10 text-center md:text-left mb-8 md:mb-0">
              <div className="inline-flex items-center rounded-full bg-emerald-700/50 text-emerald-100 px-3 py-1 text-sm font-medium mb-6">
                <Building className="h-4 w-4 mr-2" /> PPDB Gelombang 1 Sedang Dibuka
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Mari Bergabung Bersama Kami Membangun Masa Depan Gemilang.
              </h2>
              <p className="text-emerald-100 text-lg">
                Pendaftaran Peserta Didik Baru Tahun Ajaran 2024/2025 telah resmi dibuka. Kuota terbatas untuk setiap program keahlian.
              </p>
            </div>
            
            <div className="relative z-10 w-full md:w-auto flex justify-center">
              <Link href="/ppdb">
                <Button size="lg" className="bg-white text-emerald-900 hover:bg-zinc-100 rounded-full px-8 py-6 text-lg font-bold shadow-xl">
                  Masuk Portal PPDB
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
