import React from 'react';
import { Mic, Award, Heart, Users, Quote } from 'lucide-react';

const Host = () => {
  const achievements = [
    { icon: Mic, value: "50+", label: "Épisodes animés" },
    { icon: Users, value: "10K+", label: "Auditeurs fidèles" },
    { icon: Award, value: "3", label: "Années d'expérience" },
    { icon: Heart, value: "100%", label: "Passion" },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-pink/30 to-violet-500/30">
                  <img
                    src="/images/sephora.jpg"
                    alt="Sepho - Animatrice Grow With Sepho"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 glass-card px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-brand-pink flex items-center justify-center">
                      <Mic size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Animatrice</p>
                      <p className="text-gray-400 text-sm">Grow With Sepho</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 rounded-full bg-brand-pink/20 text-brand-pink text-sm font-medium mb-6">
                L'animatrice
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Découvrez <span className="gradient-text">Sepho</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Passionnée par le développement personnel et les connexions humaines, 
                Sepho a créé ce podcast pour partager des histoires qui inspirent et 
                encouragent la croissance.
              </p>
              
              <p className="text-gray-400 leading-relaxed mb-8">
                Animatrice charismatique et à l'écoute, elle sait créer une atmosphère 
                bienveillante où ses invités se sentent à l'aise pour partager leurs 
                expériences les plus profondes. Chaque conversation est une opportunité 
                d'apprendre et de s'inspirer.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="glass-card p-4">
                    <achievement.icon size={24} className="text-brand-pink mb-2" />
                    <div className="text-2xl font-bold text-white">{achievement.value}</div>
                    <div className="text-gray-400 text-sm">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light/30">
        <div className="max-w-4xl mx-auto text-center">
          <Quote size={48} className="text-brand-pink mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-display font-medium text-white leading-relaxed mb-6">
            "Chaque personne que j'accueille sur ce podcast a une histoire unique 
            et précieuse. Mon rôle est de créer l'espace pour que ces histoires 
            puissent inspirer d'autres personnes à oser grandir."
          </blockquote>
          <p className="text-brand-pink font-medium">— Sepho</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-12">
            Sa <span className="text-brand-pink">philosophie</span>
          </h2>
          
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-white mb-4">L'authenticité avant tout</h3>
              <p className="text-gray-400 leading-relaxed">
                Sepho croit fermement que la véritable croissance commence lorsqu'on 
                accepte d'être soi-même, avec nos forces et nos vulnérabilités. C'est 
                cette authenticité qui crée les connexions les plus profondes.
              </p>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Chaque histoire compte</h3>
              <p className="text-gray-400 leading-relaxed">
                Qu'il s'agisse d'un succès retentissant ou d'un échec transformé en 
                leçon, chaque expérience de vie a une valeur inestimable. Sepho 
                considère ses invités comme des professeurs de vie.
              </p>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Grandir ensemble</h3>
              <p className="text-gray-400 leading-relaxed">
                Le podcast n'est pas seulement une plateforme, c'est une communauté. 
                Sepho encourage l'entraide et le partage entre auditeurs pour créer 
                un mouvement de croissance collective.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Host;
