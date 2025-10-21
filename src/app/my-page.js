"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Mail,
  Moon,
  Sun,
  ExternalLink,
  Code,
  Stethoscope,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      name: "AtlasHQ",
      url: "https://atlashq.net",
      description:
        "A comprehensive learning platform helping students master their skills through active practice. Features include streak tracking, leaderboards, detailed explanations, and 10,000+ practice questions across Mathematics, Physics, Chemistry, Biology, and English.",
      tech: ["Next.js", "React", "Supabase", "Tailwind CSS"],
      highlight: "EdTech Platform",
    },
    {
      name: "JustWash",
      url: "https://justwash.ng",
      description:
        "On-demand laundry service connecting users with trusted washmen and laundry shops across Ibadan. Provides both at-home washing services and pickup/delivery options, making laundry stress-free for students and working professionals.",
      tech: ["Next.js", "React", "WhatsApp Integration"],
      highlight: "Service Marketplace",
    },
    {
      name: "Folafol",
      url: "https://folafol.org",
      description:
        "A modern web application focused on delivering seamless user experiences with clean design principles and optimized performance.",
      tech: ["Next.js", "React", "Modern Web APIs"],
      highlight: "Web Application",
    },
  ];

  const skills = [
    "Next.js",
    "React.js",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Tailwind CSS",
    "Node.js",
    "API Development",
    "SEO Optimization",
    "Responsive Design",
    "AI Tools (Claude, ChatGPT)",
    "Git/GitHub",
  ];

  const whatsappNumber = "2348162200772";
  const whatsappMessage = encodeURIComponent(
    "Hi Temidayo! I'd like to discuss a project with you."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          darkMode ? "bg-black/90" : "bg-white/90"
        } backdrop-blur-md border-b ${
          darkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg sm:text-xl font-bold hover:opacity-70 transition-opacity"
          >
            TO
          </button>

          <div className="flex items-center gap-3 sm:gap-6 text-sm sm:text-base">
            <button
              onClick={() => scrollToSection("about")}
              className={`hover:opacity-70 transition-opacity ${
                activeSection === "about" ? "underline" : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`hover:opacity-70 transition-opacity ${
                activeSection === "projects" ? "underline" : ""
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`hover:opacity-70 transition-opacity ${
                activeSection === "contact" ? "underline" : ""
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${
                darkMode
                  ? "bg-gray-900 hover:bg-gray-800"
                  : "bg-gray-100 hover:bg-gray-200"
              } transition-colors`}
            >
              {darkMode ? (
                <Sun size={16} className="sm:w-5 sm:h-5" />
              ) : (
                <Moon size={16} className="sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`mb-6 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border ${
              darkMode
                ? "bg-gray-900 border-gray-700"
                : "bg-gray-50 border-gray-300"
            }`}
          >
            <Sparkles size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">
              Available for Select Projects
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
            Temidayo Olawoyin
          </h1>

          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg flex-wrap">
            <div className="flex items-center gap-1 sm:gap-2">
              <Code size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span>Full-Stack Developer</span>
            </div>
            <span
              className={
                darkMode
                  ? "text-gray-600 hidden sm:inline"
                  : "text-gray-400 hidden sm:inline"
              }
            >
              •
            </span>
            <div className="flex items-center gap-1 sm:gap-2">
              <Stethoscope size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span>Medical Student</span>
            </div>
          </div>

          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Building digital solutions for small businesses while studying
            Medicine at the University of Ibadan. I help brands establish their
            online presence with modern, SEO-optimized websites.
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection("projects")}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold hover:opacity-80 transition-opacity ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              View My Work
            </button>
            <a
              href="https://github.com/tsolawoyin"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 sm:p-3 rounded-lg ${
                darkMode
                  ? "bg-gray-900 hover:bg-gray-800"
                  : "bg-gray-100 hover:bg-gray-200"
              } transition-colors`}
              aria-label="GitHub Profile"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
            About <span className="underline decoration-2">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                <div
                  className={`w-1 h-6 sm:h-8 ${
                    darkMode ? "bg-white" : "bg-black"
                  } rounded-full`}
                ></div>
                Background
              </h3>
              <p
                className={`mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I'm a Medicine and Surgery student at the University of Ibadan
                with a passion for building web applications. I specialize in
                creating modern, responsive websites using Next.js and React,
                with a strong focus on user experience and performance.
              </p>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                My unique blend of medical education and full-stack development
                gives me a meticulous attention to detail and problem-solving
                approach that translates into clean, efficient code.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                <div
                  className={`w-1 h-6 sm:h-8 ${
                    darkMode ? "bg-white" : "bg-black"
                  } rounded-full`}
                ></div>
                What I Do
              </h3>
              <ul
                className={`space-y-2 sm:space-y-3 text-sm sm:text-base ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <li className="flex items-start gap-2">
                  <span className="mt-1">▹</span>
                  <span>
                    Custom landing pages and full-stack web applications
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">▹</span>
                  <span>SEO optimization for better search visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">▹</span>
                  <span>Responsive design optimized for all devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">▹</span>
                  <span>Database integration with Supabase/PostgreSQL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">▹</span>
                  <span>AI-powered features and integrations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 sm:mt-12">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium ${
                    darkMode
                      ? "bg-gray-900 text-gray-300 border border-gray-800"
                      : "bg-white text-gray-700 border border-gray-200"
                  } hover:opacity-70 transition-opacity`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
      >
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
            Featured <span className="underline decoration-2">Projects</span>
          </h2>

          <div className="grid gap-6 sm:gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`group p-5 sm:p-8 rounded-xl sm:rounded-2xl border ${
                  darkMode
                    ? "bg-gray-900/50 border-gray-800 hover:border-gray-600"
                    : "bg-white border-gray-200 hover:border-gray-400"
                } transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold">
                        {project.name}
                      </h3>
                      <span
                        className={`px-2 sm:px-3 py-1 text-xs rounded-full ${
                          darkMode
                            ? "bg-gray-800 border border-gray-700"
                            : "bg-gray-100 border border-gray-300"
                        }`}
                      >
                        {project.highlight}
                      </span>
                    </div>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg flex-shrink-0 ${
                      darkMode
                        ? "bg-gray-800 hover:bg-gray-700"
                        : "bg-gray-100 hover:bg-gray-200"
                    } transition-colors`}
                    aria-label={`Visit ${project.name}`}
                  >
                    <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </div>

                <p
                  className={`mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm ${
                        darkMode
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Let's <span className="underline decoration-2">Work Together</span>
          </h2>

          <p
            className={`text-sm sm:text-base md:text-lg mb-8 sm:mb-12 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I'm currently accepting select projects from small businesses
            looking to establish or enhance their online presence. Due to my
            medical studies, I work with a limited number of clients to ensure
            quality delivery.
          </p>

          <div
            className={`p-5 sm:p-8 rounded-xl sm:rounded-2xl border ${
              darkMode
                ? "bg-gray-900/50 border-gray-800"
                : "bg-white border-gray-200"
            } mb-6 sm:mb-8 text-left`}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">
              What I'm Looking For
            </h3>
            <ul
              className={`space-y-2 sm:space-y-3 text-sm sm:text-base ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>Small businesses ready to build their brand online</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>Projects with clear scope and flexible timelines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>Clients who value quality over speed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✗</span>
                <span>Full-time positions or recruitment opportunities</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold hover:opacity-80 transition-opacity flex items-center gap-2 ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              <MessageCircle size={18} className="sm:w-5 sm:h-5" />
              WhatsApp
            </a>
            <a
              href="mailto:contact@temidayoolawoyin.com"
              className={`px-5 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold ${
                darkMode
                  ? "bg-gray-900 hover:bg-gray-800"
                  : "bg-gray-100 hover:bg-gray-200"
              } transition-colors flex items-center gap-2`}
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
              Email
            </a>
            <a
              href="https://github.com/tsolawoyin"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold ${
                darkMode
                  ? "bg-gray-900 hover:bg-gray-800"
                  : "bg-gray-100 hover:bg-gray-200"
              } transition-colors flex items-center gap-2`}
            >
              <Github size={18} className="sm:w-5 sm:h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t ${
          darkMode ? "border-gray-800" : "border-gray-200"
        } py-6 sm:py-8`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p
            className={`text-xs sm:text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Built with Next.js & React • © 2024 Temidayo Olawoyin
          </p>
        </div>
      </footer>
    </div>
  );
}
