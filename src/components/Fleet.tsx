import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { cars, Car } from '../data';
import CarCard from './CarCard';
import { cn } from '../lib/utils';

interface FleetProps {
  onBooking: (car: Car) => void;
}

export default function Fleet({ onBooking }: FleetProps) {
  const [filter, setFilter] = useState('Semua');
  const categories = ['Semua', 'City Car', 'Keluarga', 'Premium', 'Wisata'];

  const filteredCars = filter === 'Semua' 
    ? cars 
    : cars.filter(car => car.type === filter);

  return (
    <section id="cars" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-4 bg-amber-100 rounded-full text-amber-600 text-[10px] font-black uppercase tracking-widest"
          >
            Pilih Armada Anda
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-display text-zinc-900"
          >
            Opsi Kendaraan <span className="text-amber-500 italic font-serif font-light lowercase">premium</span>
          </motion.h2>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex gap-2 p-1.5 bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-x-auto w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
                  filter === cat ? "bg-zinc-900 text-white shadow-lg" : "text-zinc-500 hover:text-zinc-800"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-amber-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Cari mobil..."
              className="w-full bg-white border border-zinc-100 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, i) => (
            <CarCard 
              key={car.id} 
              car={car} 
              index={i} 
              onBooking={onBooking} 
            />
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[2.5rem] border border-dashed border-zinc-200">
            <p className="text-zinc-400 font-medium italic">Oops, armada kategori ini belum tersedia saat ini.</p>
          </div>
        )}
      </div>
    </section>
  );
}
