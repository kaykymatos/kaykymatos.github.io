"use client";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Skills } from "@/components/Skills";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-200 to-white text-black dark:from-gray-900 dark:to-black dark:text-white  ${
        darkMode ? "dark" : ""
      }`}
    >
      <Header
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}
