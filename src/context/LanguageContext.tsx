import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    'nav.home': 'Beranda',
    'nav.profile': 'Profil',
    'nav.prayerTimes': 'Jadwal Sholat',
    'nav.events': 'Acara',
    'nav.news': 'Berita',
    'nav.gallery': 'Galeri',
    'nav.contact': 'Kontak',
    'nav.donate': 'Donasi',
    'hero.title': 'Masjid Asseghaf UNUGHA Cilacap',
    'hero.subtitle': 'Pusat Kegamaan dan Pemberdayaan Umat di Kampus UNUGHA Cilacap.',
    'prayer.fajr': 'Subuh',
    'prayer.dhuhr': 'Dzuhur',
    'prayer.asr': 'Ashar',
    'prayer.maghrib': 'Maghrib',
    'prayer.isha': 'Isya',
    'footer.copy': '© 2024 Masjid Asseghaf UNUGHA Cilacap. Seluruh hak cipta dilindungi.',
    'contact.title': 'Hubungi Kami',
    'contact.name': 'Nama',
    'contact.email': 'Email',
    'contact.message': 'Pesan',
    'contact.send': 'Kirim Pesan',
    'donasi.title': 'Infaq & Sedekah Online',
    'donasi.desc': 'Mari berbagi kebaikan untuk kemakmuran masjid.',
    'chat.placeholder': 'Tanya asisten digital...',
  },
  en: {
    'nav.home': 'Home',
    'nav.profile': 'Profile',
    'nav.prayerTimes': 'Prayer Times',
    'nav.events': 'Events',
    'nav.news': 'News',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.donate': 'Donate',
    'hero.title': 'Asseghaf Mosque UNUGHA Cilacap',
    'hero.subtitle': 'Religious and Community Empowerment Center at UNUGHA Cilacap Campus.',
    'prayer.fajr': 'Fajr',
    'prayer.dhuhr': 'Dhuhr',
    'prayer.asr': 'Asr',
    'prayer.maghrib': 'Maghrib',
    'prayer.isha': 'Isha',
    'footer.copy': '© 2024 Asseghaf Mosque UNUGHA Cilacap. All rights reserved.',
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'donasi.title': 'Online Donation',
    'donasi.desc': 'Let\'s share goodness for the prosperity of the mosque.',
    'chat.placeholder': 'Ask digital assistant...',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('lang') as Language) || 'id';
  });

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
