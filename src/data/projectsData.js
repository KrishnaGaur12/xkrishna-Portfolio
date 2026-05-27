// Centralized projects data
// Edit this file to update projects across all pages

export const projectsData = [
    {
        id: 1,
        slug: "silver-link",
        title: "Silver Link",
        description:
            "Web application designed to help retirees stay active, socially connected, financially independent, and healthy.",
        status: "operational",
        accent: "from-gray-200 via-slate-200 to-zinc-200",
        timeline: "1 week",
        tech: "Full Stack",
        role: "Developer",
        technologies: [],
        highlights: [
            "Matches retirees with job opportunities suited to their skills and physical abilities.",
            "Lets employers post job listings and review applications efficiently.",
            "Supports groups, games, appointment management, chatbot interaction, dietary guidance, and a BMI calculator.",
        ],
        website: "https://silver-link.vercel.app",
        github: "",
        markdownUrl: "",
        image: "/images/silver-link.png",
    },

    {
        id: 2,
        slug: "hiresensie",
        title: "HireSensie",
        description:
            "AI-powered mock interview platform that generates custom questions from a job role, description, and experience level.",
        status: "operational",
        accent: "from-blue-200 via-indigo-200 to-cyan-200",
        timeline: "2 weeks",
        tech: "Full Stack + AI",
        role: "Full Stack Developer",
        technologies: [],
        highlights: [
            "Generates role-specific interview questions using the Google Gemini API.",
            "Includes real-time speech-to-text transcription and automated answer evaluation.",
            "Stores interview sessions, responses, and feedback history with PostgreSQL and Drizzle ORM.",
            "Uses Clerk for authentication, protected routes, and social login support.",
        ],
        website: "https://hiresensie.netlify.app",
        github: "https://github.com/KrishnaGaur12/HireSensie",
        markdownUrl: "",
        image: "/images/hiresensie.png",
    },

    {
        id: 3,
        slug: "trivia-rest-api",
        title: "Trivia REST API",
        description:
            "Trivia REST API built with Go Fiber and PostgreSQL for managing and serving trivia content.",
        status: "operational",
        accent: "from-green-200 via-emerald-200 to-teal-200",
        timeline: "1 week",
        tech: "Backend",
        role: "Backend Developer",
        technologies: [],
        highlights: [
            "Developed the REST API using the Go Fiber framework.",
            "Integrated PostgreSQL for persistent storage of trivia questions.",
            "Containerized the application with Docker for easier deployment.",
        ],
        website: "",
        github: "",
        markdownUrl: "",
        image: "public/images/trivia.png",
    },

    {
        id: 4,
        slug: "e-rakshasetu",
        title: "e-RakshaSetu",
        description:
            "Smart tourist safety system that combines machine learning, blockchain, geofencing, Flutter, and MongoDB for real-time incident response.",
        status: "operational",
        accent: "from-orange-200 via-red-200 to-pink-200",
        timeline: "Hackathon",
        tech: "Full Stack",
        role: "Developer",
        technologies: [],
        highlights: [
            "Fires real-time SOS alerts the moment a user crosses a geofence boundary.",
            "Anchors incident records on-chain for tamper-proof logging and E-FIR automation.",
            "Designed to stay reliable under heavy concurrent load with distributed integration coverage.",
        ],
        website: "https://e-rakshasetu.netlify.app",
        github: "https://github.com/KrishnaGaur12/e-Raksha-Setu",
        markdownUrl: "",
        image: "public/images/e-rakshasetu.png",
    },

    {
        id: 5,
        slug: "jansahayak-ai",
        title: "JanSahayak AI",
        description:
            "A voice-first AI platform that helps citizens access government schemes and report civic issues through natural speech.",
        status: "building",
        accent: "from-blue-200 via-purple-200 to-pink-200",
        timeline: "2 weeks",
        tech: "Full Stack + AI",
        role: "Full Stack & AI Developer",
        technologies: [
            {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
        ],
        website: "",
        github: "https://github.com/KrishnaGaur12/JanSahayak-AI",
        markdownUrl: "",
        image: "public/images/jans.png",
    },

    {
        id: 6,
        slug: "bharatcare-ai",
        title: "BharatCare – AI-Powered Healthcare Assistant",
        description:
            "BharatCare is an AI-powered healthcare platform that delivers instant symptom analysis, smart care guidance, nearby hospital discovery, and 24/7 assistance.",
        status: "Live MVP",
        accent: "from-blue-100 via-sky-200 to-indigo-200",
        timeline: "Hackathon Project – 2026",
        tech: "Full Stack",
        role: "Lead Developer & System Architect",
        technologies: [],
        website: null,
        github: "https://github.com/KrishnaGaur12/BharatCare",
        markdownUrl: null,
        image: "public/images/bharatcare.png",
    },

    {
        id: 7,
        slug: "10-days-ai-voice-agents",
        title: "10 Days of AI Voice Agents",
        description:
            "AI voice agent experiments and automation workflows built over 10 days.",
        status: "operational",
        accent: "from-violet-200 via-fuchsia-200 to-pink-200",
        timeline: "10 days",
        tech: "AI",
        role: "AI Developer",
        technologies: [],
        website: "",
        github: "https://github.com/KrishnaGaur12/ten-days-of-voice-agents-2025",
        markdownUrl: "",
        image: "public/images/10daysai.png",
    },

    {
        id: 8,
        slug: "bytecrush",
        title: "ByteCrush",
        description:
            "C++ file compression toolkit with Huffman, LZW, and RLE algorithms, parallelized for faster processing and backed by automated tests.",
        status: "operational",
        accent: "from-cyan-200 via-sky-200 to-blue-200",
        timeline: "1 week",
        tech: "Full Stack",
        role: "Developer",
        technologies: [],
        highlights: [
            "Built a multi-algorithm compressor from scratch with clean OOP design.",
            "Parallelized the pipeline with multithreading for faster large-file compression.",
            "Added a regression test suite for empty files, high-entropy data, and boundary cases.",
        ],
        website: "",
        github: "https://github.com/KrishnaGaur12/ByteCrush---File-Compression-Toolkit",
        markdownUrl: "",
        image: "/images/bytecrush.png",
    },

    {
        id: 9,
        slug: "gta-vi-parallax-landing",
        title: "GTA VI Parallax Landing Page",
        description:
            "Immersive animated landing page with parallax effects and GSAP animations, inspired by Grand Theft Auto VI",
        status: "operational",
        accent: "from-red-600 via-purple-600 to-blue-600",
        timeline: "4 days",
        tech: "Frontend",
        role: "Full Stack Developer",
        technologies: [
            {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
                name: "Vite",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
            },
        ],
        website: "https://gta6themeresume.vercel.app/",
        github: "https://github.com/KrishnaGaur12/GTA6styleResume",
        markdownUrl:
            "https://res.cloudinary.com/portfolioblog/raw/upload/v1771481946/gta_tx8jzx.md",
        image: "public/images/gta6theme.png",
    },
];