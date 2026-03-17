import { useState, useCallback } from "react";

/**
 * Quiz — multiple-choice quiz based on the active model.
 * Receives an array of quiz questions from the model data.
 */
export default function Quiz({ questions, modelName }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = useCallback((qi, oi) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qi]: oi }));
  }, [submitted]);

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const score = submitted
    ? questions.reduce(
        (acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0),
        0
      )
    : 0;

  if (!questions || questions.length === 0) return null;

  return (
    <div className="glass rounded-2xl p-6 space-y-5 animate-[fadeUp_0.3s_ease-out]">
      <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
        <span>📝</span> Quick Quiz — {modelName}
      </h3>

      <div className="space-y-4">
        {questions.map((q, qi) => (
          <div key={qi} className="space-y-2">
            <p className="text-sm font-semibold text-slate-700">
              {qi + 1}. {q.question}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {q.options.map((opt, oi) => {
                const selected = answers[qi] === oi;
                const isCorrect = q.answer === oi;
                let style =
                  "bg-white border-slate-200 text-slate-600 hover:border-teal-300";

                if (submitted) {
                  if (isCorrect)
                    style =
                      "bg-emerald-50 border-emerald-400 text-emerald-700";
                  else if (selected && !isCorrect)
                    style = "bg-red-50 border-red-400 text-red-700";
                } else if (selected) {
                  style =
                    "bg-teal-50 border-teal-400 text-teal-700";
                }

                return (
                  <button
                    key={oi}
                    onClick={() => handleSelect(qi, oi)}
                    disabled={submitted}
                    className={`text-left px-3 py-2 rounded-xl text-sm border transition-all duration-200 ${style} ${
                      submitted ? "cursor-default" : "cursor-pointer"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={Object.keys(answers).length < questions.length}
          className="w-full py-3 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
        >
          Submit Answers
        </button>
      ) : (
        <div className="text-center space-y-3">
          <div className="text-2xl font-bold text-teal-700">
            {score}/{questions.length} Correct 🎉
          </div>
          <button
            onClick={handleReset}
            className="text-sm text-teal-600 hover:text-teal-800 font-medium underline underline-offset-2"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
