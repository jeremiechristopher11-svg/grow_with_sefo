import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Youtube, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@growwithsepho.com",
      href: "mailto:contact@growwithsepho.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+237 6XX XXX XXX",
      href: "tel:+2376XXXXXXXX",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Douala, Cameroun",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Contactez-<span className="gradient-text">nous</span>
          </h1>
          <p className="text-xl text-gray-400">
            Une question, une suggestion ou envie de collaborer ? Nous sommes à votre écoute.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-light/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Restons en <span className="text-brand-pink">contact</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Nous aimons recevoir vos messages. Que vous souhaitiez proposer un sujet, 
                devenir invité, ou simplement nous dire bonjour, notre équipe vous répondra 
                dans les plus brefs délais.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="glass-card p-4 flex items-center space-x-4 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-pink/20 flex items-center justify-center group-hover:bg-brand-pink/30 transition-colors">
                      <info.icon size={24} className="text-brand-pink" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-pink hover:bg-brand-pink/10 transition-all"
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-brand-green/20 flex items-center justify-center mx-auto mb-4">
                    <Send size={32} className="text-brand-green" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Message envoyé !</h3>
                  <p className="text-gray-400">Merci de nous avoir contactés. Nous vous répondrons bientôt.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-brand-pink/20 text-brand-pink rounded-full hover:bg-brand-pink/30 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-pink transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Votre email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-pink transition-colors"
                      placeholder="jean@exemple.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-pink transition-colors"
                    >
                      <option value="" className="bg-primary">Choisir un sujet</option>
                      <option value="invitation" className="bg-primary">Proposer un invité</option>
                      <option value="sujet" className="bg-primary">Suggérer un sujet</option>
                      <option value="partenariat" className="bg-primary">Proposition de partenariat</option>
                      <option value="fasafas" className="bg-primary">Participer à FAS A FAS</option>
                      <option value="autre" className="bg-primary">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Votre message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-pink transition-colors resize-none"
                      placeholder="Écrivez votre message ici..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-pink hover:bg-brand-pink-light disabled:opacity-50 text-white font-medium rounded-full transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <span>Envoyer le message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
