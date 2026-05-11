import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppMessage(data: {
  name: string;
  car: string;
  date: string;
  duration: string;
  withDriver: string;
  location: string;
  notes?: string;
}) {
  const text = `Halo Gravita Rent Car, saya ingin booking mobil:
Nama: ${data.name}
Mobil: ${data.car}
Tanggal: ${data.date}
Durasi: ${data.duration}
Driver/Lepas Kunci: ${data.withDriver}
Lokasi Penjemputan: ${data.location}${data.notes ? `\nCatatan: ${data.notes}` : ''}`;
  
  return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
}
