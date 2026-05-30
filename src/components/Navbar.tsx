"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, LogIn, Eye, Flag, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <nav className="w-full bg-white border-b border-zinc-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Bagian Kiri: Logo & Nama Sekolah */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image 
                  src="/logo.png" 
                  alt="Logo SMK Fauzaniyyah" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-emerald-800 hidden sm:block">
                SMK Fauzaniyyah
              </span>
            </Link>
          </div>

          {/* Bagian Tengah: Menu Navigasi Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link 
              href="/" 
              className={`text-sm font-semibold transition-colors hover:text-emerald-700 py-2 ${
                pathname === "/" ? "text-emerald-800 border-b-2 border-emerald-700" : "text-zinc-600"
              }`}
            >
              Beranda
            </Link>

            {/* Menu Dropdown Profil */}
            <div className="relative group py-2">
              <button className={`flex items-center hover:text-emerald-700 text-sm font-medium transition-colors ${isActive('/profil') ? "text-emerald-800" : "text-zinc-600"}`}>
                Profil <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div className="absolute left-0 mt-2 w-52 bg-white border border-zinc-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 flex flex-col">
                  
                  {/* Link ke Halaman Sejarah */}
                  <Link href="/profil/sejarah" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">
                    Sejarah
                  </Link>

                  {/* Pop-up Visi Misi */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-left w-full block px-4 py-2 text-sm text-zinc-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">
                        Visi & Misi
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[1000px] w-[95vw] p-8 md:p-10 rounded-[2rem] max-h-[90vh] overflow-y-auto">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      >
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-bold text-slate-900 mb-8 text-center border-b border-slate-100 pb-6">
                            Visi & Misi Sekolah
                          </DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Kartu Visi */}
                          <div className="bg-[#065f46] p-8 md:p-10 rounded-[2rem] text-white flex flex-col shadow-lg">
                            <div className="flex items-center gap-4 mb-6 md:mb-8">
                              <div className="p-3 bg-emerald-700 rounded-xl">
                                <Eye className="h-6 w-6 text-emerald-100" />
                              </div>
                              <h3 className="text-2xl md:text-3xl font-bold">Visi</h3>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed text-emerald-50 font-medium">
                              "Menjadi lembaga pendidikan kejuruan berstandar internasional yang unggul, inovatif, dan berlandaskan pada nilai-nilai akhlak mulia dalam mencetak tenaga kerja profesional yang mampu bersaing di era globalisasi."
                            </p>
                          </div>
                          
                          {/* Kartu Misi */}
                          <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-200 flex flex-col shadow-inner">
                            <div className="flex items-center gap-4 mb-6 md:mb-8">
                              <div className="p-3 bg-white shadow-sm rounded-xl">
                                <Flag className="h-6 w-6 text-emerald-700" />
                              </div>
                              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Misi</h3>
                            </div>
                            <ul className="space-y-4 md:space-y-5">
                              {[
                                "Menyelenggarakan pembelajaran berbasis Teaching Factory (TeFa) dengan fasilitas standar industri.",
                                "Meningkatkan kompetensi dan sertifikasi tenaga pendidik secara berkelanjutan.",
                                "Membentuk karakter siswa yang disiplin, berintegritas, dan berjiwa wirausaha.",
                                "Menjalin kemitraan strategis dengan Dunia Usaha dan Dunia Industri (DUDI) nasional."
                              ].map((misi, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-4 flex-shrink-0 mt-0.5" />
                                  <span className="text-slate-700 text-sm md:text-base leading-relaxed">{misi}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    </DialogContent>
                  </Dialog>

                  {/* Link ke Halaman Struktur Organisasi */}
                  <Link href="/profil/struktur-organisasi" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">
                    Struktur Organisasi
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/jurusan" className={`text-sm font-medium transition-colors hover:text-emerald-700 py-2 ${isActive("/jurusan") ? "text-emerald-800 border-b-2 border-emerald-700" : "text-zinc-600"}`}>
              Jurusan
            </Link>

            <Link href="/guru" className={`text-sm font-medium transition-colors hover:text-emerald-700 py-2 ${isActive("/guru") ? "text-emerald-800 border-b-2 border-emerald-700" : "text-zinc-600"}`}>
              Guru & Staf
            </Link>

            {/* Menu Dropdown Informasi (Berita, Galeri, Prestasi) */}
            <div className="relative group py-2">
              <button className={`flex items-center hover:text-emerald-700 text-sm font-medium transition-colors ${(isActive('/berita') || isActive('/galeri') || isActive('/prestasi')) ? "text-emerald-800" : "text-zinc-600"}`}>
                Informasi <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div className="absolute left-0 mt-2 w-48 bg-white border border-zinc-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 flex flex-col">
                  <Link href="/berita" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">
                    Berita & Artikel
                  </Link>
                  <Link href="/galeri" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">
                    Galeri Foto
                  </Link>
                  <Link href="/prestasi" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">
                    Prestasi Siswa
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/ppdb" className={`text-sm font-medium transition-colors hover:text-emerald-700 py-2 ${isActive("/ppdb") ? "text-emerald-800 border-b-2 border-emerald-700" : "text-zinc-600"}`}>
              PPDB Online
            </Link>

            <Link href="/kontak" className={`text-sm font-medium transition-colors hover:text-emerald-700 py-2 ${isActive("/kontak") ? "text-emerald-800 border-b-2 border-emerald-700" : "text-zinc-600"}`}>
              Kontak
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" className="border-emerald-700 text-emerald-800 hover:bg-emerald-50">
              <Download className="mr-2 h-4 w-4" /> Brosur
            </Button>
            <Link href="/admin/login">
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white font-medium">
                <LogIn className="mr-2 h-4 w-4" /> Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
