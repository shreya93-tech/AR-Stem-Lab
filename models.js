/**
 * models.js — Extensible data source for all 3D models in AR ChemLab.
 *
 * To add a new model (molecule, organ, object, etc.):
 *   1. Add an entry to the `models` array below.
 *   2. Provide a GLB file URL (host on GitHub, CDN, or /public folder).
 *   3. Fill in the metadata fields.
 *   4. Optionally assign a `category` so the selector can group them.
 *
 * The app will automatically pick up any new entries — no other code changes needed.
 */

const models = [
  // ─── Molecules ───────────────────────────────────────────────
  {
    id: "solar-system",
    name: "Solar System",
    formula: "",
    category: "space",
    geometry: "Orbital system",
    bondAngle: "",
    explanation:
      "A 3D animated model of the Solar System, showing the Sun and eight planets in orbit with scale-axis orientation.",
    modelUrl:
      "solar_system_animation.glb",
    poster: "",
    quiz: [
      {
        question: "Which star is at the center of the Solar System?",
        options: ["Earth", "Mars", "The Sun", "Jupiter"],
        answer: 2,
      },
      {
        question: "How many planets orbit the Sun in this model?",
        options: ["7", "8", "9", "10"],
        answer: 1,
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        answer: 1,
      },
    ],
  },
  {
    id: "magnet-attract",
    name: "Magnets Attracting Field",
    formula: "",
    category: "physics",
    geometry: "Magnetic field lines",
    bondAngle: "",
    explanation:
      "A 3D magnetism visualization showing two opposite poles attracting and field lines around the magnets.",
    modelUrl:
      "magnets_attracting_field.glb",
    poster: "",
    quiz: [
      {
        question: "Which poles attract each other in this model?",
        options: ["North-North", "South-South", "North-South", "No poles"],
        answer: 2,
      },
      {
        question: "What causes the magnetic field lines to form?",
        options: ["Gravity", "Electric charge", "Magnet poles", "Heat"],
        answer: 2,
      },
      {
        question: "In the attracting configuration, what happens to the force between the magnets?",
        options: ["It repels", "It attracts", "No force", "It disappears"],
        answer: 1,
      },
    ],
  },
  {
    id: "human-heart",
    name: "Realistic Human Heart",
    formula: "",
    category: "anatomy",
    geometry: "Four-chambered organ",
    bondAngle: "",
    explanation:
      "A detailed 3D model showing the human heart anatomy with chambers and major vessels in realistic proportions.",
    modelUrl:
      "realistic_human_heart.glb",
    poster: "",
    quiz: [
      {
        question: "How many chambers does the human heart have?",
        options: ["2", "3", "4", "5"],
        answer: 2,
      },
      {
        question: "Which chamber receives oxygen-rich blood from the lungs?",
        options: ["Left atrium", "Right atrium", "Left ventricle", "Right ventricle"],
        answer: 0,
      },
      {
        question: "Which major vessel carries blood away from the heart to the body?",
        options: ["Pulmonary vein", "Aorta", "Vena cava", "Pulmonary artery"],
        answer: 1,
      },
    ],
  },
  {
    id: "chemistry-benzene",
    name: "Chemistry Benzene",
    formula: "C₆H₆",
    category: "chemistry",
    geometry: "Planar hexagonal",
    bondAngle: "120°",
    explanation:
      "A detailed benzene molecule model with aromatic ring visualizing electron delocalization and planar symmetry.",
    modelUrl:
      "chemistry_benzene.glb",
    poster: "",
    quiz: [
      {
        question: "How many carbon atoms are in a benzene ring?",
        options: ["4", "5", "6", "7"],
        answer: 2,
      },
      {
        question: "What type of bonding is responsible for benzene's stability?",
        options: ["Ionic", "Delocalized π bonds", "Hydrogen bonds", "Van der Waals forces"],
        answer: 1,
      },
      {
        question: "Benzene is best described as which shape?",
        options: ["Tetrahedral", "Linear", "Planar hexagonal", "Trigonal pyramidal"],
        answer: 2,
      },
    ],
  },

  // ─── Example: Adding a non-molecule model ───────────────────
  // Uncomment below to add a human heart or any other 3D model:
  //
  // {
  //   id: "human-heart",
  //   name: "Human Heart",
  //   formula: "—",              // Use "—" for non-molecules
  //   category: "anatomy",       // New category — the UI will adapt
  //   geometry: "Four-chambered organ",
  //   bondAngle: "—",
  //   explanation:
  //     "The heart pumps blood through the body via four chambers, ensuring oxygen-rich and oxygen-poor blood stay separated.",
  //   modelUrl: "/models/human_heart.glb",  // Put your GLB in /public/models/
  //   poster: "",
  //   quiz: [
  //     {
  //       question: "How many chambers does the human heart have?",
  //       options: ["2", "3", "4", "5"],
  //       answer: 2,
  //     },
  //     {
  //       question: "Which chamber pumps blood to the lungs?",
  //       options: [
  //         "Left atrium",
  //         "Right ventricle",
  //         "Left ventricle",
  //         "Right atrium",
  //       ],
  //       answer: 1,
  //     },
  //     {
  //       question: "What is the largest artery in the body?",
  //       options: ["Pulmonary artery", "Aorta", "Vena cava", "Carotid"],
  //       answer: 1,
  //     },
  //   ],
  // },
];

export default models;
