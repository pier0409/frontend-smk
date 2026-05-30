import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image 
                  src="/logo.png" 
                  alt="Logo SMK Fauzaniyyah" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">
                SMK Fauzaniyyah
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Mencetak generasi berprestasi, berkarakter, dan berdaya saing global yang siap menghadapi tantangan industri masa depan melalui pendidikan vokasi terdepan.
            </p>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Tautan Cepat</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-zinc-400 hover:text-emerald-400 transition-colors">Beranda</Link></li>
              <li><Link href="/profil/sejarah" className="text-zinc-400 hover:text-emerald-400 transition-colors">Profil Sekolah</Link></li>
              <li><Link href="/jurusan" className="text-zinc-400 hover:text-emerald-400 transition-colors">Program Keahlian</Link></li>
              <li><Link href="/guru" className="text-zinc-400 hover:text-emerald-400 transition-colors">Tenaga Pendidik</Link></li>
              <li><Link href="/ppdb" className="text-zinc-400 hover:text-emerald-400 transition-colors">PPDB Online</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Navigasi Ekstra & Sosial Media */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Informasi</h3>
            <ul className="space-y-3 text-sm mb-8">
              <li><Link href="/berita" className="text-zinc-400 hover:text-emerald-400 transition-colors">Berita & Artikel</Link></li>
              <li><Link href="/galeri" className="text-zinc-400 hover:text-emerald-400 transition-colors">Galeri Foto</Link></li>
              <li><Link href="/prestasi" className="text-zinc-400 hover:text-emerald-400 transition-colors">Prestasi Siswa</Link></li>
            </ul>
            
            <h3 className="text-white font-bold mb-4 text-lg">Sosial Media</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-emerald-600 hover:text-white transition-all">
                <FaFacebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-emerald-600 hover:text-white transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-emerald-600 hover:text-white transition-all">
                <FaYoutube size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-emerald-600 hover:text-white transition-all">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Kolom 4: Hubungi Kami */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-400 leading-relaxed">
                  Jl. Pendidikan No. 123, Kec. Vokasi,<br />
                  Kota Maju, Indonesia 40123
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                <span className="text-zinc-400">(022) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                <span className="text-zinc-400">info@smkfauzaniyyah.sch.id</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Garis Bawah & Hak Cipta */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} SMK Fauzaniyyah. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/kebijakan-privasi" className="hover:text-emerald-400 transition-colors">Kebijakan Privasi</Link>
            <Link href="/syarat-ketentuan" className="hover:text-emerald-400 transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
