import React from 'react';

import { Play, Calendar, Clock, Users, Scale, Target, HeartHandshake, ArrowRight } from 'lucide-react';

const Home = () => {
  // Featured episode data
  const featuredEpisode = {
    title: "Comment surmonter l'insécurité et rayonner avec confiance",
    description: "Explorez les racines de l'insécurité et découvrez des stratégies pour développer une confiance authentique.",
    duration: "45 min",
    date: "15 Avril 2024",
    views: "2.3K",
    episode: "EP. 52",
  };

  // YouTube videos
  const youtubeVideos = [
    {
      id: 1,
      title: "Grow With Sepho - K9",
      description: "Une conversation inspirante avec K9 sur la détermination et la croissance.",
      duration: "45 min",
      guest: "DJ K9",
      thumbnail: "k9",
    },
    {
      id: 2,
      title: "Grow With Sepho - Tafa",
      description: "Discussion enrichissante avec Tafa sur la motivation et l'atteinte des objectifs.",
      duration: "52 min",
      guest: "TAFA MI-SOLEIL",
      thumbnail: "tafa",
    },
    {
      id: 3,
      title: "Grow With Sepho - Gaelle",
      description: "Échange authentique sur la confiance en soi et la persévérance.",
      duration: "38 min",
      guest: "GAELLE",
      thumbnail: "gaelle",
    },
  ];

  // Categories
  const categories = [
    { name: "Tous", active: true },
    { name: "Développement", active: false },
    { name: "Relations", active: false },
    { name: "Carrière", active: false },
    { name: "Bien-être", active: false },
  ];

  // Fas A Fas features
  const fasAFasFeatures = [
    {
      icon: Users,
      title: "Deux Opinions",
      description: "Deux personnes aux perspectives différentes confrontent leurs idées sur un même sujet.",
    },
    {
      icon: Scale,
      title: "Débat Équilibré",
      description: "Un espace d'expression respectueuse où chaque opinion est entendue et valorisée.",
    },
    {
      icon: Target,
      title: "Sujets d'Intérêt Public",
      description: "Des thématiques qui touchent notre société et impactent notre quotidien.",
    },
    {
      icon: HeartHandshake,
      title: "Échange Constructif",
      description: "Une conversation qui vise à comprendre et éclairer plutôt que convaincre à tout prix.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary-light to-primary pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
            <span className="text-sm text-gray-300">Nouveau podcast disponible</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
            <span className="text-white">Grow With </span>
            <span className="gradient-text">Sepho</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Un podcast inspirant dédié à votre croissance personnelle. Découvrez 
            des conversations authentiques pour devenir la meilleure version de vous-même.
          </p>

          {/* Fas A Fas Card */}
          <div className="glass-card max-w-2xl mx-auto p-6 md:p-8 mt-12">
            <div className="flex items-center justify-center space-x-2 text-brand-pink mb-4">
              <Calendar size={18} />
              <span className="text-sm font-medium uppercase tracking-wider">Nouvelle Série</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
              FAS A FAS <span className="text-brand-pink">WITH SEFO</span>
            </h2>
            <p className="text-gray-300 mb-4">
              Première émission : <span className="text-brand-pink font-semibold">Dimanche 3 Mai 2026 à 19h00</span>
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
              <Users size={16} />
              <span>En direct sur la chaine YouTube Grow With Sepho</span>
            </div>
            <p className="text-gray-500 text-xs mt-2">Disponible chaque premier dimanche du mois</p>
          </div>
        </div>
      </section>

      {/* Featured Episode Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-brand-green text-primary-dark text-xs font-bold rounded-full flex items-center space-x-1">
                    <span>★</span>
                    <span>À la une</span>
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full">
                    {featuredEpisode.episode}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4 leading-tight">
                  {featuredEpisode.title}
                </h2>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {featuredEpisode.description}
                </p>

                <div className="flex items-center space-x-6 text-gray-400 text-sm mb-8">
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{featuredEpisode.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{featuredEpisode.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={16} />
                    <span>{featuredEpisode.views}</span>
                  </div>
                </div>

                <button className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-pink hover:bg-brand-pink-light text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-pink/30 w-fit">
                  <Play size={18} fill="currentColor" />
                  <span>Écouter l'épisode</span>
                </button>
              </div>

              {/* Video Thumbnail */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-brand-pink/20 to-brand-green/20 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-brand-pink hover:bg-brand-pink-light flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-brand-pink/50">
                  <Play size={32} fill="white" className="text-white ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-brand-pink text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">
              <Play size={16} fill="currentColor" />
              <span>SUR YOUTUBE</span>
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-4">
            Épisodes vidéo avec <span className="text-brand-pink">nos invités</span>
          </h2>

          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Découvrez nos conversations en vidéo sur YouTube. Cliquez pour regarder !
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeVideos.map((video) => (
              <div
                key={video.id}
                className="glass-card overflow-hidden group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-brand-pink/30 to-violet-500/30 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  
                  {/* Guest badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    AVEC {video.guest}
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 px-2 py-1 bg-primary/80 rounded text-xs font-medium text-white">
                    {video.duration}
                  </div>

                  {/* Play button */}
                  <button className="relative w-14 h-14 rounded-full bg-brand-pink/90 hover:bg-brand-pink flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
                    <Play size={24} fill="white" className="text-white ml-1" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-pink transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fas A Fas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {fasAFasFeatures.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-pink to-violet-500 flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Devenez un <span className="text-brand-pink">Intervenant</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Vous avez une opinion forte sur un sujet d'intérêt public ? Vous aimez défendre 
              vos idées tout en respectant celles des autres ? Rejoignez FAS A FAS et participez 
              à un débat enrichissant !
            </p>
          </div>

          {/* What is Fas A Fas */}
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  C'est quoi <span className="text-brand-pink">FAS</span>
                  <span className="text-white">A</span>
                  <span className="text-brand-pink">FAS</span> ?
                </h3>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    <span className="text-brand-pink font-semibold">FAS A FAS</span> est une session de débat 
                    innovante du podcast <span className="text-brand-pink">Grow With Sepho</span>. Le concept 
                    est simple mais puissant : mettre en face deux personnes ayant des opinions 
                    différentes sur le même sujet d'intérêt public.
                  </p>
                  <p>
                    L'objectif n'est pas de déterminer qui a raison, mais d'explorer les nuances, 
                    les arguments de chaque côté et d'offrir aux auditeurs une compréhension plus 
                    riche et complète des enjeux qui façonnent notre monde.
                  </p>
                  <p>
                    Animée par Sepho, cette série promet des échanges passionnants, respectueux 
                    et enrichissants où la diversité des points de vue est célébrée comme une 
                    opportunité d'apprentissage mutuel.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="glass-card p-8 text-center">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-violet-500/30 border-2 border-violet-400 flex items-center justify-center">
                      <Users size={28} className="text-violet-300" />
                    </div>
                    <span className="text-2xl font-bold text-brand-pink">VS</span>
                    <div className="w-16 h-16 rounded-full bg-brand-pink/30 border-2 border-brand-pink flex items-center justify-center">
                      <Users size={28} className="text-brand-pink" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Deux opinions</h4>
                  <p className="text-gray-400 text-sm mb-4">Un même sujet</p>
                  <p className="text-brand-pink text-sm font-medium">Un débat enrichissant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Gallery Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Nos <span className="text-brand-pink">événements</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Revivez les moments forts de nos rencontres et émissions
            </p>
            <a
              href="/evenements"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-pink hover:bg-brand-pink-light text-white font-medium rounded-full transition-all duration-300"
            >
              <span>Voir tous les événements</span>
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Gallery Grid - Preview */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "/images-events-pass/FB_IMG_1776822749295.jpg",
              "/images-events-pass/FB_IMG_1776822756889.jpg",
              "/images-events-pass/FB_IMG_1776822767384.jpg",
              "/images-events-pass/FB_IMG_1776822779863.jpg",
              "/images-events-pass/FB_IMG_1776822785745.jpg",
              "/images-events-pass/FB_IMG_1776822797120.jpg",
            ].map((src, index) => (
              <a
                key={index}
                href="/evenements"
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <img
                  src={src}
                  alt={`Événement ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-pink/0 group-hover:bg-brand-pink/20 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
