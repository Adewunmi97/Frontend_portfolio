import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ProfileImage } from './ProfileImage';
import { TypewriterText } from './TypewriterText';
import { TechStack } from './TechStack';

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 py-20">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariants} className="text-left">
          <motion.p 
            className="text-purple-400 font-medium mb-2"
            variants={itemVariants}
          >
            Hello, I'm
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            John Doe
          </motion.h1>
          <TypewriterText />
          <motion.p 
            className="text-gray-300 mb-8"
            variants={itemVariants}
          >
            Passionate about creating responsive and user-friendly web experiences. 
            Specialized in modern frontend technologies and best practices.
          </motion.p>
          
          <motion.div 
            className="flex gap-4"
            variants={itemVariants}
          >
            <Link to="/projects">
              <Button>View My Work</Button>
            </Link>
            <Button 
              variant="secondary" 
              href="https://drive.google.com/your-resume-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="relative"
        >
          <ProfileImage />
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="absolute bottom-20 left-0 right-0"
      >
        <TechStack />
      </motion.div>
    </section>
  );
}