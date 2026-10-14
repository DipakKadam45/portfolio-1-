import React from 'react';
import { BookOpen, Award, GraduationCap, Sparkles, ArrowUpRight, Flame, Code, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { fireConfetti } from '../utils/confetti';

export default function BentoGrid({ onOpenInterviewerModal, onOpenResumeModal }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            Portfolio Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Snapshot of My Engineering Craft
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Key pillars, academic credentials, and algorithmic practice at a glance.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* Bento Card 1: Flagship Project Spotlight (2 cols wide) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-3xl bg-gradient-to-br from-indigo-50/80 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/30 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/10 rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform"></div>

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Flagship Innovation</span>
                </span>
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Build
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Campus Academic Material Exchange Portal
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                Centralized platform engineered to solve academic resource hunting at RCPIT Shirpur. Students easily upload, verify, and exchange textbooks, lecture notes, and semester papers.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200/70 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {['Node.js', 'Express', 'MongoDB', 'JavaScript'].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#projects"
                className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:gap-2 transition-all"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bento Card 2: CodeChef & Competitive Programming */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Flame className="w-5 h-5" />
              </div>

              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Problem Solving
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                CodeChef Contender
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                Active algorithmic practice focusing on Java, time complexity, and data structures.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Handle:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">rcpit251109071</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Profile:</span>
                <a
                  href="https://www.codechef.com/users/rcpit251109071"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>View CodeChef</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Academics RCPIT Shirpur */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Education
                </span>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  7.79 CGPA
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                RCPIT Shirpur
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                B.Tech in Information Technology (Class of 2029). Strong curriculum in DBMS, Java OOP, and Web Systems.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400">Academic Score:</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">7.79 CGPA</span>
            </div>
          </div>

          {/* Bento Card 4: Quick 60-Second Interviewer Brief */}
          <div className="md:col-span-2 lg:col-span-2 rounded-3xl bg-slate-900 text-white p-6 sm:p-7 shadow-md flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Executive Cheat Sheet</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Are You a Recruiter or Hiring Manager?
              </h3>
              <p className="text-xs text-slate-300 max-w-md">
                Get a 60-second summary of Dipak's top technical strengths, primary stack, and answers to common intro interview questions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full sm:w-auto">
              <button
                onClick={onOpenInterviewerModal}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all text-white text-center shadow-sm"
              >
                Open Recruiter Brief
              </button>
              <button
                onClick={onOpenResumeModal}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 active:scale-95 transition-all text-slate-200 text-center border border-slate-700"
              >
                1-Page Resume
              </button>
            </div>
          </div>

          {/* Bento Card 5: Celebrate & Connect Action */}
          <div className="md:col-span-1 lg:col-span-2 rounded-3xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-6 shadow-md flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-200">
                Action Trigger
              </span>
              <h4 className="text-base sm:text-lg font-bold mt-0.5">
                Ready to Schedule an Interview?
              </h4>
              <p className="text-xs text-indigo-100 mt-1">
                kadamdipak943@gmail.com • +91 9322332363
              </p>
            </div>

            <button
              onClick={fireConfetti}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-indigo-700 hover:bg-indigo-50 active:scale-90 transition-all shadow-md shrink-0 flex items-center gap-1.5"
            >
              <span>Celebrate 🎉</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
