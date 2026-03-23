import { GraduationCap, Award, Calendar } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
}

export const Education = () => {
  const education: EducationItem[] = [
    {
      degree: 'Master II en Genie Logiciel et Bases de Donnees',
      institution: 'Ecole Nationale d\'Informatique',
      period: '2024 - 2025',
      description: 'Specialisation en developpement web et applications mobiles avec un focus sur l\'architecture logicielle moderne.',
      achievements: [
        'Mention Tres Bien',
        'Projet de fin d\'etudes prime',
        'Stage de 6 mois chez Miezaka'
      ]
    },
    {
      degree: 'Licence en Genie Logiciel et Bases de Donnees',
      institution: 'Ecole Nationale d\'Informatique',
      period: '2022 - 2023',
      description: 'Formation complete en informatique couvrant les fondamentaux de la programmation, des bases de donnees et des reseaux.',
      achievements: [
        'Mention Tres Bien',
        'Projets collaboratifs en equipe',
        'Stage de 3 mois chez Softlab'
      ]
    },
    {
      degree: 'Baccalaureat Serie C',
      institution: 'Lycee Saint Vincent de Paul',
      period: '2018 - 2019',
      description: 'Obtention du Baccalaureat serie C avec une specialisation en sciences mathematiques et physiques, mettant l\'accent sur la rigueur analytique et la resolution de problemes.',
      achievements: [
        'Mention Bien',
        'Excellence en Mathematiques'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Formations & Diplomes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-mocha-500 via-mocha-400 to-mocha-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-vanilla-50 to-vanilla-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-mocha-500 to-mocha-400 rounded-lg flex-shrink-0">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-mocha-500 dark:text-vanilla-400 font-medium mb-1">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {edu.description}
              </p>

              {edu.achievements && edu.achievements.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Award size={16} className="text-mocha-500" />
                    Realisations
                  </h4>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-mocha-500 to-mocha-400 rounded-full"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
