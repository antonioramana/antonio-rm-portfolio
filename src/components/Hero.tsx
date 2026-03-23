import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';
import antonioImage from '../assets/me.png';

export const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-vanilla-50 to-vanilla-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-mocha-300/20 via-vanilla-600/20 to-mocha-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-vanilla-700/20 via-mocha-300/20 to-vanilla-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-mocha-200/10 to-vanilla-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-mocha-500 via-mocha-400 to-vanilla-700 p-1 animate-spin-pause shadow-2xl mt-20 md:mt-0">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                <img
                  src={antonioImage}
                  alt="Profil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
            Antonio Ramanandraibe
            <span className="block mt-2 bg-gradient-to-r from-mocha-500 via-mocha-400 to-mocha-600 bg-clip-text text-transparent">
               Developpeur Fullstack & IA
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Createur d'experiences web modernes, performantes et intelligentes
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-mocha-500/10 to-mocha-400/10 border border-mocha-500/20 rounded-full text-sm font-medium text-mocha-500 dark:text-vanilla-400">
              <Sparkles size={16} />
              IA & Automatisation
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-mocha-400/10 to-vanilla-700/10 border border-mocha-400/20 rounded-full text-sm font-medium text-mocha-500 dark:text-vanilla-400">
              RAG & Chatbots
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-vanilla-700/10 to-mocha-300/10 border border-vanilla-700/20 rounded-full text-sm font-medium text-mocha-500 dark:text-vanilla-400">
              Fullstack Web
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-gradient-to-r from-mocha-500 via-mocha-400 to-mocha-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-mocha-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Me Contacter
            </button>
            <a
              href="#projects"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium border-2 border-vanilla-600 dark:border-gray-700 hover:border-mocha-500 dark:hover:border-mocha-400 transition-all duration-300"
            >
              Voir mes projets
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="https://github.com/antonioramana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-mocha-500 dark:hover:text-vanilla-400 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/antonio-ramanandraibe-19a370276/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-mocha-500 dark:hover:text-vanilla-400 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:antonioramanandraibe@gmail.com"
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-mocha-500 dark:hover:text-vanilla-400 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-mocha-300 dark:text-mocha-600" size={32} />
        </div>
      </div>
    </section>
  );
};
