import React, { useEffect, useState } from "react";
import "../assets/styles/ScrollSpyNav.css";

export default function ScrollSpyNav() {
  const [activeSection, setActiveSection] = useState("home");

  // IntersectionObserver: detect which section is visible
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Smooth scroll with offset for fixed nav
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    const offset = 70; // adjust for navbar height
    const top = section.offsetTop - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Auto-scroll the active menu item into view
  useEffect(() => {
    const activeLink = document.querySelector(".fixed-menu a.active");
    if (activeLink) {
      activeLink.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeSection]);

  return (
    <>
      <nav className="fixed-menu">
        {["home", "about", "projects", "blog", "gallery", "team", "contact"].map((id) => (
            <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "active" : ""}
            onClick={(e) => handleScroll(e, `#${id}`)}
            >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>

      <main>
        {["home", "about", "projects", "blog", "gallery", "team", "contact"].map((id) => (
          <section key={id} id={id}>
            {id.charAt(0).toUpperCase() + id.slice(1)} Section
          </section>
        ))}
      </main>
    </>
  );
}
