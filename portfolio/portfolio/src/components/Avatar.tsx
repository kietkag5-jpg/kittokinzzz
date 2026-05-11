import { motion } from 'framer-motion';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showGlow?: boolean;
  src?: string;
}

const defaultAvatar = 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/605630868_1374713017477417_5462270144693449261_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEM_PLkpnb56bt8QkKU3e562Z8nIGQjACHZnycgZCMAIc4YkzYUoUPRrtbRkIqOKmtWe_OXse-Gqe-_0uOcvQHy&_nc_ohc=nKtbWfyqxAMQ7kNvwGEIt0c&_nc_oc=AdqQWJUXD-iO3ZmyWU4nMHKJzHTynPapoqPso5CgGCmxTmOFB66U-MXF5HdScdIFLqY&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=EUluBBGETT3ENm7WcfiAJA&_nc_ss=7b2a8&oh=00_Af5sadamxDpXDZnyaGu1Oajm6pa0zXUm25BpWGCIB7d1XA&oe=6A077C0D';

export default function Avatar({ size = 'md', className = '', showGlow = false, src = defaultAvatar }: AvatarProps) {
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
      {showGlow && (
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full blur-xl opacity-30 animate-pulse" />
      )}

      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-brand-primary/30 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 backdrop-blur-sm">
        <img
          src={src}
          alt="Kittokinz Avatar"
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        className="absolute inset-0 rounded-full border border-brand-secondary/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
}