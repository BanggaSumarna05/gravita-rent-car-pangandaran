import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Car as CarIcon, 
  BookOpen, 
  Users, 
  Settings, 
  Bell, 
  Search,
  Plus,
  MoreVertical,
  TrendingUp,
  DollarSign,
  Calendar,
  CheckCircle,
  Clock,
  ArrowUpRight,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { cars } from '../data';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, name: 'Overview' },
    { icon: CarIcon, name: 'Armada' },
    { icon: BookOpen, name: 'Booking' },
    { icon: Users, name: 'Pelanggan' },
    { icon: Settings, name: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      {/* Mobile Top Header (Dashboard Only) */}
      <div className="lg:hidden bg-zinc-950 p-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
           <img 
            src="/src/assets/images/regenerated_image_1778480742380.png" 
            alt="Gravita Admin" 
            className="h-6 w-auto object-contain invert"
          />
          <span className="text-white font-bold text-sm tracking-tight">ADMIN</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-zinc-900 rounded-lg text-white"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="lg:hidden fixed inset-0 z-[60] bg-zinc-950 p-6 flex flex-col pt-20"
          >
            <nav className="flex-1 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 font-bold text-lg",
                    activeTab === item.name ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20" : "text-zinc-500"
                  )}
                >
                  <item.icon size={24} />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-4 px-6 py-4 text-red-500 font-bold text-lg border-t border-zinc-900 pt-8 mt-auto"
            >
              <LogOut size={24} />
              <span>Keluar</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar (Desktop) */}
      <aside className="w-64 bg-zinc-950 text-zinc-400 p-6 flex flex-col hidden lg:flex sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-12 px-2">
          <img 
            src="/src/assets/images/regenerated_image_1778480742380.png" 
            alt="Gravita Admin" 
            className="h-8 w-auto object-contain invert"
          />
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium",
                activeTab === item.name ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20" : "hover:bg-zinc-900 hover:text-white"
              )}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-zinc-900">
           <button
             onClick={() => navigate('/')}
             className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl w-full transition-colors"
           >
              <LogOut size={20} />
              <span>Keluar</span>
           </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto h-full lg:h-screen p-4 md:p-8">
        {/* Topbar */}
        <header className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-2xl font-black font-display text-zinc-900">Selamat Datang, Admin!</h1>
            <p className="text-zinc-500 text-sm font-medium">Ringkasan performa hari ini.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input 
                placeholder="Cari..." 
                className="bg-white border border-zinc-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 w-full"
              />
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
              <button className="relative w-11 h-11 border border-zinc-200 bg-white rounded-xl flex items-center justify-center text-zinc-500 hover:border-amber-500 transition-colors">
                <Bell size={20} />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <div className="w-11 h-11 bg-zinc-900 rounded-xl overflow-hidden border-2 border-amber-500 flex-shrink-0">
                <img src="https://i.pravatar.cc/100?u=admin" alt="Admin" />
              </div>
            </div>
          </div>
        </header>

        {activeTab === 'Overview' && <Overview />}
        {activeTab === 'Armada' && <ArmadaGrid />}
        {activeTab === 'Booking' && <BookingTable />}
        {activeTab === 'Pelanggan' && <CustomerList />}
        {activeTab === 'Settings' && <SettingsPanel />}
      </main>
    </div>
  );
}

function Overview() {
  const stats = [
    { label: 'Booking Baru', value: '42', icon: BookOpen, color: 'bg-blue-500', trend: '+12%' },
    { label: 'Total Armada', value: '24', icon: CarIcon, color: 'bg-amber-500', trend: 'Stabil' },
    { label: 'Pelanggan Aktif', value: '156', icon: Users, color: 'bg-emerald-500', trend: '+5%' },
    { label: 'Pendapatan (Mei)', value: 'Rp 65.2M', icon: DollarSign, color: 'bg-zinc-900', trend: '+18%' },
  ];

  return (
    <div className="space-y-12">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
            <div className="flex justify-between items-start mb-6">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg", stat.color)}>
                <stat.icon size={24} />
              </div>
              <div className="px-2 py-1 bg-zinc-50 text-[10px] font-bold text-emerald-600 rounded-lg flex items-center gap-1">
                <TrendingUp size={12} /> {stat.trend}
              </div>
            </div>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-3xl font-black font-display text-zinc-900 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-zinc-100 p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-black font-display text-zinc-900">Booking Terbaru</h2>
            <button className="text-amber-500 text-sm font-bold hover:underline">Lihat Semua</button>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center font-bold">
                    {i === 1 ? 'BM' : i === 2 ? 'SP' : 'AS'}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Budi Mulyono</h4>
                    <p className="text-zinc-500 text-xs font-medium">Toyota Innova Reborn • 3 Hari</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block font-bold text-zinc-900">Rp 1.950.000</span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-500 mt-1">
                    <CheckCircle size={10} /> Sukses
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet Status */}
        <div className="bg-zinc-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full" />
          <h2 className="text-xl font-black font-display mb-8">Status Armada</h2>
          <div className="space-y-8">
             <div className="flex items-center justify-between">
                <div>
                   <p className="text-amber-500 text-2xl font-black">18</p>
                   <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">Ready</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-emerald-400">
                   <CarIcon size={24} />
                </div>
             </div>
             <div className="flex items-center justify-between">
                <div>
                   <p className="text-amber-500 text-2xl font-black">6</p>
                   <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest">Rented</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-amber-400">
                   <Clock size={24} />
                </div>
             </div>
             <div className="pt-8 border-t border-zinc-800">
                <button className="w-full bg-amber-500 text-zinc-950 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors">
                   Manajemen Mobil <ArrowUpRight size={18} />
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArmadaGrid() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black font-display text-zinc-900">Daftar Armada</h2>
        <button className="bg-zinc-950 text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-amber-500 transition-colors shadow-lg">
          <Plus size={18} /> Tambah Mobil
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-3xl border border-zinc-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
            <div className="aspect-video overflow-hidden">
               <img src={car.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="p-5 space-y-4">
              <div className="flex justify-between items-start text-sm">
                <h4 className="font-bold text-zinc-900">{car.name}</h4>
                <div className={cn("w-2 h-2 rounded-full", car.status === 'Ready' ? 'bg-emerald-500' : 'bg-red-500')} />
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-zinc-50">
                <span className="text-xs font-medium text-zinc-400">{car.type}</span>
                <button className="text-zinc-400 hover:text-zinc-900"><MoreVertical size={18} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BookingTable() {
  return (
    <div className="bg-white rounded-[2.5rem] border border-zinc-100 shadow-sm overflow-hidden">
       <div className="p-8 border-b border-zinc-50 flex items-center justify-between">
          <h2 className="text-xl font-black font-display text-zinc-900">Riwayat Booking</h2>
          <div className="flex gap-4">
             <button className="px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold text-zinc-600 hover:border-zinc-300">Download Report</button>
             <button className="px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold text-zinc-600 hover:border-zinc-300">Filter Tanggal</button>
          </div>
       </div>
       <div className="overflow-x-auto">
          <table className="w-full text-left">
             <thead>
                <tr className="bg-zinc-50/50">
                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Pelanggan</th>
                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Unit Mobil</th>
                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Tgl Sewa</th>
                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Status</th>
                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-right">Total</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-zinc-50">
                {[...Array(5)].map((_, i) => (
                   <tr key={i} className="group hover:bg-zinc-50/50 transition-colors">
                      <td className="px-8 py-6">
                         <p className="font-bold text-zinc-900">Customer #{i + 101}</p>
                         <p className="text-xs text-zinc-500">+62 812-xxxx-xxxx</p>
                      </td>
                      <td className="px-8 py-6 font-medium text-zinc-700">Honda Brio</td>
                      <td className="px-8 py-6 font-medium text-zinc-700">12 Mei 2024</td>
                      <td className="px-8 py-6">
                         <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-wider">Confirmed</span>
                      </td>
                      <td className="px-8 py-6 text-right font-black text-zinc-900">Rp 450.000</td>
                   </tr>
                ))}
             </tbody>
          </table>
       </div>
    </div>
  );
}

function CustomerList() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-xl font-black font-display text-zinc-900">Data Pelanggan</h2>
          <p className="text-zinc-500 text-sm">Lihat semua pelanggan aktif dan riwayat penyewaan mereka.</p>
        </div>
        <button className="bg-amber-500 text-zinc-950 px-6 py-3 rounded-2xl font-bold hover:bg-amber-600 transition-colors">Tambah Pelanggan</button>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-zinc-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-zinc-50/50">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Nama</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Kontak</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Sewaan Terakhir</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {['Agus', 'Siti', 'Rina', 'Dewi', 'Andi'].map((name, index) => (
                <tr key={index} className="group hover:bg-zinc-50/50 transition-colors">
                  <td className="px-8 py-6 font-bold text-zinc-900">{name}</td>
                  <td className="px-8 py-6 text-zinc-700">+62 812-1234-56{index}</td>
                  <td className="px-8 py-6 text-zinc-700">{index % 2 === 0 ? 'Toyota Avanza • 5 Hari' : 'Honda Brio • 2 Hari'}</td>
                  <td className="px-8 py-6 text-zinc-700">Aktif</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SettingsPanel() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-xl font-black font-display text-zinc-900">Pengaturan</h2>
          <p className="text-zinc-500 text-sm">Atur preferensi dashboard dan informasi akun admin.</p>
        </div>
        <button className="bg-zinc-950 text-white px-6 py-3 rounded-2xl font-bold hover:bg-zinc-800 transition-colors">Simpan Perubahan</button>
      </div>

      <div className="bg-white rounded-3xl border border-zinc-100 p-8 shadow-sm space-y-8">
        <div>
          <h3 className="text-lg font-bold text-zinc-900">Preferensi Tampilan</h3>
          <p className="text-zinc-500 text-sm">Sesuaikan tampilan dashboard untuk admin.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['Notifikasi Email', 'Mode Gelap', 'Simpan Riwayat'].map((setting) => (
            <div key={setting} className="flex items-center justify-between rounded-3xl border border-zinc-200 p-5">
              <div>
                <p className="font-bold text-zinc-900">{setting}</p>
                <p className="text-zinc-500 text-sm">Aktifkan atau nonaktifkan fitur ini.</p>
              </div>
              <button className="px-4 py-2 bg-amber-500 text-zinc-950 rounded-2xl font-bold">On</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
