import { motion } from 'motion/react';
import { ArrowRight, User, Calendar } from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      title: 'Pembangunan Menara Masjid Tahap Akhir',
      excerpt: 'Pembangunan menara masjid asseghaf sudah mencapai 90%. Terima kasih kepada seluruh donatur.',
      date: '10 Mei 2024',
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1590076215667-873d33306208?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Pelatihan Manajemen Masjid Profesional',
      excerpt: 'Takmir masjid asseghaf mengikuti pelatihan untuk meningkatkan kualitas layanan jamaah.',
      date: '5 Mei 2024',
      author: 'Sekretaris',
      image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Program Berbagi Ta\'jil Ramadhan 1445H',
      excerpt: 'Alhamdulillah, ribuan porsi ta\'jil telah disalurkan kepada jamaah dan warga sekitar.',
      date: '1 Mei 2024',
      author: 'Sosial',
      image: 'https://images.unsplash.com/photo-1519491050282-358040d12e62?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="news" className="py-24 bg-white dark:bg-slate-950 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">Berita Terkini</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Update terbaru mengenai pembangunan, kegiatan, dan informasi penting lainnya.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((news, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center">
                      Baca Selengkapnya <ArrowRight className="w-3 h-3 ml-2" />
                   </span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                 <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{news.date}</span>
                 </div>
                 <div className="flex items-center space-x-1 uppercase">
                    <User className="w-3.5 h-3.5" />
                    <span>{news.author}</span>
                 </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors leading-tight">
                {news.title}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
                {news.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
