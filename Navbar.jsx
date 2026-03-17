import { Link, useLocation } from "react-router-dom";

/**
 * Navbar — minimal top bar with logo and nav links.
 */
export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `text-sm font-medium transition-colors duration-200 ${
      pathname === path
        ? "text-teal-300"
        : "text-slate-300 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🧪</span>
          <span className="text-lg font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
            AR ChemLab
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/viewer" className={linkClass("/viewer")}>Lab</Link>
        </div>
      </div>
    </nav>
  );
}
