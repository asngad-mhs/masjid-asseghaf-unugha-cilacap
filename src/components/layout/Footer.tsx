import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: <Facebook />, href: '#' },
    { icon: <Instagram />, href: '#' },
    { icon: <Twitter />, href: '#' },
    { icon: <Youtube />, href: '#' },
  ];

  const quickLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.profile'), href: '#profile' },
    { name: t('nav.events'), href: '#events' },
    { name: t('nav.news'), href: '#news' },
    { name: t('nav.gallery'), href: '#gallery' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">MA</span>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                Masjid Asseghaf
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Menjadi pusat dakwah dan pembinaan umat yang profesional, mandiri, dan berwawasan global di lingkungan kampus UNUGHA Cilacap.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-brand-accent transition-colors flex items-center">
                    <ChevronRight className="w-3 h-3 mr-2 opacity-50" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t('contact.title')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-accent flex-shrink-0" />
                <span>Jl. Kemerdekaan Barat No.12, Kesugihan, Cilacap, Jawa Tengah 53274</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-accent" />
                <span>089670924182</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-accent" />
                <span>masjidasseghaf.unugha.ac.id</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Donasi Offline</h4>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
               <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Bank Syariah Indonesia</p>
               <p className="text-lg font-bold text-white mb-1">7123456789</p>
               <p className="text-xs">a.n Masjid Asseghaf UNUGHA</p>
               <button className="mt-4 flex items-center text-xs font-bold text-brand-accent hover:underline">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Konfirmasi Donasi
               </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>{t('footer.copy')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ChevronRight(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
