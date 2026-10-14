import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, Server, Cpu, CheckCircle } from 'lucide-react';

export default function About() {
  const { personal, interviewHighlights } = portfolioData;

  const corePillars = [
    {
      icon: Code,
      title: 'Frontend Craftsmanship',
      desc: 'Crafting responsive, accessible interfaces with React, state management, and Tailwind CSS.',
    },
    {
      icon: Server,
      title: 'Reliable Backend Systems',
      desc: 'Designing RESTful architectures, secure auth flows, and efficient database pipelines.',
    },
    {
      icon: Cpu,
      title: 'Performance & Optimization',
      desc: 'Mindful of bundle sizes, network latency, database query times, and SEO best practices.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column: About Bio */}
          <div className="md:w-1/2">
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-6 tracking-tight">
              Engineering with curiosity, discipline, and user-centric focus.
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>{personal.bio}</p>
              <p>
                My goal in every project is simple: write maintainable code that solves genuine real-world problems. Whether designing relational schemas, tuning component renders, or integrating external APIs, I pride myself on clean architecture and thorough documentation.
              </p>
            </div>

            {/* Quick Strengths Checklist */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Solid CS & OOP Fundamentals',
                'REST & API Integration',
                'Responsive & Mobile-First',
                'Git & Agile Workflows',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3 Pillar Cards */}
          <div className="md:w-1/2 w-full space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              How I Build Software
            </h3>
            {corePillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
