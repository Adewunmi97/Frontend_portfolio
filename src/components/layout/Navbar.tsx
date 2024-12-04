import { Github, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SocialLink } from '../ui/SocialLink';

const SOCIAL_LINKS = [
  {
    href: 'mailto:ashonibare63@gmail.com',
    icon: Mail,
    label: 'Email',
  },
  {
    href: 'https://github.com/Adewunmi97',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/adewunmi97',
    icon: Linkedin,
    label: 'LinkedIn',
  },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/50 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            Portfolio
          </Link>
          
          <div className="flex items-center space-x-6">
            {SOCIAL_LINKS.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}