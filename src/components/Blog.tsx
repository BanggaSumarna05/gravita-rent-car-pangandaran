import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data';

export default function Blog() {
  return (
    <section className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-block py-1 px-4 bg-emerald-100 rounded-full text-emerald-600 text-[10px] font-black uppercase tracking-widest">
              Update & Tips Travel
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display text-zinc-900">
              Inspirasi <span className="text-amber-500 italic font-serif font-light lowercase">perjalanan</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 font-bold text-zinc-900 group">
            Lihat Semua Artikel <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="lg:w-1/2 aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-[2rem]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center space-y-4">
                <span className="text-amber-500 text-[10px] uppercase font-black tracking-widest">{post.category}</span>
                <h3 className="text-2xl font-bold font-display text-zinc-900 group-hover:text-amber-500 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-zinc-500 text-sm font-medium line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 pt-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  <div className="flex items-center gap-1.5"><Calendar size={12} /> 12 Mei 2024</div>
                  <div className="flex items-center gap-1.5"><User size={12} /> Admin</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
