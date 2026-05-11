import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data';
import { cn } from '../lib/utils';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 px-6 bg-zinc-950 overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-amber-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-block py-1 px-4 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-[10px] font-black uppercase tracking-widest">
              Apa Kata Mereka?
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-display text-white leading-[0.9]">
              Dipercaya oleh <span className="text-amber-500">Ribuan</span> Pelanggan
            </h2>
            <p className="text-zinc-400 text-lg font-medium max-w-lg">
              Kepuasan pelanggan adalah bensin bagi kami untuk terus berkembang. Lihat bagaimana pengalaman mereka menjelajahi Pangandaran bersama Gravita.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={prev}
                className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center text-white hover:bg-white hover:text-zinc-950 transition-all shadow-xl"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={next}
                className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-zinc-950 hover:bg-white transition-all shadow-xl shadow-amber-500/20 hover:shadow-white/20"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 50, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -50, rotate: -5 }}
                className="w-full bg-zinc-900 border border-zinc-800 p-10 md:p-16 rounded-[3rem] shadow-2xl relative"
              >
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-zinc-950 shadow-lg shadow-amber-500/20">
                  <Quote size={32} />
                </div>

                <div className="space-y-8">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(testimonials[active].rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed">
                    "{testimonials[active].comment}"
                  </p>

                  <div className="flex items-center gap-4 pt-8 border-t border-zinc-800">
                    <img 
                      src={testimonials[active].avatar} 
                      alt={testimonials[active].name} 
                      className="w-16 h-16 rounded-full border-2 border-amber-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <h4 className="text-white font-bold text-lg">{testimonials[active].name}</h4>
                      <p className="text-zinc-500 text-sm font-medium">{testimonials[active].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Background elements */}
            <div className="absolute -z-10 top-10 right-10 w-full h-full border border-zinc-800 rounded-[3rem] transform rotate-3" />
            <div className="absolute -z-20 top-20 right-20 w-full h-full border border-zinc-800 rounded-[3rem] transform rotate-6 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
