import React, { useState } from 'react';
import { Play, Calendar, Search, Filter } from 'lucide-react';

const Episodes = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Tous', 'Développement', 'Relations', 'Carrière', 'Bien-être', 'Fas A Fas'];

  const episodes = [
    {
      id: 1,
      title: "Comment surmonter l'insécurité et rayonner avec confiance",
      description: "Explorez les racines de l'insécurité et découvrez des stratégies pour développer une confiance authentique.",
      duration: "45 min",
      date: "15 Avril 2024",
      category: "Développement",
      episode: "EP. 52",
      featured: true,
    },
    {
      id: 2,
      title: "Les clés d'une relation amoureuse épanouie",
      description: "Découvrez les secrets pour cultiver une relation durable et satisfaisante.",
      duration: "38 min",
      date: "8 Avril 2024",
      category: "Relations",
      episode: "EP. 51",
      featured: false,
    },
    {
      id: 3,
      title: "Réinventer sa carrière après 30 ans",
      description: "Comment pivoter professionnellement et trouver sa véritable vocation.",
      duration: "42 min",
      date: "1 Avril 2024",
      category: "Carrière",
      episode: "EP. 50",
      featured: false,
    },
    {
      id: 4,
      title: "La méditation pour les débutants",
      description: "Guide pratique pour intégrer la méditation dans votre quotidien.",
      duration: "35 min",
      date: "25 Mars 2024",
      category: "Bien-être",
      episode: "EP. 49",
      featured: false,
    },
    {
      id: 5,
      title: "FAS A FAS : L'éducation en débat",
      description: "Deux experts confrontent leurs visions sur l'avenir de l'éducation.",
      duration: "55 min",
      date: "18 Mars 2024",
      category: "Fas A Fas",
      episode: "FAS. 03",
      featured: false,
    },
    {
      id: 6,
      title: "Sortir de sa zone de confort",
      description: "Pourquoi et comment repousser ses limites pour grandir.",
      duration: "40 min",
      date: "11 Mars 2024",
      category: "Développement",
      episode: "EP. 48",
      featured: false,
    },
  ];

  const filteredEpisodes = episodes.filter(episode => {
    const matchesCategory = selectedCategory === 'Tous' || episode.category === selectedCategory;
    const matchesSearch = episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         episode.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Tous nos <span className="gradient-text">épisodes</span>
          </h1>
          <p className="text-xl text-gray-400">
            Découvrez notre collection d'épisodes inspirants pour votre croissance personnelle
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-primary-light/30 sticky top-20 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un épisode..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-pink"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-brand-pink text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEpisodes.map((episode) => (
              <div key={episode.id} className="glass-card overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-brand-pink/20 to-violet-500/20 flex items-center justify-center">
                  <button className="w-14 h-14 rounded-full bg-brand-pink/80 hover:bg-brand-pink flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Play size={24} fill="white" className="text-white ml-1" />
                  </button>
                  
                  {episode.featured && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-brand-green text-primary-dark text-xs font-bold rounded">
                      À LA UNE
                    </span>
                  )}

                  <span className="absolute bottom-3 right-3 px-2 py-1 bg-primary/80 text-white text-xs rounded">
                    {episode.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-brand-pink font-medium">{episode.episode}</span>
                    <span className="text-xs text-gray-500">{episode.category}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-brand-pink transition-colors">
                    {episode.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {episode.description}
                  </p>
                  
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar size={14} className="mr-1" />
                    <span>{episode.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEpisodes.length === 0 && (
            <div className="text-center py-20">
              <Filter size={48} className="mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400">Aucun épisode trouvé pour cette recherche</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Episodes;
