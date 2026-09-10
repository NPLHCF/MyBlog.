// components/LatestProjectsCarousel.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function LatestProjectsCarousel({ projects, startIndex = 0 }: { projects: any[]; startIndex?: number }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    if (projects.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  if (!projects || projects.length === 0) return null;

  const currentProject = projects[currentIndex];

  return (
    <div className="rounded-3xl bg-white/40 dark:bg-slate-800/50 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-xl overflow-hidden relative group min-h-[300px] h-full flex flex-col">

      <Link href={currentProject.githubUrl || '#'} target="_blank" className="absolute inset-0 z-20" aria-label={`查看项目 ${currentProject.name}`} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img src={currentProject.cover || '/project-covers/cover_01.jpg'} className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105" alt={currentProject.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col justify-end p-6 w-full mt-auto h-full pointer-events-none">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="px-3 py-1 bg-indigo-500/80 backdrop-blur-lg rounded-full text-[10px] text-white font-black uppercase tracking-widest shadow-lg">Project</span>
          <span className="px-2 py-1 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-[10px] text-white/90 font-mono tracking-wider">
            {currentProject.icon || '🚀'}
          </span>
        </div>
        <h2 className="text-xl font-bold text-white mb-2 group-hover:-translate-y-1 transition-transform drop-shadow-md">{currentProject.name}</h2>
        <p className="text-sm text-gray-300 line-clamp-3 drop-shadow-sm mb-4">{currentProject.description}</p>
        <div className="flex flex-wrap gap-2">
          {(currentProject.tags || []).slice(0, 4).map((tag: string, i: number) => (
            <span key={i} className="px-2 py-0.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-[10px] text-white/90">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {projects.length > 1 && (
        <div className="absolute bottom-4 right-6 z-30 flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-6 bg-indigo-400' : 'w-2 bg-white/40 hover:bg-white/80'}`}
              aria-label={`切换到第 ${i + 1} 个项目`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
