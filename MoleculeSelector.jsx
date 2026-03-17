/**
 * MoleculeSelector — horizontal pill selector for switching models.
 */
export default function MoleculeSelector({ models, activeId, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {models.map((m) => (
        <button
          key={m.id}
          onClick={() => onSelect(m.id)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border
            ${
              activeId === m.id
                ? "pill-active border-transparent"
                : "bg-white border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-700"
            }`}
        >
          {m.name}
          <span className="ml-1 opacity-60">{m.formula}</span>
        </button>
      ))}
    </div>
  );
}
