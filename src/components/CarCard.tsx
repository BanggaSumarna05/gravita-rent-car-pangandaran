import type { Key } from 'react';
import { motion } from 'motion/react';
import { Users, Fuel, Settings, CheckCircle2, ArrowRight } from 'lucide-react';
import { Car } from '../data';
import { cn } from '../lib/utils';

interface CarCardProps {
  key?: Key;
  car: Car;
  index: number;
  onBooking: (car: Car) => void;
}

export default function CarCard({ car, index, onBooking }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] border border-zinc-100 hover:shadow-[0_30px_90px_-40px_rgba(251,191,36,0.25)] transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-800 shadow-sm">
            {car.type}
          </span>
        </div>
        <div className={cn(
          "absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm",
          car.status === 'Ready' ? "bg-emerald-500" : "bg-zinc-400"
        )}>
          {car.status === 'Ready' ? 'Available' : 'Rented'}
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center px-6">
          <button 
            onClick={() => onBooking(car)}
            className="bg-amber-500 text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transform translate-y-5 group-hover:translate-y-0 transition-all"
          >
            Booking Detail <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold font-display text-zinc-900">{car.name}</h3>
          <p className="text-zinc-500 text-sm font-medium">Mulai dari</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-amber-500">Rp {car.price.toLocaleString('id-ID')}</span>
            <span className="text-zinc-400 text-xs font-medium">/ 24 Jam</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pb-4 border-b border-zinc-50">
          <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium">
            <Users size={14} className="text-amber-500" />
            <span>{car.passengers} Kursi</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium">
            <Settings size={14} className="text-amber-500" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium">
            <Fuel size={14} className="text-amber-500" />
            <span>Premium Fuel</span>
          </div>
        </div>

        <div className="space-y-2">
          {car.features.slice(0, 2).map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-[11px] text-zinc-600">
              <CheckCircle2 size={12} className="text-emerald-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => onBooking(car)}
          disabled={car.status === 'Rented'}
          className={cn(
            "w-full py-3 rounded-2xl font-bold text-sm transition-all duration-300",
            car.status === 'Ready' 
              ? "bg-zinc-900 text-white hover:bg-amber-500 hover:shadow-xl hover:shadow-amber-500/20" 
              : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
          )}
        >
          {car.status === 'Ready' ? 'Rental Sekarang' : 'Tidak Tersedia'}
        </button>
      </div>
    </motion.div>
  );
}
