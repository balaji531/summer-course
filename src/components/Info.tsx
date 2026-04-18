import { motion } from 'motion/react';

export default function Info() {
  return (
    <section id="info" className="py-24 scroll-mt-20">
      <div className="mx-6 md:mx-14 max-w-7xl md:mx-auto relative" id="contact">
        {/* Centered Vertical Line with entrance animation */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent opacity-40 origin-top" 
        />
        
        {/* Content aligned to the right of the center line */}
        <div className="flex flex-col gap-20 py-12 pl-10 md:pl-[50%] lg:pl-[52%]">
          
          {/* Block 01: DATE */}
          <motion.div 
            initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="font-sync font-bold text-[clamp(18px,2vw,22px)] tracking-[-0.02em] text-cream leading-none mb-4 border-b border-alpha-border/50 pb-3 inline-block">DATE</h3>
            <div className="font-sync font-bold text-[clamp(20px,2.5vw,28px)] tracking-[-0.04em] text-gold/90 leading-none uppercase">
              06 MAY 2026
            </div>
          </motion.div>

          {/* Block 02: LOC */}
          <motion.div 
            initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="font-sync font-bold text-[clamp(18px,2vw,22px)] tracking-[-0.02em] text-cream leading-none mb-4 border-b border-alpha-border/50 pb-3 inline-block">LOC</h3>
            <div className="text-[13px] font-light text-alpha-muted leading-relaxed max-w-md opacity-80 uppercase tracking-wider">
              Vadapudupatti, Annanji (PO), Theni – 625 531.
            </div>
          </motion.div>

          {/* Block 03: ELIGIBILITY */}
          <motion.div 
            initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="font-sync font-bold text-[clamp(18px,2vw,22px)] tracking-[-0.02em] text-cream leading-none mb-4 border-b border-alpha-border/50 pb-3 inline-block">ELIGIBILITY</h3>
            <div className="text-[13px] font-light text-alpha-muted leading-relaxed opacity-80 uppercase tracking-wider">
              8th to 12th Students
            </div>
          </motion.div>

          {/* Block 04: INCLUDES */}
          <motion.div 
            initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="font-sync font-bold text-[clamp(18px,2vw,22px)] tracking-[-0.02em] text-cream leading-none mb-5 border-b border-alpha-border/50 pb-3 inline-block">INCLUDES</h3>
            <div className="flex flex-col gap-2">
              {['Free Transport', 'Meals', 'Refreshment', 'Course Material'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-gold/40" />
                  <span className="font-condensed text-[11px] font-bold tracking-[1.5px] uppercase text-alpha-muted/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
