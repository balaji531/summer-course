import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

import { Link } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[500] flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'py-4 px-6 md:px-14 border-b border-alpha-border bg-black/92 backdrop-blur-xl' : 'py-7 px-6 md:px-14 border-b border-transparent'
      }`}
    >
      <a href="#" className="font-bebas text-xl tracking-[5px] text-cream flex items-center gap-3.5 relative z-[600]">
        <div className="grid grid-cols-2 gap-[3px] w-[22px]">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-[9px] h-[9px] relative overflow-hidden bg-gradient-to-br from-[#3a2a10] to-[#5a4020] border-[0.5px] border-gold/30">
              <div className={`absolute w-[3px] h-[3px] bg-black ${
                i === 1 ? 'bottom-0 right-0' : 
                i === 2 ? 'bottom-0 left-0' : 
                i === 3 ? 'top-0 right-0' : 
                'top-0 left-0'
              }`} />
            </div>
          ))}
        </div>
        NSCET
      </a>
      
      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-9 list-none">
        {['Courses', 'Info', 'Contact'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              className="font-condensed text-[12px] font-medium tracking-[2.5px] uppercase text-alpha-muted hover:text-cream transition-colors relative group"
            >
              {item}
              <span className="absolute bottom-[-3px] left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
        <li>
          <Link 
            to="/register" 
            className="font-condensed text-[11px] font-semibold tracking-[2.5px] uppercase text-black bg-gold py-[9px] px-[22px] transition-all hover:bg-gold-bright hover:-translate-y-0.5 hover:shadow-[0_6px_20_rgba(200,168,106,0.3)]"
          >
            Register →
          </Link>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden relative z-[600] text-gold p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[550] bg-black flex flex-col items-center justify-center gap-10 md:hidden"
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(194,157,109,0.1)_0%,transparent_70%)] pointer-events-none" />
             {['Courses', 'Info', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="font-sync font-bold text-3xl tracking-tighter text-cream hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
            <Link 
              to="/register"
              onClick={() => setIsOpen(false)}
              className="font-condensed text-[14px] font-bold tracking-[4px] uppercase text-black bg-gold py-5 px-10 rounded-full mt-6"
            >
              Register Now →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

