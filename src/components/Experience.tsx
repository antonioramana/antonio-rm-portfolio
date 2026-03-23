import { Briefcase, Calendar, Brain } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type?: 'dev' | 'ia';
}

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Developpeur Fullstack React.js/NestJS',
      company: 'Optimiti Agency LLC',
      period: 'Novembre 2025 - Present',
      description: 'Developpement et maintenance de l\'ecosysteme Curly\'Up en collaboration internationale. Pilotage du back-end sous NestJS (API REST, Stripe, securite) et integration fidele de maquettes Figma en composants React.js. Collaboration avec des data scientists pour l\'integration d\'APIs d\'IA. Responsable de l\'optimisation des performances front-end et back-end, assurant une experience utilisateur fluide et la conformite aux exigences techniques des cahiers des charges.',
      technologies: ['React', 'TypeScript', 'NestJS', 'Stripe', 'Figma', 'API IA', 'PostgreSQL'],
      type: 'ia'
    },
    {
      title: 'Createur & Developpeur IA - Assisteko',
      company: 'Projet Personnel / Freelance',
      period: 'Janvier 2025 - Present',
      description: 'Conception et developpement d\'Assisteko, une plateforme SaaS de creation de chatbots IA. Architecture RAG avec embeddings, integration multi-providers (OpenAI, Gemini, Mistral, Ollama, OpenRouter), deploiement multi-canaux (widget web, Telegram, WhatsApp, Facebook Messenger), et reponses en streaming temps reel.',
      technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'RAG', 'Embeddings', 'OpenAI', 'Gemini', 'Mistral'],
      type: 'ia'
    },
    {
      title: 'Stage Developpeur Fullstack React.js/Nest.js',
      company: 'Miezaka',
      period: 'Juillet - Octobre 2025',
      description: 'Conception et Developpement d\'une plateforme de vente aux encheres en temps reel avec backend NestJS (API, WebSockets), frontend ReactJS, integration postgreSQL, gestion Agile via Jira, versioning Git/GitHub et participation aux revues de code pour l\'amelioration continue',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Nest.js', 'PostgreSQL']
    },
    {
      title: 'Developpeur Fullstack React.js/Laravel',
      company: 'Digital World Company',
      period: 'Fevrier - Decembre 2024',
      description: 'Suivi du cahier des charges, conception des structures de donnees, developpement frontend et backend, et realisation des tests apres chaque implementation.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Laravel', 'PostgreSQL']
    },
    {
      title: 'Stage Developpeur Fullstack React.js/Codeigniter',
      company: 'Softlab',
      period: 'Septembre - Novembre 2023',
      description: 'Conception et developpement d\'une application web d\'entretien en ligne permettant aux recruteurs de creer et gerer des quiz en temps reel, et aux candidats de passer les evaluations directement sur la plateforme avec suivi des resultats et notifications.',
      technologies: ['React.js', 'Codeigniter', 'MySQL']
    },
    {
      title: 'Stage Developpeur Frontend',
      company: 'World Business Solution',
      period: 'Octobre - Decembre 2022',
      description: 'Conception et developpement frontend d\'une plateforme web de gestion des eleves, incluant l\'inscription, le suivi des absences, la saisie des notes et la generation des bulletins scolaires.',
      technologies: ['React.js', 'Bootstrap']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-vanilla-50 to-vanilla-200 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience Professionnelle
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-mocha-500 via-mocha-400 to-mocha-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-mocha-500 via-mocha-400 to-mocha-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start md:items-center pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-1/2 lg:w-1/3 ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}>
                  <div className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    exp.type === 'ia'
                      ? 'bg-gradient-to-br from-vanilla-100 to-vanilla-300 dark:from-gray-800 dark:to-gray-700 border-2 border-mocha-400/40 dark:border-mocha-500/30'
                      : 'bg-white dark:bg-gray-800'
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${
                        exp.type === 'ia'
                          ? 'bg-gradient-to-br from-mocha-500 to-mocha-700'
                          : 'bg-gradient-to-br from-mocha-500 to-mocha-400'
                      }`}>
                        {exp.type === 'ia' ? (
                          <Brain className="text-white" size={20} />
                        ) : (
                          <Briefcase className="text-white" size={20} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="font-medium text-mocha-500 dark:text-vanilla-400">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                      {exp.type === 'ia' && (
                        <span className="ml-2 px-2 py-0.5 bg-mocha-100 dark:bg-mocha-700/30 text-mocha-500 dark:text-vanilla-400 rounded-full text-xs font-semibold">
                          IA
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-mocha-500/10 to-vanilla-700/10 text-mocha-500 dark:text-vanilla-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 shadow-lg ${
                  exp.type === 'ia'
                    ? 'bg-gradient-to-br from-mocha-500 to-mocha-700'
                    : 'bg-gradient-to-br from-mocha-500 to-mocha-400'
                }`}></div>

                <div className="w-full md:w-1/2 lg:w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
