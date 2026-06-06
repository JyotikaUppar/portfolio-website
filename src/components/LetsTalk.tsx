import React, { useState, useEffect } from 'react';
import { Phone, X, MessageCircle, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LetsTalk = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show floating button after scrolling a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phone = '+91 93247 81880';
  const phoneHref = 'tel:+919324781880';
  const whatsappHref = 'https://wa.me/919324781880?text=Hi%20Jyotika%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!';

  return (
    <>
      {/* Floating "Let's Talk" Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4"
          >
            {/* Expanded Popup Panel */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#0b1224] border border-[rgba(120,160,255,0.12)] rounded-3xl p-6 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.65)] backdrop-blur-2xl w-72"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.04]">
                    <div>
                      <span className="text-[9px] font-mono tracking-[0.25em] text-white/30 uppercase block">INITIATE CONTACT</span>
                      <h4 className="text-white font-bold tracking-tight text-base mt-0.5 uppercase">Let's Talk</h4>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_#10b981]" />
                      <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider">Online</span>
                    </div>
                  </div>

                  {/* Identity block */}
                  <div className="flex items-center gap-3 mb-5 p-3 bg-white/[0.02] rounded-2xl border border-white/[0.04]">
                    <div className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      JU
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">Jyotika Uppar</p>
                      <p className="text-white/40 text-[10px] font-mono">BSc IT Engineer · Full-Stack</p>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="mb-4 px-1">
                    <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase block mb-1.5">
                      DIRECT LINE
                    </span>
                    <a
                      href={phoneHref}
                      className="text-white font-bold text-xl tracking-tight hover:text-white/80 transition-colors block"
                    >
                      {phone}
                    </a>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3 mt-5">
                    <a
                      href={phoneHref}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black text-xs font-mono uppercase font-semibold rounded-full hover:bg-neutral-100 transition-colors active:scale-95 duration-300"
                    >
                      <Phone size={13} />
                      <span>Call Now</span>
                    </a>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 border border-white/[0.08] text-white text-xs font-mono uppercase rounded-full hover:bg-white/[0.05] hover:border-white/20 transition-all active:scale-95 duration-300"
                    >
                      <MessageCircle size={13} />
                      <span>WhatsApp</span>
                      <ArrowUpRight size={11} className="opacity-50" />
                    </a>
                  </div>

                  <p className="text-[9px] font-mono text-white/20 text-center uppercase tracking-wider mt-4">
                    Mumbai, India · UTC +5:30
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main floating trigger button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center gap-2.5 px-5 py-3.5 rounded-full text-xs font-mono uppercase font-semibold shadow-[0_20px_60px_-8px_rgba(0,0,0,0.8)] transition-all duration-500 ${
                isOpen
                  ? 'bg-[#0b1224] border border-[rgba(120,160,255,0.12)] text-[#f0f4ff]'
                  : 'bg-white text-black border border-transparent hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]'
              }`}
            >
              {/* Pulsing online indicator */}
              {!isOpen && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981] animate-pulse flex-shrink-0" />
              )}

              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {isOpen ? <X size={14} /> : <Phone size={14} />}
              </motion.div>

              <span>{isOpen ? 'Close' : "Let's Talk"}</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LetsTalk;
