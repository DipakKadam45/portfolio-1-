import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, MapPin, FileText, Sparkles, Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenInterviewerModal, onOpenResumeModal }) {
  const { personal } = portfolioData;

  const quickTechStack = [
    'Java (OOP)',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JavaScript',
    'React.js',
    'Tailwind CSS',
    'REST APIs',
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient & Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-100/40 via-slate-100/20 to-transparent dark:from-indigo-950/20 dark:via-slate-900/10 dark:to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-36 left-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status & Academic Marks Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.availability}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold shadow-xs">
              <Award className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>CGPA: {personal.cgpa}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium shadow-xs">
              <span>10th: {personal.sscMarks}</span>
              <span>•</span>
              <span>12th: {personal.hscMarks}</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-5">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">{personal.name} {personal.surname}</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
              {personal.title}
            </span>
          </h1>

          {/* Subtitle / Pitch */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            {personal.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-9">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all shadow-md shadow-indigo-500/20 text-sm"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 active:scale-95 transition-all shadow-xs text-sm"
            >
              <FileText className="w-4 h-4 text-indigo-500" />
              <span>1-Page Resume</span>
            </button>

            <button
              onClick={onOpenInterviewerModal}
              className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-xl font-medium text-indigo-600 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 hover:bg-indigo-100/80 transition-all text-xs sm:text-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interview Summary</span>
            </button>
          </div>

          {/* Socials & Location Meta */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800/80 pt-5">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>{personal.location}</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personal.codechef}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 hover:underline font-bold"
              >
                <span>CodeChef</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stack ticker */}
        <div className="mt-12 pt-6 border-t border-slate-200/70 dark:border-slate-800/60">
          <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-3">
            Primary Tech Stack & Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {quickTechStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
