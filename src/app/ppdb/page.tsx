"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, UploadCloud, ChevronLeft, ChevronRight, User, BookOpen, Users, GraduationCap } from "lucide-react";

export default function PPDBPage() {
  const [step, setStep] = useState(1);
  const steps = ["Data Diri", "Data Orang Tua", "Asal Sekolah", "Pilih Jurusan", "Unggah Dokumen"];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold text-slate-800">PPDB SMK Fauzaniyyah</h1>
          <span className="text-sm text-slate-500 border px-3 py-1 rounded-full bg-white border-slate-200">🔒 Pendaftaran Aman</span>
        </div>

        {/* STEPPER */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 flex justify-between items-center">
          {steps.map((label, i) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 
                ${step > i + 1 ? "bg-emerald-600 border-emerald-600 text-white" : 
                  step === i + 1 ? "border-emerald-600 text-emerald-600" : "border-slate-300 text-slate-400"}`}>
                {step > i + 1 ? <Check size={20} /> : i + 1}
              </div>
              <span className={`text-[10px] font-bold uppercase ${step === i + 1 ? "text-emerald-700" : "text-slate-400"}`}>{label}</span>
            </div>
          ))}
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Pendaftaran Peserta Didik Baru</h2>
          
          <AnimatePresence mode="wait">
            {step === 1 && <DataDiri key="s1" />}
            {step === 2 && <DataOrtu key="s2" />}
            {step === 3 && <AsalSekolah key="s3" />}
            {step === 4 && <PilihJurusan key="s4" />}
            {step === 5 && <UnggahDokumen key="s5" />}
          </AnimatePresence>

          {/* NAVIGATION */}
          <div className="mt-10 flex justify-between pt-6 border-t border-slate-100">
            <button 
              onClick={() => setStep(s => Math.max(1, s - 1))} 
              className={`px-8 py-2 font-bold rounded-lg ${step === 1 ? "invisible" : "text-slate-600 hover:bg-slate-100"}`}
            >
              Kembali
            </button>
            <button 
              onClick={() => setStep(s => Math.min(5, s + 1))} 
              className="px-8 py-2 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 flex items-center gap-2"
            >
              {step === 5 ? "Selesai" : "Lanjut"} <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---
const Input = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1 text-slate-700">{label} <span className="text-red-500">*</span></label>
    <input className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-emerald-500" placeholder={placeholder} />
  </div>
);

function DataDiri() { return (
  <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="space-y-4">
    <h3 className="font-bold flex items-center gap-2 mb-4 text-emerald-700"><User size={20}/> Data Diri Siswa</h3>
    <Input label="Nama Lengkap Sesuai Ijazah" placeholder="Masukkan nama lengkap" />
    <div className="grid md:grid-cols-2 gap-4">
      <Input label="NISN" placeholder="Nomor Induk Siswa Nasional" />
      <Input label="NIK" placeholder="Nomor Induk Kependudukan" />
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      <Input label="Tempat Lahir" placeholder="Kota kelahiran" />
      <Input label="Tanggal Lahir" placeholder="mm/dd/yyyy" />
    </div>
  </motion.div>
); }

function DataOrtu() { return (
  <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="grid md:grid-cols-2 gap-4">
    <h3 className="col-span-2 font-bold text-emerald-700 mb-2">Data Orang Tua</h3>
    <Input label="Nama Lengkap Ayah" placeholder="Sesuai Kartu Keluarga" />
    <Input label="Nama Lengkap Ibu" placeholder="Sesuai Kartu Keluarga" />
    <Input label="Nomor WhatsApp Orang Tua" placeholder="08xxxxxxxxxx" />
  </motion.div>
); }

function AsalSekolah() { return (
  <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}>
    <h3 className="font-bold text-emerald-700 mb-4">Detail Sekolah Asal</h3>
    <Input label="Nama Sekolah Asal" placeholder="Contoh: SMPN 1 Bandung" />
  </motion.div>
); }

function PilihJurusan() { return (
  <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}>
    <h3 className="font-bold text-emerald-700 mb-4">Silakan pilih 2 prioritas jurusan</h3>
    <div className="grid md:grid-cols-2 gap-4">
      {['Desain Produk Busana', 'Teknik Kendaraan Ringan', 'DKV', 'Agribisnis'].map(j => (
        <div key={j} className="p-4 border rounded-xl hover:border-emerald-500 cursor-pointer transition-all">{j}</div>
      ))}
    </div>
  </motion.div>
); }

function UnggahDokumen() { return (
  <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="grid md:grid-cols-2 gap-6">
    {['Kartu Keluarga', 'Ijazah/SKL', 'Akta Kelahiran', 'Pas Foto 3x4'].map(doc => (
      <div key={doc} className="border-2 border-dashed p-6 rounded-xl text-center hover:bg-slate-50">
        <UploadCloud className="mx-auto mb-2 text-emerald-600" />
        <p className="font-bold text-sm">{doc}</p>
        <p className="text-[10px] text-slate-400">Klik untuk unggah atau seret file</p>
      </div>
    ))}
  </motion.div>
); }
