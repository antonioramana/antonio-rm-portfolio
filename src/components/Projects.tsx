import { useState } from 'react';
import { ExternalLink, Github, X, ChevronRight, ChevronLeft, Globe, Smartphone } from 'lucide-react';

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
      title: 'E-Commerce Platform',
      description: 'Plateforme e-commerce complète avec gestion de panier, paiements et tableau de bord admin',
      image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'web',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      screenshots: [
        'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3683519/pexels-photo-3683519.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      pages: [
        { name: 'Accueil', description: 'Page d\'accueil avec produits en vedette et catégories', image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Catalogue', description: 'Liste des produits avec filtres et recherche avancée', image: 'https://images.pexels.com/photos/3683519/pexels-photo-3683519.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Détail Produit', description: 'Informations détaillées, images et avis clients', image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Panier', description: 'Gestion du panier avec calcul en temps réel', image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Checkout', description: 'Processus de paiement sécurisé avec Stripe', image: 'https://images.pexels.com/photos/5083488/pexels-photo-5083488.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Dashboard Admin', description: 'Gestion des produits, commandes et statistiques', image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600' }
      ],
      features: [
        'Authentification sécurisée',
        'Paiements intégrés',
        'Gestion de stock en temps réel',
        'Notifications email',
        'Responsive design'
      ]
    },
    {
      id: 2,
      title: 'Application de Gestion de Projets',
      description: 'Outil collaboratif pour gérer projets et équipes avec suivi en temps réel',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'web',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      screenshots: [
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3184170/pexels-photo-3184170.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      pages: [
        { name: 'Dashboard', description: 'Vue d\'ensemble des projets et tâches', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Liste Projets', description: 'Tous les projets avec statuts et progression', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Détail Projet', description: 'Tâches, membres et documents du projet', image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Kanban Board', description: 'Gestion visuelle des tâches en drag & drop', image: 'https://images.pexels.com/photos/3184170/pexels-photo-3184170.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Calendrier', description: 'Planning et échéances des tâches', image: 'https://images.pexels.com/photos/3380804/pexels-photo-3380804.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Équipe', description: 'Gestion des membres et permissions', image: 'https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg?auto=compress&cs=tinysrgb&w=600' }
      ],
      features: [
        'Collaboration en temps réel',
        'Système de notifications',
        'Partage de fichiers',
        'Graphiques de progression',
        'Export de rapports'
      ]
    },
    {
      id: 3,
      title: 'Réseau Social',
      description: 'Plateforme sociale avec posts, commentaires, likes et messagerie instantanée',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'WebRTC'],
      githubUrl: 'https://github.com',
      screenshots: [
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      pages: [
        { name: 'Feed', description: 'Fil d\'actualité avec posts et interactions', image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Profil', description: 'Page profil personnalisable avec bio et posts', image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Recherche', description: 'Recherche d\'utilisateurs et contenus', image: 'https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Messages', description: 'Messagerie instantanée et appels vidéo', image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Notifications', description: 'Centre de notifications en temps réel', image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Paramètres', description: 'Configuration du compte et confidentialité', image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600' }
      ],
      features: [
        'Upload d\'images et vidéos',
        'Système de likes et commentaires',
        'Appels vidéo intégrés',
        'Stories éphémères',
        'Mode sombre/clair'
      ]
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord analytique avec graphiques interactifs et exports de données',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'web',
      technologies: ['React', 'D3.js', '', 'FastAPI', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      screenshots: [
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      pages: [
        { name: 'Vue d\'ensemble', description: 'KPIs principaux et graphiques de synthèse', image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Analytics', description: 'Analyses détaillées avec filtres personnalisés', image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Rapports', description: 'Génération de rapports personnalisés', image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Utilisateurs', description: 'Analyse du comportement utilisateurs', image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Performance', description: 'Métriques de performance système', image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'Export', description: 'Export des données en différents formats', image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600' }
      ],
      features: [
        'Graphiques interactifs',
        'Filtres avancés',
        'Export PDF/Excel',
        'Alertes personnalisées',
        'API REST complète'
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
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
                      className="w-full h-full object-cover"
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
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
