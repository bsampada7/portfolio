const nodes = [
  {
    id: "JavaScript",
    x: 0,
    y: 0,
  },
  {
    id: "React.js",
    x: 80,
    y: -150,
  },
  {
    id: "Next.js",
    x: 250,
    y: -100,
  },
  {
    id: "TypeScript",
    x: 200,
    y: -10,
  },
  {
    id: "Redux",
    x: 150,
    y: -200,
  },
  {
    id: "Three.js",
    x: -50,
    y: -200,
  },
  {
    id: "Node.js",
    x: 150,
    y: 80,
  },
  {
    id: "MongoDB",
    x: 250,
    y: 50,
  },
  {
    id: "SQL",
    x: 250,
    y: 150,
  },
  {
    id: "CSS",
    x: -300,
    y: 100,
  },
  {
    id: "SCSS",
    x: -200,
    y: 150,
  },
  {
    id: "HTML",
    x: -250,
    y: -180,
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
