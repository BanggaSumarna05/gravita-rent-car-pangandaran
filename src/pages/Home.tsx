import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Fleet from '../components/Fleet';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import BookingModal from '../components/BookingModal';
import { Car } from '../data';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Home() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBooking = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Fleet onBooking={handleBooking} />
        <Testimonials />
        <Blog />
        <FAQ />
        <CTA />
      </main>
      <Footer />

      <BookingModal 
        car={selectedCar} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Floating WA Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/6281234567890"
        className="fixed bottom-8 right-8 z-[60] bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 border-4 border-white"
      >
        <MessageCircle size={32} />
      </motion.a>
    </div>
  );
}
