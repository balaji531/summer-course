import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

import { Link } from 'react-router-dom';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [timeLeft, setTimeLeft] = useState<{d:string, h:string, m:string, s:string}>({d: '--', h: '--', m: '--', s: '--'});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number;
    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particles {
      x: number; y: number; r: number; sp: number; op: number; dr: number;
      constructor(init = false) {
        this.x = Math.random() * W;
        this.y = init ? Math.random() * H : H + 8;
        this.r = Math.random() * 0.9 + 0.2;
        this.sp = Math.random() * 0.35 + 0.08;
        this.op = Math.random() * 0.35 + 0.05;
        this.dr = (Math.random() - 0.5) * 0.18;
      }
      step() {
        this.y -= this.sp;
        this.x += this.dr;
        if (this.y < -8) {
          this.x = Math.random() * W;
          this.y = H + 8;
        }
      }
      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.op;
        ctx.fillStyle = '#c29d6d';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const pts = Array.from({ length: 90 }, () => new Particles(true));
    let frameId: number;
    const render = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => { p.step(); p.draw(); });
      frameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const target = new Date('2026-05-06T09:00:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) {
        setTimeLeft({ d: '00', h: '00', m: '00', s: '00' });
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        d: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        h: String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
        m: String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
        s: String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0'),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-14 pt-[140px] pb-[120px] overflow-hidden bg-[#0d0a08]" id="home">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none w-full h-full" />
      
      {/* Thermal Spots / Blobs from image aesthetic */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] left-[15%] w-[400px] h-[300px] rounded-full bg-gold/10 blur-[80px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[25%] right-[10%] w-[500px] h-[350px] rounded-full bg-[#3d2c1e]/40 blur-[100px]" 
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[40%] right-[30%] w-[200px] h-[100px] rounded-full bg-gold/20 blur-[60px]" 
        />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-[2] bg-[repeating-linear-gradient(0deg,transparent,transparent_79px,rgba(194,157,109,0.05)_80px),repeating-linear-gradient(90deg,transparent,transparent_79px,rgba(194,157,109,0.05)_80px)] opacity-50" />
      
      {/* Vented Scanlines Overlay */}
      <div className="absolute inset-0 z-[3] pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.5)_50%,transparent_100%)] opacity-30" />

      {/* HUD Elements mimicking the labels in the image */}
      <div className="absolute inset-0 z-[4] pointer-events-none px-6 md:px-14">
        <div className="absolute top-[15%] left-[10%] border border-gold/20 p-2 md:p-4 transition-opacity group hidden sm:block">
           <span className="absolute -top-6 left-0 text-[8px] md:text-[10px] font-mono text-gold/40"></span>
           <div className="w-10 md:w-16 h-5 md:h-8 bg-gold/5 blur-sm" />
        </div>
        <div className="absolute top-[40%] right-[15%] border border-gold/20 p-2 md:p-4 hidden md:block">
           <span className="absolute -top-6 right-0 text-[10px] font-mono text-gold/40"></span>
           <div className="w-12 h-6 bg-gold/5 blur-md" />
        </div>
        <div className="absolute bottom-[20%] left-[20%] border border-gold/20 p-2 md:p-3 hidden lg:block">
           <span className="absolute -top-6 left-0 text-[10px] font-mono text-gold/40"></span>
           <div className="w-20 h-10 bg-gold/5 blur-lg" />
        </div>
        <div className="absolute bottom-[35%] right-[25%] border border-gold/20 p-2 md:p-5 hidden sm:block">
           <span className="absolute -top-6 right-0 text-[8px] md:text-[10px] font-mono text-gold/40"></span>
           <div className="w-10 md:w-14 h-5 md:h-7 bg-gold/5 blur-sm" />
        </div>
      </div>

      {/* Content */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="relative z-[10] font-condensed text-[10px] md:text-[11px] font-medium tracking-[4px] md:tracking-[8px] uppercase text-gold/60 mb-6 md:mb-8"
      >
        Nadar Saraswathi College of Engineering & Technology
      </motion.p>

      <motion.h1 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="relative z-[10] font-sync font-bold text-[clamp(36px,9vw,100px)] leading-[0.9] tracking-[-0.04em] text-cream drop-shadow-[0_0_20px_rgba(194,157,109,0.3)]"
      >
        NEXT GEN
        <span className="block font-sync font-bold text-[clamp(24px,6.5vw,68px)] tracking-[-0.04em] text-gold mt-4 uppercase">Academy</span>
        <span className="block font-sync font-light text-[clamp(10px,1.2vw,14px)] tracking-[1vw] md:tracking-[1.5vw] text-gold/50 mt-2 uppercase">Presents</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.6 }}
        className="relative z-[10] mt-8 font-sync font-bold text-[clamp(16px,2vw,24px)] tracking-[2px] text-cream/70 uppercase"
      >
        Summer Certification Courses
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.8 }}
        className="relative z-[10] text-[11px] md:text-[12px] font-light text-alpha-muted tracking-[2px] md:tracking-[4px] uppercase mt-12 md:mt-14 mb-12 md:mb-16 max-w-2xl px-4"
      >
        Learn future skills <span className="text-gold/20 mx-2 md:mx-4">|</span> 8th to 12th students
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 1 }}
        className="relative z-[10] flex flex-wrap items-center justify-center gap-4 md:gap-6"
      >
        <a href="#courses" className="font-condensed text-[10px] md:text-[11px] font-bold tracking-[3px] md:tracking-[4px] uppercase text-black bg-gold py-[14px] px-[32px] md:py-[16px] md:px-[40px] transition-all hover:bg-gold-bright hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(194,157,109,0.3)]">
          Explore Courses
        </a>
        <Link to="/register" className="font-condensed text-[10px] md:text-[11px] font-medium tracking-[3px] md:tracking-[4px] uppercase text-cream py-[13px] px-[28px] md:py-[15px] md:px-[36px] border border-gold/30 transition-all hover:border-gold hover:text-gold hover:bg-gold/5">
          Registration
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-[10] mt-16 md:mt-24 p-1.5 border border-gold/10 rounded-2xl bg-black/40 backdrop-blur-md"
      >
        <div className="absolute -top-3 left-4 px-2 bg-[#0d0a08] flex items-center gap-2">
           <div className="w-1 h-1 rounded-full bg-gold" />
           <span className="font-condensed text-[8px] font-bold tracking-[3px] text-gold/40 uppercase">Phase countdown</span>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-1.5">
          {[
            { label: 'DAYS', val: timeLeft.d },
            { label: 'HOURS', val: timeLeft.h },
            { label: 'MINS', val: timeLeft.m },
            { label: 'SECS', val: timeLeft.s }
          ].map((block, i) => (
            <div key={block.label} className="relative flex flex-col items-center justify-center py-4 px-6 md:py-6 md:px-10 min-w-[85px] md:min-w-[120px] bg-white/[0.03] border border-white/[0.05] rounded-xl overflow-hidden transition-all hover:bg-gold/5 group">
              {/* Internal HUD Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(194,157,109,0.03)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20" />
              </div>
              
              <span className="font-sync font-bold text-2xl md:text-4xl tracking-tighter text-cream group-hover:text-gold transition-colors relative z-10">
                {block.val}
              </span>
              
              <span className="font-condensed text-[8px] font-semibold tracking-[2px] md:tracking-[3px] uppercase text-gold/40 mt-1 md:mt-2 group-hover:text-gold/60 relative z-10">{block.label}</span>
              
              {/* Thermal Spot in corners */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gold/5 blur-sm rounded-full" />
            </div>
          ))}
        </div>

        <div className="absolute -bottom-3 right-4 px-2 bg-[#0d0a08]">
           <span className="font-condensed text-[8px] font-medium tracking-[2px] text-gold/20 uppercase italic">Ref: NSCET_2026_T1</span>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[10] flex flex-col items-center gap-3 opacity-40">
        <div className="w-[1px] h-[60px] bg-gradient-to-b from-gold to-transparent animate-sLine" />
        <span className="font-condensed text-[8px] font-bold tracking-[5px] uppercase text-gold/60">scroll down</span>
      </div>
    </section>
  );
}

