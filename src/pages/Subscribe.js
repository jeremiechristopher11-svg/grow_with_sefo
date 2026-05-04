import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Youtube, Headphones, Mail, Check, ArrowRight, Play, Star } from 'lucide-react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
  };

  const platforms = [
    {
      icon: Youtube,
      name: "YouTube",
      description: "Regardez nos épisodes vidéo et abonnez-vous à la chaîne",
      color: "hover:text-red-500 hover:bg-red-500/10",
      action: "S'abonner",
    },
    {
      icon: Headphones,
      name: "Podcast Audio",
      description: "Écoutez tous nos épisodes sur votre plateforme préférée",
      color: "hover:text-brand-pink hover:bg-brand-pink/10",
      action: "Écouter",
    },
    {
      icon: Mail,
      name: "Newsletter",
      description: "Recevez les nouveaux épisodes directement dans votre inbox",
      color: "hover:text-brand-green hover:bg-brand-green/10",
      action: "S'inscrire",
    },
  ];

  const benefits = [
    "Accès anticipé aux nouveaux épisodes",
    "Notifications des live FAS A FAS",
    "Contenu exclusif réservé aux abonnés",
    "Participation aux sondets et concours",
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-pink/20 text-brand-pink text-sm font-medium mb-6">
            <Star size={16} fill="currentColor" />
            <span>Rejoignez la communauté</span>
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            S'abonner à <span className="gradient-text">Grow With Sepho</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ne manquez plus aucun épisode ! Abonnez-vous pour recevoir les dernières 
            actualités et accéder à du contenu exclusif.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-light/30">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-white mb-8">
              Avantages de l'<span className="text-brand-pink">abonnement</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-pink/20 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-brand-pink" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-12">
            Choisissez votre <span className="text-brand-pink">plateforme</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="glass-card p-8 text-center group cursor-pointer hover:scale-[1.02] transition-transform duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 transition-colors ${platform.color}`}>
                  <platform.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{platform.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{platform.description}</p>
                <button className={`px-6 py-2 rounded-full text-sm font-medium border border-white/20 transition-colors ${platform.color} hover:border-transparent`}>
                  {platform.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light/30">
        <div className="max-w-2xl mx-auto text-center">
          <Mail size={48} className="text-brand-pink mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Newsletter <span className="text-brand-pink">mensuelle</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Recevez un résumé des derniers épisodes et des annonces exclusives.
          </p>

          {subscribed ? (
            <div className="glass-card p-6">
              <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center mx-auto mb-4">
                <Check size={24} className="text-brand-green" />
              </div>
              <p className="text-white font-medium">Merci pour votre inscription !</p>
              <p className="text-gray-400 text-sm mt-2">Vérifiez votre boîte mail pour confirmer.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-pink transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-brand-pink hover:bg-brand-pink-light text-white font-medium rounded-full transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>S'inscrire</span>
                <ArrowRight size={18} />
              </button>
            </form>
          )}

          <p className="text-gray-500 text-sm mt-4">
            En vous inscrivant, vous acceptez notre politique de confidentialité. 
            Désinscription possible à tout moment.
          </p>
        </div>
      </section>

      {/* Latest Episode CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Découvrez notre <span className="text-brand-pink">dernier épisode</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Écoutez maintenant et plongez dans l'univers Grow With Sepho.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <NavLink
                to="/episodes"
                className="px-8 py-3 bg-brand-pink hover:bg-brand-pink-light text-white font-medium rounded-full transition-all duration-300 flex items-center space-x-2"
              >
                <Play size={18} fill="currentColor" />
                <span>Écouter l'épisode</span>
              </NavLink>
              <NavLink
                to="/episodes"
                className="px-8 py-3 border border-white/20 hover:border-brand-pink text-white hover:text-brand-pink font-medium rounded-full transition-all duration-300 flex items-center space-x-2"
              >
                <span>Voir tous les épisodes</span>
                <ArrowRight size={18} />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
