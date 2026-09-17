import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Globe, Monitor, ShoppingCart, TrendingUp, Video, Sparkles, Linkedin, Instagram, Facebook, ArrowRight, Star } from 'lucide-react';
import brandLogo from 'figma:asset/b608b050a459260299f492934f47f11e22594360.png';

const cardData = {
  company: 'Critic Tech',
  tagline: 'Innovating Digital Solutions',
  logo: brandLogo,
  services: [
    { 
      icon: Monitor, 
      title: 'Web Design', 
      desc: 'Beautiful & Responsive',
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-500/20'
    },
    { 
      icon: ShoppingCart, 
      title: 'E-commerce', 
      desc: 'Scalable Solutions',
      color: 'from-green-500 to-emerald-500',
      iconBg: 'bg-green-500/20'
    },
    { 
      icon: TrendingUp, 
      title: 'Digital Marketing & SEO', 
      desc: 'Grow Your Reach',
      color: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-500/20'
    },
    { 
      icon: Video, 
      title: 'Video & Logo Editing', 
      desc: 'Creative Content',
      color: 'from-orange-500 to-red-500',
      iconBg: 'bg-orange-500/20'
    },
    { 
      icon: Sparkles, 
      title: 'AI & Future Tech', 
      desc: 'Coming Soon',
      color: 'from-yellow-500 to-amber-500',
      iconBg: 'bg-yellow-500/20',
      badge: true
    },
  ],
  contact: {
    email: 'info@critictech.com',
    phone: '+91 98765 43210',
    location: 'Tamil Nadu, India',
    website: 'www.critictech.com',
  },
  social: [
    { icon: Linkedin, url: 'https://linkedin.com/company/critictech', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Instagram, url: 'https://instagram.com/critictech', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Facebook, url: 'https://facebook.com/critictech', label: 'Facebook', color: 'hover:bg-blue-700' },
    { icon: Globe, url: 'https://critictech.com', label: 'Website', color: 'hover:bg-purple-600' },
  ]
};

export function DigitalCard() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-10 w-full max-w-5xl">
      {/* Main Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-700/50"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="relative p-8 md:p-12">
          <AnimatePresence mode="wait">
            {activeSlide === 0 && <IntroSlide key="intro" data={cardData} />}
            {activeSlide === 1 && <ServicesSlide key="services" data={cardData} />}
            {activeSlide === 2 && <ContactSlide key="contact" data={cardData} />}
          </AnimatePresence>

          {/* Slide Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className="relative group"
              >
                {activeSlide === index ? (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-12 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-purple-500/50"
                  />
                ) : (
                  <div className="w-3 h-3 rounded-full bg-slate-600 group-hover:bg-slate-500 transition-colors" />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function IntroSlide({ data }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-12 items-center min-h-[500px]"
    >
      {/* Left Side - Logo & Branding */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="relative mb-8"
        >
          {/* Animated Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 -m-4"
          >
            <div className="w-full h-full border-2 border-dashed border-purple-500/30 rounded-full" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 -m-8"
          >
            <div className="w-full h-full border-2 border-dotted border-cyan-500/30 rounded-full" />
          </motion.div>

          {/* Logo */}
          <div className="relative w-40 h-40 bg-white rounded-2xl p-6 shadow-2xl">
            <img src={data.logo} alt={data.company} className="w-full h-full object-contain" />
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg"
          >
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-white" />
              <span className="text-sm">Premium</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 
            className="mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            {data.company}
          </h1>
          <p className="text-slate-300 text-xl mb-6">{data.tagline}</p>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30">
            <p className="text-slate-200">Your Digital Transformation Partner</p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { number: '100+', label: 'Projects Delivered' },
          { number: '50+', label: 'Happy Clients' },
          { number: '5+', label: 'Services' },
          { number: '24/7', label: 'Support' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all group"
          >
            <div className="text-4xl mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {stat.number}
            </div>
            <div className="text-slate-400 group-hover:text-slate-300 transition-colors">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ServicesSlide({ data }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="min-h-[500px]"
    >
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white mb-2"
        >
          Our Services
        </motion.h2>
        <p className="text-slate-400">Complete Digital Solutions for Your Business</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {data.services.map((service: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.03 }}
            className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all cursor-pointer overflow-hidden"
          >
            {/* Gradient Overlay on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
            
            <div className="relative flex items-start gap-4">
              {/* Icon */}
              <div className={`${service.iconBg} p-4 rounded-xl group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{ WebkitBackgroundClip: 'text' }}>
                    {service.title}
                  </h3>
                  {service.badge && (
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                      New
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm mb-3">{service.desc}</p>
                <div className="flex items-center gap-2 text-slate-500 group-hover:text-purple-400 transition-colors">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ContactSlide({ data }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="min-h-[500px]"
    >
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white mb-2"
        >
          Get In Touch
        </motion.h2>
        <p className="text-slate-400">Let's build something amazing together</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <motion.a
            href={`mailto:${data.contact.email}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all group"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-slate-400 text-sm">Email</div>
              <div className="text-white">{data.contact.email}</div>
            </div>
          </motion.a>

          <motion.a
            href={`tel:${data.contact.phone.replace(/\s/g, '')}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-all group"
          >
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
              <Phone className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-slate-400 text-sm">Phone</div>
              <div className="text-white">{data.contact.phone}</div>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50"
          >
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-slate-400 text-sm">Location</div>
              <div className="text-white">{data.contact.location}</div>
            </div>
          </motion.div>

          <motion.a
            href={`https://${data.contact.website}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-pink-500/50 transition-all group"
          >
            <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
              <Globe className="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <div className="text-slate-400 text-sm">Website</div>
              <div className="text-white">{data.contact.website}</div>
            </div>
          </motion.a>
        </div>

        {/* Social Media & CTA */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-slate-300 mb-4">Connect with us on social media</p>
            <div className="grid grid-cols-2 gap-3">
              {data.social.map((social: any, index: number) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 ${social.color} transition-all group`}
                >
                  <social.icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                  <span className="text-slate-300 group-hover:text-white transition-colors">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6"
          >
            <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-6 rounded-2xl text-center">
              <p className="text-white mb-3">Ready to start your project?</p>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 group">
                <span>Contact Us Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
