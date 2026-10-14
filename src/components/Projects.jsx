import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, Sparkles, CheckCircle2, Cpu, Layout, Server, Database } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');
  const [activeTabByProject, setActiveTabByProject] = useState({});

  const categories = ['All', 'Full Stack', 'Backend'];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  const getProjectTab = (id) => activeTabByProject[id] || 'overview';

  const setProjectTab = (id, tab) => {
    setActiveTabByProject((prev) => ({ ...prev, [id]: tab }));
  };

  const projectArchitectures = {
    'campuswap': {
      pipeline: 'HTML5/CSS3 Client ➔ Node.js Express API ➔ MySQL Database ➔ Vercel Deployment',
      endpoints: [
        { method: 'POST', path: '/api/v1/swap/create', desc: 'Create a new resource swap listing' },
        { method: 'GET', path: '/api/v1/swap/browse', desc: 'Browse available student resource listings' },
        { method: 'POST', path: '/api/v1/auth/register', desc: 'Student account registration & login' },
      ],
      dbModels: ['SwapListing (title, category, owner, status)', 'StudentUser (name, rollNo, contact)'],
    },
    'campus-exchange': {
      pipeline: 'HTML5/JS Client ➔ Node.js Express Gateway ➔ MySQL Relational Storage',
      endpoints: [
        { method: 'POST', path: '/api/v1/materials/upload', desc: 'Secure multipart file & notes upload' },
        { method: 'GET', path: '/api/v1/materials/search', desc: 'Department & semester query filter' },
        { method: 'POST', path: '/api/v1/auth/student-login', desc: 'Session token generation & authorization' },
      ],
      dbModels: ['Material (title, branch, semester, fileUrl)', 'StudentUser (name, rollNo, role)'],
    },
    'dsa-tracker': {
      pipeline: 'HTML5/JS UI ➔ Express API ➔ MySQL Tables ➔ CodeChef Progress Metrics',
      endpoints: [
        { method: 'GET', path: '/api/v1/problems/streak', desc: 'Computes continuous daily coding streak' },
        { method: 'POST', path: '/api/v1/problems/log', desc: 'Archives problem complexity & solution notes' },
        { method: 'GET', path: '/api/v1/analytics/by-topic', desc: 'Categorizes array, string, DP completion' },
      ],
      dbModels: ['ProblemRecord (name, platform, topic, difficulty)', 'UserStreak (date, count)'],
    },
    'campus-discussion': {
      pipeline: 'Frontend Client ➔ Express REST Router ➔ Auth Middleware ➔ MySQL',
      endpoints: [
        { method: 'GET', path: '/api/v1/threads/subject', desc: 'Retrieves threads filtered by subject tag' },
        { method: 'POST', path: '/api/v1/threads/reply', desc: 'Submits peer response with upvote counter' },
      ],
      dbModels: ['DiscussionThread (title, author, content, tags)', 'Reply (threadId, upvotes)'],
    },
  };

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
              Selected Engineering Projects
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl">
              Inspect both the problem overview and the under-the-hood system architecture for each build.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                  filter === cat
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => {
            const currentTab = getProjectTab(project.id);
            const arch = projectArchitectures[project.id];

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group hover:border-indigo-400/50"
              >
                <div>
                  {/* Card Header */}
                  <div className="p-6 pb-4 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60">
                          <Sparkles className="w-3 h-3" />
                          <span>{project.badge}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* View Switcher: Overview vs System Architecture */}
                    <div className="flex rounded-lg bg-slate-200/60 dark:bg-slate-800 p-0.5 mt-3 text-[11px] font-semibold">
                      <button
                        onClick={() => setProjectTab(project.id, 'overview')}
                        className={`flex-1 py-1 rounded-md transition-all flex items-center justify-center gap-1 ${
                          currentTab === 'overview'
                            ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
                        }`}
                      >
                        <Layout className="w-3 h-3" />
                        <span>Overview</span>
                      </button>
                      <button
                        onClick={() => setProjectTab(project.id, 'architecture')}
                        className={`flex-1 py-1 rounded-md transition-all flex items-center justify-center gap-1 ${
                          currentTab === 'architecture'
                            ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-2xs'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
                        }`}
                      >
                        <Cpu className="w-3 h-3" />
                        <span>Architecture & APIs</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content based on Active Tab */}
                  <div className="p-6">
                    {currentTab === 'overview' ? (
                      <div className="space-y-4">
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed min-h-[50px]">
                          {project.description}
                        </p>

                        {/* Bullet Highlights */}
                        {project.keyAchievements && (
                          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 border border-slate-100 dark:border-slate-800">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-1.5">
                              Key Highlights
                            </p>
                            <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                              {project.keyAchievements.map((ach, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                                  <span className="leading-snug">{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Architecture Deep Dive Tab */
                      <div className="space-y-3 font-mono text-[11px]">
                        {arch ? (
                          <>
                            <div className="p-2.5 rounded-xl bg-slate-900 text-indigo-300 border border-slate-800">
                              <span className="text-[9px] uppercase tracking-wider text-slate-400 block mb-1">
                                Data Pipeline
                              </span>
                              <p className="text-[11px] leading-tight text-emerald-300">
                                {arch.pipeline}
                              </p>
                            </div>

                            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                              <span className="text-[9px] uppercase tracking-wider text-slate-400 block mb-1 font-sans">
                                Key REST Endpoints
                              </span>
                              <div className="space-y-1">
                                {arch.endpoints.map((ep, eIdx) => (
                                  <div key={eIdx} className="flex items-baseline gap-1 text-[10.5px]">
                                    <span className="px-1 py-0.2 rounded text-[9px] font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                                      {ep.method}
                                    </span>
                                    <span className="text-slate-700 dark:text-slate-200">{ep.path}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="text-[10px] text-slate-500 dark:text-slate-400 font-sans">
                              <strong>Database Schemas:</strong> {arch.dbModels.join(' • ')}
                            </div>
                          </>
                        ) : (
                          <p className="text-xs text-slate-500 font-sans">
                            Detailed architecture spec coming soon.
                          </p>
                        )}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/60">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Links */}
                <div className="px-6 py-3.5 bg-slate-50/70 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Repo</span>
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
