export interface Car {
  id: string;
  name: string;
  type: 'City Car' | 'Keluarga' | 'Premium' | 'Wisata';
  price: number;
  image: string;
  passengers: number;
  transmission: 'Manual' | 'Matic';
  features: string[];
  status: 'Ready' | 'Rented';
}

export const cars: Car[] = [
  {
    id: '1',
    name: 'Toyota Avanza Facelift',
    type: 'Keluarga',
    price: 350000,
    image: new URL('./assets/images/Toyota Avanza Facelift.jfif', import.meta.url).href,
    passengers: 7,
    transmission: 'Manual',
    features: ['AC Dingin', 'Audio Mantap', 'Bersih'],
    status: 'Ready'
  },
  {
    id: '2',
    name: 'Honda Brio',
    type: 'City Car',
    price: 250000,
    image: new URL('./assets/images/Honda Brio.jfif', import.meta.url).href,
    passengers: 5,
    transmission: 'Matic',
    features: ['Irit BBM', 'Lincah', 'Kamera Parkir'],
    status: 'Ready'
  },
  {
    id: '3',
    name: 'Toyota Innova Reborn',
    type: 'Premium',
    price: 650000,
    image: new URL('./assets/images/Toyota Innova Reborn.jfif', import.meta.url).href,
    passengers: 7,
    transmission: 'Matic',
    features: ['Luxury Interior', 'Diesel Turbo', 'Sangat Nyaman'],
    status: 'Ready'
  },
  {
    id: '4',
    name: 'Mitsubishi Xpander',
    type: 'Keluarga',
    price: 450000,
    image: new URL('./assets/images/Mitsubishi Xpander.jfif', import.meta.url).href,
    passengers: 7,
    transmission: 'Matic',
    features: ['Futuristik', 'Ground Clearance Tinggi', 'Stabil'],
    status: 'Rented'
  },
  {
    id: '5',
    name: 'Suzuki XL7',
    type: 'Keluarga',
    price: 400000,
    image: new URL('./assets/images/Suzuki XL7.jfif', import.meta.url).href,
    passengers: 7,
    transmission: 'Manual',
    features: ['Tangguh', 'Crossover Look', 'Lega'],
    status: 'Ready'
  },
  {
    id: '6',
    name: 'Toyota Alphard',
    type: 'Premium',
    price: 2500000,
    image: new URL('./assets/images/Toyota Alphard.jfif', import.meta.url).href,
    passengers: 7,
    transmission: 'Matic',
    features: ['First Class Service', 'Moonroof', 'Ottoman Seat'],
    status: 'Ready'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Wisatawan Jakarta',
    comment: 'Pelayanan sangat memuaskan. Mobil bersih dan wangi. Driver juga sangat ramah dan hafal jalanan Pangandaran.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=budi'
  },
  {
    id: 2,
    name: 'Siska Putri',
    role: 'Business Traveler',
    comment: 'Sering sewa di sini kalau ada projek di Pangandaran. Unit selalu prima dan proses booking via WA gercep banget!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=siska'
  }
];

export const blogPosts = [
  {
    id: 1,
    title: '5 Pantai Tersembunyi di Pangandaran yang Wajib Kamu Kunjungi',
    category: 'Travel Tips',
    excerpt: 'Pangandaran bukan cuma Pantai Barat dan Timur. Temukan keajaiban pantai tersembunyi lainnya di sini.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Tips Memilih Mobil Rental yang Nyaman untuk Liburan Keluarga',
    category: 'Guide',
    excerpt: 'Agar liburan tetap asik, pemilihan mobil sangat krusial. Simak panduan lengkapnya agar tidak salah pilih.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800'
  }
];

export const faqs = [
  {
    question: 'Bagaimana cara booking mobil?',
    answer: 'Cukup pilih unit yang tersedia di website kami, klik tombol booking, dan Anda akan diarahkan ke WhatsApp untuk konfirmasi detail.'
  },
  {
    question: 'Apakah bisa lepas kunci?',
    answer: 'Ya, kami menyediakan layanan sewa lepas kunci dengan syarat dan ketentuan yang berlaku sesuai kebijakan Gravita Rent Car.'
  },
  {
    question: 'Bagaimana sistem pembayarannya?',
    answer: 'Pembayaran dapat dilakukan melalui transfer bank atau tunai saat serah terima unit di lokasi yang disepakati.'
  }
];
