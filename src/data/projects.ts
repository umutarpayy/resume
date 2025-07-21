export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  image: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export const projects: Project[] = [
  // Computer Vision Projects
  {
    id: 1,
    title: "TPNG",
    description: "Physical book digitization system using YOLO, OpenCV and OCR technologies",
    longDescription: "Advanced computer vision project that enables the digital transformation of physical books. Combines YOLO for object detection, OpenCV for image processing, and OCR for text recognition technologies. Features Docker containerization for easy deployment and scalable processing pipeline.",
    category: "Computer Vision",
    technologies: ["YOLO", "OpenCV", "OCR", "Docker", "Python"],
    date: "2024",
    image: "/projects/tpng.jpeg",
    status: "completed"
  },
  {
    id: 2,
    title: "FOCUS",
    description: "Smart system that detects educational content in digital books and helps teachers focus on smart boards",
    longDescription: "Intelligent educational system that helps teachers focus on relevant content while teaching on smart boards. Uses YOLO for object detection and OpenCV for image processing to automatically identify and highlight relevant sections on digital book pages. Easily deployable with Docker containerization.",
    category: "Computer Vision",
    technologies: ["YOLO", "OpenCV", "Docker", "Python"],
    date: "2024",
    image: "/projects/focus.jpg",
    status: "completed"
  },
  {
    id: 3,
    title: "THE EYE",
    description: "Smart system that automatically displays solutions when teachers solve problems on smart boards",
    longDescription: "Intelligent image processing system for educational environments. Uses OpenCV and SSIM (Structural Similarity Index) algorithms to track teachers' problem-solving activities and automatically display relevant solutions. Features containerized architecture with Docker for easy installation and deployment.",
    category: "Computer Vision",
    technologies: ["OpenCV", "SSIM", "Docker", "Python"],
    date: "2024",
    image: "/projects/theeye.jpeg",
    status: "completed"
  },
  {
    id: 4,
    title: "DEEP CUT",
    description: "Image processing system that removes noise from digital question images",
    longDescription: "Specialized image processing project developed to clean noise from digital question images. Uses advanced OpenCV algorithms to improve image quality and enhance readability of educational materials. Features Docker containerization for fast deployment and consistent performance across different environments.",
    category: "Computer Vision",
    technologies: ["OpenCV", "Docker", "Python"],
    date: "2024",
    image: "/projects/deepcut.png",
    status: "completed"
  },

  // Natural Language Processing Projects
  {
    id: 5,
    title: "ACQUISIMENT CLASSIFICATION",
    description: "Learning outcome prediction system with 90%+ accuracy using 50+ trained models",
    longDescription: "Comprehensive classification system developed using BERT, RoBERTa, and LLAMA models. Achieves over 90% accuracy with more than 50 subject and grade-specific trained models. Leverages HuggingFace ecosystem to predict learning outcomes of digital questions with high precision and reliability.",
    category: "Natural Language Processing",
    technologies: ["BERT", "RoBERTa", "LLAMA", "HuggingFace", "Python", "Transformers"],
    date: "2024",
    image: "/projects/acq.png",
    status: "completed"
  },
  {
    id: 6,
    title: "HARDNESS DETECTION",
    description: "NLP system that predicts question difficulty levels based on question texts",
    longDescription: "Question difficulty level prediction system developed using BERT transformer model. Analyzes question text content to automatically determine difficulty degrees. Optimized with HuggingFace framework and specialized for the education sector, providing accurate difficulty assessment for educational content.",
    category: "Natural Language Processing",
    technologies: ["BERT", "HuggingFace", "Python", "Transformers", "PyTorch"],
    date: "2024",
    image: "/projects/hardness.jpg",
    status: "completed"
  },

  // AI & Chatbots Projects
  {
    id: 7,
    title: "AI CHATBOT",
    description: "Advanced documentation chatbot with MCP-powered Agentic RAG, Elastic Search and LLM technologies",
    longDescription: "Advanced AI chatbot system developed specifically for documentation-only websites. Features MCP (Model Context Protocol) powered Agentic RAG architecture, powerful search with Elastic Search, Intent Detection and Entity Cramming (Slot Filling) technologies. Provides natural conversation experience with LLM integration.",
    category: "AI & Chatbots",
    technologies: ["MCP", "Agentic RAG", "Elastic Search", "LLM", "Intent Detection", "Entity Cramming", "Python"],
    date: "2024",
    image: "/projects/aichatbot.jpeg",
    status: "completed"
  },
  {
    id: 8,
    title: "DB CHATBOT",
    description: "Intelligent chatbot system specialized for database querying and management",
    longDescription: "Intelligent chatbot designed to perform database operations through natural language. Provides SQL query generation, data analysis, and reporting functions through a conversation-based interface. Optimized for enterprise use with secure data access and user authorization system.",
    category: "AI & Chatbots",
    technologies: ["Python", "SQL", "NLP", "Database Management", "LLM"],
    date: "2024",
    image: "/projects/dbchat.png",
    status: "completed"
  },

  // Optimization & Algorithms Projects
  {
    id: 9,
    title: "TRUCK OPTIMIZATION",
    description: "3D truck loading optimization system using Unreal Engine and Box Fitting algorithms",
    longDescription: "3D optimization project developed for the logistics sector. Uses Unreal Engine's powerful visualization capabilities and advanced Box Fitting algorithms to ensure optimal placement of boxes loaded into trucks. Features real-time 3D visualization for load planning and maximizes space efficiency.",
    category: "Optimization & Algorithms",
    technologies: ["Unreal Engine", "Box Fitting Algorithms", "C++", "3D Modeling", "Optimization"],
    date: "2024",
    image: "/projects/truck.jpg",
    status: "completed"
  },
  {
    id: 10,
    title: "BOOK MAKER",
    description: "Genetic algorithm-based system that creates books from digital questions with minimum page count",
    longDescription: "Automatic book creation project using digital questions. Uses genetic algorithm optimization to find the most efficient book layout by fitting N number of questions into minimum page count. Automates the educational material preparation process and provides resource optimization.",
    category: "Optimization & Algorithms",
    technologies: ["Genetic Algorithm", "Python", "Optimization", "Algorithm Design", "Data Structures"],
    date: "2024",
    image: "/projects/bookmaker.jpg",
    status: "completed"
  }
];