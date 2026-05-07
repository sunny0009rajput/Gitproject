import weddingFilms from '../data/wedding.json';
import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function WeddingFilmsGallery() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <section className="py-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {weddingFilms.map((film) => (
          <Link
            key={film.id}
            href={`/films/${film.slug}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded shadow-lg">
              <div className="relative aspect-[4/3]">
                <Image
                  src={film.thumbnail}
                  alt={film.couple}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Play className="fill-black ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white">
                <h3 className="text-xl">{film.couple}</h3>
                <p className="text-sm text-gray-500">
                  {film.date} • {film.location}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
