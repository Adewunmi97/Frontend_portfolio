import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const roles = [
  "Frontend Developer",
  "React Specialist",
  "UI/UX Enthusiast"
];

export function TypewriterText() {
  const [currentRole, setCurrentRole] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.5 }
      }).then(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 }
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <motion.h2
      animate={controls}
      className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
    >
      {roles[currentRole]}
    </motion.h2>
  );
}