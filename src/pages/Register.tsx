import { motion } from 'motion/react';
import { ArrowLeft, Upload, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="min-h-screen bg-black text-cream selection:bg-gold/30 pt-32 pb-24 px-6 md:px-14">
      {/* Background HUD Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gold/5 lines-pattern" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link to="/" className="inline-flex items-center gap-2 font-condensed text-[12px] font-bold tracking-[2px] uppercase text-alpha-muted hover:text-gold transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Interface
          </Link>
          <h1 className="font-sync font-bold text-4xl md:text-5xl tracking-tighter text-cream mb-4 uppercase">Enrollment Phase: 2026</h1>
          <p className="font-condensed text-[12px] md:text-[14px] font-medium tracking-[2px] text-alpha-muted uppercase max-w-2xl">
            Complete the secure data integration form below. All fields are required for technical audit and verification.
          </p>
        </motion.div>

        <form className="space-y-16">
          {/* Section 1: Personal Details */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-gold" />
              <h2 className="font-sync font-bold text-xl tracking-tight text-gold uppercase">01. Student Personal Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="space-y-2">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">Full Name</label>
                <input type="text" placeholder="STUDENT NAME" className="w-full bg-transparent border-b border-alpha-border py-2 text-cream focus:border-gold outline-none transition-colors font-sync text-sm placeholder:text-alpha-muted2/30" />
              </div>
              <div className="space-y-2">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">Mobile No (WhatsApp)</label>
                <input type="tel" placeholder="+91 XXXX XXX XXX" className="w-full bg-transparent border-b border-alpha-border py-2 text-cream focus:border-gold outline-none transition-colors font-sync text-sm placeholder:text-alpha-muted2/30" />
              </div>
              <div className="space-y-2">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">Gender</label>
                <select className="w-full bg-transparent border-b border-alpha-border py-2 text-cream focus:border-gold outline-none transition-colors font-sync text-sm appearance-none cursor-pointer">
                  <option className="bg-black">SELECT GENDER</option>
                  <option className="bg-black">MALE</option>
                  <option className="bg-black">FEMALE</option>
                  <option className="bg-black">OTHER</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">Age</label>
                <input type="number" placeholder="YY" className="w-full bg-transparent border-b border-alpha-border py-2 text-cream focus:border-gold outline-none transition-colors font-sync text-sm placeholder:text-alpha-muted2/30" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">Email Address</label>
                <input type="email" placeholder="STUDENT@ALPHA.COM" className="w-full bg-transparent border-b border-alpha-border py-2 text-cream focus:border-gold outline-none transition-colors font-sync text-sm placeholder:text-alpha-muted2/30" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">Select Course</label>
                <select className="w-full bg-transparent border-b border-alpha-border py-2 text-cream focus:border-gold outline-none transition-colors font-sync text-sm appearance-none cursor-pointer">
                  <option className="bg-black">SELECT PROJECT / COURSE</option>
                  <option className="bg-black">PROJECT AI‑GNITE (10 DAYS)</option>
                  <option className="bg-black">DRONE TECHNOLOGIES (6 DAYS)</option>
                  <option className="bg-black">ROBOTICS & IOT (6 DAYS)</option>
                  <option className="bg-black">3D PRINTING (6 DAYS)</option>
                  <option className="bg-black">ELECTRIC VEHICLE & GREEN ENERGY (6 DAYS)</option>
                </select>
              </div>
            </div>
          </section>

          {/* Section 2: Guardian Details */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-gold" />
              <h2 className="font-sync font-bold text-xl tracking-tight text-gold uppercase">02. Parent / Guardian Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="space-y-2 md:col-span-2">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">Father's / Mother's / Guardian Name</label>
                <input type="text" placeholder="GUARDIAN FULL NAME" className="w-full bg-transparent border-b border-alpha-border py-2 text-cream focus:border-gold outline-none transition-colors font-sync text-sm placeholder:text-alpha-muted2/30" />
              </div>
              <div className="space-y-2">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">Guardian Mobile No</label>
                <input type="tel" placeholder="+91 XXXX XXX XXX" className="w-full bg-transparent border-b border-alpha-border py-2 text-cream focus:border-gold outline-none transition-colors font-sync text-sm placeholder:text-alpha-muted2/30" />
              </div>
              <div className="space-y-2">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">Guardian Email ID</label>
                <input type="email" placeholder="GUARDIAN@ALPHA.COM" className="w-full bg-transparent border-b border-alpha-border py-2 text-cream focus:border-gold outline-none transition-colors font-sync text-sm placeholder:text-alpha-muted2/30" />
              </div>
            </div>
          </section>

          {/* Section 3: Academic Details */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-gold" />
              <h2 className="font-sync font-bold text-xl tracking-tight text-gold uppercase">03. School & Academic Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="space-y-2 md:col-span-2">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">School Name</label>
                <input type="text" placeholder="INSTITUTION ALPHA" className="w-full bg-transparent border-b border-alpha-border py-2 text-cream focus:border-gold outline-none transition-colors font-sync text-sm placeholder:text-alpha-muted2/30" />
              </div>
              <div className="space-y-2">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">Standard (Upcoming)</label>
                <select className="w-full bg-transparent border-b border-alpha-border py-2 text-cream focus:border-gold outline-none transition-colors font-sync text-sm appearance-none cursor-pointer uppercase">
                  <option className="bg-black">SELECT STANDARD</option>
                  <option className="bg-black">8 TH</option>
                  <option className="bg-black">9 TH</option>
                  <option className="bg-black">10 TH</option>
                  <option className="bg-black">11 TH</option>
                  <option className="bg-black">12 TH</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">Aadhar Number</label>
                <input type="text" placeholder="XXXX XXXX XXXX" className="w-full bg-transparent border-b border-alpha-border py-2 text-cream focus:border-gold outline-none transition-colors font-sync text-sm placeholder:text-alpha-muted2/30" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">Permanent Address</label>
                <textarea rows={3} placeholder="STREET, AREA, PIN" className="w-full bg-transparent border border-alpha-border/30 rounded-xl p-4 text-cream focus:border-gold outline-none transition-colors font-sync text-sm placeholder:text-alpha-muted2/30 resize-none" />
              </div>
              <div className="space-y-2">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">Place / City</label>
                <input type="text" placeholder="LOCATION" className="w-full bg-transparent border-b border-alpha-border py-2 text-cream focus:border-gold outline-none transition-colors font-sync text-sm placeholder:text-alpha-muted2/30" />
              </div>
            </div>
          </section>

          {/* Section 4: Logistics & Documentation */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-gold" />
              <h2 className="font-sync font-bold text-xl tracking-tight text-gold uppercase">04. Logistics & Documentation</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              <div className="space-y-4">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">ID Card Upload</label>
                <label className="border-2 border-dashed border-alpha-border/50 rounded-2xl p-8 flex flex-col items-center gap-4 hover:border-gold transition-colors cursor-pointer group">
                  <Upload className="text-alpha-muted group-hover:text-gold transition-colors" size={32} />
                  <span className="font-condensed text-[10px] font-bold tracking-[2px] uppercase text-alpha-muted">Click to upload JPG/PDF</span>
                  <input type="file" className="hidden" />
                </label>
              </div>
              <div className="space-y-4">
                <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">Bus Stop Selection</label>
                <div className="space-y-3">
                  {['TMHNU Office', 'New Bus Stand'].map(stop => (
                    <label key={stop} className="flex items-center gap-4 p-4 border border-alpha-border/50 rounded-xl cursor-pointer hover:border-gold transition-all group">
                      <input type="radio" name="busStop" className="w-4 h-4 accent-gold" />
                      <span className="font-sync text-sm text-cream group-hover:text-gold transition-colors">{stop}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Payment Information */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-gold" />
              <h2 className="font-sync font-bold text-xl tracking-tight text-gold uppercase">05. Payment Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 bg-white/[0.02] p-8 rounded-3xl border border-alpha-border/50">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold/60">Transaction / UTR Number</label>
                  <input type="text" placeholder="TXN ID" className="w-full bg-transparent border-b border-alpha-border py-2 text-cream focus:border-gold outline-none transition-colors font-sync text-sm placeholder:text-alpha-muted2/30" />
                </div>
                <div className="p-4 bg-gold/5 rounded-xl border border-gold/20">
                  <p className="font-condensed text-[10px] font-light leading-relaxed text-alpha-muted italic">
                    Scan the code to complete registration. Ensure the transaction number matches after payment to verify your seat.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-6 border border-alpha-border bg-black rounded-2xl gap-4">
                <div className="w-48 h-48 bg-cream border-4 border-gold/20 rounded-xl flex items-center justify-center p-2">
                  {/* Generic QR placeholder or Image */}
                  <div className="w-full h-full border-2 border-black/10 border-dashed rounded flex flex-col items-center justify-center text-black">
                     <QrCode size={64} className="opacity-20 mb-2" />
                     <span className="font-condensed text-[8px] font-bold tracking-[2px] uppercase opacity-40">Payment Code</span>
                  </div>
                </div>
                <span className="font-condensed text-[10px] font-bold tracking-[2px] uppercase text-gold">Project Alpha UPI</span>
              </div>
            </div>
          </section>

          <div className="pt-12">
            <button
              type="submit"
              className="w-full bg-gold text-black font-sync font-bold text-lg py-6 rounded-2xl hover:bg-gold-bright transition-all hover:scale-[1.01] hover:shadow-2xl hover:shadow-gold/20 flex items-center justify-center gap-4 uppercase"
            >
              Verify & Submit Application
              <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
