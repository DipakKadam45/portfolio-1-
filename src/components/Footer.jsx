import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & info */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {personal.name} {personal.surname || ''} — Full Stack Developer
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Built with React, Vite & Tailwind CSS. Designed for technical interviews.
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={personal.codechef}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
            >
              CodeChef
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              title="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 text-center text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
