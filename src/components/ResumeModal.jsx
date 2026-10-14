import React from 'react';
import { X, Printer, ExternalLink, Download, FileText, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal } = portfolioData;

  const handlePrint = () => {
    // Open the clean standalone resume.html in a new window and trigger print
    const printWindow = window.open('/resume.html', '_blank');
    if (printWindow) {
      printWindow.focus();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Dipak Kadam — 1-Page ATS Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-xs"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href="/resume.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span>Full Page</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Preview Body */}
        <div className="p-6 sm:p-8 overflow-y-auto bg-slate-100 dark:bg-slate-950/60">
          <div className="max-w-[760px] mx-auto bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-xl shadow-xs border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-100 font-sans text-xs sm:text-[13px] leading-relaxed">
            
            {/* Header */}
            <div className="text-center border-b-2 border-slate-900 dark:border-slate-100 pb-3 mb-4">
              <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-950 dark:text-white">
                Dipak Kadam
              </h1>
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mt-0.5">
                Full Stack Web Developer • B.Tech Information Technology
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-[11px] text-slate-600 dark:text-slate-300 mt-2">
                <span>Shirpur, Maharashtra, India (Open to Remote)</span>
                <span>•</span>
                <a href="tel:+919322332363" className="hover:text-indigo-600 font-medium">+91 9322332363</a>
                <span>•</span>
                <a href="mailto:kadamdipak943@gmail.com" className="hover:text-indigo-600 font-medium">kadamdipak943@gmail.com</a>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-x-3 text-[11px] text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                <a href="https://www.linkedin.com/in/dipak-kadam-012066327" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                <span>•</span>
                <a href="https://github.com/kadamdipak" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                <span>•</span>
                <a href="https://www.codechef.com/users/rcpit251109071" target="_blank" rel="noreferrer" className="hover:underline font-bold text-amber-600 dark:text-amber-400">CodeChef (rcpit251109071)</a>
                <span>•</span>
                <a href="http://localhost:5173" target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>
              </div>
            </div>

            {/* Education */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-1 mb-2">
                Education
              </h2>
              <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-white">
                <span>R.C. Patel Institute of Technology (RCPIT) — Shirpur, Maharashtra</span>
                <span className="text-slate-500 text-[11px]">2025 – 2029</span>
              </div>
              <div className="flex justify-between items-baseline text-[12px] font-semibold text-slate-800 dark:text-slate-200">
                <span>Bachelor of Technology (B.Tech) in Information Technology</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">CGPA: 7.79</span>
              </div>
              <div className="flex justify-between items-baseline text-[11px] text-slate-700 dark:text-slate-300 mt-1">
                <span>Higher Secondary Certificate (12th / HSC) — Maharashtra State Board (Science)</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">74.33%</span>
              </div>
              <div className="flex justify-between items-baseline text-[11px] text-slate-700 dark:text-slate-300">
                <span>Secondary School Certificate (10th / SSC) — Maharashtra State Board</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">88.20%</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                <strong>Relevant Coursework:</strong> Object-Oriented Programming (Java), Data Structures & Algorithms, Database Management Systems, Web Technologies.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="space-y-1 text-[11.5px]">
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">Programming Languages: </span>
                  <span className="text-slate-700 dark:text-slate-300"><strong>Java</strong>, JavaScript (ES6+), HTML5, CSS3</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">Backend & APIs: </span>
                  <span className="text-slate-700 dark:text-slate-300"><strong>Node.js</strong>, Express.js, RESTful API Design, JWT Authentication, Middleware</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">Databases & Storage: </span>
                  <span className="text-slate-700 dark:text-slate-300">MongoDB, Mongoose ODM, SQL Fundamentals</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">Frontend & Styling: </span>
                  <span className="text-slate-700 dark:text-slate-300">React.js, Tailwind CSS, Responsive Web Design</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">Tools & Platforms: </span>
                  <span className="text-slate-700 dark:text-slate-300">Git, GitHub, Postman, VS Code, npm, Vercel / Render</span>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-1 mb-2">
                Featured Projects
              </h2>

              {/* Project 1 */}
              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">Campus Academic Material Exchange Portal</span>
                    <span className="text-[11px] text-indigo-600 dark:text-indigo-400 italic"> | HTML, CSS, JS, Node.js, Express, MongoDB</span>
                  </div>
                  <div className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 space-x-1.5">
                    <a href="https://github.com/kadamdipak/campus-material-exchange-portal" target="_blank" rel="noreferrer" className="hover:underline">[GitHub]</a>
                    <a href="https://github.com/kadamdipak/campus-material-exchange-portal" target="_blank" rel="noreferrer" className="hover:underline">[Live Demo]</a>
                  </div>
                </div>
                <ul className="list-disc pl-4 text-[11px] text-slate-700 dark:text-slate-300 space-y-0.5 mt-1">
                  <li>Architected a campus portal for students to upload, search, donate, and exchange textbooks, handwritten notes, and past exam papers.</li>
                  <li>Engineered RESTful API endpoints in Node.js & Express with MongoDB query filters by department, semester, and course code.</li>
                  <li>Built responsive UI and secure student login, successfully handling 300+ simulated academic resource uploads with zero downtime.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">CodeTrack — DSA & Problem Solving Hub</span>
                    <span className="text-[11px] text-indigo-600 dark:text-indigo-400 italic"> | React, Node.js, Express, MongoDB, Tailwind CSS</span>
                  </div>
                  <div className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 space-x-1.5">
                    <a href="https://github.com/kadamdipak/dsa-problem-tracker" target="_blank" rel="noreferrer" className="hover:underline">[GitHub]</a>
                    <a href="https://github.com/kadamdipak/dsa-problem-tracker" target="_blank" rel="noreferrer" className="hover:underline">[Live Demo]</a>
                  </div>
                </div>
                <ul className="list-disc pl-4 text-[11px] text-slate-700 dark:text-slate-300 space-y-0.5 mt-1">
                  <li>Built a web application to log, categorize, and track daily Data Structures & Algorithms problems solved on CodeChef.</li>
                  <li>Integrated interactive progress visualizers for topic streaks (Arrays, Strings, Linked Lists) and revision reminders.</li>
                  <li>Engineered REST APIs with MongoDB to archive personal solution approaches and time complexities.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">Campus Connect — Peer Academic Discussion Board</span>
                    <span className="text-[11px] text-indigo-600 dark:text-indigo-400 italic"> | Node.js, Express, MongoDB, REST APIs, Postman</span>
                  </div>
                  <div className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                    <a href="https://github.com/kadamdipak/campus-connect-api" target="_blank" rel="noreferrer" className="hover:underline">[GitHub]</a>
                  </div>
                </div>
                <ul className="list-disc pl-4 text-[11px] text-slate-700 dark:text-slate-300 space-y-0.5 mt-1">
                  <li>Engineered a backend forum service for college students to post academic queries, participate in threaded discussions, and upvote solutions.</li>
                  <li>Secured endpoints with token-based authentication and structured MongoDB index schemas for rapid text queries.</li>
                </ul>
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-1 mb-2">
                Certifications & Achievements
              </h2>
              <div className="space-y-1 text-[11.5px]">
                <div className="flex justify-between">
                  <span className="text-slate-800 dark:text-slate-200"><strong>Data Structures & Algorithmic Problem Solving</strong> — CodeChef</span>
                  <span className="text-slate-500 text-[11px]">2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-800 dark:text-slate-200"><strong>Full Stack Web Development & Modern JavaScript Specialization</strong> — Coursera</span>
                  <span className="text-slate-500 text-[11px]">2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-800 dark:text-slate-200"><strong>Active Competitive Programmer</strong> — Regular problem solver on CodeChef (Java & JS)</span>
                  <span className="text-slate-500 text-[11px]">2024 – Present</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
