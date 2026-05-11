import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Car, Menu, X, Phone, User, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Armada', path: '/#cars' },
    { name: 'Testimoni', path: '/#testimonials' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/85 backdrop-blur-xl shadow-sm py-3' : 'bg-slate-950/20'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/src/assets/images/regenerated_image_1778480742380.png" 
            alt="Gravita Rent Car Logo" 
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === '/dashboard'
              ? link.name === 'Dashboard'
              : link.name === 'Home';

            return (
              <a
                key={link.name}
                href={link.path}
                className={cn(
                  'text-sm font-medium transition-all duration-300',
                  isActive ? 'text-amber-500' : isScrolled ? 'text-zinc-600 hover:text-zinc-900' : 'text-white hover:text-amber-300'
                )}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="https://wa.me/6281234567890"
            className="flex items-center gap-2 bg-amber-500 text-zinc-950 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
          >
            <Phone size={16} />
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-zinc-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-zinc-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-800 hover:text-amber-500"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-zinc-100" />
            <a
              href="https://wa.me/6281234567890"
              className="flex items-center justify-center gap-2 bg-amber-500 text-white p-4 rounded-2xl font-bold shadow-lg"
            >
              <Phone size={20} />
              Booking via WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
