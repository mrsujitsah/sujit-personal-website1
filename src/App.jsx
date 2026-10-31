import React from "react";
import {
  ArrowUpRight,
  GitBranch,
  Mail,
  MapPin,
  Code2,
  Cloud,
  Boxes,
  Terminal,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

const skills = [
  { name: "Java & Spring Boot", group: "Backend" },
  { name: "Golang", group: "Backend" },
  { name: "Python", group: "Backend" },
  { name: "AWS", group: "Cloud" },
  { name: "Microservices", group: "Architecture" },
  { name: "REST & gRPC APIs", group: "Backend" },
  { name: "ReactJS", group: "Frontend" },
  { name: "Docker & CI/CD", group: "DevOps" },
  { name: "PostgreSQL", group: "Data" },
  { name: "RabbitMQ", group: "Messaging" },
  { name: "Kotlin", group: "Backend" },
  { name: "AI / RAG concepts", group: "AI" },
];

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Rieter India Pvt. Ltd.",
    period: "June 2026 — Present",
    description:
      "Building and evolving software solutions, with a focus on backend engineering, services and practical product outcomes.",
    tags: ["Java", "Kotlin", "Spring Boot", "Cloud", "LLM", "RAG"],
  },
  {
    role: "Senior Software Engineer",
    company: "Volkswagen Group Digital Solutions",
    period: "Oct 2023 — Jun 2026",
    description:
      "Contributed to modernising a long-running legacy product into microservices using Golang, AWS and Kotlin. Worked on services handling approximately 1–2 million requests per day, CI/CD automation and cross-team planning.",
    tags: ["Golang", "AWS", "Kotlin", "Microservices", "AWS CDK"],
  },
  {
    role: "Software Engineer",
    company: "IBM India Pvt. Ltd.",
    period: "Oct 2022 — Oct 2023",
    description:
      "Working on cross-border payment systems, building backend services and APIs in Java and Spring Boot, with a focus on reliability, scalability and maintainability.",
    tags: [
      "Java",
      "Spring Boot",
      "REST",
      "gRPC",
      "PostgreSQL",
      "RabbitMQ",
      "AWS",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Cloud-native modernisation",
    description:
      "Modernisation of a long-running enterprise product into independently deployable services, with an emphasis on scalability, maintainability and automated delivery.",
    stack: ["Golang", "AWS", "Kotlin", "Microservices"],
  },
  {
    number: "02",
    title: "Live-data conversational assistant",
    description:
      "A prototype conversational assistant that retrieves operational information from backend APIs so answers are grounded in current application data rather than model guesses.",
    stack: ["Local LLM", "Java", "Spring Boot", "ReactJS"],
  },
  {
    number: "03",
    title: "Personal web presence",
    description:
      "A responsive portfolio to present engineering experience, selected work and technical interests in one place.",
    stack: ["ReactJS", "Vite", "CSS"],
  },
  {
    number: "04",
    title: "AI-powered Email Action Assistant",
    description:
      "An intelligent email assistant that uses LLMs to analyse incoming emails, understand their context, extract key information, identify action items and prepare suggested responses or follow-up tasks. Designed to reduce manual email reading and improve productivity.",
    stack: ["LLM", "Python", "ReactJS", "AI Agents", "NLP"],
  },
];

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Sujit home">
          <span className="brand-mark">S</span>
          <span>
            SUJIT SAH<span className="brand-dot">.</span>
          </span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Let's connect <ArrowUpRight size={15} />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse"></span> SOFTWARE ENGINEER · PUNE, INDIA
            </div>
            <h1>
              Building software
              <br />
              that <span>moves ideas</span>
              <br />
              into reality.
            </h1>
            <p className="hero-intro">
              I'm Sujit Kumar Sah, a software engineer focused on backend
              systems, cloud-native applications and turning complex problems
              into dependable products.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button button-quiet" href="#contact">
                Get in touch <Mail size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={15} /> Pune, India
              </span>
              <span className="meta-separator"></span>
              <span>Java · Golang · AWS</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="visual-card">
              <div className="visual-top">
                <span>ENGINEERING MINDSET</span>
                <span className="visual-live">● ACTIVE</span>
              </div>
              <div className="code-window">
                <div className="window-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                  <span>solution.go</span>
                </div>
                <pre>
                  <code>
                    <b>func</b> buildSomething() {"{"}
                    {"\n"} idea := <em>"make it useful"</em>
                    {"\n"} system := design(idea){"\n"} <b>return</b>{" "}
                    ship(system){"\n"}
                    {"}"}
                  </code>
                </pre>
              </div>
              <div className="visual-bottom">
                <div>
                  <strong>7+</strong>
                  <span>Years building</span>
                </div>
                <div>
                  <strong>1M+</strong>
                  <span>Requests / day</span>
                </div>
                <div>
                  <strong>Cloud</strong>
                  <span>Native focus</span>
                </div>
              </div>
            </div>
            <div className="float-chip chip-top">
              <Code2 size={16} /> Clean code
            </div>
            <div className="float-chip chip-bottom">
              <Cloud size={16} /> Cloud engineering
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            SCROLL TO EXPLORE <span></span>
          </a>
        </section>

        <section className="about section-wrap" id="about">
          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title="Engineer by craft.<br/>Problem-solver by nature."
            intro="I enjoy working across the software lifecycle — understanding a problem, shaping a practical solution, building reliable services and improving how software gets delivered."
          />
          <div className="about-grid">
            <div className="about-note">
              <span className="quote-mark">“</span>
              <p>
                Good engineering is not just about writing code. It's about
                making systems easier to understand, operate and evolve.
              </p>
              <span className="note-caption">MY WORKING PHILOSOPHY</span>
            </div>
            <div className="skills-area">
              <div className="skills-title">
                <h3>Tools of my trade</h3>
                <span>TECHNICAL TOOLKIT</span>
              </div>
              <div className="skill-grid">
                {skills.map((s) => (
                  <div className="skill" key={s.name}>
                    <span className="skill-icon">
                      <Code2 size={15} />
                    </span>
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="experience section-wrap" id="experience">
          <SectionHeading
            eyebrow="THE JOURNEY"
            title="Experience that<br/>keeps me curious."
            intro="A snapshot of the teams, systems and engineering challenges that have shaped my work."
          />
          <div className="timeline">
            {experience.map((item, i) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker">{i + 1}</div>
                <div className="timeline-content">
                  <div className="timeline-top">
                    <div>
                      <span className="period">{item.period}</span>
                      <h3>{item.role}</h3>
                      <h4>{item.company}</h4>
                    </div>
                    <BriefcaseBusiness size={21} />
                  </div>
                  <p>{item.description}</p>
                  <div className="tag-row">
                    {item.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Ideas turned into<br/>working software."
            intro="A few examples of the engineering problems and product ideas I've worked on."
          />
          <div className="project-grid">
            {projects.map((p) => (
              <article className="project-card" key={p.number}>
                <div className="project-top">
                  <span>{p.number} / FEATURED PROJECT</span>
                  <ArrowUpRight size={19} />
                </div>
                <div className="project-art">
                  <div className="art-ring ring-a"></div>
                  <div className="art-ring ring-b"></div>
                  <div className="art-core">
                    <Boxes size={31} />
                  </div>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tag-row">
                  {p.stack.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education section-wrap">
          <div className="education-card">
            <div className="edu-icon">
              <GraduationCap size={24} />
            </div>
            <div>
              <span className="eyebrow">EDUCATION</span>
              <h3>B.E — Dr. D. Y. Patil School of Engineering</h3>
              <div className="edu-secondary">
                Computer Engineering & Engineering
              </div>
            </div>
            <span className="edu-score">CGPA 9.2</span>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-panel">
            <div>
              <span className="eyebrow">HAVE A GOOD CHALLENGE?</span>
              <h2>
                Let's build something
                <br />
                <span>meaningful.</span>
              </h2>
              <p>
                I'm always open to connecting with engineers, product teams and
                people working on interesting problems.
              </p>
              <a
                className="button button-primary"
                href="mailto:contact@sujitkumarsah.com.np"
              >
                Say hello <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="contact-orb">
              <Terminal size={76} />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">S</span>
          <span>
            SUJIT SAH<span className="brand-dot">.</span>
          </span>
        </a>
        <span>
          © {new Date().getFullYear()} Sujit Kumar Sah. Built with React.
        </span>
        <div className="socials">
          <a href="https://www.linkedin.com/in/sujitsah/" aria-label="LinkedIn">
            <BriefcaseBusiness size={17} />
          </a>
          <a href="https://github.com/mrsujitsah" aria-label="GitHub">
            <GitBranch size={17} />
          </a>
          <a href="mailto:contact@sujitkumarsah.com.np" aria-label="Email">
            <Mail size={17} />
          </a>
        </div>
      </footer>
    </div>
  );
}
