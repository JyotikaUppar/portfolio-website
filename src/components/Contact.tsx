import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, ExternalLink, Briefcase } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
        }, 3000);
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Let's <span className="text-gradient">Connect</span>
              </h2>
              
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 mb-8">
                <Briefcase size={18} />
                <span className="text-sm font-semibold uppercase tracking-wider">Open to internships and opportunities</span>
              </div>

              <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                Whether you have a specific project in mind or just want to say hi, I'm always open to discussing new ideas and collaborations.
              </p>

              <div className="space-y-6 mb-12">
                <a 
                  href="mailto:jayauppar2@gmail.com" 
                  className="flex items-center space-x-6 p-6 glass-card rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group"
                >
                  <div className="p-4 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-1">Email Me</div>
                    <div className="text-white font-medium">jayauppar2@gmail.com</div>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-6">
                  <a 
                    href="https://github.com/JyotikaUppar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col p-6 glass-card rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group"
                  >
                    <Github className="text-slate-400 group-hover:text-white mb-4 transition-colors" size={28} />
                    <span className="text-white font-bold mb-1">GitHub</span>
                    <span className="text-xs text-slate-500 flex items-center">
                      Explore repos <ExternalLink size={12} className="ml-1" />
                    </span>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/jyotika-u/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col p-6 glass-card rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group"
                  >
                    <Linkedin className="text-slate-400 group-hover:text-blue-400 mb-4 transition-colors" size={28} />
                    <span className="text-white font-bold mb-1">LinkedIn</span>
                    <span className="text-xs text-slate-500 flex items-center">
                      Let's network <ExternalLink size={12} className="ml-1" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative">
              {isSubmitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-slate-400">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="I'd love to chat about..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-5 text-lg flex items-center justify-center space-x-3 group"
                  >
                    <span>Send Transmission</span>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;