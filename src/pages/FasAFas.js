import React from 'react';
import { Users, Scale, Target, HeartHandshake, Calendar, ArrowRight, Play } from 'lucide-react';

const FasAFas = () => {
  const features = [
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

  const upcomingDebates = [
    {
      id: 1,
      topic: "L'éducation : Tradition vs Innovation",
      date: "Dimanche 3 Mai 2026",
      time: "19h00",
      debater1: "Dr. Marie Dupont",
      debater2: "Jean Kabongo",
      description: "Un débat passionnant sur l'avenir de l'éducation en Afrique.",
    },
    {
      id: 2,
      topic: "Entrepreneuriat : Risque ou Sécurité ?",
      date: "Dimanche 7 Juin 2026",
      time: "19h00",
      debater1: "Sarah Mensah",
      debater2: "Paul Eba",
      description: "Deux visions du succès professionnel s'affrontent.",
    },
  ];

  const pastDebates = [
    {
      id: 1,
      topic: "La technologie nous rapproche-t-elle ?",
      duration: "52 min",
      views: "5.2K",
    },
    {
      id: 2,
      topic: "Le travail à distance est-il l'avenir ?",
      duration: "48 min",
      views: "4.8K",
    },
    {
      id: 3,
      topic: "Faut-il toujours pardonner ?",
      duration: "55 min",
      views: "6.1K",
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-pink/20 text-brand-pink text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
            <span>Nouvelle Série</span>
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
            <span className="text-brand-pink">FAS</span>
            <span className="text-white">A</span>
            <span className="text-brand-pink">FAS</span>
            <span className="block text-3xl md:text-4xl mt-4 text-gray-400">WITH SEFO</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Deux opinions, un même sujet, un débat enrichissant. 
            Découvrez les nuances des sujets qui divisent notre société.
          </p>
        </div>
      </section>

      {/* What is Fas A Fas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-light/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                C'est quoi <span className="text-brand-pink">FAS</span>
                <span className="text-white">A</span>
                <span className="text-brand-pink">FAS</span> ?
              </h2>

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
                  <div className="w-20 h-20 rounded-full bg-violet-500/30 border-2 border-violet-400 flex items-center justify-center">
                    <Users size={36} className="text-violet-300" />
                  </div>
                  <span className="text-3xl font-bold text-brand-pink">VS</span>
                  <div className="w-20 h-20 rounded-full bg-brand-pink/30 border-2 border-brand-pink flex items-center justify-center">
                    <Users size={36} className="text-brand-pink" />
                  </div>
                </div>
                <h4 className="text-2xl font-semibold text-white mb-2">Deux opinions</h4>
                <p className="text-gray-400 mb-4">Un même sujet</p>
                <p className="text-brand-pink font-medium">Un débat enrichissant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Les piliers de <span className="text-brand-pink">FAS A FAS</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Les valeurs qui guident chaque débat
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-pink to-violet-500 flex items-center justify-center mb-4">
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Debates */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-12">
            Prochains <span className="text-brand-pink">débats</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingDebates.map((debate) => (
              <div key={debate.id} className="glass-card p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-brand-pink/20 flex items-center justify-center flex-shrink-0">
                    <Calendar size={28} className="text-brand-pink" />
                  </div>
                  <div>
                    <span className="text-brand-pink text-sm font-medium">
                      {debate.date} à {debate.time}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-1">
                      {debate.topic}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{debate.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-400">{debate.debater1}</span>
                    <span className="text-brand-pink font-bold">VS</span>
                    <span className="text-sm text-gray-400">{debate.debater2}</span>
                  </div>
                  <button className="px-4 py-2 bg-brand-pink/20 hover:bg-brand-pink/30 text-brand-pink rounded-full text-sm font-medium transition-colors">
                    Rappel-moi
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Debates */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-12">
            Débats <span className="text-brand-pink">précédents</span>
          </h2>

          <div className="space-y-4">
            {pastDebates.map((debate) => (
              <div key={debate.id} className="glass-card p-6 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <button className="w-12 h-12 rounded-full bg-brand-pink/20 group-hover:bg-brand-pink flex items-center justify-center transition-colors">
                    <Play size={20} className="text-brand-pink group-hover:text-white ml-1" />
                  </button>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-brand-pink transition-colors">
                      {debate.topic}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                      <span>{debate.duration}</span>
                      <span>{debate.views} vues</span>
                    </div>
                  </div>
                </div>
                <ArrowRight size={20} className="text-gray-500 group-hover:text-brand-pink transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Devenez un <span className="text-brand-pink">Intervenant</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Vous avez une opinion forte sur un sujet d'intérêt public ? Vous aimez défendre 
            vos idées tout en respectant celles des autres ? Rejoignez FAS A FAS et participez 
            à un débat enrichissant !
          </p>
          <button className="px-8 py-4 bg-brand-pink hover:bg-brand-pink-light text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-pink/30">
            Postuler comme intervenant
          </button>
        </div>
      </section>
    </div>
  );
};

export default FasAFas;
