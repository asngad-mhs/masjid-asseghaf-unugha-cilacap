import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { Calendar, Heart, MapPin, ChevronRight } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 -z-20" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 dark:bg-brand-primary/10 skew-x-[-15deg] origin-top translate-x-20 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <MapPin className="w-3.5 h-3.5" />
            <span>Cilacap, Jawa Tengah</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-primary hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all transform hover:scale-105">
              <Heart className="w-5 h-5 fill-current" />
              <span>{t('nav.donate')}</span>
            </button>
            <button className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all">
              <Calendar className="w-5 h-5" />
              <span>Jadwal Acara</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="mt-12 flex items-center space-x-8">
            <div>
              <p className="text-3xl font-display font-bold">500+</p>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mt-1">Jamaah Aktif</p>
            </div>
            <div className="h-8 w-px bg-gray-200 dark:bg-slate-800" />
            <div>
              <p className="text-3xl font-display font-bold">20+</p>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mt-1">Acara/Bulan</p>
            </div>
            <div className="h-8 w-px bg-gray-200 dark:bg-slate-800" />
            <div>
              <p className="text-3xl font-display font-bold">1985</p>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mt-1">Tahun Berdiri</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl skew-x-[-2deg] skew-y-[1deg]">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
              alt="Masjid" 
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          {/* Accent Shapes */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -z-10" />
          
          <div className="absolute -right-8 bottom-12 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl z-20 border border-gray-100 dark:border-slate-800">
             <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center font-bold">
                   98%
                </div>
                <div>
                   <p className="text-sm font-bold">Kepuasan Jamaah</p>
                   <p className="text-xs text-gray-400">Berdasarkan survey 2024</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
