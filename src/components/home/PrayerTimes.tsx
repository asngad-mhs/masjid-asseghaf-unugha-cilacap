import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Bell } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface PrayerTimesData {
  data: {
    timings: {
      Fajr: string;
      Dhuhr: string;
      Asr: string;
      Maghrib: string;
      Isha: string;
      Sunrise: string;
    }
  }
}

export default function PrayerTimes() {
  const { t } = useLanguage();
  const [times, setTimes] = useState<PrayerTimesData['data']['timings'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<{lat: number, lng: number} | null>({ lat: -7.7121, lng: 109.0202 }); // Default Cilacap

  useEffect(() => {
    // Try to get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
    }
  }, []);

  useEffect(() => {
    async function fetchTimes() {
      if (!location) return;
      try {
        const res = await fetch(`/api/prayer-times?lat=${location.lat}&lng=${location.lng}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const result = await res.json();
        if (result && result.data && result.data.timings) {
          setTimes(result.data.timings);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchTimes();
  }, [location]);

  const prayers = [
    { name: t('prayer.fajr'), key: 'Fajr', icon: '🌅' },
    { name: 'Sunrise', key: 'Sunrise', icon: '☀️' },
    { name: t('prayer.dhuhr'), key: 'Dhuhr', icon: '☀️' },
    { name: t('prayer.asr'), key: 'Asr', icon: '🌤️' },
    { name: t('prayer.maghrib'), key: 'Maghrib', icon: '🌆' },
    { name: t('prayer.isha'), key: 'Isya', icon: '🌙' },
  ];

  return (
    <section id="prayer" className="py-24 bg-white dark:bg-slate-950 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">Waktu Sholat</h2>
            <div className="flex items-center text-gray-500 space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Cilacap, Jawa Tengah & Sekitarnya</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-gray-100 dark:bg-slate-900 px-6 py-3 rounded-2xl border border-gray-200 dark:border-slate-800">
             <Bell className="w-5 h-5 text-brand-accent animate-bounce" />
             <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Pengumuman</p>
                <p className="text-sm font-medium">Kajian Rutin Selasaran Jam 16:30</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {loading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="h-48 bg-gray-100 dark:bg-slate-900 rounded-3xl animate-pulse" />
            ))
          ) : (
            prayers.map((prayer, i) => (
              <motion.div
                key={prayer.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-[2rem] flex flex-col items-center justify-center space-y-4 border transition-all hover:shadow-xl hover:-translate-y-1 ${
                  i === 4 ? 'bg-brand-primary text-white border-transparent' : 'bg-gray-50 dark:bg-slate-900 border-gray-100 dark:border-slate-800'
                }`}
              >
                <span className="text-4xl">{prayer.icon}</span>
                <div className="text-center">
                  <p className={`text-xs font-bold uppercase tracking-widest ${i === 4 ? 'text-blue-200' : 'text-gray-400'}`}>
                    {prayer.name}
                  </p>
                  <p className="text-3xl font-display font-bold mt-1">
                    {(times as any)?.[prayer.key]}
                  </p>
                </div>
                <div className={`p-2 rounded-full ${i === 4 ? 'bg-white/20' : 'bg-gray-100 dark:bg-slate-800'}`}>
                  <Clock className="w-4 h-4" />
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
