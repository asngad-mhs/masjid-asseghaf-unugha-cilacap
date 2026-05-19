import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { motion } from 'motion/react';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-slate-800 text-center"
      >
        <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
           <LogIn className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-display font-bold mb-4">Selamat Datang</h1>
        <p className="text-gray-500 mb-12">Masuk ke akun Anda untuk mengakses fitur jamaah dan manajemen masjid.</p>
        
        <button 
          onClick={handleLogin}
          className="w-full flex items-center justify-center space-x-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 py-4 rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all shadow-sm"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/smartlock/google.svg" className="w-5 h-5" alt="Google" />
          <span>Lanjutkan dengan Google</span>
        </button>
        
        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-slate-800">
           <p className="text-xs text-gray-400">
              Dengan masuk, Anda menyetujui Syarat & Ketentuan dan Kebijakan Privasi kami.
           </p>
        </div>
      </motion.div>
    </div>
  );
}
