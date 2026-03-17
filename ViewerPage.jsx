import { useState, useEffect, useRef } from "react";
import models from "../data/models";
import MoleculeSelector from "../components/MoleculeSelector";
import MoleculeInfo from "../components/MoleculeInfo";
import ViewerControls from "../components/ViewerControls";
import Quiz from "../components/Quiz";

/**
 * ViewerPage — main 3D / AR viewer with molecule selector, info card, controls, and quiz.
 */
export default function ViewerPage() {
  const [activeId, setActiveId] = useState(models[0]?.id);
  const [showLabels, setShowLabels] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [loading, setLoading] = useState(true);
  const viewerRef = useRef(null);

  const active = models.find((m) => m.id === activeId) || models[0];

  // Reset loading state when model changes
  useEffect(() => {
    setLoading(true);
  }, [activeId]);

  // Listen for model-viewer "load" event
  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;
    const onLoad = () => setLoading(false);
    el.addEventListener("load", onLoad);
    return () => el.removeEventListener("load", onLoad);
  }, [activeId]);

  const handleExplodedView = () => {
    alert("Exploded view is a placeholder — wire up your custom animation here!");
  };

  return (
    <div className="page-enter bg-gradient-to-b from-slate-50 to-teal-50 min-h-[calc(100vh-3.5rem)]">
      <div className="max-w-6.5xl mx-auto px-4 py-6 space-y-5">
        {/* ── Selector ──────────────────────────────────────── */}
        <MoleculeSelector
          models={models}
          activeId={activeId}
          onSelect={(id) => {
            setActiveId(id);
            setShowInfo(true);
          }}
        />

        {/* ── 3D Viewer ─────────────────────────────────────── */}
        <div className="relative bg-white rounded-4xl shadow-lg shadow-slate-200/60 overflow-hidden border border-slate-100">
          {/* Loading shimmer overlay */}
          {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full shimmer" />
                <p className="text-sm text-slate-400 font-medium">Loading 3D model…</p>
              </div>
            </div>
          )}

          {/* model-viewer element */}
          <div className="aspect-[4/3] sm:aspect-[16/10]">
            <model-viewer
              ref={viewerRef}
              key={active.id}
              src={active.modelUrl}
              poster={active.poster || ""}
              alt={`3D model of ${active.name}`}
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              touch-action="pan-y"
              auto-rotate
              shadow-intensity="1"
              environment-image="neutral"
              style={{ width: "100%", height: "100%" }}
            >
              {/* AR button fallback text */}
              <button
                slot="ar-button"
                className="absolute bottom-4 right-4 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg transition-all"
              >
                📱 View in AR
              </button>
            </model-viewer>
          </div>

          {/* Floating label overlay */}
          {showLabels && !loading && (
            <div className="absolute top-4 left-4 bg-slate-900/70 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-xl pointer-events-none">
              {active.name} — {active.formula}
            </div>
          )}
        </div>

        {/* ── Controls ──────────────────────────────────────── */}
        <ViewerControls
          showLabels={showLabels}
          setShowLabels={setShowLabels}
          showInfo={showInfo}
          setShowInfo={setShowInfo}
          onExplodedView={handleExplodedView}
        />

        {/* ── Info Card ─────────────────────────────────────── */}
        {/* — Info Card + Quiz Center Wrapper — */}
<div className="w-full flex justify-center items-start mt-6">
  <div className="max-w-3xl w-full px-7">
    
    <div className="bg-white p-6 rounded-xl shadow-md">
      <MoleculeInfo model={active} visible={showInfo} />
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <Quiz
        key={active.id}
        questions={active.quiz}
        modelName={active.name}
      />
    </div>

  </div>
</div>

        
      </div>
    </div>
  );
}