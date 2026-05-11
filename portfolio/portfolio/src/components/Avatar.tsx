import { motion } from 'framer-motion';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showGlow?: boolean;
}

export default function Avatar({ size = 'md', className = '', showGlow = false }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Glow effect */}
      {showGlow && (
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full blur-xl opacity-30 animate-pulse" />
      )}

      {/* Avatar container */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-brand-primary/30 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 backdrop-blur-sm">
        {/* Placeholder avatar - you can replace with actual image */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-primary to-brand-accent">
          <svg
            className="w-1/2 h-1/2 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>

        {/* Optional: Uncomment to use actual image */}
        {/* <img
          src="/path/to/your/avatar.jpg"
          alt="Profile Avatar"
          className="w-full h-full object-cover"
        /> */}
      </div>

      {/* Decorative ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-brand-secondary/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
}