import React from 'react';
import { X, Sparkles, CheckCircle2, FileText, Mail, Phone, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function InterviewerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, interviewHighlights } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/60 dark:bg-slate-800/40">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Interview Quick Brief
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                60-second summary tailored for recruiters & technical hiring managers
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 dark:text-slate-200">
          {/* Elevator Pitch */}
          <div className="bg-indigo-50/60 dark:bg-indigo-950/40 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-900/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 mb-1">
              Elevator Pitch
            </h4>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              I am a Full Stack Developer equipped with a solid foundation in modern frontend architecture (React, TypeScript, Tailwind) and production-ready backend services (Node.js, Express, PostgreSQL, MongoDB). I prioritize clean code, automated validation, and smooth user experiences.
            </p>
          </div>

          {/* Top 4 Core Strengths */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Core Strengths
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {interviewHighlights.topStrengths.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h5>
                      <p className="text-[12px] text-slate-600 dark:text-slate-300 leading-normal mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rapid Q&A */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Interview Questions at a Glance
            </h4>
            <div className="space-y-3">
              {interviewHighlights.starterAnswers.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800"
                >
                  <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                    Q: {item.q}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    A: {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-indigo-500" />
              {personal.email}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-xs"
            >
              Get In Touch Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
