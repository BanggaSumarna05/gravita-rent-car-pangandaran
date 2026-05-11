import { motion } from 'motion/react';
import { Car, Clock, Shield, DollarSign } from 'lucide-react';

const coreFeatures = [
  {
    icon: <Car size={32} />,
    title: 'Armada Terawat',
    desc: 'Unit terbaru, bersih, wangi, dan rutin servis berkala untuk keamanan.'
  },
  {
    icon: <DollarSign size={32} />,
    title: 'Harga Transparan',
    desc: 'Tanpa biaya hidden. Harga yang Anda lihat adalah harga yang Anda bayar.'
  },
  {
    icon: <Shield size={32} />,
    title: 'Driver Profesional',
    desc: 'Driver kami ramah, hafal medan, dan mengutamakan keselamatan Anda.'
  },
  {
    icon: <Clock size={32} />,
    title: 'Fast Response 24 Jam',
    desc: 'Tim kami siap melayani kebutuhan rental Anda kapan saja via WhatsApp.'
  }
];

export default function Features() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4 max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black font-display text-zinc-900 leading-tight"
            >
              Kenapa Memilih <span className="text-amber-500">Gravita Rent Car?</span>
            </motion.h2>
            <p className="text-zinc-500 text-lg font-medium">Bukan sekadar rental, kami memberikan pengalaman perjalanan yang aman, nyaman, dan berkesan di Pangandaran.</p>
          </div>
          <div className="flex gap-4">
             <div className="w-24 h-[1px] bg-amber-500 mt-auto hidden md:block" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:bg-zinc-900 hover:border-zinc-900 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm mb-8 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold font-display text-zinc-900 group-hover:text-white transition-colors mb-3">
                {f.title}
              </h3>
              <p className="text-zinc-500 text-sm group-hover:text-zinc-400 transition-colors leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
