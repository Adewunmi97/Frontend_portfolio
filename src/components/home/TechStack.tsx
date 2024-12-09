import { motion } from 'framer-motion';

const technologies = [
  'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git'
];

export function TechStack() {
  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-gray-400"
      >
        Tech Stack
      </motion.p>
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + index * 0.1 }}
            className="px-4 py-2 bg-gray-800 rounded-full text-sm text-purple-400 border border-purple-500/20"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  );
}