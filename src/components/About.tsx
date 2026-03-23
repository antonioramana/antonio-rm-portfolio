import { Code2, Database, Palette, Rocket, Code, Server, Wrench, Brain, Bot, Zap, BarChart3 } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

export const About = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', level: 90, category: 'Languages' },
    { name: 'TypeScript', level: 85, category: 'Languages' },
    { name: 'Python', level: 75, category: 'Languages' },
    { name: 'PHP', level: 80, category: 'Languages' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Next.js', level: 80, category: 'Frontend' },
    { name: 'Vue.js', level: 65, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'NestJS', level: 80, category: 'Backend' },
    { name: 'Express', level: 80, category: 'Backend' },
    { name: 'Laravel', level: 75, category: 'Backend' },
    { name: 'PostgreSQL', level: 80, category: 'Database' },
    { name: 'MySQL', level: 85, category: 'Database' },
    { name: 'MongoDB', level: 70, category: 'Database' },
    { name: 'RAG & Embeddings', level: 75, category: 'IA' },
    { name: 'API IA (OpenAI, Gemini, Mistral)', level: 85, category: 'IA' },
    { name: 'NLP & Chatbots', level: 65, category: 'IA' },
    { name: 'Automatisation IA', level: 60, category: 'IA' },
    { name: 'Agents IA', level: 55, category: 'IA' },
    { name: 'Git & GitHub', level: 90, category: 'Tools' },
    { name: 'Docker', level: 70, category: 'Tools' },
    { name: 'Jira / Agile', level: 75, category: 'Tools' },
  ];

  const categories = Array.from(new Set(skills.map(s => s.category)));

  const categoryIcons: Record<string, React.ComponentType<{ size: number; className: string }>> = {
    'Languages': Code,
    'Frontend': Code2,
    'Backend': Server,
    'Database': Database,
    'IA': Brain,
    'Tools': Wrench
  };

  const categoryLabels: Record<string, string> = {
    'Languages': 'Langages',
    'Frontend': 'Frontend',
    'Backend': 'Backend',
    'Database': 'Bases de Donnees',
    'IA': 'Intelligence Artificielle',
    'Tools': 'Outils & Methodes'
  };

  const features = [
    {
      icon: Code2,
      title: 'Developpement Full Stack',
      description: 'Applications web completes, du frontend au backend, avec des architectures robustes'
    },
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      description: 'Integration d\'IA, chatbots RAG, automatisation et agents intelligents'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interfaces modernes et intuitives avec une attention aux details'
    },
    {
      icon: Database,
      title: 'Architecture Backend',
      description: 'APIs robustes, bases de donnees optimisees et systemes scalables'
    },
    {
      icon: Bot,
      title: 'Chatbots & Automatisation',
      description: 'Creation de chatbots IA multi-canaux (web, Telegram, WhatsApp, Facebook)'
    },
    {
      icon: Rocket,
      title: 'Performance & Deploiement',
      description: 'Applications optimisees, CI/CD et deploiement en production'
    }
  ];

  const iaHighlights = [
    {
      icon: Brain,
      title: 'RAG & Embeddings',
      description: 'Systemes de Retrieval-Augmented Generation pour des reponses contextuelles precises basees sur des bases de connaissance personnalisees'
    },
    {
      icon: Bot,
      title: 'Chatbots IA Multi-Canaux',
      description: 'Deploiement de chatbots intelligents sur site web (widget), Telegram, WhatsApp et Facebook Messenger'
    },
    {
      icon: Zap,
      title: 'APIs IA Multi-Providers',
      description: 'Integration de plusieurs fournisseurs IA : OpenAI, Gemini, Mistral, Ollama, OpenRouter avec switching dynamique'
    },
    {
      icon: BarChart3,
      title: 'Automatisation & Workflows',
      description: 'Automatisation de taches repetitives, generation de contenu, analyse de donnees et creation de workflows intelligents'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            A propos de moi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-mocha-500 via-mocha-400 to-mocha-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Developpeur passionne, recemment diplome ingenieur en Genie Logiciel et Bases de Donnees. Je me specialise dans le developpement full stack et l'integration de solutions d'intelligence artificielle pour creer des applications modernes et intelligentes.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Mon approche combine creativite et rigueur technique pour livrer des solutions qui non seulement repondent aux besoins fonctionnels, mais integrent egalement des capacites d'IA avancees : chatbots RAG, automatisation, et agents intelligents.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Autonome et oriente resultats, je suis capable de gerer des projets de bout en bout, de la conception au deploiement, avec un focus sur la performance et l'experience utilisateur.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-5 bg-gradient-to-br from-vanilla-50 to-vanilla-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-vanilla-600/30 dark:border-mocha-700/30"
              >
                <feature.icon className="w-8 h-8 text-mocha-500 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section IA Highlights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Expertise en Intelligence Artificielle
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Conception et deploiement de solutions IA pour les entreprises : chatbots, automatisation et integration multi-providers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iaHighlights.map((item, index) => (
              <div
                key={index}
                className="relative p-6 bg-gradient-to-br from-vanilla-50 to-vanilla-300 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-mocha-300/30 dark:border-mocha-500/20 hover:shadow-xl hover:shadow-mocha-500/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="p-3 bg-gradient-to-br from-mocha-500 to-mocha-600 rounded-xl w-fit mb-4 group-hover:shadow-lg group-hover:shadow-mocha-500/30 transition-all duration-300">
                  <item.icon size={24} className="text-white" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Competences Techniques
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const CategoryIcon = categoryIcons[category] || Code;
              const isIA = category === 'IA';
              return (
                <div
                  key={category}
                  className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    isIA
                      ? 'bg-gradient-to-br from-vanilla-100 to-vanilla-300 dark:from-gray-800 dark:to-gray-700 border-2 border-mocha-400/40 dark:border-mocha-500/30'
                      : 'bg-gradient-to-br from-vanilla-50 to-vanilla-200 dark:from-gray-800 dark:to-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg ${
                      isIA
                        ? 'bg-gradient-to-br from-mocha-500 to-mocha-700'
                        : 'bg-gradient-to-br from-mocha-500 to-mocha-400'
                    }`}>
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
                            <span className="text-xs font-bold text-mocha-500 dark:text-vanilla-400 bg-vanilla-200 dark:bg-mocha-700/30 px-2 py-1 rounded-full">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-vanilla-300 dark:bg-gray-600 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-mocha-500 via-mocha-400 to-mocha-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-mocha-500/30"
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
