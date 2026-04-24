export interface ProjectImage {
  src: string;
  caption: string;
  type: "render" | "plan" | "section" | "axon";
}

export interface Project {
  id: string;
  number: "01" | "02" | "03" | "04";
  title: string;
  subtitle: string;
  semester: string;
  year: number;
  description: string[];
  coverImage: string;
  images: ProjectImage[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "tibetan-refugee-centre",
    number: "01",
    title: "TIBETAN REFUGEE CENTRE",
    subtitle: "DARJEELING",
    semester: "Bachelor 8. semester",
    year: 2026,
    description: [
      "A conceptual exploration of space, context, and identity, examining how architecture can support the Tibetan refugee community in Darjeeling. The project attempts to create a spatial dialogue between traditional Tibetan architectural elements and the rugged Himalayan topography.",
      "By integrating community functions—such as workshops, prayer halls, and communal living spaces—the centre aims to foster resilience and preserve cultural heritage while adapting to the present-day realities of displacement."
    ],
    coverImage: "/images/projects/placeholder-01-render.svg",
    images: [
      { src: "/images/projects/placeholder-01-axon.svg", caption: "AXONOMETRIC PROJECTION", type: "axon" },
      { src: "/images/projects/placeholder-01-render.svg", caption: "AERIAL VIEW - SITE", type: "render" },
    ],
    tags: ["Institutional", "Cultural", "Masterplan"]
  },
  {
    id: "the-habitat-grid",
    number: "02",
    title: "THE HABITAT GRID",
    subtitle: "URBAN HOUSING",
    semester: "Bachelor 7. semester",
    year: 2025,
    description: [
      "The Habitat Grid proposes a modular, high-density residential framework designed to adapt to the changing needs of its inhabitants over time. Rejecting the rigid domestic topologies of standard apartment blocks, the project introduces a structural matrix where units can expand, contract, or merge.",
      "The architectural language is deliberately raw, emphasizing exposed structural elements and flexible infill panels."
    ],
    coverImage: "/images/projects/placeholder-02-render.svg",
    images: [
      { src: "/images/projects/placeholder-02-axon.svg", caption: "UNIT AXONOMETRIC", type: "axon" },
      { src: "/images/projects/placeholder-02-render.svg", caption: "STREET PERSPECTIVE", type: "render" },
    ],
    tags: ["Residential", "Modular", "Urban"]
  },
  {
    id: "the-courtyard-exchange",
    number: "03",
    title: "THE COURTYARD EXCHANGE",
    subtitle: "COMMUNITY MARKET",
    semester: "Bachelor 6. semester",
    year: 2024,
    description: [
      "Situated in a dense urban fabric, The Courtyard Exchange reinterprets the traditional market square as a multi-level civic condenser. The design revolves around a central void—a modern courtyard that draws natural light deep into the subterranean trading floors.",
      "A permeable envelope of terracotta louvres regulates thermal comfort while allowing glimpses of the vibrant activities within."
    ],
    coverImage: "/images/projects/placeholder-03-render.svg",
    images: [
      { src: "/images/projects/placeholder-03-axon.svg", caption: "EXPLODED ISOMETRIC", type: "axon" },
      { src: "/images/projects/placeholder-03-render.svg", caption: "COURTYARD INTERIOR", type: "render" },
    ],
    tags: ["Commercial", "Public Space", "Adaptive Reuse"]
  },
  {
    id: "miscellaneous",
    number: "04",
    title: "MISCELLANEOUS",
    subtitle: "COMPETITIONS & SKETCHES",
    semester: "Various",
    year: 2024,
    description: [
      "A collection of smaller interventions, competition entries, hand sketches, and physical models that explore distinct architectural ideas outside the scope of major academic studios."
    ],
    coverImage: "/images/projects/placeholder-01-render.svg",
    images: [],
    tags: ["Sketches", "Models", "Competitions"]
  }
];
