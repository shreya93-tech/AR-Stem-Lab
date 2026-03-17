/**
 * ViewerControls — toggle buttons for labels, concept card, and exploded view.
 */
export default function ViewerControls({
  showLabels,
  setShowLabels,
  showInfo,
  setShowInfo,
  onExplodedView,
}) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <ToggleBtn
        active={showLabels}
        onClick={() => setShowLabels(!showLabels)}
        label={showLabels ? "Hide Labels" : "Show Labels"}
        icon="🏷️"
      />
      <ToggleBtn
        active={showInfo}
        onClick={() => setShowInfo(!showInfo)}
        label={showInfo ? "Hide Info" : "Show Info"}
        icon="📋"
      />
      <ToggleBtn
        active={false}
        onClick={onExplodedView}
        label="Exploded View"
        icon="💥"
      />
    </div>
  );
}

function ToggleBtn({ active, onClick, label, icon }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border
        ${
          active
            ? "bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/20"
            : "bg-white text-slate-600 border-slate-200 hover:border-teal-300"
        }`}
    >
      <span>{icon}</span>
      {label}
    </button>
  );
}
