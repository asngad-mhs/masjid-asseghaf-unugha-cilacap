import { motion } from 'motion/react';
import { Heart, ShieldCheck, TrendingUp, Handshake } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Donation() {
  const { t } = useLanguage();

  const causes = [
    { name: 'Operasional Masjid', icon: <TrendingUp className="w-6 h-6" />, color: 'bg-blue-100 text-blue-600' },
    { name: 'Santunan Anak Yatim', icon: <Heart className="w-6 h-6" />, color: 'bg-red-100 text-red-600' },
    { name: 'Pembangunan Fisik', icon: <ShieldCheck className="w-6 h-6" />, color: 'bg-green-100 text-green-600' },
    { name: 'Dakwah & Pendidikan', icon: <Handshake className="w-6 h-6" />, color: 'bg-yellow-100 text-yellow-600' },
  ];

  return (
    <section id="donate" className="py-24 bg-brand-primary text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tight">
              {t('donasi.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-lg leading-relaxed">
              {t('donasi.desc')} Setiap rupiah yang Anda berikan menjadi saksi kebaikan di akhirat nanti.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {causes.map((cause, i) => (
                <div key={i} className="bg-white/10 backdrop-blur p-6 rounded-[2rem] border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                  <div className={`w-12 h-12 ${cause.color} rounded-2xl flex items-center justify-center mb-4`}>
                    {cause.icon}
                  </div>
                  <p className="font-bold text-sm">{cause.name}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white text-gray-900 p-8 md:p-12 rounded-[3rem] shadow-2xl skew-x-[-1deg]"
          >
            <h3 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest text-gray-400 text-xs">Pilih Nominal Donasi</h3>
            
            <div className="grid grid-cols-3 gap-3 mb-8">
              {['50k', '100k', '200k', '500k', '1jt', 'Lainnya'].map((amount) => (
                <button key={amount} className="border-2 border-gray-100 py-4 rounded-2xl font-bold hover:border-brand-primary hover:text-brand-primary transition-all">
                  {amount}
                </button>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <input 
                type="text" 
                placeholder="Nama Lengkap (Boleh Nama Hamba Allah)" 
                className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <input 
                type="email" 
                placeholder="Email (Untuk Notifikasi)" 
                className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            <button className="w-full bg-brand-accent text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:bg-yellow-600 transition-all flex items-center justify-center space-x-3">
               <Heart className="w-6 h-6 fill-current" />
               <span>Donasi Sekarang</span>
            </button>

            <p className="text-center text-xs text-gray-400 mt-6 font-medium">✨ Pembayaran Aman & Terverifikasi Sistem</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
