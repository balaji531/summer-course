import { Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-alpha-border bg-black/40 backdrop-blur-sm pt-20 pb-12 mt-24">
      <div className="mx-6 md:mx-14 max-w-7xl md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Branding Column */}
        <div className="space-y-6">
          <div className="font-bebas text-[28px] tracking-[6px] text-cream flex items-center gap-4 transition-opacity hover:opacity-80">
            <div className="grid grid-cols-2 gap-[3px] w-[22px]">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-[9px] h-[9px] relative overflow-hidden bg-gradient-to-br from-[#3a2a10] to-[#5a4020] border-[0.5px] border-gold/30">
                  <div className={`absolute w-[3px] h-[3px] bg-black ${
                    i === 1 ? 'bottom-0 right-0' : i === 2 ? 'bottom-0 left-0' : i === 3 ? 'top-0 right-0' : 'top-0 left-0'
                  }`} />
                </div>
              ))}
            </div>
            NSCET
          </div>
          <p className="font-condensed text-[12px] leading-relaxed tracking-wider text-alpha-muted uppercase max-w-[280px]">
            Empowering the next generation of engineers with cutting-edge technical skills and industry-ready certification programs.
          </p>
          <div className="flex items-center gap-4 pt-2">
            {[
              { Icon: Instagram, href: "https://instagram.com/nscet_theni" },
              { Icon: Linkedin, href: "https://linkedin.com/school/nscet" },
              { Icon: Youtube, href: "https://youtube.com/@nscet" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-gold/10 flex items-center justify-center text-gold/40 hover:text-gold hover:border-gold/40 transition-all bg-white/[0.02]"
              >
                <social.Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="font-sync font-bold text-[11px] tracking-[3px] uppercase text-gold/60">Information</h4>
          <ul className="space-y-3">
            {['Home', 'Courses', 'Eligibility', 'Contact'].map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase()}`} 
                  className="font-condensed text-[13px] tracking-wider text-alpha-muted hover:text-gold transition-colors uppercase"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div className="space-y-6 lg:col-span-2">
          <h4 className="font-sync font-bold text-[11px] tracking-[3px] uppercase text-gold/60">Mission Control</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <span className="font-condensed text-[13px] tracking-wider text-alpha-muted uppercase leading-relaxed">
                  Vadapudupatti, Annanji (PO),<br />
                  Theni – 625 531.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:nscet@gmail.com" className="font-condensed text-[13px] tracking-wider text-alpha-muted uppercase hover:text-gold transition-colors">
                  nscet@gmail.com
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <span className="font-condensed text-[13px] tracking-wider text-alpha-muted uppercase">
                  +91 94437 20000
                </span>
              </div>
              <div className="pt-2">
                 <div className="w-12 h-[1px] bg-gold/30 mb-2" />
                 <span className="font-condensed text-[9px] font-bold tracking-[2px] uppercase text-gold/40 italic">Code: TN_ACADEMY_SEC_01</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mx-6 md:mx-14 max-w-7xl md:mx-auto mt-20 pt-8 border-t border-gold/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-[10px] font-condensed font-medium text-alpha-muted opacity-40 tracking-[2px] uppercase text-center sm:text-left">
          © 2026 NEXT GEN Academy presents Summer Certification Courses. ALL SYSTEMS ACTIVE.
        </div>
        <div className="text-[9px] font-sync font-bold text-gold/20 tracking-[4px] uppercase whitespace-nowrap">
          NSCET ORIGINAL PROTOCOL
        </div>
      </div>
    </footer>
  );
}
