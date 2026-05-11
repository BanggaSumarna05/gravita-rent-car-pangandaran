import { motion } from 'motion/react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/10 to-transparent blur-2xl rounded-full -translate-x-1/4 translate-y-1/4" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white leading-tight tracking-tight">
              Siap Jalan-jalan di <span className="text-amber-500">Pangandaran?</span>
            </h2>
            <p className="text-zinc-400 text-lg font-medium">
              Abaikan ribe-nya sewa mobil konvensional. Booking mobil impian Anda sekarang, unit kami antar langsung ke depan pintu Anda!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#cars"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-amber-500 text-zinc-950 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-white transition-all shadow-xl shadow-amber-500/20"
              >
                Lihat Armada <ArrowRight size={22} />
              </a>
              <a
                href="https://wa.me/6281234567890"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all"
              >
                <MessageCircle size={22} /> Chat WhatsApp
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 pt-10 text-zinc-500">
               <div className="flex flex-col items-center gap-1">
                  <span className="text-white font-bold text-2xl">24/7</span>
                  <span className="text-[10px] uppercase font-black tracking-widest">Support</span>
               </div>
               <div className="w-[1px] h-10 bg-zinc-800" />
               <div className="flex flex-col items-center gap-1">
                  <span className="text-white font-bold text-2xl">FREE</span>
                  <span className="text-[10px] uppercase font-black tracking-widest">Antar Jemput</span>
               </div>
               <div className="w-[1px] h-10 bg-zinc-800" />
               <div className="flex flex-col items-center gap-1">
                  <span className="text-white font-bold text-2xl">TOP</span>
                  <span className="text-[10px] uppercase font-black tracking-widest">Condition</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
