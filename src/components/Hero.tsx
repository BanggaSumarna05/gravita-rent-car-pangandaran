import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { Phone, ArrowRight, Star, ShieldCheck, Clock, Users } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        '.hero-title span',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power4.out' }
      );
      gsap.fromTo(
        '.hero-image',
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'expo.out' }
      );
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image / Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000"
          className="hero-image w-full h-full object-cover brightness-[0.4]"
          alt="Premium Car"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-50 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-zinc-900 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 text-[10px] text-white font-bold uppercase tracking-widest">
              <Star size={12} className="text-amber-400 fill-amber-400" />
              <span>4.9/5 Rating Pelanggan</span>
            </div>
          </motion.div>

          <h1 className="hero-title text-5xl md:text-7xl font-black font-display text-white leading-[0.9] tracking-tight">
            <span className="block italic font-serif font-light text-amber-500 mb-2">Eksklusif</span>
            <span className="block">Rental Mobil</span>
            <span className="block">Pangandaran</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-zinc-300 text-lg max-w-lg leading-relaxed font-medium"
          >
            Nikmati perjalanan berkesan di Pangandaran dengan armada bersih, nyaman, dan pelayanan profesional 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#cars"
              className="group flex items-center gap-2 bg-amber-500 text-zinc-950 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-xl shadow-amber-500/20 hover:shadow-white/20"
            >
              Booking Sekarang <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/6281234567890"
              className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              <Phone size={20} /> Cek Ketersediaan
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 border-t border-white/10 max-w-md mt-7"
          >
            <div>
              <p className="text-amber-500 text-2xl sm:text-3xl font-black">20+</p>
              <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">Armada Ready</p>
            </div>
            <div>
              <p className="text-amber-500 text-2xl sm:text-3xl font-black">1.2k+</p>
              <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">Puas Menyewa</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-amber-500 text-2xl sm:text-3xl font-black">10th</p>
              <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">Pengalaman</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Floating Info */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden xl:block absolute bottom-20 right-20 bg-white p-6 rounded-3xl shadow-2xl z-20 space-y-4 max-w-xs border border-zinc-100"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
            <ShieldCheck size={28} />
          </div>
          <div>
            <p className="font-bold text-zinc-900 leading-none">Garansi Unit Prima</p>
            <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mt-1">Quality Check Passed</p>
          </div>
        </div>
        <p className="text-xs text-zinc-600 line-clamp-2">Semua armada kami melalui proses pengecekan ketat sebelum diserahkan kepada Anda.</p>
      </motion.div>
    </section>
  );
}
