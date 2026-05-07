import { TESTIMONIALS } from "../constants";

export default function Testimonials() {
  return (
    <section id="testimonial" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">What Clients <span className="text-green-400">Say</span></h2>
          <p className="text-gray-400">Real words from real creators who leveled up their content.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card glass rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center text-black font-bold text-sm">{t.avatar}</div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => <span key={j} className="text-green-400 text-sm">★</span>)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
