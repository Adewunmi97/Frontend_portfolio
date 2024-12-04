import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Redux',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'Redux', 'Tailwind CSS', 'Node.js'],
    demoLink: 'https://demo-ecommerce.example.com',
    githubLink: 'https://github.com/yourusername/ecommerce',
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with dynamic updates',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'TypeScript', 'OpenWeather API'],
    demoLink: 'https://weather-app.example.com',
    githubLink: 'https://github.com/yourusername/weather-app',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A collaborative task management solution',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'Firebase', 'Material-UI'],
    demoLink: 'https://tasks.example.com',
    githubLink: 'https://github.com/yourusername/task-manager',
  },
];