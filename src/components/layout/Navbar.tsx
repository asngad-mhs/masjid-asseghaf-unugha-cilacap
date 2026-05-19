import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun, Languages, Search } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../lib/firebase';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.profile'), href: '#profile' },
    { name: t('nav.prayerTimes'), href: '#prayer' },
    { name: t('nav.events'), href: '#events' },
    { name: t('nav.news'), href: '#news' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">MA</span>
            </div>
            <span className="font-display font-bold text-sm md:text-base tracking-tight hidden sm:block">
              Masjid Asseghaf UNUGHA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors flex items-center space-x-1"
            >
              <Languages className="w-5 h-5" />
              <span className="text-xs font-bold uppercase">{language}</span>
            </button>

            {user ? (
              <button
                onClick={() => auth.signOut()}
                className="hidden md:block bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition-all"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="hidden md:block bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition-all"
              >
                Login
              </Link>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Header */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 px-4 py-4"
          >
            <div className="max-w-3xl mx-auto relative">
              <input
                type="text"
                placeholder="Cari informasi, acara, berita..."
                className="w-full bg-gray-100 dark:bg-slate-800 border-none rounded-xl py-3 px-12 focus:ring-2 focus:ring-brand-primary outline-none"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="lg:hidden fixed inset-0 z-40 bg-white dark:bg-slate-950 pt-16 px-4"
          >
            <div className="flex flex-col space-y-4 pt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold border-b border-gray-100 dark:border-slate-900 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                 {user ? (
                    <button onClick={() => auth.signOut()} className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold">Logout</button>
                 ) : (
                    <Link to="/login" className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-center block">Login</Link>
                 )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
