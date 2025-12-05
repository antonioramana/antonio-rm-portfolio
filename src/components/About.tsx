import { Code2, Database, Palette, Rocket, Code, Server, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

export const About = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', level: 90, category: 'Languages' },
    { name: 'TypeScript', level: 85, category: 'Languages' },
    { name: 'PHP', level: 80, category: 'Languages' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Vue.js', level: 65, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 75, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Express', level: 80, category: 'Backend' },
    { name: 'Nest.js', level: 80, category: 'Backend' },
    { name: 'MySQL', level: 85, category: 'Database' },
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    { name: 'MongoDB', level: 70, category: 'Database' },
    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'Docker', level: 70, category: 'Tools' },
  ];

  const categories = Array.from(new Set(skills.map(s => s.category)));

  const categoryIcons: Record<string, React.ComponentType<{ size: number; className: string }>> = {
    'Languages': Code,
    'Frontend': Code2,
    'Backend': Server,
    'Database': Database,
    'Tools': Wrench
  };

  const categoryLabels: Record<string, string> = {
    'Languages': 'Languages',
    'Frontend': 'Frontend',
    'Backend': 'Backend',
    'Database': 'Bases de Données',
    'Tools': 'Outils'
  };

  const features = [
    {
      icon: Code2,
      title: 'Développement Full Stack',
      description: 'Création d\'applications web complètes, du frontend au backend'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interfaces modernes et intuitives avec une attention aux détails'
    },
    {
      icon: Database,
      title: 'Architecture Backend',
      description: 'APIs robustes et bases de données optimisées'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Applications rapides et optimisées pour la production'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            À propos de moi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Développeur passionné avec plusieurs années d'expérience dans la création d'applications web modernes et performantes. Je me spécialise dans le développement full stack avec un fort accent sur l'expérience utilisateur et la qualité du code.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Mon approche combine créativité et rigueur technique pour livrer des solutions qui non seulement répondent aux besoins fonctionnels, mais offrent également une expérience utilisateur exceptionnelle.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <feature.icon className="w-8 h-8 text-pink-500 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Compétences Techniques
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const CategoryIcon = categoryIcons[category] || Code;
              return (
                <div
                  key={category}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg">
                      <CategoryIcon size={24} className="text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {categoryLabels[category] || category}
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                              {skill.name}
                            </span>
                            <span className="text-xs font-bold text-pink-500 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/30 px-2 py-1 rounded-full">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-pink-500/50"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
