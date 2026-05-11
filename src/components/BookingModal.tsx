import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, User, Phone, Clock, FileText, Check, Loader2, Settings } from 'lucide-react';
import { Car } from '../data';
import { formatWhatsAppMessage, cn } from '../lib/utils';

interface BookingModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ car, isOpen, onClose }: BookingModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    duration: '1 Hari',
    withDriver: 'Lepas Kunci',
    location: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate save to local state/fake API
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({
      ...formData,
      car: car?.name,
      timestamp: new Date().toISOString(),
      status: 'Pending'
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    setTimeout(() => {
      const waUrl = formatWhatsAppMessage({
        name: formData.name,
        car: car?.name || '',
        date: formData.date,
        duration: formData.duration,
        withDriver: formData.withDriver,
        location: formData.location,
        notes: formData.notes
      });
      window.open(waUrl, '_blank');
      setLoading(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black font-display text-zinc-900">Konfirmasi Booking</h2>
                <p className="text-zinc-500 text-sm font-medium">Lengkapi data perjalanan Anda</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-zinc-400">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Car Info */}
              <div className="md:w-1/3 bg-zinc-50 p-6 space-y-4">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-sm">
                  <img 
                    src={car?.image} 
                    alt={car?.name} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900">{car?.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-amber-500 font-bold">Rp {car?.price.toLocaleString('id-ID')}</span>
                    <span className="text-zinc-400 text-[10px]">/ 24 Jam</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-600">
                    <Check size={14} className="text-emerald-500" />
                    <span>Unit Bersih & Wangi</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-600">
                    <Check size={14} className="text-emerald-500" />
                    <span>Tangki Full BBM</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="md:w-2/3 p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 ml-1 flex items-center gap-1.5">
                      <User size={12} className="text-amber-500" /> Nama Lengkap
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Masukkan nama..."
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 ml-1 flex items-center gap-1.5">
                      <Phone size={12} className="text-amber-500" /> No. WhatsApp
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="0812..."
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 ml-1 flex items-center gap-1.5">
                      <Calendar size={12} className="text-amber-500" /> Tanggal Sewa
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 ml-1 flex items-center gap-1.5">
                      <Clock size={12} className="text-amber-500" /> Durasi Sewa
                    </label>
                    <select
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium appearance-none"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    >
                      <option>1 Hari</option>
                      <option>2 Hari</option>
                      <option>3 Hari</option>
                      <option>7 Hari</option>
                      <option>Bulanan</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 ml-1 flex items-center gap-1.5">
                    <Settings size={12} className="text-amber-500" /> Opsi Layanan
                  </label>
                  <div className="flex gap-4">
                    {['Lepas Kunci', 'Dengan Driver'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, withDriver: opt })}
                        className={cn(
                          "flex-1 py-3 px-4 rounded-xl text-sm font-bold border transition-all",
                          formData.withDriver === opt ? "bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-500/20" : "bg-white border-zinc-100 text-zinc-500 hover:border-zinc-200"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 ml-1 flex items-center gap-1.5">
                    <MapPin size={12} className="text-amber-500" /> Lokasi Penjemputan
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Contoh: Stasiun atau Hotel..."
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 ml-1 flex items-center gap-1.5">
                    <FileText size={12} className="text-amber-500" /> Catatan (Opsi)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Kebutuhan khusus..."
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium resize-none"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-zinc-950 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-amber-500 transition-all shadow-xl hover:shadow-amber-500/20 group disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 size={24} className="animate-spin" />
                  ) : (
                    <>
                      Kirim Pesan Booking <Check size={20} className="group-hover:scale-125 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
