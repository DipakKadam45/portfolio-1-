import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, Server, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'devopsAndTools', label: 'DevOps & Tools', icon: Wrench },
  ];

  const getSkillsToDisplay = () => {
    if (activeTab === 'all') {
      return [
        { category: 'Frontend Development', items: skills.frontend },
        { category: 'Backend & Architecture', items: skills.backend },
        { category: 'Databases & Caching', items: skills.databases },
        { category: 'DevOps & Tooling', items: skills.devopsAndTools },
      ];
    }
    const categoryTitle = categories.find((c) => c.id === activeTab)?.label || 'Skills';
    return [{ category: categoryTitle, items: skills[activeTab] || [] }];
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Modern tools and proven technologies I leverage to build robust production applications.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-10">
          {getSkillsToDisplay().map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 pl-1">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {group.items.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-sm hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform" />
                      <span className="font-medium text-sm text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        skill.level === 'Advanced'
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
