import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Events() {
  const { t } = useLanguage();
  
  const events = [
    {
      title: 'Kajian Rutin Selasaran',
      date: 'Setiap Selasa',
      time: '16:30 - 18:00',
      location: 'Serambi Utama',
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800',
      category: 'Kajian'
    },
    {
      title: 'Peringatan Hari Besar Islam',
      date: '25 Juni 2024',
      time: '08:00 - selesai',
      location: 'Aula Utama',
      image: 'https://images.unsplash.com/photo-1574175316155-83e843799684?auto=format&fit=crop&q=80&w=800',
      category: 'Tabligh Akbar'
    }
  ];

  return (
    <section id="events" className="py-24 bg-gray-50 dark:bg-slate-900 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">Acara Mendatang</h2>
            <p className="text-gray-500 max-w-md">Ikuti berbagai kegiatan keagamaan dan sosial yang kami selenggarakan.</p>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-brand-primary font-bold hover:underline">
            <span>Lihat Semua</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden flex flex-col sm:flex-row group border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition-all"
            >
              <div className="sm:w-2/5 relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                  {event.category}
                </div>
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-brand-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-3 text-sm text-gray-500 dark:text-slate-400">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-brand-accent" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-brand-accent" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-brand-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <button className="mt-8 border border-gray-200 dark:border-slate-700 w-full py-3 rounded-2xl font-bold hover:bg-brand-primary hover:text-white transition-all">
                  Ikuti Acara
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
