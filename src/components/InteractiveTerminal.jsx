import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Sparkles, Check, Play } from 'lucide-react';
import { fireConfetti } from '../utils/confetti';

export default function InteractiveTerminal({ onOpenInterviewerModal, onOpenResumeModal }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Dipak Kadam Terminal [v2.4.0-shirpur]' },
    { type: 'system', text: 'Type a command or click a quick shortcut below:' },
    { type: 'user', text: 'cat quick-info.json' },
    {
      type: 'output',
      text: `{
  "developer": "Dipak Kadam",
  "status": "Available for Internships & Full-Time",
  "education": "B.Tech IT @ RCPIT Shirpur (2025-2029)",
  "flagship_project": "Campus Academic Material Exchange Portal",
  "languages": ["Java", "JavaScript", "HTML/CSS", "Node.js"]
}`,
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const quickCommands = [
    { label: 'skills', cmd: 'skills' },
    { label: 'projects', cmd: 'projects' },
    { label: 'education', cmd: 'education' },
    { label: 'hire dipak', cmd: 'hire' },
    { label: 'clear', cmd: 'clear' },
  ];

  const handleExecute = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([
        { type: 'system', text: 'Terminal cleared. Type "help" for available commands.' },
      ]);
      setInputVal('');
      return;
    }

    let responseText = '';
    let isHire = false;

    switch (cmd) {
      case 'help':
        responseText = `Available commands:
  • skills       - List primary programming languages & tech stack
  • projects     - Inspect featured full-stack projects
  • education    - College, university, and graduation status
  • contact      - Phone, email, and social profiles
  • resume       - Open 1-Page ATS Resume modal
  • brief        - Open the 60-second recruiter brief
  • hire         - Schedule an interview & celebrate!
  • clear        - Clear terminal history`;
        break;

      case 'skills':
        responseText = `⚡ TECHNICAL COMPETENCIES:
  • Languages: Java (Core & OOP), JavaScript (ES6+), HTML5, CSS3
  • Backend:   Node.js, Express.js, RESTful APIs, JWT Auth
  • Database:  MongoDB, Mongoose ODM, SQL Basics
  • Frontend:  React.js, Tailwind CSS, Responsive Design
  • Tools:     Git, GitHub, Postman, VS Code, npm, Render/Vercel`;
        break;

      case 'projects':
        responseText = `🚀 FEATURED WORK:
  1. Campus Academic Material Exchange Portal (Flagship)
     -> Solves resource sharing (notes, books, papers) across departments.
     -> Stack: Node.js, Express, MongoDB, JavaScript.
  2. CodeTrack - DSA & Problem Solving Hub
     -> Competitive programming tracker for CodeChef streaks.
     -> Stack: React.js, Node.js, MongoDB, Tailwind.`;
        break;

      case 'education':
      case 'college':
        responseText = `🎓 ACADEMIC BACKGROUND:
  • Institution: R.C. Patel Institute of Technology (RCPIT), Shirpur
  • Degree:      B.Tech in Information Technology (IT)
  • Duration:    2025 – 2029 (Current Student)
  • Focus:       DSA, OOP with Java, DBMS, Web Development`;
        break;

      case 'contact':
        responseText = `📫 REACH OUT:
  • Email:    kadamdipak943@gmail.com
  • Phone:    +91 9322332363 (WhatsApp available)
  • Location: Shirpur, Maharashtra, India
  • LinkedIn: linkedin.com/in/dipak-kadam-012066327
  • GitHub:   github.com/kadamdipak`;
        break;

      case 'resume':
        responseText = `Opening 1-Page ATS printable resume...`;
        onOpenResumeModal?.();
        break;

      case 'brief':
        responseText = `Opening recruiter 60-second brief...`;
        onOpenInterviewerModal?.();
        break;

      case 'hire':
        isHire = true;
        responseText = `🎉 EXCELLENT DECISION!
Dipak Kadam is actively preparing for engineering roles & internships.
Ready to connect: kadamdipak943@gmail.com | +91 9322332363`;
        fireConfetti();
        break;

      default:
        responseText = `command not found: "${rawCmd}". Type "help" to see valid commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'user', text: rawCmd },
      { type: 'output', text: responseText, isHighlight: isHire },
    ]);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleExecute(inputVal);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden font-mono text-xs text-slate-200">
      {/* Terminal Title Bar */}
      <div className="bg-slate-800/90 px-4 py-3 border-b border-slate-700/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-[11px] text-slate-400 font-medium ml-2 flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-indigo-400" />
            dipak@rcpit: ~/portfolio
          </span>
        </div>
        <span className="text-[10px] text-slate-500 uppercase tracking-widest hidden sm:inline">
          Interactive CLI
        </span>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 sm:p-5 max-h-72 sm:max-h-80 overflow-y-auto space-y-2.5 bg-slate-950/80 leading-relaxed">
        {history.map((item, idx) => {
          if (item.type === 'system') {
            return (
              <div key={idx} className="text-slate-400 text-[11px]">
                {item.text}
              </div>
            );
          }
          if (item.type === 'user') {
            return (
              <div key={idx} className="flex items-center gap-2 text-indigo-400 font-semibold">
                <span className="text-emerald-400">dipak@rcpit:~$</span>
                <span>{item.text}</span>
              </div>
            );
          }
          return (
            <pre
              key={idx}
              className={`whitespace-pre-wrap font-mono text-[11px] leading-relaxed p-2 rounded-lg ${
                item.isHighlight
                  ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-800/60 font-semibold'
                  : 'text-slate-300 bg-slate-900/60'
              }`}
            >
              {item.text}
            </pre>
          );
        })}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Input Row */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border-t border-slate-800"
      >
        <span className="text-emerald-400 font-semibold select-none">➜</span>
        <input
          type="text"
          placeholder="type 'skills', 'hire', 'projects'..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="flex-1 bg-transparent border-none text-slate-100 placeholder-slate-500 focus:outline-none text-xs font-mono"
        />
        <button
          type="submit"
          className="p-1.5 text-slate-400 hover:text-indigo-400 transition-colors"
          title="Run command"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>

      {/* Quick Command Pills */}
      <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[10px]">
        <span className="text-slate-500 mr-1 select-none">Click:</span>
        {quickCommands.map((q) => (
          <button
            key={q.cmd}
            type="button"
            onClick={() => handleExecute(q.cmd)}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-300 transition-colors border border-slate-700/60 cursor-pointer"
          >
            {q.label}
          </button>
        ))}
      </div>
    </div>
  );
}
