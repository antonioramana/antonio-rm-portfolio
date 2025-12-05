import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/antonioramana', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/antonio-ramanandraibe-19a370276/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:antonioramanandraibe@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span>Fait avec</span>
            <Heart size={16} className="text-pink-500 fill-pink-500 animate-pulse" />
            <span>par un développeur passionné</span>
          </div>

          <p className="text-gray-500 dark:text-gray-500 text-sm">
            {currentYear} Portfolio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
