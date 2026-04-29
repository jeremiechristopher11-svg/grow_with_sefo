import React from 'react';
import { NavLink } from 'react-router-dom';
import { Youtube, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Accueil', path: '/' },
        { label: 'Épisodes', path: '/episodes' },
        { label: 'À propos', path: '/a-propos' },
        { label: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Ressources',
      links: [
        { label: 'Fas A Fas', path: '/fas-a-fas' },
        { label: "L'animatrice", path: '/animatrice' },
        { label: 'Blog', path: '#' },
        { label: 'Newsletter', path: '/subscribe' },
      ],
    },
    {
      title: 'Légal',
      links: [
        { label: 'Mentions légales', path: '#' },
        { label: 'Politique de confidentialité', path: '#' },
        { label: 'CGU', path: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-primary-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <NavLink to="/" className="inline-block">
              <img
                src="/images/logo.jpg"
                alt="Grow With Sepho"
                className="h-10 w-auto rounded-lg"
              />
            </NavLink>
            <p className="mt-4 text-gray-400 text-sm max-w-sm">
              Un podcast inspirant dédié à votre croissance personnelle. 
              Découvrez des conversations authentiques pour devenir la meilleure version de vous-même.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-brand-pink hover:bg-brand-pink/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.path}
                      className="text-gray-400 hover:text-brand-pink transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {currentYear} Grow With Sepho. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-2 text-gray-500 text-sm">
            <Mail size={16} />
            <span>contact@growwithsepho.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
