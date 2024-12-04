import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types/project';
import { Button } from '../ui/Button';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-gray-800 rounded-lg w-full max-w-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.demoLink && (
                  <Button href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Button>
                )}
                {project.githubLink && (
                  <Button
                    variant="secondary"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}