const factor = 0.9;
const nodes = [
  {
    id: "JavaScript",
    x: 0 * factor,
    y: 0 * factor,
  },
  {
    id: "React.js",
    x: 80 * factor,
    y: -150 * factor,
  },
  {
    id: "Next.js",
    x: 250 * factor,
    y: -100 * factor,
  },
  {
    id: "TypeScript",
    x: 200 * factor,
    y: -10 * factor,
  },
  {
    id: "Redux",
    x: 150 * factor,
    y: -180 * factor,
  },
  {
    id: "Three.js",
    x: -30 * factor,
    y: -180 * factor,
  },
  {
    id: "Node.js",
    x: 150 * factor,
    y: 80 * factor,
  },
  {
    id: "MongoDB",
    x: 250 * factor,
    y: 50 * factor,
  },
  {
    id: "SQL",
    x: 250 * factor,
    y: 150 * factor,
  },
  {
    id: "CSS",
    x: -250 * factor,
    y: 100 * factor,
  },
  {
    id: "SCSS",
    x: -200 * factor,
    y: 150 * factor,
  },
  {
    id: "HTML",
    x: -250 * factor,
    y: -180 * factor,
  },
];
const links = [
  {
    source: "JavaScript",
    target: "React.js",
  },
  {
    source: "JavaScript",
    target: "Next.js",
  },
  {
    source: "JavaScript",
    target: "TypeScript",
  },
  {
    source: "JavaScript",
    target: "Three.js",
  },
  {
    source: "JavaScript",
    target: "Node.js",
  },
  {
    source: "JavaScript",
    target: "CSS",
  },
  {
    source: "JavaScript",
    target: "HTML",
  },
  {
    source: "React.js",
    target: "Next.js",
  },
  {
    source: "React.js",
    target: "TypeScript",
  },
  {
    source: "React.js",
    target: "Redux",
  },
  {
    source: "React.js",
    target: "Three.js",
  },
  {
    source: "Next.js",
    target: "TypeScript",
  },
  {
    source: "Next.js",
    target: "Redux",
  },
  {
    source: "Node.js",
    target: "MongoDB",
  },
  {
    source: "Node.js",
    target: "SQL",
  },
  {
    source: "MongoDB",
    target: "SQL",
  },
  {
    source: "HTML",
    target: "CSS",
  },
  {
    source: "CSS",
    target: "SCSS",
  },
];

export const gData = {
  nodes: nodes,
  links: links,
};
