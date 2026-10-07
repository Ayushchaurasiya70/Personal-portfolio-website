import React from 'react';
import { motion } from 'framer-motion';

const price = [
    {
        "head": "Basic",
        "actualPrice": "$100",
        "packageService1": "1 Page Basic Landing Page",
        "packageService2": "Responsive Design",
        "packageService3": "Basic SEO Optimization",
        "packageService4": "3 Days Delivery Time"
    },
    {
        "head": "Standard",
        "actualPrice": "$250",
        "packageService1": "Multi-page Website (upto 5 pages)",
        "packageService2": "Advanced Responsive Design",
        "packageService3": "Standard SEO & Speed Optimization",
        "packageService4": "5 Days Delivery Time",
        "popular": true
    },
    {
        "head": "Premium",
        "actualPrice": "$500",
        "packageService1": "Custom Full-Stack Web App / E-commerce",
        "packageService2": "UI/UX Design Included",
        "packageService3": "Advanced SEO & Analytics Integration",
        "packageService4": "Priority Support & 10 Days Delivery"
    }
];

const Prices = () => {
  return (
    <section id='prices' className='min-h-screen w-full bg-black py-20 px-6 md:px-12 relative overflow-hidden flex flex-col justify-center'>
      
      {/* Background Subtle Glow Elements */}
      <div className='absolute top-1/4 left-10 w-72 h-72 bg-yellow-600/10 rounded-full blur-[120px] pointer-events-none'></div>
      <div className='absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none'></div>

      {/* Section Heading */}
      <div className='text-center max-w-2xl mx-auto mb-16'>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-yellow-400 font-medium tracking-widest uppercase text-sm mb-2'
        >
          Investment
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-4xl md:text-6xl font-extrabold tracking-tight text-white'
        >
          Choose Your <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500'>Plan.</span>
        </motion.h1>
      </div>

      {/* Pricing Cards Grid */}
      <div className='max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch'>
        {price.map((cost, index) => {
            const isPopular = cost.popular;
            return (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className={`relative rounded-2xl p-8 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 ${
                        isPopular 
                            ? 'bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border-2 border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.15)] md:-translate-y-4' 
                            : 'bg-neutral-900/40 border border-neutral-800 hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.1)]'
                    }`}
                >
                    {/* Popular Badge */}
                    {isPopular && (
                        <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg'>
                            Most Popular
                        </div>
                    )}

                    <div>
                        {/* Plan Header */}
                        <div className='flex justify-between items-center mb-4'>
                            <h3 className='text-2xl font-bold text-white tracking-wide'>{cost.head}</h3>
                        </div>

                        {/* Price */}
                        <div className='mb-6 pb-6 border-b border-neutral-800'>
                            <span className='text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500'>
                                {cost.actualPrice}
                            </span>
                            <span className='text-neutral-400 text-sm ml-2'>/ project</span>
                        </div>

                        {/* Services List */}
                        <ul className='space-y-4 mb-8'>
                            <li className='flex items-center text-neutral-300 text-sm md:text-base'>
                                <span className='text-yellow-400 mr-3 font-bold'>✓</span> {cost.packageService1}
                            </li>
                            <li className='flex items-center text-neutral-300 text-sm md:text-base'>
                                <span className='text-yellow-400 mr-3 font-bold'>✓</span> {cost.packageService2}
                            </li>
                            <li className='flex items-center text-neutral-300 text-sm md:text-base'>
                                <span className='text-yellow-400 mr-3 font-bold'>✓</span> {cost.packageService3}
                            </li>
                            <li className='flex items-center text-neutral-300 text-sm md:text-base'>
                                <span className='text-yellow-400 mr-3 font-bold'>✓</span> {cost.packageService4}
                            </li>
                        </ul>
                    </div>

                    {/* Action Button linked to Contact Section */}
                    <a href="#contact" className="w-full">
                        <motion.button 
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.02 }}
                            className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg cursor-pointer ${
                                isPopular 
                                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:shadow-yellow-500/25 hover:brightness-110' 
                                    : 'bg-neutral-800 text-white hover:bg-yellow-400 hover:text-black hover:shadow-yellow-400/20'
                            }`}
                        >
                            Get Started
                        </motion.button>
                    </a>
                </motion.div>
            );
        })}
      </div>
    </section>
  );
}

export default Prices;