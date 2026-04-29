import React, { useState } from 'react';
import { Calendar, MapPin, Users, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const eventImages = [
    { id: 1, src: "/images-events-pass/FB_IMG_1776822749295.jpg", title: "Événement 1", date: "2024" },
    { id: 2, src: "/images-events-pass/FB_IMG_1776822756889.jpg", title: "Événement 2", date: "2024" },
    { id: 3, src: "/images-events-pass/FB_IMG_1776822767384.jpg", title: "Événement 3", date: "2024" },
    { id: 4, src: "/images-events-pass/FB_IMG_1776822779863.jpg", title: "Événement 4", date: "2024" },
    { id: 5, src: "/images-events-pass/FB_IMG_1776822785745.jpg", title: "Événement 5", date: "2024" },
    { id: 6, src: "/images-events-pass/FB_IMG_1776822797120.jpg", title: "Événement 6", date: "2024" },
    { id: 7, src: "/images-events-pass/FB_IMG_1776822804265.jpg", title: "Événement 7", date: "2024" },
    { id: 8, src: "/images-events-pass/FB_IMG_1776822813175.jpg", title: "Événement 8", date: "2024" },
    { id: 9, src: "/images-events-pass/FB_IMG_1776822825480.jpg", title: "Événement 9", date: "2024" },
    { id: 10, src: "/images-events-pass/FB_IMG_1776822832250.jpg", title: "Événement 10", date: "2024" },
    { id: 11, src: "/images-events-pass/FB_IMG_1776822851665.jpg", title: "Événement 11", date: "2024" },
    { id: 12, src: "/images-events-pass/FB_IMG_1776822874021.jpg", title: "Événement 12", date: "2024" },
    { id: 13, src: "/images-events-pass/FB_IMG_1776822878727.jpg", title: "Événement 13", date: "2024" },
    { id: 14, src: "/images-events-pass/FB_IMG_1776822880793.jpg", title: "Événement 14", date: "2024" },
    { id: 15, src: "/images-events-pass/FB_IMG_1776822885149.jpg", title: "Événement 15", date: "2024" },
    { id: 16, src: "/images-events-pass/FB_IMG_1776822885851.jpg", title: "Événement 16", date: "2024" },
    { id: 17, src: "/images-events-pass/FB_IMG_1776822887749.jpg", title: "Événement 17", date: "2024" },
    { id: 18, src: "/images-events-pass/FB_IMG_1776822891599.jpg", title: "Événement 18", date: "2024" },
    { id: 19, src: "/images-events-pass/FB_IMG_1776822894142.jpg", title: "Événement 19", date: "2024" },
    { id: 20, src: "/images-events-pass/FB_IMG_1776822896308.jpg", title: "Événement 20", date: "2024" },
    { id: 21, src: "/images-events-pass/FB_IMG_1776822898364.jpg", title: "Événement 21", date: "2024" },
    { id: 22, src: "/images-events-pass/FB_IMG_1776823053563.jpg", title: "Événement 22", date: "2024" },
    { id: 23, src: "/images-events-pass/FB_IMG_1776823074290.jpg", title: "Événement 23", date: "2024" },
    { id: 24, src: "/images-events-pass/FB_IMG_1776823096708.jpg", title: "Événement 24", date: "2024" },
    { id: 25, src: "/images-events-pass/FB_IMG_1776823256176.jpg", title: "Événement 25", date: "2024" },
    { id: 26, src: "/images-events-pass/FB_IMG_1776823295046.jpg", title: "Événement 26", date: "2024" },
    { id: 27, src: "/images-events-pass/FB_IMG_1776823341614.jpg", title: "Événement 27", date: "2024" },
    { id: 28, src: "/images-events-pass/FB_IMG_1776823359104.jpg", title: "Événement 28", date: "2024" },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Live FAS A FAS - Épisode 4",
      date: "Dimanche 5 Juillet 2026",
      time: "19h00",
      location: "YouTube Live",
      attendees: "En ligne",
      description: "Rejoignez-nous pour un nouveau débat en direct sur un sujet d'intérêt public.",
    },
    {
      id: 2,
      title: "Atelier Croissance Personnelle",
      date: "Samedi 12 Juillet 2026",
      time: "14h00 - 17h00",
      location: "Douala, Cameroun",
      attendees: "50 personnes",
      description: "Un atelier interactif pour développer votre confiance en vous.",
    },
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(eventImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? eventImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(eventImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === eventImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(eventImages[newIndex]);
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-brand-pink/20 text-brand-pink text-sm font-medium mb-6">
            <Calendar size={16} className="inline mr-2" />
            Nos événements
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Galerie <span className="gradient-text">événements</span>
          </h1>
          <p className="text-xl text-gray-400">
            Revivez les moments forts de nos rencontres, émissions et événements spéciaux.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-light/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center text-white mb-12">
            Prochains <span className="text-brand-pink">événements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="glass-card p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400 text-sm">{event.description}</p>
                  </div>
                  <span className="px-3 py-1 bg-brand-pink/20 text-brand-pink text-xs font-medium rounded-full">
                    À venir
                  </span>
                </div>

                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-brand-pink" />
                    <span>{event.date} à {event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-brand-pink" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={16} className="text-brand-pink" />
                    <span>{event.attendees}</span>
                  </div>
                </div>

                <button className="mt-4 w-full py-3 bg-brand-pink hover:bg-brand-pink-light text-white font-medium rounded-full transition-colors">
                  S'inscrire
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center text-white mb-4">
            Moments <span className="text-brand-pink">capturés</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Cliquez sur une image pour l'agrandir
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {eventImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-sm font-medium">{image.title}</p>
                    <p className="text-gray-300 text-xs">{image.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={24} />
          </button>

          {/* Previous button */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next button */}
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[80vh] px-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="text-center mt-4">
              <p className="text-white font-medium">{selectedImage.title}</p>
              <p className="text-gray-400 text-sm">
                {currentIndex + 1} / {eventImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
