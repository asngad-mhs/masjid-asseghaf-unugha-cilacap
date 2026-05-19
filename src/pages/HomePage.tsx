import Hero from '../components/home/Hero';
import PrayerTimes from '../components/home/PrayerTimes';
import Events from '../components/home/Events';
import News from '../components/home/News';
import Donation from '../components/home/Donation';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Globe, Star, Quote, User } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <PrayerTimes />
      
      {/* Profile Section */}
      <section id="profile" className="py-24 bg-gray-50 dark:bg-slate-900 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tight">Profil Masjid</h2>
               <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Masjid Asseghaf UNUGHA Cilacap bukan sekadar tempat ibadah, melainkan pusat peradaban dan intelektual bagi mahasiswa dan masyarakat sekitar. Nama "Asseghaf" diambil sebagai penghormatan kepada para leluhur yang berjasa dalam dakwah di tanah Jawa.
               </p>
               <div className="space-y-6">
                  {[
                     { title: 'Visi', desc: 'Menjadi pusat peradaban Islam yang moderat dan unggul.' },
                     { title: 'Misi', desc: 'Membina spritualitas mahasiswa dan pengabdian masyarakat.' }
                  ].map((item, i) => (
                     <div key={i} className="flex space-x-4">
                        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                           <span className="text-brand-primary font-bold">{i+1}</span>
                        </div>
                        <div>
                           <h4 className="font-bold text-lg">{item.title}</h4>
                           <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </motion.div>
            <div className="relative">
               <div className="aspect-square bg-brand-primary/10 rounded-full absolute -inset-10 animate-pulse" />
               <img 
                  src="https://images.unsplash.com/photo-1590076215667-873d33306208?auto=format&fit=crop&q=80&w=1000" 
                  alt="Masjid Profile" 
                  className="rounded-[3rem] shadow-2xl relative z-10"
               />
            </div>
         </div>
      </section>

      <Events />
      <Donation />
      <News />

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900">
         <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Testimoni Jamaah</h2>
               <p className="text-gray-500">Apa kata mereka tentang pengalaman beribadah di Masjid Asseghaf?</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { name: 'Ahmad Fauzi', role: 'Mahasiswa UNUGHA', text: 'Masjid yang sangat nyaman untuk beribadah dan sering mengadakan kajian ilmiah yang sangat bermanfaat bagi mahasiswa.' },
                  { name: 'Siti Aminah', role: 'Warga Sekitar', text: 'Pelayanan takmir sangat ramah. Fasilitas air dan kebersihan selalu terjaga dengan baik. Nyaman untuk membawa anak.' },
                  { name: 'H. Sulaiman', role: 'Donatur', text: 'Transparansi dana pembangunan sangat baik. Kami merasa tenang mengamanahkan bantuan karena laporannya rutin.' }
               ].map((t, i) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-sm relative border border-gray-100 dark:border-slate-700"
                  >
                     <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-50 opacity-10 dark:opacity-5" />
                     <div className="flex space-x-1 mb-6">
                        {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-brand-accent text-brand-accent" />)}
                     </div>
                     <p className="text-gray-600 dark:text-slate-400 italic mb-8 relative z-10">"{t.text}"</p>
                     <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                           <User className="w-full h-full p-2 text-gray-400" />
                        </div>
                        <div>
                           <p className="font-bold text-sm">{t.name}</p>
                           <p className="text-xs text-brand-primary font-medium">{t.role}</p>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Map & Contact */}
      <section id="contact" className="py-24 bg-white dark:bg-slate-950 px-4">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
               <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tight">Lokasi & Kontak</h2>
               <div className="space-y-8 mb-12">
                  <div className="flex items-start space-x-4">
                     <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-brand-primary rounded-xl">
                        <MapPin className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold">Alamat</h4>
                        <p className="text-gray-500 text-sm">Jl. Kemerdekaan No.1, Kesugihan, Cilacap, Jawa Tengah</p>
                     </div>
                  </div>
                  <div className="flex items-start space-x-4">
                     <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-brand-primary rounded-xl">
                        <Phone className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold">Telepon</h4>
                        <p className="text-gray-500 text-sm">(0282) 534xxx / 0812-xxxx-xxxx</p>
                     </div>
                  </div>
                  <div className="flex items-start space-x-4">
                     <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-brand-primary rounded-xl">
                        <Mail className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold">Email</h4>
                        <p className="text-gray-500 text-sm">info@asseghaf-unugha.ac.id</p>
                     </div>
                  </div>
               </div>

               {/* Simple Contact Form */}
               <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                     <input type="text" placeholder="Nama" className="w-full bg-gray-50 dark:bg-slate-900 border-none rounded-xl py-4 px-6 outline-none focus:ring-2 focus:ring-brand-primary" />
                     <input type="email" placeholder="Email" className="w-full bg-gray-50 dark:bg-slate-900 border-none rounded-xl py-4 px-6 outline-none focus:ring-2 focus:ring-brand-primary" />
                  </div>
                  <textarea placeholder="Pesan Anda" rows={4} className="w-full bg-gray-50 dark:bg-slate-900 border-none rounded-xl py-4 px-6 outline-none focus:ring-2 focus:ring-brand-primary"></textarea>
                  <button className="bg-brand-primary text-white font-bold py-4 px-12 rounded-xl hover:bg-blue-800 transition-all">Kirim Pesan</button>
               </form>
            </div>
            
            <div className="h-[400px] lg:h-auto rounded-[3rem] overflow-hidden border border-gray-100 dark:border-slate-800 shadow-xl">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.457122176472!2d109.01956555197828!3d-7.724391694086665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e650d4ef47e06ff%3A0x633513a968652c7!2sUNUGHA%20Cilacap!5e0!3m2!1sid!2sid!4v1716131454000!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
         </div>
      </section>
    </div>
  );
}
