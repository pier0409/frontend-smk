"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, ShieldCheck, Wrench, Users, BookOpen } from "lucide-react";

// Kategori Filter
const categories = ["Semua", "Guru Kejuruan", "Guru Umum", "Staf TU", "Tenaga Pendukung"];

// Data Dummy Guru & Staf
const staffData = [
  // GURU KEJURUAN
  { id: 1, name: "Eko Prasetyo, M.Kom.", role: "Kepala Bengkel RPL", category: "Guru Kejuruan", icon: <LaptopIcon />, image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop" },
  { id: 2, name: "Agus Wijaya, S.T.", role: "Guru Produktif TKRO", category: "Guru Kejuruan", icon: <WrenchIcon />, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop" },
  { id: 3, name: "Reza Fahlevi, S.Sn.", role: "Guru Produktif DKV", category: "Guru Kejuruan", icon: <PenIcon />, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop" },
  { id: 4, name: "Linda Sari, S.E.", role: "Guru Kejuruan AKL", category: "Guru Kejuruan", icon: <BriefcaseIcon />, image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop" },
  
  // GURU UMUM
  { id: 5, name: "Dra. Hj. Sri Wahyuni", role: "Guru Matematika", category: "Guru Umum", icon: <BookOpenIcon />, image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=500&auto=format&fit=crop" },
  { id: 6, name: "Ahmad Maulana, S.Pd.", role: "Guru Pend. Agama Islam", category: "Guru Umum", icon: <BookOpenIcon />, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" },
  { id: 7, name: "Ratna Kumala, M.Pd.", role: "Guru Bahasa Inggris", category: "Guru Umum", icon: <BookOpenIcon />, image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=500&auto=format&fit=crop" },

  // STAF TU
  { id: 8, name: "Budi Santoso, S.AP.", role: "Kepala Tata Usaha", category: "Staf TU", icon: <BriefcaseIcon />, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop" },
  { id: 9, name: "Rina Melati, A.Md.", role: "Staf Administrasi Keuangan", category: "Staf TU", icon: <BriefcaseIcon />, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop" },
  { id: 10, name: "Dedi Irawan", role: "Operator Sekolah (Dapodik)", category: "Staf TU", icon: <BriefcaseIcon />, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop" },

  // TENAGA PENDUKUNG (Kebersihan & Keamanan)
  { id: 11, name: "Mang Ujang", role: "Koordinator Kebersihan", category: "Tenaga Pendukung", icon: <WrenchIcon />, image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=500&auto=format&fit=crop" },
  { id: 12, name: "Pak Yanto", role: "Kepala Keamanan (Security)", category: "Tenaga Pendukung", icon: <ShieldCheckIcon />, image: "https://images.unsplash.com/photo-1566492031525-1c19bea71a01?q=80&w=500&auto=format&fit=crop" },
  { id: 13, name: "Bi Imah", role: "Staf Kebersihan", category: "Tenaga Pendukung", icon: <WrenchIcon />, image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=500&auto=format&fit=crop" },
];

// Helper Icons (Mini)
function LaptopIcon() { return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>; }
function WrenchIcon() { return <Wrench className="w-4 h-4" />; }
function PenIcon() { return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>; }
function BriefcaseIcon() { return <Briefcase className="w-4 h-4" />; }
function BookOpenIcon() { return <BookOpen className="w-4 h-4" />; }
function ShieldCheckIcon() { return <ShieldCheck className="w-4 h-4" />; }

export default function GuruPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filteredStaff = activeFilter === "Semua" 
    ? staffData 
    : staffData.filter(item => item.category === activeFilter);

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
            <Users className="w-4 h-4 mr-2" />
            SDM Sekolah
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Direktori Guru & Staf
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Mengenal lebih dekat para pendidik dan tenaga kependidikan yang berdedikasi mewujudkan visi misi SMK Fauzaniyyah.
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
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

        {/* STAFF GRID */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredStaff.map((person) => (
              <motion.div
                layout
                key={person.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col items-center text-center p-6 relative"
              >
                {/* Badge Kategori Tersembunyi (Muncul saat hover) */}
                <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 text-[9px] font-extrabold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                  {person.category}
                </div>

                {/* Foto Profile */}
                <div className="w-28 h-28 mb-5 rounded-full overflow-hidden border-4 border-slate-50 shadow-md group-hover:border-emerald-100 transition-colors relative">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                  {person.name}
                </h3>
                
                <div className="flex items-center justify-center text-slate-500 text-xs font-medium mt-2 bg-slate-50 px-3 py-1.5 rounded-full w-fit mx-auto border border-slate-100">
                  <span className="text-emerald-600 mr-2">{person.icon}</span>
                  {person.role}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredStaff.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 font-medium text-lg">Data tidak ditemukan.</p>
          </div>
        )}

      </div>
    </div>
  );
}
