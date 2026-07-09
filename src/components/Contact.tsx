import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, Phone, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const handleHireIntent = () => {
      const starterMessage = 'Hi Jyotika, I came across your portfolio and would like to discuss an internship or work opportunity with you.';

      setFormData((current) => ({
        ...current,
        message: current.message || starterMessage
      }));

      window.setTimeout(() => {
        messageRef.current?.focus();
      }, 700);
    };

    window.addEventListener('hire-me-intent', handleHireIntent);
    return () => window.removeEventListener('hire-me-intent', handleHireIntent);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to send transmission');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network transmission failed. Please retry.');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialChannels = [
    { name: 'Phone', url: 'tel:[Your Phone]', icon: <Phone size={14} />, desc: '[Your Phone]' },
    { name: 'Github', url: 'https://github.com/[Your Github]', icon: <Github size={14} />, desc: '@[Your Github]' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/[Your LinkedIn]/', icon: <Linkedin size={14} />, desc: '[Your LinkedIn]' },
    { name: 'Email', url: 'mailto:[Your Email]', icon: <Mail size={14} />, desc: '[Your Email]' }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#111820]/60 backdrop-blur-sm">
      {/* Decorative vertical grid lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.01] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.04] pb-10 mb-24">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase block mb-3">
              [ 05 // TRANSMISSION ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              LET'S <span className="text-white/40 italic font-light font-sans lowercase">[contact]</span>
            </h2>
          </div>
          
          <p className="text-xs font-mono tracking-widest text-white/30 uppercase mt-4 md:mt-0">
            SECURE PORT OVER HTTPS / SOCKETS
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Core Message & Luxury Social Links */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl text-white font-bold tracking-tight uppercase">
                Initiate a project, inquire about credentials, or schedule a call.
              </h3>
              <p className="text-sm text-white/50 leading-relaxed font-light font-sans max-w-md">
                Always open to collaborative internships, open-source challenges, and modular full-stack product building. Let's engineering something immersive.
              </p>
            </div>

            {/* Social List with premium slide-lines */}
            <div className="space-y-4 pt-6 border-t border-white/[0.04] max-w-sm">
              {socialChannels.map((chan, idx) => (
                <a
                  key={idx}
                  href={chan.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 border-b border-white/[0.02] group text-white transition-colors duration-500"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-white/40 group-hover:text-white transition-colors">{chan.icon}</span>
                    <span className="text-xs font-mono tracking-wider uppercase text-white/60 group-hover:text-white transition-colors">
                      {chan.name}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-white/30 group-hover:text-white transition-colors">
                    <span>{chan.desc}</span>
                    <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 md:p-12 border border-white/[0.04]">
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-20 flex flex-col items-center justify-center space-y-6"
                >
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center">
                    <CheckCircle size={28} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold tracking-tight text-white uppercase">Transmission Received</h4>
                    <p className="text-xs text-white/50 max-w-xs mx-auto leading-relaxed">
                      Thank you. Your message has been encrypted and piped to my inbox. I will reply within 24 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-10"
                >
                  {/* Floating-style clean inputs */}
                  <div className="space-y-1 relative">
                    <label className="text-[9px] font-mono tracking-widest text-white/30 uppercase block">
                      Sender Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-transparent border-b border-white/[0.08] focus:border-white transition-colors py-3 text-sm text-white focus:outline-none placeholder-white/10 font-sans"
                    />
                  </div>

                  <div className="space-y-1 relative">
                    <label className="text-[9px] font-mono tracking-widest text-white/30 uppercase block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full bg-transparent border-b border-white/[0.08] focus:border-white transition-colors py-3 text-sm text-white focus:outline-none placeholder-white/10 font-sans"
                    />
                  </div>

                  <div className="space-y-1 relative">
                    <label className="text-[9px] font-mono tracking-widest text-white/30 uppercase block">
                      Transmission Parameters
                    </label>
                    <textarea
                      ref={messageRef}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe the scope of the project or internship query..."
                      className="w-full bg-transparent border-b border-white/[0.08] focus:border-white transition-colors py-3 text-sm text-white focus:outline-none resize-none placeholder-white/10 font-sans leading-relaxed"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 text-xs font-mono uppercase bg-white text-black font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-[#eaeaea] transition-all disabled:opacity-50 active:scale-95 duration-500"
                  >
                    <span>{isSending ? "BROADCASTING TRANSMISSION..." : "SEND ENCRYPTED PACKET"}</span>
                    <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                </motion.form>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
