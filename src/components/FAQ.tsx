import { motion } from 'motion/react';
import { faqs } from '../data';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block py-1 px-4 bg-zinc-100 rounded-full text-zinc-500 text-[10px] font-black uppercase tracking-widest">
            Bantuan & FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display text-zinc-900">
            Pertanyaan <span className="text-amber-500 italic font-serif font-light lowercase">Umum</span>
          </h2>
          <p className="text-zinc-500 font-medium">Segala hal yang perlu Anda ketahui sebelum menyewa mobil di Pangandaran.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group rounded-[2rem] border transition-all duration-500 overflow-hidden",
                openIndex === i ? "bg-zinc-50 border-zinc-200" : "bg-white border-zinc-100 hover:border-zinc-200"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <span className="text-lg font-bold text-zinc-900 group-hover:text-amber-500 transition-colors">
                  {faq.question}
                </span>
                <div className={cn(
                  "w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center transition-transform duration-500",
                  openIndex === i ? "rotate-180 bg-amber-500 text-white" : "text-zinc-400"
                )}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <div className={cn(
                "transition-all duration-500 ease-in-out px-8",
                openIndex === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0"
              )}>
                <p className="text-zinc-500 leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
