const factor = 0.7;
export const data = {
  1: {
    text: "JavaScript",
    id: 1,
    color: "yellow",
    margin: [0, -15 * factor],
  },
  2: {
    text: "React.js",
    id: 2,
    color: "blue",
    margin: [0, 15 * factor],
  },
  3: {
    text: "Next.js",
    id: 3,
    color: "purple",
    margin: [0, -15 * factor],
  },
  4: {
    text: "TypeScript",
    id: 4,
    color: "green",
    margin: [0, 15 * factor],

  },
  5: {
    text: "Redux",
    id: 5,
    color: "grey",
    margin: [-30 * factor, 0],

  },
  6: {
    text: "Three.js",
    id: 6,
    color: "red",
    margin: [0, -15 * factor],
  },
  7: {
    text: "Node.js",
    id: 7,
    color: "orange",
    margin: [30 * factor, 0],
  },
  8: {
    text: "MongoDB",
    id: 8,
    color: "orange",
    margin: [0, 15 * factor],
  },
  9: {
    text: "SQL",
    id: 9,
    color: "orange",
    margin: [0, 15 * factor],
  },
  10: {
    text: "CSS",
    id: 10,
    color: "pink",
    margin: [-20 * factor, 0],
  },
  11: {
    text: "SCSS",
    id: 11,
    color: "aliceblue",
    margin: [0, -15 * factor],
  },
  12: {
    text: "HTML",
    id: 12,
    color: "red",
    margin: [30 * factor, 0],
  },
};
const links = [
  {
    source: 1,
    target: 2,
  },
  {
    source: 1,
    target: 3,
  },
  {
    source: 1,
    target: 4,
  },
  {
    source: 1,
    target: 6,
  },
  {
    source: 1,
    target: 7,
  },
  {
    source: 1,
    target: 10,
  },
  {
    source: 1,
    target: 12,
  },
  {
    source: 2,
    target: 3,
  },
  {
    source: 2,
    target: 4,
  },
  {
    source: 2,
    target: 5,
  },
  {
    source: 2,
    target: 6,
  },
  {
    source: 3,
    target: 4,
  },
  {
    source: 3,
    target: 5,
  },
  {
    source: 7,
    target: 8,
  },
  {
    source: 7,
    target: 9,
  },
  {
    source: 8,
    target: 9,
  },
  {
    source: 10,
    target: 11,
  },
];

export const gData = {
  nodes: Object.values(data),
  links: links,
};
