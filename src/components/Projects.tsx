import { useState } from 'react';
import { ExternalLink, Github, X, ChevronRight, ChevronLeft, Globe, Smartphone } from 'lucide-react';
import hitadidyHome from '../assets/projects/hitadidy/home.jpeg';
import hitadidyHome2 from '../assets/projects/hitadidy/home2.jpeg';
import hitadidyQuestionsAnswers from '../assets/projects/hitadidy/questions-answers.png';
import hitadidyQuiz2 from '../assets/projects/hitadidy/quiz2.png';
import hitadidyQuizResult from '../assets/projects/hitadidy/quiz-result.png';
import nahandrokoHome from '../assets/projects/nahandroko/home.png';
import nahandrokoGenerationRecette from '../assets/projects/nahandroko/generation-recette.png';
import nahandrokoEtape from '../assets/projects/nahandroko/etape.png';
import nahandrokoFavoris from '../assets/projects/nahandroko/favoris.png';
import asheraHome from '../assets/projects/ashera/home.png';
import asheraListeVente from '../assets/projects/ashera/liste-vente.png';
import asheraPlanAbonnement from '../assets/projects/ashera/plan-abonnnement.png';
import asheraNotificationGagnant from '../assets/projects/ashera/notification-gagnant.png';
import asheraDetailEnchere from '../assets/projects/ashera/detail.png';
import asheraChatBot from '../assets/projects/ashera/chat-bot.png';
import tolotananaHome from '../assets/projects/tolotanana/home.png';
import tolotananaInscription from '../assets/projects/tolotanana/inscription.png';
import tolotananaListCampagn from '../assets/projects/tolotanana/list-campagn.png';
import tolotananaDetailCampagn from '../assets/projects/tolotanana/detail-campagn.png';
import tolotananaDashAdmin from '../assets/projects/tolotanana/dash-admin.png';
import tolotananaTransactionAdmin from '../assets/projects/tolotanana/transaction-admin.png';
import tolotananaInfoBancaire from '../assets/projects/tolotanana/info-bancaire-tolotanana.png';

interface ProjectPage {
  name: string;
  description: string;
  image?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  type: 'web' | 'mobile' | 'all';
  liveUrl?: string;
  githubUrl?: string;
  screenshots?: string[];
  pages: ProjectPage[];
  features: string[];
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile'>('all');

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject?.screenshots) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.screenshots!.length);
    }
  };

  const prevImage = () => {
    if (selectedProject?.screenshots) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.screenshots!.length) % selectedProject.screenshots!.length);
    }
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'Hitadidy',
      description: "Une application intelligente de révision alimentée par l'IA qui transforme n'importe quel sujet ou document en cartes de révision interactives. Créez facilement des flashcards personnalisées à partir de vos fichiers (images, PDF) ou de simples sujets, et testez vos connaissances avec des quiz adaptatifs.",
      image: hitadidyHome,
      type: 'web',
      technologies: ['React', 'TypeScript', 'Tailwind Css', 'API Gemini', 'LocalStorage'],
      liveUrl: 'https://hitadidy.onrender.com/',
      githubUrl: 'https://github.com/antonioramana',
      screenshots: [
        hitadidyHome,
        hitadidyHome2,
        hitadidyQuestionsAnswers,
        hitadidyQuiz2,
        hitadidyQuizResult,
      ],
      pages: [
        { name: 'Création de Cartes', description: 'Page d\'accueil pour créer des cartes de révision à partir de sujets ou documents avec l\'IA', image: hitadidyHome },
        { name: 'Gestion des Paquets', description: 'Interface de gestion des paquets de révision avec catégories (Toutes, À revoir, Maîtrisées)', image: hitadidyHome2 },
        { name: 'Quiz en Cours', description: 'Interface de quiz interactif avec questions à choix multiples et suivi du temps', image: hitadidyQuestionsAnswers },
        { name: 'Question de Quiz', description: 'Affichage des questions avec réponses correctes/incorrectes mises en évidence', image: hitadidyQuiz2 },
        { name: 'Résultats du Quiz', description: 'Page de résultats avec score, temps écoulé et options pour recommencer ou retourner', image: hitadidyQuizResult }
      ],
      features: [
        'Flashcards avec génération par IA,',
        'Quiz interactifs',
        'Suivi de maîtrise',
        'Sauvegarde localement',
        'Interface responsive'
      ]
    },
    {
      id: 2,
      title: 'Tolotanana',
      description: "Une plateforme de crowdfunding (financement participatif) qui permet de connecter les personnes généreuses aux causes qui ont besoin d'aide. La plateforme permet aux utilisateurs de créer des campagnes de collecte de fonds, de faire des dons, et de suivre l'impact de leurs contributions en temps réel.",
      image: tolotananaHome,
      type: 'web',
      technologies: ['TypeScript','Next.js','Tailwind CSS', 'Nest.js', 'PostgreSQL'],
      liveUrl: 'https://tolotanana-next-frontend-miix.onrender.com/',
      githubUrl: 'https://github.com/antonioramana',
      screenshots: [
        tolotananaHome,
        tolotananaInscription,
        tolotananaListCampagn,
        tolotananaDetailCampagn,
        tolotananaDashAdmin,
        tolotananaTransactionAdmin,
        tolotananaInfoBancaire
      ],
      pages: [
        { name: 'Page d\'Accueil', description: 'Page d\'accueil avec présentation de la plateforme, statistiques et call-to-action', image: tolotananaHome },
        { name: 'Inscription', description: 'Modal d\'inscription avec formulaire de création de compte et reCAPTCHA', image: tolotananaInscription },
        { name: 'Liste des Campagnes', description: 'Page de découverte des campagnes avec filtres, recherche et statistiques', image: tolotananaListCampagn },
        { name: 'Détail d\'une Campagne', description: 'Page détaillée d\'une campagne avec progression, organisateur et modal de don', image: tolotananaDetailCampagn },
        { name: 'Dashboard Admin', description: 'Vue d\'ensemble de la plateforme avec métriques clés, graphiques et statistiques', image: tolotananaDashAdmin },
        { name: 'Transactions Admin', description: 'Gestion des transactions et paiements dans le tableau de bord administrateur', image: tolotananaTransactionAdmin },
        { name: 'Informations Bancaires', description: 'Configuration des informations bancaires et méthodes de paiement Mobile Money', image: tolotananaInfoBancaire }
      ],
      features: [
        'Participation en temps réel',
        'Vérification par reCAPTCHA ',
        'Système de notifications',
        'Partage de capagnes',
        'Graphiques de progression',
        'Transaction'
      ]
    },
    {
      id: 3,
      title: 'Nahandroko',
      description: 'Une application web qui génère des recettes de cuisine personnalisées à partir des ingrédients que vous avez dans votre frigo.',
      image: nahandrokoHome,
      type: 'web',
      technologies: ['React', 'TypeScript', 'Tailwind Css', 'API Gemini', 'LocalStorage'],
      liveUrl: 'https://nahandroko.onrender.com/',
      githubUrl: 'https://github.com/antonioramana',
      screenshots: [
        nahandrokoHome,
        nahandrokoGenerationRecette,
        nahandrokoEtape,
        nahandrokoFavoris
      ],
      pages: [
        { name: 'Page d\'Accueil', description: 'Interface principale pour saisir les ingrédients disponibles et générer des recettes', image: nahandrokoHome },
        { name: 'Génération de Recettes', description: 'Affichage des recettes générées par l\'IA à partir des ingrédients saisis', image: nahandrokoGenerationRecette },
        { name: 'Détails de Recette', description: 'Carte détaillée de recette avec étapes de préparation, ingrédients et temps de cuisson', image: nahandrokoEtape },
        { name: 'Mes Favoris', description: 'Page de gestion des recettes favorites avec possibilité de les consulter et supprimer', image: nahandrokoFavoris }
      ],
      features: [
        'Génération de recettes',
        'Système de favoris',
        'Proposition de recettes par IA',
        'Interface moderne',
     ]
    },
    {
      id: 4,
      title: 'Ashera',
      description: 'Une plateforme de vente aux enchères en temps réel',
      image: asheraHome,
      type: 'web',
      technologies: ['TypeScript','React.js','Tailwind CSS', 'Nest.js', 'Socket.io', 'PostgreSQL'],
      liveUrl: 'https://github.com/antonioramana',
      githubUrl: 'https://github.com/antonioramana',
      screenshots: [
        asheraHome,
        asheraListeVente,
        asheraPlanAbonnement,
        asheraNotificationGagnant,
        asheraDetailEnchere,
        asheraChatBot
      ],
      pages: [
        { name: 'Page d\'Accueil', description: 'Page d\'accueil avec présentation de la plateforme, statistiques et enchères en direct', image: asheraHome },
        { name: 'Liste des Enchères', description: 'Page de liste de toutes les enchères avec filtres avancés et catégories', image: asheraListeVente },
        { name: 'Plans d\'Abonnement', description: 'Page de gestion des abonnements avec les différents plans (Basique, Entreprise, Premium)', image: asheraPlanAbonnement },
        { name: 'Notification de Gain', description: 'Modal de félicitations pour les enchères remportées avec options de paiement', image: asheraNotificationGagnant },
        { name: 'Détail d\'une Enchère', description: 'Page détaillée d\'une enchère avec options d\'offre, historique et chat en direct', image: asheraDetailEnchere },
        { name: 'Assistant IA Chatbot', description: 'Interface de chatbot intelligent pour répondre aux questions sur les produits et les enchères', image: asheraChatBot }
      ],
      features: [
        'Authentification',
        'Mise en temps réel',
        'Chatbot intelligent',
        'Notification',
        'Email',
        'Paiement',
        'Livraison',
        'Abonnement',
      ]
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.type === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-pink-500/50'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-pink-500'
            }`}
          >
            <span>Tous les Projets</span>
            <span className="text-sm">({projects.length})</span>
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
              filter === 'web'
                ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-pink-500/50'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-pink-500'
            }`}
          >
            <Globe size={18} />
            <span>Web</span>
            <span className="text-sm">({projects.filter(p => p.type === 'web').length})</span>
          </button>
          <button
            onClick={() => setFilter('mobile')}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
              filter === 'mobile'
                ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-pink-500/50'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-pink-500'
            }`}
          >
            <Smartphone size={18} />
            <span>Mobile</span>
            <span className="text-sm">({projects.filter(p => p.type === 'mobile').length})</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-500 dark:text-pink-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => openProject(project)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Détails
                    <ChevronRight size={16} />
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:text-pink-500 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:text-pink-500 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
              >
                <X className="text-gray-700 dark:text-gray-300" size={24} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Galerie d'Images
                </h4>
                <div className="relative">
                  <div className="relative h-96 rounded-xl overflow-hidden">
                    <img
                      src={selectedProject.screenshots[currentImageIndex]}
                      alt={`Screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg"
                  >
                    <ChevronLeft className="text-gray-900 dark:text-white" size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg"
                  >
                    <ChevronRight className="text-gray-900 dark:text-white" size={24} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'w-8 bg-pink-500'
                            : 'bg-white/70 hover:bg-white'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Description
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Fonctionnalités Principales
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Pages du Projet
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.pages.map((page, index) => (
                    <div
                      key={index}
                      className="group overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={page.image}
                          alt={page.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                        <h5 className="absolute bottom-3 left-3 font-semibold text-white">
                          {page.name}
                        </h5>
                      </div>
                      <p className="p-4 text-sm text-gray-600 dark:text-gray-400">
                        {page.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Technologies Utilisées
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
