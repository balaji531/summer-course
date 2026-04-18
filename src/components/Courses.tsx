import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: '01',
    name: 'Project AI‑Gnite',
    desc: 'Build real AI mini-projects and discover how intelligent systems are designed, trained, and deployed. No prior experience needed — just curiosity.',
    days: '10 Days',
    price: '3,999',
    img: 'https://images8.alphacoders.com/134/1345249.png',
    span: true
  },
  {
    id: '02',
    name: 'Drone Technologies',
    desc: 'Hands-on flight mechanics, aerial programming, and engineering. Fly to new heights.',
    days: '6 Days',
    price: '2,999',
    img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80'
  },
  {
    id: '03',
    name: 'Robotics & IoT',
    desc: 'Build smart robots and connected devices that sense and respond to the real world.',
    days: '6 Days',
    price: '2,999',
    img: 'https://png.pngtree.com/thumb_back/fh260/background/20250830/pngtree-glowing-diode-sensor-digital-art-image_18692962.webp'
  },
  {
    id: '04',
    name: '3D Printing',
    desc: 'Design, slice, and fabricate real physical objects. Turn your imagination into something you can hold.',
    days: '6 Days',
    price: '2,499',
    img: 'data:image/jpeg;base64,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'
  },
  {
    id: '05',
    name: 'Electric Vehicle & Green Energy',
    desc: 'Explore EV systems, solar power, and sustainable infrastructure. Hands-on with the technology that will power the next generation of industry.',
    days: '6 Days',
    price: '2,499',
    img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&q=55'
  }
];

export default function Courses() {
  const navigate = useNavigate();
  return (
    <section id="courses" className="relative py-24 px-6 md:px-14">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent max-w-7xl mx-auto" />
      
      <motion.div 
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "0px 0px -28px 0px" }}
        className="flex items-baseline justify-between py-8 mx-auto max-w-7xl"
      >
          <h2 className="font-bebas text-[58px] tracking-[2px] text-cream flex items-baseline gap-3">
            Courses
          </h2>
      </motion.div>

      <div className="px-6 md:px-14 pb-24 mx-auto max-w-7xl">
        <div className="flex flex-col gap-12">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="bg-card border border-alpha-border rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[480px] md:min-h-[420px] lg:min-h-[480px] group interactive box-border"
            >
              {/* Left Side: Featured Image */}
              <div className="relative w-full md:w-[40%] lg:w-[45%] h-[240px] sm:h-[300px] md:h-auto overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 grayscale-[50%] sepia-[20%] group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-105"
                  style={{ backgroundImage: `url('${course.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40" />
              </div>

              {/* Right Side: Structured Content */}
              <div className="relative flex-1 p-8 sm:p-10 md:p-12 flex flex-col justify-center">
                {/* Top: Category Badge */}
                <div className="mb-8 md:mb-10">
                  <span className="font-condensed text-[10px] font-bold tracking-[3px] uppercase text-gold py-1.5 px-4 border border-gold/30 rounded-full inline-block">
                    {course.days} Duration
                  </span>
                </div>

                {/* Middle: Title & Description */}
                <h3 className="font-sync font-bold text-[clamp(24px,3vw,38px)] leading-[1.05] tracking-tighter text-cream mb-5 md:mb-7 group-hover:text-gold transition-colors duration-350 max-w-xl">
                  {course.name}
                </h3>
                <p className="text-[14px] md:text-[15px] font-light text-alpha-muted leading-relaxed mb-10 md:mb-12 max-w-lg">
                  {course.desc}
                </p>

                {/* Footer Actions: Price and CTA */}
                <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-8 sm:gap-12 border-t border-alpha-border pt-10 mt-auto">
                  <div className="flex flex-col">
                    <span className="font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/40 mb-1.5">Course Fee</span>
                    <span className="font-sync font-bold text-2xl md:text-3xl text-gold group-hover:text-gold-bright transition-colors flex items-baseline">
                      <span className="font-condensed font-normal text-lg mr-1.5 opacity-60">₹</span>{course.price}
                    </span>
                  </div>
                  
                  <div className="w-full sm:w-auto sm:ml-auto flex items-center justify-between sm:justify-end gap-8">
                    <span className="font-condensed text-[10px] font-bold tracking-[2.5px] uppercase text-red-500/50 animate-pulse">Limited Seats</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/register');
                      }}
                      className="bg-gold text-black font-condensed text-[11px] md:text-[12px] font-bold tracking-[2px] md:tracking-[3px] uppercase py-4 px-8 md:py-4.5 md:px-10 rounded-full transition-all hover:bg-gold-bright hover:-translate-y-1 hover:shadow-xl flex items-center gap-3"
                    >
                      Register <span className="hidden xs:inline">Free</span> <span className="text-lg">→</span>
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
