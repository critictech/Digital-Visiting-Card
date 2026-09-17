import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Globe, Monitor, ShoppingCart, TrendingUp, Video, Sparkles, Zap, QrCode } from 'lucide-react';
import brandLogo from 'figma:asset/b608b050a459260299f492934f47f11e22594360.png';

const slides = [
  {
    id: 1,
    type: 'brand',
    company: 'Critic Tech',
    tagline: 'Innovating Digital Solutions',
    description: 'Your Complete Digital Transformation Partner',
  },
  {
    id: 2,
    type: 'services',
    title: 'Our Services',
    services: [
      { icon: Monitor, name: 'Web Design', description: 'Modern & Responsive', color: 'from-cyan-400 to-cyan-600' },
      { icon: ShoppingCart, name: 'E-commerce', description: 'Scalable Solutions', color: 'from-emerald-400 to-emerald-600' },
      { icon: TrendingUp, name: 'Digital Marketing & SEO', description: 'Grow Your Business', color: 'from-violet-400 to-violet-600' },
      { icon: Video, name: 'Video & Logo Editing', description: 'Creative Content', color: 'from-rose-400 to-rose-600' },
      { icon: Sparkles, name: 'AI & Future Tech', description: 'Coming Soon', color: 'from-amber-400 to-amber-600' },
    ],
  },
  {
    id: 3,
    type: 'contact',
    title: 'Let\'s Connect',
    contacts: [
      { icon: Mail, label: 'Email', value: 'info@critictech.com', href: 'mailto:info@critictech.com', gradient: 'from-blue-400 to-blue-600' },
      { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210', gradient: 'from-green-400 to-green-600' },
      { icon: MapPin, label: 'Location', value: 'Tamil Nadu, India', href: '#', gradient: 'from-purple-400 to-purple-600' },
      { icon: Globe, label: 'Website', value: 'www.critictech.com', href: 'https://critictech.com', gradient: 'from-pink-400 to-pink-600' },
    ],
    socials: [
      { icon: Linkedin, label: 'LinkedIn', url: 'linkedin.com/company/critictech' },
      { icon: Instagram, label: 'Instagram', url: 'instagram.com/critictech' },
      { icon: Facebook, label: 'Facebook', url: 'facebook.com/critictech' },
      { icon: Globe, label: 'Website', url: 'critictech.com' },
    ],
  },
];

export function AnimatedCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      const next = prev + newDirection;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  };

  // Auto advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="w-full max-w-lg">
      {/* Main Card Container */}
      <div className="relative">
        {/* Glowing Background Effect */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-50"
        />

        {/* Card */}
        <div className="relative bg-slate-900/90 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50">
          {/* Top Accent Bar */}
          <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

          {/* Slide Container */}
          <div className="relative h-[550px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  rotateY: { duration: 0.6, ease: 'easeInOut' },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                className="absolute inset-0 p-8"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {currentSlideData.type === 'brand' && (
                  <BrandSlide data={currentSlideData} />
                )}
                {currentSlideData.type === 'services' && (
                  <ServicesSlide data={currentSlideData} />
                )}
                {currentSlideData.type === 'contact' && (
                  <ContactSlide data={currentSlideData} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="relative bg-slate-800/50 backdrop-blur-sm border-t border-slate-700/50 p-4">
            <div className="flex items-center justify-center">
              {/* Slide Indicators */}
              <div className="flex gap-2">
                {slides.map((slide, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentSlide ? 1 : -1);
                      setCurrentSlide(index);
                    }}
                    whileHover={{ scale: 1.2 }}
                    className="relative"
                  >
                    {index === currentSlide ? (
                      <motion.div
                        layoutId="activeSlide"
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50"
                      >
                        <span className="text-white">{index + 1}</span>
                      </motion.div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center border border-slate-600">
                        <span className="text-slate-400">{index + 1}</span>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandSlide({ data }: any) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white">
      {/* Logo Container */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          scale: { type: 'spring', stiffness: 200, damping: 15 },
          rotate: { duration: 1, ease: 'easeOut' }
        }}
        className="relative mb-8"
      >
        {/* Outer Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 w-48 h-48 flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 border-dashed" />
        </motion.div>

        {/* Brand Logo */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 20px rgba(6, 182, 212, 0.5)',
              '0 0 40px rgba(99, 102, 241, 0.5)',
              '0 0 20px rgba(6, 182, 212, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative w-48 h-48 bg-white rounded-3xl flex items-center justify-center p-6 shadow-2xl"
        >
          <img 
            src={brandLogo} 
            alt="Critic Tech Logo" 
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Company Name with Glitch Effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-6"
      >
        <motion.h1
          animate={{
            textShadow: [
              '0 0 10px rgba(6, 182, 212, 0.8)',
              '0 0 20px rgba(99, 102, 241, 0.8)',
              '0 0 10px rgba(6, 182, 212, 0.8)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white mb-3 tracking-wider"
          style={{
            background: 'linear-gradient(to right, #06b6d4, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {data.company}
        </motion.h1>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mb-4"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-cyan-400"
        >
          {data.tagline}
        </motion.p>
      </motion.div>

      {/* Description Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="relative px-6 py-4 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 backdrop-blur-sm"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl" />
        <p className="relative text-slate-300 text-center">{data.description}</p>
      </motion.div>

      {/* Animated Particles */}
      <div className="mt-8 flex gap-4">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
          />
        ))}
      </div>
    </div>
  );
}

function ServicesSlide({ data }: any) {
  return (
    <div className="h-full flex flex-col text-white pt-2">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h2 className="text-white mb-2">{data.title}</h2>
        <div className="h-1 w-20 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
      </motion.div>

      <div className="flex-1 space-y-4 overflow-y-auto pr-2">
        {data.services.map((service: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ 
              delay: index * 0.15,
              type: 'spring',
              stiffness: 150,
              damping: 12
            }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="relative group cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Gradient Border Effect */}
            <div className={`absolute -inset-[1px] bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <service.icon className="w-full h-full" />
              </div>
              
              {/* Content */}
              <div className="relative flex items-start gap-4">
                {/* Icon Circle with Gradient */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 shadow-xl`}
                >
                  <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                
                {/* Text Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-white mb-1.5">{service.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Arrow Indicator */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="flex-shrink-0 self-center"
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Bottom Accent Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} origin-left`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ContactSlide({ data }: any) {
  return (
    <div className="h-full flex flex-col text-white pt-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-5"
      >
        <h2 className="text-white mb-2">{data.title}</h2>
        <div className="h-1 w-20 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
      </motion.div>

      {/* QR Code with Modern Design */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="mx-auto mb-5"
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-md opacity-75" />
          <div className="relative w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
            <QrCode className="w-20 h-20 text-slate-900" />
          </div>
        </div>
        <p className="text-center text-cyan-400 text-xs mt-2">Scan to connect</p>
      </motion.div>

      {/* Contact Cards - Redesigned */}
      <div className="space-y-2.5 mb-5">
        {data.contacts.map((contact: any, index: number) => (
          <motion.a
            key={index}
            href={contact.href}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="block relative group"
          >
            {/* Gradient Border */}
            <div className={`absolute -inset-[1px] bg-gradient-to-r ${contact.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
            
            {/* Card Content */}
            <div className="relative bg-slate-800 rounded-xl p-3 flex items-center gap-3">
              {/* Icon with Gradient Background */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`w-11 h-11 rounded-lg bg-gradient-to-br ${contact.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
              >
                <contact.icon className="w-5 h-5 text-white" />
              </motion.div>
              
              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-slate-400 text-xs mb-0.5">{contact.label}</p>
                <p className="text-white text-sm truncate">{contact.value}</p>
              </div>

              {/* Chevron */}
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="opacity-0 group-hover:opacity-100 transition-all"
              >
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </motion.div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Social Media - Circular Design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative"
      >
        <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur-sm opacity-50" />
        <div className="relative bg-slate-800 rounded-2xl p-4">
          <p className="text-center text-slate-300 text-sm mb-3">Follow Us</p>
          <div className="flex justify-center gap-3">
            {data.socials.map((social: any, index: number) => (
              <motion.a
                key={index}
                href={`https://${social.url}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.3, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <social.icon className="w-5 h-5 text-white" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
