import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Whatsapp-chat-page',
    description: 'Just a javaScript project on the UI of the whatsapp chat page, focusing on the search.',
    image: '../src/image/whatsapp.png',
    technologies: ['Javascript', 'CSS', 'HTML',],
    demoLink: 'https://raw.githack.com/Adewunmi97/Whatsapp_chat_page/feature/index.html',
    githubLink: 'https://github.com/Adewunmi97/Whatsapp_chat_page?tab=readme-ov-file',
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with dynamic updates',
    image: '../src/image/woox.png',
    technologies: ['React', 'TypeScript', 'OpenWeather API'],
    demoLink: 'https://weather-app.example.com',
    githubLink: 'https://github.com/yourusername/weather-app',
  },
  {
    id: 3,
    title: 'TodoList',
    description: 'A todo list with adding, selecting finished tasks and deleting functions.',
    image: '../src/image/todolist.png',
    technologies: ['HTML', 'SCSS', 'JQuery'],
    demoLink: 'https://adewunmi97.github.io/Todo-list.github.io/',
    githubLink: 'https://github.com/Adewunmi97/Todo-list.github.io?tab=readme-ov-file',
  },
];