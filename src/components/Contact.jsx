import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "7007587268";
    
    // Message format jo WhatsApp par jayega
    const text = `Hello Ayush! My name is ${formData.name}.\nMy Email: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    // URL encode karna zaroori hai taaki spaces aur special characters properly pass ho sakein
    const encodedText = encodeURIComponent(text);
    
    // WhatsApp URL redirect
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id='contact' className='min-h-screen w-full bg-black py-20 px-6 md:px-12 relative overflow-hidden flex flex-col justify-center items-center'>
      
      {/* Background Subtle Glow Elements */}
      <div className='absolute top-1/3 right-10 w-80 h-80 bg-yellow-600/10 rounded-full blur-[130px] pointer-events-none'></div>
      <div className='absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none'></div>

      {/* Section Heading */}
      <div className='text-center max-w-2xl mx-auto mb-12 z-10'>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-yellow-400 font-medium tracking-widest uppercase text-sm mb-2'
        >
          Get In Touch
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-4xl md:text-6xl font-extrabold tracking-tight text-white'
        >
          Let's Work <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500'>Together.</span>
        </motion.h1>
      </div>

      {/* Contact Form Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='w-full max-w-2xl bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-2xl p-8 md:p-10 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative z-10 hover:border-yellow-500/40 transition-all duration-300'
      >
        <form onSubmit={handleWhatsAppSubmit} className='space-y-6'>
          
          {/* Name Field */}
          <div>
            <label className='block text-neutral-300 text-sm font-medium mb-2'>Your Name</label>
            <input 
              type='text' 
              name='name'
              required
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your name'
              className='w-full bg-neutral-950/60 border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-400 transition-colors'
            />
          </div>

          {/* Email Field */}
          <div>
            <label className='block text-neutral-300 text-sm font-medium mb-2'>Your Email</label>
            <input 
              type='email' 
              name='email'
              required
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='w-full bg-neutral-950/60 border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-400 transition-colors'
            />
          </div>

          {/* Message Field */}
          <div>
            <label className='block text-neutral-300 text-sm font-medium mb-2'>Your Message / Project Details</label>
            <textarea 
              name='message'
              rows='4'
              required
              value={formData.message}
              onChange={handleChange}
              placeholder='Tell me about your project or inquiry...'
              className='w-full bg-neutral-950/60 border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none'
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button 
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.01 }}
            type='submit'
            className='w-full py-4 rounded-xl font-bold text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2'
          >
            <span>Send Message on WhatsApp</span>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </motion.button>

        </form>
      </motion.div>
    </section>
  );
};

export default Contact;