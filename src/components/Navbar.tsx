"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, LogIn, Eye, Flag, CheckCircle2, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // State khusus untuk Dropdown di tampilan Mobile (HP)
  const [isMobileProfilOpen, setIsMobileProfilOpen] = useState(false);
  const [isMobileInfoOpen, setIsMobileInfoOpen] = useState(false);
  
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <nav className="w-full bg-white border-b border-zinc-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image src="/logo.png" alt="Logo SMK Fauzaniyyah" fill className="object-contain" priority />
            </div>
            <span className="text-xl font-bold text-emerald-800">SMK Fauzaniyyah</span>
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <button className="lg:hidden p-2 text-zinc-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* ======================= MENU DESKTOP ======================= */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className={`text-sm font-semibold py-2 ${pathname === "/" ? "text-emerald-800 border-b-2 border-emerald-700" : "text-zinc-600"}`}>Beranda</Link>

            {/* Profil Dropdown (Desktop) */}
            <div className="relative group py-2">
              <button className={`flex items-center text-sm font-medium ${isActive('/profil') ? "text-emerald-800" : "text-zinc-600"}`}>
                Profil <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-52 bg-white border border-zinc-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="py-2 flex flex-col">
                  <Link href="/profil/sejarah" className="px-4 py-2 text-sm text-zinc-700 hover:bg-emerald-50">Sejarah</Link>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-left w-full px-4 py-2 text-sm text-zinc-700 hover:bg-emerald-50">Visi & Misi</button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[1000px] p-8 rounded-[2rem]">
                      <DialogHeader><DialogTitle className="text-3xl font-bold text-center mb-6">Visi & Misi Sekolah</DialogTitle></DialogHeader>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-emerald-900 p-8 rounded-[2rem] text-white">
                          <Eye className="mb-4" /> <h3 className="text-2xl font-bold mb-4">Visi</h3>
                          <p>Menjadi lembaga pendidikan kejuruan berstandar internasional yang unggul dan inovatif.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-[2rem]">
                          <Flag className="mb-4" /> <h3 className="text-2xl font-bold mb-4">Misi</h3>
                          <ul className="space-y-3">
                            <li className="flex gap-2"><CheckCircle2 size={20} className="text-emerald-600"/> Menyelenggarakan TeFa industri.</li>
                            <li className="flex gap-2"><CheckCircle2 size={20} className="text-emerald-600"/> Sertifikasi kompetensi berkelanjutan.</li>
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Link href="/profil/struktur-organisasi" className="px-4 py-2 text-sm text-zinc-700 hover:bg-emerald-50">Struktur Organisasi</Link>
                </div>
              </div>
            </div>

            <Link href="/jurusan" className={`text-sm font-medium ${isActive("/jurusan") ? "text-emerald-800 border-b-2 border-emerald-700" : "text-zinc-600"}`}>Jurusan</Link>
            <Link href="/guru" className={`text-sm font-medium ${isActive("/guru") ? "text-emerald-800 border-b-2 border-emerald-700" : "text-zinc-600"}`}>Guru & Staf</Link>

            {/* Informasi Dropdown (Desktop) */}
            <div className="relative group py-2">
              <button className="flex items-center text-sm font-medium text-zinc-600">
                Informasi <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-zinc-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="py-2 flex flex-col">
                  <Link href="/berita" className="px-4 py-2 text-sm text-zinc-700 hover:bg-emerald-50">Berita & Artikel</Link>
                  <Link href="/galeri" className="px-4 py-2 text-sm text-zinc-700 hover:bg-emerald-50">Galeri Foto</Link>
                  <Link href="/prestasi" className="px-4 py-2 text-sm text-zinc-700 hover:bg-emerald-50">Prestasi Siswa</Link>
                </div>
              </div>
            </div>

            <Link href="/ppdb" className={`text-sm font-medium ${isActive("/ppdb") ? "text-emerald-800 border-b-2 border-emerald-700" : "text-zinc-600"}`}>PPDB</Link>
            <Link href="/kontak" className={`text-sm font-medium ${isActive("/kontak") ? "text-emerald-800 border-b-2 border-emerald-700" : "text-zinc-600"}`}>Kontak</Link>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
             <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Brosur</Button>
             <Button className="bg-emerald-700"><LogIn className="mr-2 h-4 w-4" /> Login</Button>
          </div>
        </div>
      </div>

      {/* ======================= MENU MOBILE (HP) ======================= */}
      {isOpen && (
        <div className="lg:hidden p-4 bg-white border-t border-zinc-200 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
          
          <Link href="/" className="font-semibold text-slate-800" onClick={() => setIsOpen(false)}>Beranda</Link>
          
          {/* Dropdown Profil (Mobile) */}
          <div className="flex flex-col">
            <button 
              onClick={() => setIsMobileProfilOpen(!isMobileProfilOpen)} 
              className="flex justify-between items-center font-semibold text-slate-800"
            >
              Profil <ChevronDown className={`w-4 h-4 transition-transform ${isMobileProfilOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isMobileProfilOpen && (
              <div className="flex flex-col pl-4 mt-3 space-y-3 border-l-2 border-emerald-100 ml-1">
                <Link href="/profil/sejarah" className="text-slate-600 text-sm" onClick={() => setIsOpen(false)}>Sejarah</Link>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-left text-slate-600 text-sm">Visi & Misi</button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[1000px] p-6 max-h-[90vh] overflow-y-auto rounded-3xl">
                    <DialogHeader><DialogTitle className="text-2xl font-bold text-center mb-4">Visi & Misi Sekolah</DialogTitle></DialogHeader>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-emerald-900 p-6 rounded-3xl text-white">
                        <Eye className="mb-2" /> <h3 className="text-xl font-bold mb-2">Visi</h3>
                        <p className="text-sm">Menjadi lembaga pendidikan kejuruan berstandar internasional yang unggul dan inovatif.</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-3xl">
                        <Flag className="mb-2" /> <h3 className="text-xl font-bold mb-2">Misi</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0"/> Menyelenggarakan TeFa industri.</li>
                          <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0"/> Sertifikasi kompetensi berkelanjutan.</li>
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Link href="/profil/struktur-organisasi" className="text-slate-600 text-sm" onClick={() => setIsOpen(false)}>Struktur Organisasi</Link>
              </div>
            )}
          </div>

          <Link href="/jurusan" className="font-semibold text-slate-800" onClick={() => setIsOpen(false)}>Jurusan</Link>
          <Link href="/guru" className="font-semibold text-slate-800" onClick={() => setIsOpen(false)}>Guru & Staf</Link>

          {/* Dropdown Informasi (Mobile) */}
          <div className="flex flex-col">
            <button 
              onClick={() => setIsMobileInfoOpen(!isMobileInfoOpen)} 
              className="flex justify-between items-center font-semibold text-slate-800"
            >
              Informasi <ChevronDown className={`w-4 h-4 transition-transform ${isMobileInfoOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isMobileInfoOpen && (
              <div className="flex flex-col pl-4 mt-3 space-y-3 border-l-2 border-emerald-100 ml-1">
                <Link href="/berita" className="text-slate-600 text-sm" onClick={() => setIsOpen(false)}>Berita & Artikel</Link>
                <Link href="/galeri" className="text-slate-600 text-sm" onClick={() => setIsOpen(false)}>Galeri Foto</Link>
                <Link href="/prestasi" className="text-slate-600 text-sm" onClick={() => setIsOpen(false)}>Prestasi Siswa</Link>
              </div>
            )}
          </div>

          <Link href="/ppdb" className="font-semibold text-slate-800" onClick={() => setIsOpen(false)}>PPDB Online</Link>
          <Link href="/kontak" className="font-semibold text-slate-800" onClick={() => setIsOpen(false)}>Kontak</Link>
          
          {/* Tombol Login untuk HP */}
          <div className="pt-4 mt-2 border-t border-slate-100">
            <Link href="/admin/login" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-emerald-700"><LogIn className="mr-2 h-4 w-4" /> Login Admin</Button>
            </Link>
          </div>

        </div>
      )}
    </nav>
  );
}
