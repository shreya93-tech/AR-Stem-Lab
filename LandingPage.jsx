import { Link } from "react-router-dom";

/**
 * LandingPage — hero section explaining AR ChemLab with a CTA.
 */
export default function LandingPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="hero-gradient min-h-[85vh] flex items-center justify-center text-center text-white px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Icon */}
          <div className="text-7xl animate-bounce">🔬</div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            AR STEM Lab
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-teal-200 font-medium">
            Visualize STEM Topics in augmented reality
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-lg mx-auto leading-relaxed">
            Place and explore 3D STEM Topics in AR — directly from
            your browser.Perfect for students,
            teachers, and curious minds.
          </p>

          {/* CTA */}
          <Link
  to="/viewer"
  className="inline-flex items-center gap-2 px-10 py-10 
  bg-gradient-to-r from-teal-400 to-cyan-500 
  hover:from-teal-500 hover:to-cyan-600
  text-white font-semibold 
  rounded-md shadow-lg 
  transition-all duration-300 
  hover:scale-50"
>
  🚀Launch
</Link>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7.5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-9 text-center justify-items-center">
          <FeatureCard
            icon="🧬"
            title="Interactive 3D"
            desc="Rotate, zoom, and inspect STEM topics from every angle."
          />
          <FeatureCard
            icon="📱"
            title="AR Ready"
            desc="Place structures on your desk with one tap on supported devices."
          />
          <FeatureCard
            icon="🎓"
            title="Learn & Quiz"
            desc="Read concept cards and test your knowledge with quick quizzes."
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-teal-50 border border-teal-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-slate-800 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}