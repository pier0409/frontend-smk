"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        
        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Hubungi Kami</h1>
          <p className="text-slate-600 max-w-lg mx-auto">
            Punya pertanyaan seputar PPDB atau ingin menjalin kerjasama? Silakan hubungi kami melalui saluran berikut.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* INFORMASI KONTAK */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
              {[
                { icon: <MapPin className="text-emerald-600" />, title: "Alamat Sekolah", value: "Jl. Pendidikan No. 123, Bandung, Jawa Barat" },
                { icon: <Phone className="text-emerald-600" />, title: "Telepon / WhatsApp", value: "(022) 123-4567 / 0812-3456-7890" },
                { icon: <Mail className="text-emerald-600" />, title: "Email Resmi", value: "info@smkfauzaniyyah.sch.id" },
                { icon: <Clock className="text-emerald-600" />, title: "Jam Operasional", value: "Senin - Jumat: 07.00 - 16.00 WIB" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* GOOGLE MAPS */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="h-[400px] rounded-3xl overflow-hidden shadow-sm border border-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.300673479426!2d107.6098!3d-6.9147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnNTIuOSJTIDEwN8KwMzYnMzUuMyJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Lokasi SMK Fauzaniyyah"
            ></iframe>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
