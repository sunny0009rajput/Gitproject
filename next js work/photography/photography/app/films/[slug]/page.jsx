'use client';

import weddingFilms from '../../data/wedding.json';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Play } from 'lucide-react';

export default function FilmDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug)
    ? params.slug[0]
    : params.slug;

  const film = weddingFilms.find(f => f.slug === slug);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!film) return <div className="p-20 text-center">Not found</div>;

  const getYoutubeId = (url) => {
  const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const youtubeId = getYoutubeId(film.youtubeUrl);


  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* Back Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full hover:bg-white/20 transition"
      >
        <ArrowLeft size={18} /> Back
      </Link>

      {/* HERO VIDEO */}
      {/* HERO VIDEO */}
<section className="relative w-full">

  {/* Video */}
  <div className="w-full aspect-video">
    {!isPlaying ? (
      <div
        onClick={() => setIsPlaying(true)}
        className="w-full h-full bg-black flex items-center justify-center cursor-pointer group"
      >
        <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition">
          <Play className="fill-black ml-1" size={36} />
        </div>
      </div>
    ) : (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    )}
  </div>

  {/* Info */}
  <div className="
    md:absolute md:bottom-0 md:left-0 md:w-full
    bg-black md:bg-gradient-to-t md:from-black/90 md:to-transparent
    p-6 md:p-10
  ">
    <h1 className="text-2xl md:text-5xl font-light">
      {film.couple}
    </h1>
    <p className="text-gray-400 mt-2">
      {film.date} • {film.location}
    </p>
  </div>

</section>


      {/* DESCRIPTION */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <p className="text-lg text-gray-300 leading-relaxed">
          {film.description}
        </p>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl mb-8 text-center">Moments</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {film.gallery.map((img) => (
            <div
              key={img.id}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={img.url}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
