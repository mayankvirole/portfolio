import React from "react";
import {
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import "./App.css";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Open Source", href: "#open-source" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const stackGroups = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "SQL", "C++", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "REST APIs", "Node.js", "Microservices", "Hibernate/JPA"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQL Query Optimization"],
  },
  {
    title: "Tools",
    items: ["Git", "Postman", "Docker", "DBeaver", "PgAdmin", "Maven"],
  },
  {
    title: "Frontend",
    items: ["ReactJS", "Vue.js", "AngularJS", "Responsive UI Integration"],
  },
];

const experiences = [
  {
    company: "Argusoft",
    title: "Solution Analyst",
    duration: "July 2023 - Present",
    points: [
      "Implemented and worked on Medplat, a low-code platform used in production-facing healthcare workflows.",
      "Wrote complex SQL queries and reports to support business operations and improve data visibility for teams.",
      "Built a Medicine Stock Management feature from scratch, covering backend logic, database handling, and integration flows.",
      "Integrated the IBM Language Translation API and collaborated with frontend, QA, and business teams to deliver features reliably.",
    ],
  },
  {
    company: "NextSolutions",
    title: "Backend Engineer",
    duration: "January 2023 - May 2023",
    points: [
      "Provided regulatory documentation support for multiple active ingredients in a domain-driven backend environment.",
      "Created and maintained APIs in Node.js for internal workflows and downstream integrations.",
      "Worked on data filtering pipelines and schema management to keep backend data handling consistent and maintainable.",
      "Supported debugging, delivery, and cross-team coordination across product and engineering stakeholders.",
    ],
  },
  {
    company: "Fynd",
    title: "Full Stack Trainee",
    duration: "October 2022 - January 2023",
    points: [
      "Learned and developed Vue.js applications while working with store management patterns and Node.js APIs.",
      "Contributed to creating and maintaining APIs and gained experience across frontend and backend delivery.",
      "Built practical product experience in feature implementation, debugging, and team-based engineering workflows.",
    ],
  },
  {
    company: "Minimumque AB",
    title: "ReactJS Developer",
    duration: "June 2022 - September 2022",
    points: [
      "Maintained and delivered features in a React.js frontend for user-facing workflows.",
      "Implemented Redux-based state management and supported API integration with backend services.",
      "Improved UI behavior, fixed bugs, and helped ship production-ready features in a collaborative setup.",
    ],
  },
];

const projects = [
  {
    title: "Task Management Backend",
    description:
      "Built a task management backend using Spring Boot with JWT authentication, role-based access, CRUD APIs, and MySQL integration.",
    architecture:
      "Layered Spring Boot service with controller, service, repository, and DTO mapping layers backed by relational persistence.",
    features: [
      "Secure login and protected API routes",
      "Task lifecycle management with validation",
      "Database integration for users, roles, and tasks",
    ],
    github: "https://github.com/mayankvirole",
    linkLabel: "View GitHub profile",
  },
  {
    title: "Medicine Stock Management Module",
    description:
      "Worked on a medicine stock management flow aligned with production use cases, handling business logic, data operations, and feature delivery across the stack.",
    architecture:
      "Business-module architecture with backend services, relational queries, and integrations connected to operational healthcare workflows.",
    features: [
      "Inventory-oriented workflows and reporting support",
      "Complex SQL-backed operations and business validations",
      "Cross-team delivery with frontend, QA, and product collaboration",
    ],
    github: "https://github.com/mayankvirole",
    linkLabel: "View GitHub profile",
  },
];

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/mayankvirole",
    href: "https://github.com/mayankvirole",
    icon: <FaGithub aria-hidden="true" />,
  },
  {
    label: "Professional Profile",
    value: "himalayas.app/@mayankvirole",
    href: "https://himalayas.app/@mayankvirole",
    icon: <FaLinkedin aria-hidden="true" />,
  },
  {
    label: "Email",
    value: "virolemayank@gmail.com",
    href: "mailto:virolemayank@gmail.com",
    icon: <FaEnvelope aria-hidden="true" />,
  },
  {
    label: "Resume",
    value: "Download resume",
    href: "/assets/mayank.virole.03.12.pdf",
    icon: <FaDownload aria-hidden="true" />,
  },
];

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#hero">
          <img className="brand-mark" src="/mv-logo.svg" alt="Mayank Virole logo" />
          <span className="brand-text">Mayank Virole</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navigationItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">Java / Spring Boot / REST APIs</p>
            <h1>Mayank Virole</h1>
            <h2>Solution Analyst</h2>
            <p className="hero-summary">
              Solution Analyst with 2 years of experience building Java and Spring Boot
              applications, REST APIs, data-heavy modules, and scalable backend systems.
            </p>

            <div className="hero-actions">
              <a className="primary-action" href="#experience">
                View Experience
                <FaArrowRight aria-hidden="true" />
              </a>
              <a className="secondary-action" href="/assets/mayank.virole.03.12.pdf" target="_blank" rel="noreferrer">
                Download Resume
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <span className="panel-label">What I work with</span>
            <ul>
              <li>Java and Spring Boot backend development</li>
              <li>REST API design and integration</li>
              <li>Relational databases and SQL optimization</li>
              <li>Production support, debugging, and feature delivery</li>
            </ul>
          </aside>
        </section>

        <section className="content-section" id="about">
          <div className="section-heading">
            <p className="section-kicker">About</p>
            <h2>Backend-focused, practical, and easy to work with.</h2>
          </div>
          <div className="text-card">
            <p>
              I have around 2 years of experience building and supporting software applications,
              with most of my work centered on Java, Spring Boot, REST APIs, relational databases, and solution delivery.
            </p>
            <p>
              My experience includes backend module development, feature delivery, debugging,
              production support, SQL work, API integration, and domain-specific features in real-world application flows.
            </p>
            <p>
              I have worked on Medplat at Argusoft, built stock-management functionality, written
              complex SQL reports, and integrated the IBM Language Translation API for product features.
            </p>
            <p>
              I also bring frontend exposure through React and Vue-based work, which helps me collaborate
              smoothly across teams and contribute end to end when needed.
            </p>
            <p>
              I am currently working as a Solution Analyst and targeting backend developer and software engineer roles where I can
              keep growing in API architecture, system design, performance, and scalable backend engineering.
            </p>
          </div>
        </section>

        <section className="content-section" id="tech-stack">
          <div className="section-heading">
            <p className="section-kicker">Tech Stack</p>
            <h2>Built around backend engineering fundamentals.</h2>
          </div>
          <div className="stack-grid">
            {stackGroups.map((group) => (
              <article className="stack-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="experience">
          <div className="section-heading">
            <p className="section-kicker">Work Experience</p>
            <h2>Experience first, because that is the strongest signal.</h2>
          </div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.company}>
                <div className="experience-header">
                  <div>
                    <h3>{experience.company}</h3>
                    <p className="experience-role">{experience.title}</p>
                  </div>
                  <span className="experience-duration">{experience.duration}</span>
                </div>
                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="open-source">
          <div className="section-heading">
            <p className="section-kicker">Open Source Contribution</p>
            <h2>Strong signal for working in established codebases.</h2>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <h3>Spring Boot</h3>
              <p>
                Contributed to the Spring Boot ecosystem through issue analysis, code-level
                changes, and collaboration in a widely used production framework. This highlights
                real-world code quality awareness and the ability to navigate mature codebases.
              </p>
              <a
                className="inline-link"
                href="https://github.com/spring-projects/spring-boot/pulls?q=is%3Apr+author%3Amayankvirole"
                target="_blank"
                rel="noreferrer"
              >
                View contribution
                <FaExternalLinkAlt aria-hidden="true" />
              </a>
            </article>

            <article className="project-card">
              <h3>9tigerio/db2rest</h3>
              <p>
                Contributed a public code change to `db2rest`, showing hands-on experience working
                with another established repository outside my day-to-day product work.
              </p>
              <a
                className="inline-link"
                href="https://github.com/9tigerio/db2rest/commit/ad369eeb9e758851589b18f3799b5848424ba6df"
                target="_blank"
                rel="noreferrer"
              >
                View commit
                <FaExternalLinkAlt aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-heading">
            <p className="section-kicker">Selected Projects</p>
            <h2>Explained like backend work, not just app names.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-architecture">
                  <strong>Architecture:</strong> {project.architecture}
                </p>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className="inline-link" href={project.github} target="_blank" rel="noreferrer">
                  {project.linkLabel}
                  <FaExternalLinkAlt aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="contact">
          <div className="section-heading">
            <p className="section-kicker">Resume + Contact</p>
            <h2>Easy to scan, easy to reach, easy to verify.</h2>
          </div>
          <div className="contact-grid">
            {contactLinks.map((item) => (
              <a
                className="contact-card"
                href={item.href}
                key={item.label}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="contact-icon">{item.icon}</span>
                <div>
                  <p className="contact-label">{item.label}</p>
                  <p className="contact-value">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
