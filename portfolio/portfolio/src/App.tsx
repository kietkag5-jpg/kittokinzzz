/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import Avatar from './components/Avatar';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, select, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-secondary/30 mesh-gradient overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-primary z-[9999] pointer-events-none hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-brand-secondary rounded-full z-[9999] pointer-events-none hidden md:block"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.2 }}
      />

      <Navbar />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <div id="about" className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 border-t border-white/5">
              <div className="flex flex-col items-center md:items-start space-y-8">
                <Avatar
                  size="xl"
                  showGlow={true}
                  className="mx-auto md:mx-0"
                  src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/583482867_1348521423429910_7073331310559896751_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeGnMRDGC2uWozPLwZoPfpOloZoJrGYcnm6hmgmsZhyeblIvgvqrsaotC7oBTO9QryoQGjC2r_zsS82Mzw6ioGuP&_nc_ohc=Yg0qDwrm36UQ7kNvwHOzMsa&_nc_oc=Ado4NSgqEGq9_lWTDPyxXTb94t4sUFpAxdgSbMeYTfuNuA_ofpx5Vw3Pkc6l0j2JSEw&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=4KT-VqRCZ2e4LC3CPuabJQ&_nc_ss=7b2a8&oh=00_Af59quXsLr9IvDbOpM1uwctoArrYuvIaE-BuVAi53f5jQg&oe=6A076389"
                />
                <div>
                  <h2 className="text-[10px] uppercase tracking-[0.4em] text-text-secondary font-bold mb-6">Giới thiệu</h2>
                  <h3 className="text-[60px] md:text-[80px] font-sans font-extrabold mb-8 leading-[0.9] tracking-tighter">
                    NGHỆ THUẬT CỦA <br /><span className="italic font-display font-black text-brand-secondary underline decoration-brand-accent/30 underline-offset-8">CODE</span>
                  </h3>
                </div>
              </div>
              <div className="space-y-6 text-text-secondary leading-relaxed font-semibold uppercase tracking-wider text-xs">
                <motion.p
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Với nền tảng về cả kỹ thuật và thiết kế thẩm mỹ, tôi kết nối khoảng cách 
                  giữa logic backend phức tạp và giao diện frontend hoàn hảo.
                </motion.p>
                <motion.p
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  Tôi tin rằng phần mềm không chỉ hoạt động hoàn hảo mà còn gợi lên phản ứng cảm xúc. 
                  Phong cách của tôi kết hợp độ chính xác kỹ thuật với sự sáng tạo—nhấn mạnh glassmorphism, 
                  chuyển động và kể chuyện kỹ thuật số sống động.
                </motion.p>
                <div className="flex space-x-12 pt-8">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="text-3xl font-display font-bold text-white">40+</div>
                    <div className="text-xs uppercase tracking-widest font-bold text-brand-secondary">Dự án đã hoàn thành</div>
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="text-3xl font-display font-bold text-white">12</div>
                    <div className="text-xs uppercase tracking-widest font-bold text-brand-secondary">Giải thưởng thiết kế</div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            <Skills />
            <Projects />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center space-y-6 mb-8">
            <Avatar size="lg" showGlow={true} />
            <div className="text-xl font-display font-bold tracking-tighter">
              <span className="text-gradient">KITTOKINZ</span>.
            </div>
          </div>
          <p className="text-text-muted text-sm mb-8 uppercase tracking-widest font-medium">Thiết kế & Lập trình bởi Kittokinz Portfolio © 2026</p>
          <div className="flex justify-center space-x-8 text-xs font-bold uppercase tracking-widest text-text-secondary">
            <a href="#" className="hover:text-brand-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Dribbble</a>
          </div>
          <div className="mt-10 flex justify-center">
            <img
              src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/481058599_1153007519647969_4809173604748255649_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeF6CUrZg3zV9Ic_y32hnPr1OFcv74mSrPY4Vy_viZKs9kgfZtWxdaWvb7kyeCGG3PlY95MS5KNmI7-xmnw-ZJvn&_nc_ohc=Xk7WSxOPWOoQ7kNvwHcNJOM&_nc_oc=AdpwfoyneMgfZFLAqgQaBgt6QhKCue8U_EbBm1QOBaw4Ja2WHjKlQNxzmvJkt0yYmuo&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=ZcuzOXRC_TmF94zfCtKdQA&_nc_ss=7b2a8&oh=00_Af7iO3Q1aQtgmZSVY0yyaIy1Z2JAHynd8Fj5lwc6a9ZogQ&oe=6A078C3E"
              alt="Footer Showcase"
              className="w-full max-w-md rounded-3xl border border-white/10 shadow-2xl shadow-brand-primary/10"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}