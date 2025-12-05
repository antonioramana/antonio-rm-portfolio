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
      degree: 'Master II en Génie Logiciel et Bases de Données',
      institution: 'École Nationnale d\'Informatique',
      period: '2024 - 2025',
      description: 'Spécialisation en développement web et applications mobiles avec un focus sur l\'architecture logicielle moderne.',
      achievements: [
        'Mention Très Bien',
        'Projet de fin d\'études primé',
        'Stage de 6 mois chez Miezaka'
      ]
    },
    {
      degree: 'Licence en Génie Logiciel et Bases de Données',
      institution: 'École Nationnale d\'Informatique',
      period: '2022 - 2023',
      description: 'Formation complète en informatique couvrant les fondamentaux de la programmation, des bases de données et des réseaux.',
      achievements: [
        'Mention Très Bien',
        'Projets collaboratifs en équipe',
        'Stage de 3 mois chez Softlab'
      ]
    },
    {
      degree: 'Baccalauréat Série C',
      institution: 'Lycée Saint Vincent de Paul',
      period: '2018 - 2019',
      description: 'Obtention du Baccalauréat série C avec une spécialisation en sciences mathématiques et physiques, mettant l’accent sur la rigueur analytique et la résolution de problèmes.',
      achievements: [
        'Mention Bien',
        'Excellence en Mathématiques'
      ]
    }
  ];

  // const certifications = [
  //   {
  //     name: 'AWS Certified Developer',
  //     issuer: 'Amazon Web Services',
  //     date: '2023'
  //   },
  //   {
  //     name: 'React Advanced Certification',
  //     issuer: 'Meta',
  //     date: '2022'
  //   },
  //   {
  //     name: 'Professional Scrum Master',
  //     issuer: 'Scrum.org',
  //     date: '2022'
  //   },
  //   {
  //     name: 'MongoDB Certified Developer',
  //     issuer: 'MongoDB University',
  //     date: '2021'
  //   }
  // ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Formations & Diplômes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex-shrink-0">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-pink-500 font-medium mb-1">{edu.institution}</p>
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
                    <Award size={16} className="text-pink-500" />
                    Réalisations
                  </h4>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
{/* 
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Certifications Professionnelles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-pink-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg mb-4 mx-auto">
                  <Award className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white text-center mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-pink-500 text-center font-medium">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};
