import React from 'react';
import { Heart, Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authenticité",
      description: "Nous croyons en des conversations réelles et sincères, sans filtre ni artifice."
    },
    {
      icon: Target,
      title: "Croissance",
      description: "Chaque épisode est conçu pour vous aider à devenir la meilleure version de vous-même."
    },
    {
      icon: Lightbulb,
      title: "Inspiration",
      description: "Nous partageons des histoires et des idées qui inspirent l'action positive."
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Nous construisons une communauté solidaire où chacun peut s'épanouir."
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-brand-pink/20 text-brand-pink text-sm font-medium mb-6">
            Notre Mission
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            À propos de <span className="gradient-text">Grow With Sepho</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Un espace dédié à la croissance personnelle, où chaque conversation 
            est une opportunité d'apprendre, de s'inspirer et de progresser ensemble.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-light/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card aspect-video flex items-center justify-center">
              <span className="text-gray-500">Image de l'animatrice</span>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Grow With Sepho est né d'une vision simple : créer un espace où les conversations 
                  authentiques peuvent transformer des vies. Fondé par Sepho, passionnée par le 
                  développement personnel et les connexions humaines, ce podcast est devenu une 
                  référence pour tous ceux qui cherchent à grandir.
                </p>
                <p>
                  Depuis nos débuts modestes, nous avons accueilli des centaines d'invités inspirants 
                  et touché des milliers d'auditeurs à travers le monde. Chaque épisode est une 
                  célébration de la résilience, du courage et de la capacité humaine à se dépasser.
                </p>
                <p>
                  Notre nouvelle série "FAS A FAS" représente une évolution naturelle de notre 
                  mission : créer des dialogues constructifs sur les sujets qui divisent, pour 
                  mieux nous unir dans la compréhension mutuelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Nos Valeurs
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Les principes qui guident chaque épisode et chaque conversation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-brand-pink/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-brand-pink" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-light/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-pink mb-2">50+</div>
              <div className="text-gray-400">Épisodes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-green mb-2">30+</div>
              <div className="text-gray-400">Invités</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-pink mb-2">10K+</div>
              <div className="text-gray-400">Auditeurs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-green mb-2">3</div>
              <div className="text-gray-400">Années d'existence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
