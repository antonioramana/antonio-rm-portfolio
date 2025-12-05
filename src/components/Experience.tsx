import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Stage Développeur Fullstack React.js/Nest.js',
      company: 'Miezaka',
      period: 'Juillet - Octobre 2025',
      description: 'Conception et Développement d’une plateforme de vente aux enchères en temps réel avec backend NestJS (API, WebSockets), frontend ReactJS, intégration postgreSQL, gestion Agile via Jira, versioning Git/GitHub et participation aux revues de code pour l’amélioration continue',
      technologies: ['React', 'TypeScript','Tailwind CSS','Nest.js', 'PostgreSQL']
    },
    {
      title: 'Développeur Fullstack React.js/Laravel',
      company: 'Digital World Company',
      period: 'Février - Décembre 2024',
      description: 'Suivi du cahier des charges, conception des structures de données, développement frontend et backend, et réalisation des tests après chaque implémentation.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Laravel', 'PostgreSQL']
    },
    {
      title: 'Stage Développeur Fullstack React.js/Codeigniter',
      company: 'Softlab',
      period: 'Septembre - Novembre 2023',
      description: 'Conception et développement d’une application web d’entretien en ligne permettant aux recruteurs de créer et gérer des quiz en temps réel, et aux candidats de passer les évaluations directement sur la plateforme avec suivi des résultats et notifications.',
      technologies: ['React.js', 'Codeigniter', 'MySQL']
    },
    {
      title: 'Stage Développeur Frontend',
      company: 'World Business Solution',
      period: 'Octobre - Décembre 2022',
      description: 'Conception et développement frontend d’une plateforme web de gestion des élèves, incluant l’inscription, le suivi des absences, la saisie des notes et la génération des bulletins scolaires.',
      technologies: ['React.js', 'Bootstrap']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Expérience Professionnelle
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start md:items-center pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-1/2 lg:w-1/3 ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg">
                        <Briefcase className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-pink-500 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-500 dark:text-pink-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                <div className="w-full md:w-1/2 lg:w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
