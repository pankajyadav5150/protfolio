// Portfolio ka saara content yahan hai. Kuch bhi badalna ho (text, links, projects) to sirf is file ko edit karo.

export const profile = {
    name: "Pankaj Kumar",
    initials: "PK",
    title: "Full Stack AI Developer",
    location: "Delhi, India",
    // Photo badalni ho to frontend/public/profile.jpg replace kar do. Photo na mile to initials dikhenge.
    photo: "/profile.jpg",
    resume: "/resume.pdf",
    summary:
        "I build scalable Node.js and NestJS backends, real-time systems and AI-powered features with LangChain, RAG and Gemini, and ship them on AWS.",
};

export const stats = [
    { label: "Years experience", value: "1.5+" },
    { label: "LeetCode solved", value: "250+" },
    { label: "Companies", value: "3" },
];

export const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Let's Connect", path: "/connect" },
];

export const experience = [
    {
        role: "Full Stack Developer",
        company: "MicrocosmWorks",
        period: "Mar 2026 – Present",
        location: "Delhi, India",
        current: true,
        points: [
            "Built scalable backend services for an enterprise media streaming platform with Node.js, NestJS, TypeScript, Redis and Docker.",
            "Created cloud-native live-streaming workflows on AWS MediaLive, MediaPackage, EC2, S3, Lambda and Secrets Manager.",
            "Developed backend services for an AI video editing platform, using OpenCV and YOLO for reframing, object detection and tracking.",
        ],
        tags: ["NestJS", "TypeScript", "Redis", "Docker", "AWS", "OpenCV", "YOLO"],
    },
    {
        role: "Full Stack Developer Intern",
        company: "Expertify",
        period: "Jun 2025 – Nov 2025",
        location: "Delhi, India",
        points: [
            "Built a full-stack home services platform with listings, booking flow, vendor assignment and real-time status updates over WebSocket.",
            "Integrated Razorpay and PayPal with secure webhook handling and robust error handling for payments.",
            "Designed secure REST APIs, user dashboards and an AI-powered support chatbot on Node.js and Express.",
        ],
        tags: ["Node.js", "Express", "WebSocket", "Razorpay", "PayPal", "AI Chatbot"],
    },
    {
        role: "Full Stack Developer Intern",
        company: "Cyberyaan Training and Consultancy",
        period: "Jun 2024 – Aug 2024",
        location: "Delhi, India",
        points: [
            "Built a tech community platform for posting, sharing resources and real-time engagement with React, Node.js and MongoDB.",
            "Implemented real-time notifications over WebSocket supporting 400+ concurrent users.",
            "Designed a MongoDB schema that improved read and write efficiency for posts and feeds.",
        ],
        tags: ["React", "Node.js", "MongoDB", "WebSocket"],
    },
];

export const techGroups = [
    { name: "Languages", icon: "code", color: "bg-amber-500", items: ["JavaScript", "TypeScript", "Python", "C++", "SQL"] },
    {
        name: "Backend",
        icon: "server",
        color: "bg-emerald-600",
        items: ["Node.js", "NestJS", "Express.js", "REST APIs", "Microservices", "JWT Auth", "WebSocket", "Socket.IO", "RabbitMQ", "Redis"],
    },
    { name: "Frontend", icon: "monitor", color: "bg-sky-500", items: ["React.js", "Next.js", "Tailwind CSS"] },
    { name: "Databases", icon: "database", color: "bg-rose-500", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    {
        name: "Cloud & DevOps",
        icon: "cloud",
        color: "bg-blue-600",
        items: ["AWS EC2", "S3", "Lambda", "MediaLive", "MediaPackage", "IAM", "Secrets Manager", "SES", "Docker", "Docker Compose", "Git", "GitHub"],
    },
    {
        name: "AI Integration",
        icon: "cpu",
        color: "bg-violet-600",
        items: ["LangChain", "RAG", "AI Agents", "Gemini API", "Claude API", "OpenAI API", "Vapi", "Telnyx", "OpenCV", "YOLO"],
    },
];

// image: screenshot ka path (jaise "/projects/cortex.png"), null ho to colored cover dikhega.
// live / github: link na ho to null rakho.
export const projects = [
    {
        name: "Cortex AI",
        tagline: "Agentic AI Chatbot Platform",
        featured: true,
        cover: "bg-indigo-600",
        image: null,
        live: null,
        github: null,
        points: [
            "Real-time AI conversations over Socket.IO with JWT auth and chat history in MongoDB.",
            "RAG with a LangChain agent and a live web-search tool for up-to-date answers.",
            "Conversation memory, prompt orchestration and tool-calling to send emails from chat.",
            "Containerized with Docker Compose for matching local and production setups.",
        ],
        tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "LangChain", "Gemini", "Docker"],
    },
    {
        name: "NetflixGPT",
        tagline: "Movie Browsing App",
        cover: "bg-red-600",
        image: null,
        live: "https://netflix-gpt-dd6db.web.app",
        github: "https://github.com/pankajyadav5150/NetflixGPT",
        description:
            "Netflix-style app with Firebase sign-in, TMDB movie rows (now playing, popular, top rated, upcoming) and a trailer playing behind the hero.",
        tags: ["React", "Redux Toolkit", "Firebase", "TMDB API", "Tailwind CSS"],
    },
    {
        name: "CampusDekho",
        tagline: "School Discovery Platform",
        cover: "bg-emerald-600",
        image: null,
        live: null,
        github: null,
        description:
            "Parents explore schools, classes, fee structures and posts, send enquiries and book appointments. Schools manage everything from an admin panel.",
        tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Multer"],
    },
];

export const education = {
    degree: "B.Tech, Computer Science and Engineering",
    school: "GNA University, Punjab",
    period: "Aug 2022 – Aug 2026",
    score: "CGPA 7.7 / 10",
};

export const contacts = [
    { title: "Email", value: "pankajyadav3829@gmail.com", href: "mailto:pankajyadav3829@gmail.com", icon: "mail", color: "bg-red-500" },
    { title: "Phone", value: "+91 78143 83829", href: "tel:+917814383829", icon: "phone", color: "bg-blue-600" },
    { title: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/917814383829", icon: "chat", color: "bg-green-600" },
    { title: "LinkedIn", value: "in/pankaj-kumar5150", href: "https://www.linkedin.com/in/pankaj-kumar5150", icon: "linkedin", color: "bg-sky-700" },
    { title: "GitHub", value: "pankajyadav5150", href: "https://github.com/pankajyadav5150", icon: "github", color: "bg-gray-900" },
    { title: "LeetCode", value: "u/Pankaj3829", href: "https://leetcode.com/u/Pankaj3829", icon: "leetcode", color: "bg-amber-500" },
];

// Footer aur menu mein dikhne wale social icons
export const socials = contacts.filter((c) => ["github", "linkedin", "leetcode", "mail"].includes(c.icon));
