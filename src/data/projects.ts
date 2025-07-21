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
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description: "Modern bir e-ticaret sitesi - kullanıcı dostu arayüz, sepet yönetimi ve ödeme entegrasyonu",
    longDescription: "React ve TypeScript kullanarak geliştirdiğim tam özellikli e-ticaret platformu. Ürün katalogları, gelişmiş filtreleme, sepet yönetimi, kullanıcı hesapları ve güvenli ödeme işlemleri içeriyor. Responsive tasarım ve SEO optimizasyonu ile mobil uyumlu.",
    category: "Web Geliştirme",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    date: "2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    status: "completed"
  },
  {
    id: 2,
    title: "Görev Yönetim Uygulaması",
    description: "Takım çalışması için tasarlanan görev takip ve proje yönetim sistemi",
    longDescription: "Agile metodolojiler göz önünde bulundurularak tasarlanan kapsamlı görev yönetim platformu. Kanban board, sprint planning, time tracking ve team collaboration özellikleri içeriyor. Real-time güncellemeler ve bildirimler ile takım verimliliğini artırıyor.",
    category: "Web Geliştirme",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
    githubUrl: "https://github.com/example/task-manager",
    liveUrl: "https://taskmanager-demo.com",
    date: "2024",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
    status: "completed"
  },
  {
    id: 3,
    title: "Hava Durumu Uygulaması",
    description: "Detaylı hava durumu tahminleri ve interaktif haritalar ile mobil uygulama",
    longDescription: "React Native kullanarak geliştirdiğim cross-platform mobil uygulama. OpenWeatherMap API entegrasyonu ile güncel hava durumu verileri, 7 günlük tahminler, radar haritaları ve konum bazlı bildirimler sunuyor. Dark/Light tema desteği ve offline çalışma özelliği.",
    category: "Mobil Uygulama",
    technologies: ["React Native", "TypeScript", "Expo", "OpenWeatherMap API", "Redux"],
    githubUrl: "https://github.com/example/weather-app",
    date: "2023",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
    status: "completed"
  },
  {
    id: 4,
    title: "Blog Platformu",
    description: "Yazarlar için optimize edilmiş modern blog ve içerik yönetim sistemi",
    longDescription: "Next.js ve Sanity CMS kullanarak geliştirdiğim headless blog platformu. Markdown desteği, SEO optimizasyonu, yorum sistemi, kategoriler ve etiketler, sosyal medya entegrasyonu içeriyor. Admin paneli ile kolay içerik yönetimi ve analytics dashboard.",
    category: "Web Geliştirme",
    technologies: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/example/blog-platform",
    liveUrl: "https://blog-demo.com",
    date: "2023",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
    status: "completed"
  },
  {
    id: 5,
    title: "AI Chatbot Entegrasyonu",
    description: "OpenAI GPT tabanlı akıllı müşteri hizmetleri chatbot sistemi",
    longDescription: "OpenAI API'si kullanarak geliştirdiğim akıllı chatbot sistemi. Natural language processing ile müşteri sorularını anlıyor ve uygun yanıtlar veriyor. Conversation history, sentiment analysis ve admin dashboard ile müşteri memnuniyetini artırıyor.",
    category: "Yapay Zeka",
    technologies: ["Python", "OpenAI API", "FastAPI", "React", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/example/ai-chatbot",
    date: "2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    status: "in-progress"
  },
  {
    id: 6,
    title: "Veri Analizi Dashboard",
    description: "İş zekası ve veri görselleştirme için interaktif dashboard uygulaması",
    longDescription: "D3.js ve Chart.js kullanarak geliştirdiğim kapsamlı veri analizi platformu. Real-time data processing, interactive charts, KPI tracking ve custom report generation özellikleri içeriyor. REST API ile çeşitli veri kaynaklarından besleniyor.",
    category: "Veri Analizi",
    technologies: ["React", "D3.js", "Chart.js", "Python", "Pandas", "PostgreSQL"],
    githubUrl: "https://github.com/example/data-dashboard",
    date: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    status: "in-progress"
  },
  {
    id: 7,
    title: "Fitness Takip Uygulaması",
    description: "Kişisel antrenman programları ve ilerleme takibi için mobil uygulama",
    longDescription: "Flutter kullanarak geliştirdiğim cross-platform fitness uygulaması. Özelleştirilmiş workout planları, progress tracking, nutrition calculator ve sosyal özellikler içeriyor. Health kit entegrasyonu ile cihaz sensörlerinden veri alıyor.",
    category: "Mobil Uygulama", 
    technologies: ["Flutter", "Dart", "Firebase", "HealthKit", "Google Fit API"],
    githubUrl: "https://github.com/example/fitness-app",
    date: "2023",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    status: "completed"
  },
  {
    id: 8,
    title: "Blockchain Wallet",
    description: "Güvenli kripto para cüzdanı ve DeFi protokol entegrasyonu",
    longDescription: "Web3 teknolojileri kullanarak geliştirdiğim decentralized wallet uygulaması. Multi-chain support, DeFi protocol entegrasyonları, NFT koleksiyonu görüntüleme ve secure transaction signing özellikleri içeriyor. MetaMask benzeri fonksionalite sunuyor.",
    category: "Blockchain",
    technologies: ["React", "Web3.js", "Solidity", "Ethers.js", "IPFS", "Metamask"],
    githubUrl: "https://github.com/example/crypto-wallet",
    date: "2024",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
    status: "planned"
  }
];