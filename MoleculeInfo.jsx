/**
 * MoleculeInfo — concept card showing molecule/model metadata.
 * Adapts labels based on whether the model is a molecule or not.
 */
export default function MoleculeInfo({ model, visible }) {
  if (!visible || !model) return null;

  const isMolecule = model.category === "molecule";

  return (
    <div className="glass rounded-2xl p-5 space-y-3 animate-[fadeUp_0.3s_ease-out]">
      {/* Header */}
      <div className="flex items-baseline gap-2">
        <h2 className="text-xl font-bold text-slate-800">{model.name}</h2>
        {model.formula !== "—" && (
          <span className="text-sm font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
            {model.formula}
          </span>
        )}
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        <Detail
          label={isMolecule ? "Geometry" : "Structure"}
          value={model.geometry}
        />
        {model.bondAngle !== "—" && (
          <Detail label="Bond Angle" value={model.bondAngle} />
        )}
      </div>

      {/* Explanation */}
      <p className="text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
        {model.explanation}
      </p>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="bg-slate-50 rounded-xl px-3 py-2">
      <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
        {label}
      </p>
      <p className="text-slate-700 font-semibold">{value}</p>
    </div>
  );
}
