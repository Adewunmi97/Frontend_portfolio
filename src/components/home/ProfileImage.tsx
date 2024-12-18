import { motion } from 'framer-motion';

export function ProfileImage() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden rounded-full border-4 border-none">
          <img
            src="/image/Adewunmi.png"
            alt="Adewunmi"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute inset-0 z-0"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-purple-500 rounded-full filter blur-3xl" />
      </motion.div>
    </div>
  );
}