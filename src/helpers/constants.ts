export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  status?: "live" | "discontinued" | "building";
  projectBg: string;
};

export const projects: Project[] = [
  {
    id: 0,
    name: "ClassMate",
    description:
      "All-in-one full-stack campus management platform featuring attendance tracking (ClassPulse), P2P skill exchange (SkillSwap), internship aggregator, and carpooling.",
    image: "/Project/ProjectImages/ClassMate.png",
    link: "https://class-matefrontend.vercel.app/",
    github: "https://github.com/keshavagr273/ClassMate",
    status: "live",
    projectBg: "/Project/ProjectImages/ClassMate.png",
  },
  {
    id: 1,
    name: "HydraCache",
    description:
      "A decentralized, fault-tolerant in-memory distributed key-value store built in TypeScript. Features 64-bit Murmur3 consistent hashing, SWIM gossip protocol, and HLC Last-Write-Wins.",
    image: "/Project/ProjectImages/hydracache.png",
    link: "https://github.com/keshavagr273/HydraCache",
    github: "https://github.com/keshavagr273/HydraCache",
    status: "live",
    projectBg: "/Project/ProjectImages/hydracache.png",
  },
  {
    id: 2,
    name: "DocSaarthi",
    description:
      "An AI-powered multilingual document intelligence platform engineered for Hindi, Devanagari, and English documents with PaddleOCR v4, hybrid search (pgvector + pg_trgm), and conversational RAG.",
    image: "/Project/ProjectImages/DocSaarthi.png",
    link: "https://docsaarthi.vercel.app/",
    github: "https://github.com/keshavagr273/DocSaarthi",
    status: "live",
    projectBg: "/Project/ProjectImages/DocSaarthi.png",
  },
  {
    id: 3,
    name: "GitLens AI",
    description:
      "A production-grade AI-powered codebase intelligence and architecture reasoning platform featuring deterministic AST parsing with Tree-sitter, interactive React Flow dependency graphs, and AST-aware hybrid code RAG.",
    image: "/Project/ProjectImages/gitlab.png",
    link: "https://git-lens-ai-web.vercel.app/",
    github: "https://github.com/keshavagr273/GitLens-AI",
    status: "live",
    projectBg: "/Project/ProjectImages/gitlab.png",
  },
  {
    id: 4,
    name: "ChatSphere",
    description:
      "A full-stack real-time communication platform supporting 1-on-1 and group chats, WebRTC audio/video calling, Socket.IO messaging, typing indicators, and emoji reactions.",
    image: "/Project/ProjectImages/chat.png",
    link: "https://chat-app-one-xi-68.vercel.app/",
    github: "https://github.com/keshavagr273/Chat-App",
    status: "live",
    projectBg: "/Project/ProjectImages/chat.png",
  },
  {
    id: 5,
    name: "Equity Nest",
    description:
      "A real-time Indian stock market analytical and visual trading SaaS with live Upstox binary WebSocket feeds, TradingView charts, and in-memory NSE symbol fuzzy search.",
    image: "/Project/ProjectImages/equity.png",
    link: "https://equity-nest-mjil.vercel.app/",
    github: "https://github.com/keshavagr273/Equity-Nest.git",
    status: "live",
    projectBg: "/Project/ProjectImages/equity.png",
  },
  {
    id: 6,
    name: "Luminary AI",
    description:
      "An AI-powered academic planning platform for university discovery, admissions guidance, ROI calculators, and personalized recommendations.",
    image: "/Project/ProjectImages/Luminary.png",
    link: "https://luminary-ai-nine.vercel.app/",
    github: "https://github.com/keshavagr273/Luminary-AI",
    status: "live",
    projectBg: "/Project/ProjectImages/Luminary.png",
  },
  {
    id: 7,
    name: "FreshFinds",
    description:
      "A community-driven marketplace connecting local vendors with nearby customers to resell fresh surplus food at discounted prices and reduce food waste.",
    image: "/Project/ProjectImages/FreshFinds.png",
    link: "https://fresh-finds-beige.vercel.app/",
    github: "https://github.com/keshavagr273/FreshFinds",
    status: "live",
    projectBg: "/Project/ProjectImages/FreshFinds.png",
  },
  {
    id: 8,
    name: "Agricare",
    description:
      "Comprehensive full-stack agricultural platform empowering farmers through digitalized inventory management, dynamic marketplace, and multi-language support (i18n).",
    image: "/Project/ProjectImages/Agricare.png",
    link: "https://agri-care-sage.vercel.app/",
    github: "https://github.com/keshavagr273/AgriCare",
    status: "live",
    projectBg: "/Project/ProjectImages/Agricare.png",
  },
  {
    id: 9,
    name: "Heart Disease Predictor",
    description:
      "Machine learning web app predicting cardiovascular disease risk using user health parameters and a deep neural network model trained on BRFSS dataset.",
    image: "/Project/ProjectImages/heart1.png",
    link: "https://huggingface.co/spaces/keshav273/heart-pred-app",
    github: "https://github.com/keshavagr273/heart-disease-app",
    status: "live",
    projectBg: "/Project/ProjectImages/heart1.png",
  },
  {
    id: 10,
    name: "Faculty Project Tracker",
    description:
      "Admin dashboard for academic project group tracking, milestone reviews, inactive group alerts, and CSV exports with JWT security.",
    image: "/Project/ProjectImages/project.png",
    link: "https://minor-project-tracker.vercel.app/",
    github: "https://github.com/keshavagr273/MinorProject-Tracker",
    status: "live",
    projectBg: "/Project/ProjectImages/project.png",
  },
];
