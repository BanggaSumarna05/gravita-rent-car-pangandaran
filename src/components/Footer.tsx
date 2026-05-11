import { motion } from 'motion/react';
import { Instagram, Facebook, Mail, Phone, MapPin, Car } from 'lucide-react';
import logo from '../assets/images/regenerated_image_1778480742380.png';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="Gravita Rent Car Logo" 
                className="h-10 w-auto object-contain invert"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Penyedia layanan rental mobil premium terbaik di Pangandaran. Unit selalu prima, driver profesional, dan harga yang transparan. Keamanan dan kenyamanan Anda adalah prioritas kami.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold font-display uppercase tracking-wider text-sm">Navigasi</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-amber-500 transition-colors">Beranda</a></li>
              <li><a href="#cars" className="hover:text-amber-500 transition-colors">Armada Kami</a></li>
              <li><a href="#testimonials" className="hover:text-amber-500 transition-colors">Testimoni</a></li>
              <li><a href="#faq" className="hover:text-amber-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-white font-bold font-display uppercase tracking-wider text-sm">Kontak Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 shrink-0" />
                <span>Jl. Kidang Pananjung No. 12, Pantai Barat Pangandaran</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <span>halo@gravitarent.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h3 className="text-white font-bold font-display uppercase tracking-wider text-sm">Jam Operasional</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Senin - Jumat</span>
                <span className="text-white">08:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sabtu - Minggu</span>
                <span className="text-white">07:00 - 23:00</span>
              </div>
              <p className="text-xs text-amber-500/80 italic mt-4">
                * Layanan darurat 24 jam untuk pelanggan aktif.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© 2024 Gravita Rent Car Pangandaran. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
