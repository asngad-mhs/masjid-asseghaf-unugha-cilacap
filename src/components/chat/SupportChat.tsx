import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Assalamu\'alaikum! Ada yang bisa saya bantu terkait Masjid Asseghaf?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    const userMsg = message;
    setMessage('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Maaf, terjadi kesalahan. Silakan coba lagi nanti.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-brand-primary text-white p-4 rounded-2xl shadow-2xl hover:scale-110 active:scale-95 transition-all"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-primary p-6 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold">Asisten Digital</h3>
                  <p className="text-xs text-blue-200">Online & Siap Membantu</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-6 space-y-4 scroll-smooth"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl flex space-x-2 ${
                    msg.role === 'user' 
                      ? 'bg-brand-primary text-white rounded-tr-none' 
                      : 'bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-100 rounded-tl-none'
                  }`}>
                    <div className="flex-grow text-sm leading-relaxed whitespace-pre-wrap">
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none">
                      <Loader2 className="w-5 h-5 animate-spin text-brand-primary" />
                   </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/50">
              <div className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t('chat.placeholder')}
                  className="w-full bg-white dark:bg-slate-800 border-none rounded-xl py-3 px-4 pr-12 focus:ring-2 focus:ring-brand-primary outline-none shadow-sm dark:shadow-none"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-primary hover:bg-blue-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
