import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }
    
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. Sneha will get back to you soon.' 
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute bottom-10 right-1/10 w-96 h-96 glow-purple pointer-events-none z-0" />
      <div className="absolute top-10 left-1/10 w-96 h-96 glow-blue pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 text-base md:text-lg">
            Have a question, proposal, or want to discuss a software engineering opportunity? Drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address & Direct info card */}
            <div className="glass-card p-8 rounded-2xl border border-slate-700/30 flex-grow">
              <h3 className="text-xl font-bold text-white mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4.5">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shadow-md">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-medium uppercase tracking-wider">Email Me</span>
                    <a href="mailto:snehayadav92456@gmail.com" className="text-base text-white hover:text-indigo-400 transition-colors">
                      snehayadav92456@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4.5">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shadow-md">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-medium uppercase tracking-wider">Location</span>
                    <span className="text-base text-white">
                      Mathura, Uttar Pradesh, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-12 pt-8 border-t border-slate-900">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
                  Connect on Socials
                </h4>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/sneha738"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-navy-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-650 hover:bg-slate-850 hover:scale-105 transition-all duration-300"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5 animate-pulse-subtle" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sneha-yad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-navy-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-650 hover:bg-slate-850 hover:scale-105 transition-all duration-300"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Premium Note */}
            <div className="glass-card p-6.5 rounded-2xl border border-slate-800/80 bg-gradient-to-r from-blue-500/10 to-purple-500/5 text-slate-300 text-sm leading-relaxed font-light">
              🚀 Always looking to build beautiful, scalable software. Let's construct something impact-focused!
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 rounded-2xl border border-slate-700/30 h-full relative overflow-hidden">
              
              {status.type === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center h-full py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-slate-350 max-w-md font-light leading-relaxed">
                    {status.message}
                  </p>
                  <button
                    onClick={() => setStatus({ type: '', message: '' })}
                    className="mt-8 px-6 py-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors font-medium text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Send a Message
                  </h3>
                  
                  {status.type === 'error' && (
                    <div className="p-4.5 rounded-xl bg-red-500/15 border border-red-500/25 text-red-400 text-sm font-medium">
                      {status.message}
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-navy-900/60 border border-slate-800/80 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white rounded-xl px-4 py-3.5 outline-none placeholder:text-slate-600 transition-all font-light"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. johndoe@company.com"
                      className="w-full bg-navy-900/60 border border-slate-800/80 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white rounded-xl px-4 py-3.5 outline-none placeholder:text-slate-600 transition-all font-light"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Write your message details..."
                      className="w-full bg-navy-900/60 border border-slate-800/80 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white rounded-xl px-4 py-3.5 outline-none placeholder:text-slate-600 transition-all font-light resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-indigo-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
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
