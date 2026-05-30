"use client";

import { motion, Variants } from "framer-motion";
import { Users, BookOpen, Wrench, Megaphone, Laptop, Car, Briefcase, Router, PenTool, ShieldCheck, Award } from "lucide-react";

// Konfigurasi animasi berurutan (Stagger) dengan tipe Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function StrukturOrganisasiPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative py-20 overflow-hidden">
      {/* Background Dot Pattern Modern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 z-0"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-sm font-bold tracking-wide uppercase">
            <ShieldCheck className="w-4 h-4 mr-2" />
            Manajemen Sekolah
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Struktur Organisasi</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Sinergi kepemimpinan dan profesionalisme untuk mewujudkan pendidikan vokasi yang unggul dan berdaya saing global.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="show">
          
          {/* LEVEL 1: Pimpinan (Komite & Kepala Sekolah) */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12 relative">
            
            {/* Card Komite */}
            <motion.div variants={cardVariants} className="group relative bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300 w-full md:w-[400px] flex items-center z-10">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-500 rounded-l-3xl"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-emerald-200">
                <Users size={28} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-emerald-600 tracking-widest mb-1 uppercase">Komite Sekolah</p>
                <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-emerald-700 transition-colors">H. Ahmad Fauzan, M.Pd.</h3>
                <p className="text-sm text-slate-500 font-medium">Penasehat Strategis</p>
              </div>
            </motion.div>

            {/* Card Kepala Sekolah */}
            <motion.div variants={cardVariants} className="group relative bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300 w-full md:w-[400px] flex items-center z-10 ring-4 ring-white">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-600 rounded-l-3xl shadow-[0_0_15px_rgba(5,150,105,0.5)]"></div>
              <div className="w-16 h-16 bg-slate-200 rounded-2xl overflow-hidden mr-5 flex-shrink-0 border-2 border-emerald-100 group-hover:border-emerald-400 transition-colors">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Kepala Sekolah" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-emerald-600 tracking-widest mb-1 uppercase flex items-center gap-1">
                  Kepala Sekolah <Award size={14} className="text-amber-500" />
                </p>
                <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-emerald-700 transition-colors">Dr. Ir. H. M. Ilyas</h3>
                <p className="text-sm text-slate-500 font-medium">Leadership & Vision</p>
              </div>
            </motion.div>
          </div>

          {/* Garis Vertikal Utama (Dari Kepala Sekolah ke Bawah) */}
          <div className="hidden lg:block relative w-full h-12">
            <div className="absolute left-1/2 top-[-3rem] bottom-0 w-0.5 bg-emerald-200 ml-[-1px]"></div>
          </div>

          {/* LEVEL 2: Wakil Kepala Sekolah (Wakasek) */}
          <div className="relative mb-20">
            {/* Garis Horizontal Penghubung Wakasek (Hanya Desktop) */}
            <div className="hidden lg:block absolute top-[-1.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-emerald-200"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {[
                { role: "Wakasek Kurikulum", name: "Budi Santoso, S.T.", tag: "Academic Lead", icon: <BookOpen size={24} /> },
                { role: "Wakasek Kesiswaan", name: "Siti Aminah, M.Pd.", tag: "Student Affairs", icon: <Users size={24} /> },
                { role: "Wakasek Sarpras", name: "Hendra Jaya, M.T.", tag: "Infrastructure", icon: <Wrench size={24} /> },
                { role: "Wakasek Humas", name: "Dewi Lestari, S.I.Kom.", tag: "Partnerships", icon: <Megaphone size={24} /> }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  {/* Garis Vertikal Pendek ke masing-masing Wakasek */}
                  <div className="hidden lg:block absolute top-[-1.5rem] left-1/2 w-0.5 h-6 bg-emerald-200 ml-[-1px]"></div>
                  
                  <motion.div variants={cardVariants} className="group h-full bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-emerald-300 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm border border-emerald-100">
                      {item.icon}
                    </div>
                    <p className="text-[10px] font-bold text-emerald-600 tracking-widest mb-2 uppercase">{item.role}</p>
                    <h3 className="font-bold text-slate-900 mb-4 text-lg">{item.name}</h3>
                    <span className="mt-auto px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-full group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                      {item.tag}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* PEMISAH: Ketua Jurusan */}
          <motion.div variants={cardVariants} className="relative flex justify-center items-center mb-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-dashed border-slate-300"></div>
            </div>
            <div className="relative bg-slate-50 px-8 py-2 rounded-full border border-slate-200">
              <h2 className="text-xl font-black text-slate-700 tracking-wide uppercase">Ketua Jurusan</h2>
            </div>
          </motion.div>

          {/* LEVEL 3: Ketua Jurusan */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* RPL */}
            <motion.div variants={cardVariants} className="group bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform"><Laptop size={26} /></div>
                <span className="text-xs font-extrabold text-slate-300 group-hover:text-emerald-200 transition-colors text-right">RPL<br/><span className="text-[8px]">Rekayasa Perangkat Lunak</span></span>
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-1 group-hover:text-emerald-700 transition-colors">Eko Prasetyo, M.Kom.</h3>
                <div className="flex items-center text-xs font-bold text-slate-500 mt-4 bg-slate-50 py-2 px-3 rounded-xl w-fit">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span> Certified Developer
                </div>
              </div>
            </motion.div>

            {/* TKRO */}
            <motion.div variants={cardVariants} className="group bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform"><Car size={26} /></div>
                <span className="text-xs font-extrabold text-slate-300 group-hover:text-emerald-200 transition-colors text-right">TKRO<br/><span className="text-[8px]">Teknik Kendaraan Ringan</span></span>
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-1 group-hover:text-emerald-700 transition-colors">Agus Wijaya, S.T.</h3>
                <div className="flex items-center text-xs font-bold text-slate-500 mt-4 bg-slate-50 py-2 px-3 rounded-xl w-fit">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span> Otomotif Specialist
                </div>
              </div>
            </motion.div>

            {/* AKL */}
            <motion.div variants={cardVariants} className="group bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform"><Briefcase size={26} /></div>
                <span className="text-xs font-extrabold text-slate-300 group-hover:text-emerald-200 transition-colors text-right">AKL<br/><span className="text-[8px]">Akuntansi & Keuangan</span></span>
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-1 group-hover:text-emerald-700 transition-colors">Linda Sari, S.E., Ak.</h3>
                <div className="flex items-center text-xs font-bold text-slate-500 mt-4 bg-slate-50 py-2 px-3 rounded-xl w-fit">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span> Certified Accountant
                </div>
              </div>
            </motion.div>

            {/* TKJ (Lebar 2 Kolom) */}
            <motion.div variants={cardVariants} className="lg:col-span-2 group bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 md:p-8 shadow-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden">
              {/* Efek Glow di dalam kartu gelap */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="w-24 h-24 bg-emerald-500 rounded-3xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform z-10">
                <Router size={44} />
              </div>
              <div className="flex-1 text-center sm:text-left z-10">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                  <p className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase">Head of Network Engineering</p>
                  <span className="bg-white/10 text-emerald-300 text-[10px] px-2.5 py-1 rounded-md font-extrabold">TKJ</span>
                </div>
                <h3 className="font-extrabold text-white text-2xl mb-2">Rahmat Hidayat, M.T.</h3>
                <p className="text-sm text-slate-400 max-w-md">Memimpin pengembangan laboratorium jaringan dan kerjasama industri tingkat lanjut dengan Cisco & Mikrotik.</p>
              </div>
            </motion.div>

            {/* DKV */}
            <motion.div variants={cardVariants} className="group bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform"><PenTool size={26} /></div>
                <span className="text-xs font-extrabold text-slate-300 group-hover:text-emerald-200 transition-colors text-right">DKV<br/><span className="text-[8px]">Desain Komunikasi Visual</span></span>
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-1 group-hover:text-emerald-700 transition-colors">Reza Fahlevi, S.Sn.</h3>
                <div className="flex items-center text-xs font-bold text-slate-500 mt-4 bg-slate-50 py-2 px-3 rounded-xl w-fit">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span> Creative Director
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
