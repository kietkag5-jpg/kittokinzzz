import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Game Character Design',
    description: 'Thiết kế nhân vật game độc đáo, biểu cảm và phù hợp với phong cách visual storytelling.',
    image: 'https://cdn.discordapp.com/attachments/1288526030054752314/1502708371265163394/Screenshot_2026-04-14_120438.png?ex=6a02abfa&is=6a015a7a&hm=2d52c4d3df1e2272278e3984ebbdc88faa11c0e7191ed14438ea76d2e069d11a',
    tags: ['Game Art', 'Character', 'Concept'],
  },
  {
    title: 'Photobook Experience',
    description: 'Thiết kế photobook sáng tạo với layout nghệ thuật, ảnh đẹp và storytelling chuyên nghiệp.',
    image: 'https://cdn.discordapp.com/attachments/1288526030054752314/1502708246270574592/Screenshot_2026-03-25_210102.png?ex=6a02abdc&is=6a015a5c&hm=b83f607dd66b3794f5c74fd78e27dad24b4e0270d7a053b9737d78d10ac29113',
    tags: ['Photobook', 'Design', 'Storytelling'],
  },
  {
    title: 'Web Interface Design',
    description: 'Thiết kế giao diện web chuyên nghiệp, tinh tế và chuẩn UX/UI hiện đại.',
    image: 'https://cdn.discordapp.com/attachments/1288526030054752314/1502712303408382084/image.png?ex=6a02afa4&is=6a015e24&hm=59ed581f1164c2475604115ad22311556bb894bf3244e2787349b202d321e2b6',
    tags: ['Web Design', 'UI/UX', 'Creative'],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
        <p className="text-white/70 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-text-secondary font-bold mb-6">Dự án</h2>
        <h3 className="text-4xl md:text-6xl font-display font-bold mb-8">
          CÔNG VIỆC <span className="text-gradient">NỔI BẬT</span>
        </h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}