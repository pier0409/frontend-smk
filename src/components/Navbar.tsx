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

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className={`text-sm font-semibold py-2 ${pathname === "/" ? "text-emerald-800 border-b-2 border-emerald-700" : "text-zinc-600"}`}>Beranda</Link>

            {/* Profil Dropdown */}
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

            {/* Informasi Dropdown */}
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

            <Link href="/ppdb" className="text-sm font-medium text-zinc-600">PPDB</Link>
            <Link href="/kontak" className="text-sm font-medium text-zinc-600">Kontak</Link>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
             <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Brosur</Button>
             <Button className="bg-emerald-700"><LogIn className="mr-2 h-4 w-4" /> Login</Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden p-4 bg-white border-t border-zinc-200 flex flex-col space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)}>Beranda</Link>
          <Link href="/profil/sejarah" onClick={() => setIsOpen(false)}>Sejarah</Link>
          <Link href="/jurusan" onClick={() => setIsOpen(false)}>Jurusan</Link>
          <Link href="/berita" onClick={() => setIsOpen(false)}>Berita</Link>
          <Link href="/ppdb" onClick={() => setIsOpen(false)}>PPDB</Link>
          <Link href="/kontak" onClick={() => setIsOpen(false)}>Kontak</Link>
        </div>
      )}
    </nav>
  );
}
