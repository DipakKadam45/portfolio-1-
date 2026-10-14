export const portfolioData = {
  personal: {
    name: "Dipak",
    surname: "Kadam",
    title: "Full Stack Web Developer",
    subtitle: "B.Tech IT Student at R.C. Patel Institute of Technology, Shirpur • Building web applications with Java, Node.js, Express.js, MySQL, HTML5, and CSS3.",
    availability: "Open for Software Engineering Internships & Opportunities",
    location: "Shirpur, Maharashtra, India",
    email: "kadamdipak943@gmail.com",
    phone: "+91 9322332363",
    github: "https://github.com/kadamdipak",
    linkedin: "https://www.linkedin.com/in/dipak-kadam-012066327",
    codechef: "https://www.codechef.com/users/rcpit251109071",
    codechefHandle: "rcpit251109071",
    cgpa: "7.79",
    hscMarks: "74.33%",
    sscMarks: "88.20%",
    avatar: "/profile.jpg",
    resumeUrl: "/resume.html", // Instant 1-page printable ATS resume
    bio: "I am an Information Technology student at R.C. Patel Institute of Technology (RCPIT), Shirpur, graduating in 2029 with a 7.79 CGPA. I specialize in building responsive web applications using Java, JavaScript, Node.js, Express.js, and MySQL. With solid fundamentals in Object-Oriented Programming and continuous competitive problem solving on CodeChef (rcpit251109071), I am committed to writing clean, maintainable code.",
  },

  stats: [
    { label: "Academic CGPA", value: "7.79" },
    { label: "CodeChef Profile", value: "Active" },
    { label: "B.Tech IT (Graduation)", value: "2029" },
    { label: "Core Projects Built", value: "4+" },
  ],

  interviewHighlights: {
    summary: "A 60-second summary tailored for campus recruiters and technical interviewers.",
    topStrengths: [
      {
        title: "Web Application Engineering",
        desc: "Hands-on experience developing web applications using Java, JavaScript, Node.js, Express.js, and MySQL.",
      },
      {
        title: "Relational Database Design",
        desc: "Skilled in MySQL schema creation, relational integrity, primary/foreign keys, and SQL CRUD queries.",
      },
      {
        title: "Object-Oriented Programming & DSA",
        desc: "Strong foundation in Java & Data Structures, regularly solving algorithmic challenges on CodeChef (rcpit251109071).",
      },
      {
        title: "Disciplined Version Control",
        desc: "Proficient in Git & GitHub for repository workflows, branch management, and collaborative code maintenance using VS Code.",
      },
    ],
    starterAnswers: [
      {
        q: "Tell me about yourself and your primary technical skills?",
        a: "I am Dipak Kadam, pursuing B.Tech in IT at R.C. Patel Institute of Technology, Shirpur (7.79 CGPA). My technical skillset centers on Java, JavaScript, HTML5, CSS3, Node.js, Express.js, MySQL, Git, GitHub, and VS Code, paired with regular competitive problem solving on CodeChef.",
      },
      {
        q: "What was your most impactful project so far?",
        a: "My flagship project is the Campus Academic Material Exchange Portal, which solved the difficulty college students faced in sourcing semester notes and textbooks by creating a structured MySQL and Express-backed resource sharing platform.",
      },
    ],
  },

  skills: {
    frontend: [
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "Responsive Web Design", level: "Advanced" },
    ],
    backend: [
      { name: "Java (Core & OOP)", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "RESTful APIs", level: "Advanced" },
    ],
    databases: [
      { name: "MySQL", level: "Advanced" },
      { name: "Relational Schema Design", level: "Advanced" },
      { name: "SQL Queries & Joins", level: "Advanced" },
    ],
    devopsAndTools: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
    ],
  },

  projects: [
    {
      id: "campuswap",
      title: "CampusSwap — Student Resource Exchange Platform",
      category: "Full Stack",
      featured: true,
      badge: "🚀 Live on Vercel",
      description:
        "A live web platform allowing college students to swap, share, and exchange academic materials including books, notes, and resources. Fully deployed and accessible at campuswap-pi.vercel.app.",
      keyAchievements: [
        "Deployed live on Vercel with full stack Node.js & Express.js backend integration.",
        "Built relational MySQL database with structured tables for users, listings, and resource exchanges.",
        "Responsive HTML5/CSS3 frontend with clean student-friendly UI for peer-to-peer resource interaction.",
      ],
      techStack: ["JavaScript", "Node.js", "Express.js", "MySQL", "HTML5", "CSS3"],
      demoUrl: "https://campuswap-pi.vercel.app",
      githubUrl: "https://github.com/kadamdipak/campuswap",
    },
    {
      id: "campus-exchange",
      title: "Campus Academic Material Exchange Portal",
      category: "Full Stack",
      featured: true,
      badge: "Flagship Campus Project",
      description:
        "A centralized web portal built for college students to effortlessly share, donate, and exchange semester textbooks, handwritten notes, lab manuals, and previous year question papers.",
      keyAchievements: [
        "Organized academic materials with structured categories for department, semester, and course subject.",
        "Engineered RESTful API endpoints using Node.js & Express with MySQL relational storage for fast, reliable queries.",
        "Created a responsive, accessible frontend interface using semantic HTML5 and custom CSS3 styling.",
      ],
      techStack: ["Java", "JavaScript", "Node.js", "Express.js", "MySQL", "HTML5", "CSS3"],
      demoUrl: "https://github.com/kadamdipak/campus-material-exchange-portal",
      githubUrl: "https://github.com/kadamdipak/campus-material-exchange-portal",
    },
    {
      id: "dsa-tracker",
      title: "CodeTrack - DSA & Problem Solving Hub",
      category: "Full Stack",
      featured: true,
      badge: "Competitive Coding",
      description:
        "A developer companion app to log and monitor daily Data Structures and Algorithms problem-solving progress across CodeChef (rcpit251109071).",
      keyAchievements: [
        "Structured problem logging by topic (Arrays, Strings, Linked Lists) with complexity analysis in Java.",
        "Engineered backend REST endpoints in Node.js/Express with MySQL tables to archive personal solutions and notes.",
        "Styled clean UI with responsive CSS and interactive DOM manipulation.",
      ],
      techStack: ["Java", "JavaScript", "Node.js", "Express.js", "MySQL", "HTML5", "CSS3"],
      demoUrl: "https://github.com/kadamdipak/dsa-problem-tracker",
      githubUrl: "https://github.com/kadamdipak/dsa-problem-tracker",
    },
    {
      id: "campus-discussion",
      title: "Campus Connect - Peer Discussion & Query Board",
      category: "Backend",
      featured: false,
      badge: "RESTful API & Forum",
      description:
        "A collaborative academic discussion board for college peers to ask technical questions, organize study groups, and discuss engineering subjects.",
      keyAchievements: [
        "Designed relational MySQL tables with foreign key constraints linking queries, replies, and student accounts.",
        "Engineered modular RESTful routers in Express.js with input validation and clean error handling.",
        "Documented and tested endpoints for smooth frontend integration.",
      ],
      techStack: ["JavaScript", "Node.js", "Express.js", "MySQL", "HTML5", "CSS3"],
      demoUrl: "https://github.com/kadamdipak/campus-connect-api",
      githubUrl: "https://github.com/kadamdipak/campus-connect-api",
    },
  ],

  experience: [
    {
      role: "Web Development & Academic Projects",
      company: "R.C. Patel Institute of Technology, Shirpur",
      period: "2024 - Present",
      location: "Shirpur, Maharashtra",
      highlights: [
        "Architected and developed the Campus Academic Material Exchange Portal serving student resource needs.",
        "Designed relational database schemas and SQL queries in MySQL with Express.js backend services.",
        "Maintained structured version control workflows using Git, GitHub, and VS Code.",
      ],
    },
    {
      role: "Competitive Programming & Problem Solving",
      company: "CodeChef Community (Handle: rcpit251109071)",
      period: "2024 - Present",
      location: "Remote / Online",
      highlights: [
        "Active participant in CodeChef contests, solving algorithmic challenges and data structure implementations in Java.",
        "Practicing time and space complexity analysis across searching, sorting, and recursion problems.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Information Technology",
      institution: "R.C. Patel Institute of Technology, Shirpur (RCPIT)",
      period: "2025 - 2029",
      cgpa: "7.79 CGPA",
      details: "Current CGPA: 7.79 • Focused on Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems (MySQL), and Web Technologies.",
    },
    {
      degree: "Higher Secondary Certificate (HSC / 12th Grade)",
      institution: "Maharashtra State Board (Science Stream)",
      period: "Completed",
      cgpa: "74.33%",
      details: "Score: 74.33% • Physics, Chemistry, Mathematics & Information Technology.",
    },
    {
      degree: "Secondary School Certificate (SSC / 10th Grade)",
      institution: "Maharashtra State Board",
      period: "Completed",
      cgpa: "88.20%",
      details: "Score: 88.20% with Distinction • Strong foundation in Mathematics and Science.",
    },
  ],

  certifications: [
    {
      name: "Data Structures & Algorithmic Problem Solving",
      issuer: "CodeChef (Profile: rcpit251109071)",
      link: "https://www.codechef.com/users/rcpit251109071",
      date: "2024",
    },
    {
      name: "Full Stack Web Development & Modern JavaScript",
      issuer: "Coursera",
      date: "2024",
    },
  ],
};
