import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Whatsapp-chat-page',
    description: 'Just a javaScript project on the UI of the whatsapp chat page, focusing on the search.',
    image: '/image/whatsapp.png',
    technologies: ['Javascript', 'CSS', 'HTML',],
    demoLink: 'https://raw.githack.com/Adewunmi97/Whatsapp_chat_page/feature/index.html',
    githubLink: 'https://github.com/Adewunmi97/Whatsapp_chat_page?tab=readme-ov-file',
  },
  {
    id: 2,
    title: 'Woox',
    description:'Front page clone of woox website.',
    image: '/image/woox.png',
    technologies: ['HTML', 'SCSS'],
    demoLink: 'https://raw.githack.com/Adewunmi97/woox-template/feature/index.html',
    githubLink: 'https://github.com/Adewunmi97/woox-template/tree/feature?tab=readme-ov-file',
  },
  {
    id: 3,
    title: 'TodoList',
    description: 'A todo list with adding, selecting finished tasks and deleting functions.',
    image: '/image/todolist.png',
    technologies: ['HTML', 'SCSS', 'JQuery'],
    demoLink: 'https://adewunmi97.github.io/Todo-list.github.io/',
    githubLink: 'https://github.com/Adewunmi97/Todo-list.github.io?tab=readme-ov-file',
  },
];