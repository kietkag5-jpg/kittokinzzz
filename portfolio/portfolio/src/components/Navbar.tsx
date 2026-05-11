import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-display font-bold tracking-tighter"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-gradient">ETHER</span>.
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {[
            { label: 'Trang chủ', href: '#home' },
            { label: 'Giới thiệu', href: '#about' },
            { label: 'Kỹ năng', href: '#skills' },
            { label: 'Dự án', href: '#projects' },
            { label: 'Liên hệ', href: '#contact' }
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}