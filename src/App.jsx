import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InterviewerModal from './components/InterviewerModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  // Clean Minimalist Light default with optional dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [isInterviewerModalOpen, setIsInterviewerModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-200 flex flex-col justify-between">
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenInterviewerModal={() => setIsInterviewerModalOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenInterviewerModal={() => setIsInterviewerModalOpen(true)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
        <Stats />
        <BentoGrid
          onOpenInterviewerModal={() => setIsInterviewerModalOpen(true)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Recruiter/Interviewer Modal */}
      <InterviewerModal
        isOpen={isInterviewerModalOpen}
        onClose={() => setIsInterviewerModalOpen(false)}
      />

      {/* 1-Page ATS Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
