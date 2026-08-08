import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "Spotify Reimagined",
    category: "Frontend",
    year: "2026",
    description:
      "A cinematic music streaming experience with custom controls, playlists, responsive layouts and smooth interactions.",
    longDescription:
      "This project focuses on creating a premium music experience rather than simply cloning an existing interface. It includes responsive layouts, custom audio controls, dynamic song information and a polished visual system.",
    tech: ["HTML", "CSS", "JavaScript"],
    accent: "green",
    live: "https://example.com",
    github: "https://github.com/Bit-dev-bit",
  },
  {
    id: 2,
    title: "Social Nexus",
    category: "Full Stack",
    year: "2026",
    description:
      "A social platform concept featuring profiles, posts, authentication and real-time-ready architecture.",
    longDescription:
      "A full-stack social platform designed around scalable architecture. The project demonstrates frontend state management, API architecture, authentication concepts and database-driven content.",
    tech: ["React", "Node.js", "MongoDB"],
    accent: "purple",
    live: "https://example.com",
    github: "https://github.com/Bit-dev-bit",
  },
  {
    id: 3,
    title: "StudentOS",
    category: "Full Stack",
    year: "2026",
    description:
      "A digital workspace for students to manage notes, resources, assignments and academic content.",
    longDescription:
      "StudentOS is designed as an all-in-one productivity environment for students. The focus is on clean information architecture and creating a useful product instead of another static website.",
    tech: ["React", "Express", "MongoDB"],
    accent: "blue",
    live: "https://example.com",
    github: "https://github.com/Bit-dev-bit",
  },
  {
    id: 4,
    title: "AI Workspace",
    category: "AI",
    year: "2026",
    description:
      "An experimental AI workspace interface designed around conversations, tools and productivity.",
    longDescription:
      "An experimental interface exploring how AI assistants can become useful productivity environments instead of simple chat windows.",
    tech: ["React", "Node.js", "API"],
    accent: "orange",
    live: "https://example.com",
    github: "https://github.com/Bit-dev-bit",
  },
];

const skills = [
  {
    name: "React",
    type: "Frontend",
    level: 88,
    text: "Building component-driven interfaces and interactive experiences.",
  },
  {
    name: "JavaScript",
    type: "Frontend",
    level: 90,
    text: "Core language used for logic, interactions and web applications.",
  },
  {
    name: "Node.js",
    type: "Backend",
    level: 78,
    text: "Building APIs, backend services and server-side applications.",
  },
  {
    name: "MongoDB",
    type: "Database",
    level: 75,
    text: "Working with document-based data and application persistence.",
  },
  {
    name: "CSS",
    type: "Frontend",
    level: 92,
    text: "Creating responsive layouts, animations and visual systems.",
  },
  {
    name: "Git",
    type: "Tools",
    level: 80,
    text: "Version control and collaborative development workflows.",
  },
  {
    name: "Express",
    type: "Backend",
    level: 76,
    text: "Creating REST APIs and backend application architecture.",
  },
  {
    name: "Tailwind",
    type: "Frontend",
    level: 82,
    text: "Rapidly building modern responsive interfaces.",
  },
];

const experience = [
  {
    year: "2026",
    title: "Full Stack Development",
    description:
      "Building complete applications from frontend interfaces to backend APIs and databases.",
  },
  {
    year: "2025",
    title: "Web Development",
    description:
      "Started building websites and learning the foundations of modern web development.",
  },
  {
    year: "2025",
    title: "JavaScript",
    description:
      "Moved from static websites into interactive applications and programming logic.",
  },
];

function App() {
  const [route, setRoute] = useState(
    window.location.hash.replace("#", "") || "/"
  );

  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // FIXED:
  // Only projectFilter is needed here.
  // skillFilter belongs inside About().
  const [projectFilter, setProjectFilter] = useState("All");

  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  /* =========================
     HASH NAVIGATION
  ========================= */

  useEffect(() => {
    const onHashChange = () => {
      const newRoute =
        window.location.hash.replace("#", "") || "/";

      setRoute(newRoute);
      setMenuOpen(false);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  /* =========================
     MOUSE CURSOR
  ========================= */

  useEffect(() => {
    const onMouseMove = (event) => {
      setCursor({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  /* =========================
     SCROLL PROGRESS
  ========================= */

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        height > 0
          ? (scrollTop / height) * 100
          : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =========================
     KEYBOARD SHORTCUTS
  ========================= */

  useEffect(() => {
    const onKeyDown = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();

        setCommandOpen((value) => !value);
      }

      if (event.key === "Escape") {
        setCommandOpen(false);
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  /* =========================
     PAGE TITLE
  ========================= */

  useEffect(() => {
    const titles = {
      "/": "Your Name — Full Stack Developer",
      "/work": "Work — Your Name",
      "/about": "About — Your Name",
      "/lab": "Lab — Your Name",
      "/journal": "Journal — Your Name",
      "/resume": "Resume — Your Name",
      "/contact": "Contact — Your Name",
    };

    document.title =
      titles[route] || "Your Name — Developer";
  }, [route]);

  /* =========================
     NAVIGATION
  ========================= */

  const navigate = (path) => {
    window.location.hash = path;
  };

  /* =========================
     PROJECT FILTER
  ========================= */

  const filteredProjects = useMemo(() => {
    if (projectFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === projectFilter
    );
  }, [projectFilter]);

  return (
    <div className={dark ? "app dark" : "app light"}>

      {/* Scroll Progress */}

      <div
        className="scroll-progress"
        style={{
          width: `${scrollProgress}%`,
        }}
      />

      {/* Mouse Glow */}

      <div
        className="cursor-glow"
        style={{
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
        }}
      />

      {/* Background */}

      <Background />

      {/* Navbar */}

      <Navbar
        route={route}
        dark={dark}
        setDark={setDark}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navigate={navigate}
        setCommandOpen={setCommandOpen}
      />

      {/* Main */}

      <main>

        {route === "/" && (
          <Home
            navigate={navigate}
            setSelectedProject={setSelectedProject}
          />
        )}

        {route === "/work" && (
          <Work
            projects={filteredProjects}
            filter={projectFilter}
            setFilter={setProjectFilter}
            setSelectedProject={setSelectedProject}
          />
        )}

        {route === "/about" && <About />}

        {route === "/lab" && <Lab />}

        {route === "/journal" && <Journal />}

        {route === "/resume" && <Resume />}

        {route === "/contact" && <Contact />}

        {![
          "/",
          "/work",
          "/about",
          "/lab",
          "/journal",
          "/resume",
          "/contact",
        ].includes(route) && (
          <NotFound navigate={navigate} />
        )}

      </main>

      {/* Footer */}

      <Footer navigate={navigate} />

      {/* Project Modal */}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          close={() => setSelectedProject(null)}
        />
      )}

      {/* Command Palette */}

      {commandOpen && (
        <CommandPalette
          close={() => setCommandOpen(false)}
          navigate={navigate}
        />
      )}

    </div>
  );
}


/* =========================================================
   BACKGROUND
========================================================= */

function Background() {
  const dots = Array.from({ length: 40 });

  return (
    <div className="background-layer">

      <div className="noise"></div>

      <div className="gradient-orb orb-a"></div>

      <div className="gradient-orb orb-b"></div>

      <div className="gradient-orb orb-c"></div>

      <div className="grid-background"></div>

      <div className="stars">

        {dots.map((_, index) => (
          <span
            key={index}
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 61) % 100}%`,
              animationDelay: `${index * 0.17}s`,
            }}
          />
        ))}

      </div>

    </div>
  );
}


/* =========================================================
   NAVBAR
========================================================= */

function Navbar({
  route,
  dark,
  setDark,
  menuOpen,
  setMenuOpen,
  navigate,
  setCommandOpen,
}) {
  const links = [
    ["/", "Home"],
    ["/work", "Work"],
    ["/about", "About"],
    ["/lab", "Lab"],
    ["/journal", "Journal"],
  ];

  return (
    <header className="navbar">

      <button
        className="brand"
        onClick={() => navigate("/")}
        aria-label="Go home"
      >
        <span className="brand-symbol">
          ✦
        </span>

        <span>
          YOUR<span>NAME</span>
        </span>
      </button>


      <nav
        className={
          menuOpen
            ? "nav-links mobile-open"
            : "nav-links"
        }
      >

        {links.map(([path, name]) => (

          <button
            key={path}
            className={
              route === path
                ? "active"
                : ""
            }
            onClick={() => navigate(path)}
          >
            {name}
          </button>

        ))}

      </nav>


      <div className="nav-actions">

        <button
          className="command-trigger"
          onClick={() => setCommandOpen(true)}
        >
          <span>⌘</span>
          <span>K</span>
        </button>


        <button
          className="theme-button"
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
        >
          {dark ? "☼" : "☾"}
        </button>


        <button
          className="nav-contact"
          onClick={() => navigate("/contact")}
        >
          Let's Talk
          <span>↗</span>
        </button>


        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </div>

    </header>
  );
}


/* =========================================================
   HOME
========================================================= */

function Home({
  navigate,
  setSelectedProject,
}) {
  return (
    <>

      <section className="hero page-container">

        <div className="hero-copy">

          <div className="eyebrow">

            <span className="live-dot"></span>

            AVAILABLE FOR SELECTED OPPORTUNITIES

          </div>


          <h1>

            I build

            <br />

            <span className="gradient-text">
              digital worlds.
            </span>

          </h1>


          <p className="hero-description">
            Full Stack Developer focused on creating
            exceptional digital products, immersive
            interfaces and software that people
            actually enjoy using.
          </p>


          <div className="hero-actions">

            <button
              className="magnetic primary"
              onClick={() => navigate("/work")}
            >
              Explore my work
              <span>↗</span>
            </button>


            <button
              className="magnetic secondary"
              onClick={() => navigate("/contact")}
            >
              Start a conversation
            </button>

          </div>


          <div className="hero-meta">

            <div>
              <span>BASED IN</span>
              <strong>INDIA</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>
                WEB · SOFTWARE · AI
              </strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong className="green-text">
                BUILDING
              </strong>
            </div>

          </div>

        </div>


        <div className="hero-machine">

          <div className="machine-glow"></div>


          <div className="terminal">

            <div className="terminal-header">

              <div className="terminal-dots">

                <span></span>
                <span></span>
                <span></span>

              </div>

              <span>
                ~/developer
              </span>

              <span>
                ● ONLINE
              </span>

            </div>


            <div className="terminal-body">

              <div>

                <span className="terminal-green">
                  user
                </span>

                <span className="terminal-gray">
                  @
                </span>

                <span className="terminal-blue">
                  portfolio
                </span>

                <span className="terminal-gray">
                  :~$
                </span>

              </div>


              <p className="command-line">
                whoami
              </p>

              <p className="terminal-output">
                Full Stack Developer
              </p>


              <p className="command-line">
                cat ./mission.txt
              </p>


              <p className="terminal-output">

                Build useful things.
                <br />

                Make them beautiful.
                <br />

                Never stop learning.

              </p>


              <p className="command-line">

                ./build-future.sh

                <span className="terminal-cursor"></span>

              </p>

            </div>

          </div>


          <div className="machine-card machine-card-one">

            <span className="machine-icon">
              ⌁
            </span>

            <div>

              <strong>
                10+
              </strong>

              <small>
                Technologies
              </small>

            </div>

          </div>


          <div className="machine-card machine-card-two">

            <span className="machine-icon">
              ✦
            </span>

            <div>

              <strong>
                ∞
              </strong>

              <small>
                Things to build
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* TICKER */}

      <section className="ticker">

        <div className="ticker-track">

          <span>FULL STACK</span>
          <i>✦</i>

          <span>REACT</span>
          <i>✦</i>

          <span>NODE.JS</span>
          <i>✦</i>

          <span>PRODUCT</span>
          <i>✦</i>

          <span>UI / UX</span>
          <i>✦</i>

          <span>AI</span>
          <i>✦</i>

          <span>FULL STACK</span>
          <i>✦</i>

          <span>REACT</span>
          <i>✦</i>

          <span>NODE.JS</span>
          <i>✦</i>

        </div>

      </section>


      {/* FEATURED WORK */}

      <section className="home-section page-container">

        <SectionHeading
          number="01"
          label="SELECTED WORK"
          title="Ideas"
          highlight="made real."
        />


        <div className="featured-projects">

          {projects
            .slice(0, 3)
            .map((project, index) => (

              <button
                className={`featured-project ${project.accent}`}
                key={project.id}
                onClick={() =>
                  setSelectedProject(project)
                }
              >

                <div className="project-visual">

                  <div className="visual-number">
                    0{index + 1}
                  </div>


                  <div className="visual-shape">

                    <span>
                      {project.title.charAt(0)}
                    </span>

                  </div>


                  <span className="visual-arrow">
                    ↗
                  </span>

                </div>


                <div className="featured-info">

                  <div>

                    <small>
                      {project.category}
                    </small>

                    <small>
                      {project.year}
                    </small>

                  </div>


                  <h3>
                    {project.title}
                  </h3>


                  <p>
                    {project.description}
                  </p>

                </div>

              </button>

            ))}

        </div>


        <button
          className="view-all"
          onClick={() => navigate("/work")}
        >
          View all projects
          <span>→</span>
        </button>

      </section>


      {/* STATEMENT */}

      <section className="statement-section">

        <div className="statement">

          <span>
            MY PHILOSOPHY
          </span>


          <h2>

            Good software should feel

            <em>
              inevitable.
            </em>

          </h2>


          <p>
            Simple on the surface. Powerful underneath.
            Every detail should have a reason to exist.
          </p>

        </div>

      </section>


      {/* STACK */}

      <section className="home-section page-container">

        <SectionHeading
          number="02"
          label="THE STACK"
          title="My"
          highlight="toolbox."
        />


        <div className="mini-stack">

          {[
            "React",
            "JavaScript",
            "Node.js",
            "Express",
            "MongoDB",
            "CSS",
          ].map((item, index) => (

            <div
              key={item}
              className="mini-stack-item"
            >

              <span>
                0{index + 1}
              </span>

              <strong>
                {item}
              </strong>

              <i>
                ↗
              </i>

            </div>

          ))}

        </div>


        <button
          className="view-all"
          onClick={() => navigate("/about")}
        >
          Explore my skills
          <span>→</span>
        </button>

      </section>


      {/* CTA */}

      <section className="cta-section">

        <div className="cta-orbit"></div>


        <span className="eyebrow">
          HAVE AN IDEA?
        </span>


        <h2>

          Let's make

          <br />

          something
          <span>
            remarkable.
          </span>

        </h2>


        <button
          className="magnetic primary"
          onClick={() => navigate("/contact")}
        >
          Start a project
          <span>↗</span>
        </button>

      </section>

    </>
  );
}


/* =========================================================
   WORK
========================================================= */

function Work({
  projects,
  filter,
  setFilter,
  setSelectedProject,
}) {
  const filters = [
    "All",
    "Frontend",
    "Full Stack",
    "AI",
  ];

  return (
    <section className="page-container inner-page">

      <PageIntro
        eyebrow="WORK / 2026"
        title="Selected"
        highlight="projects."
        description="A collection of experiments, products and interfaces I've built while learning and exploring the web."
      />


      <div className="filter-bar">

        {filters.map((item) => (

          <button
            key={item}
            className={
              filter === item
                ? "filter-active"
                : ""
            }
            onClick={() => setFilter(item)}
          >
            {item}
          </button>

        ))}

      </div>


      <div className="work-grid">

        {projects.map((project, index) => (

          <button
            key={project.id}
            className={`work-card ${project.accent}`}
            onClick={() =>
              setSelectedProject(project)
            }
          >

            <div className="work-card-image">

              <span className="work-index">
                0{index + 1}
              </span>


              <div className="abstract-art">

                <div></div>
                <div></div>
                <div></div>

              </div>


              <span className="open-icon">
                ↗
              </span>

            </div>


            <div className="work-card-content">

              <div className="work-card-meta">

                <span>
                  {project.category}
                </span>

                <span>
                  {project.year}
                </span>

              </div>


              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>


              <div className="tech-row">

                {project.tech.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </button>

        ))}

      </div>

    </section>
  );
}


/* =========================================================
   ABOUT
========================================================= */

function About() {

  // IMPORTANT:
  // Skill filtering is here, not inside App().
  const [skillFilter, setSkillFilter] =
    useState("All");


  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
  ];


  const filtered = skillFilter === "All"
    ? skills
    : skills.filter(
        (skill) =>
          skill.type === skillFilter
      );


  return (
    <section className="page-container inner-page">

      <PageIntro
        eyebrow="ABOUT / 2026"
        title="Behind the"
        highlight="code."
        description="I'm a developer who enjoys the intersection of technology, design and product thinking."
      />


      <div className="about-hero-grid">

        <div className="about-big-text">

          <p>
            I don't just want to write code.
          </p>

          <p>
            I want to understand the
            <span> problem.</span>
          </p>

          <p>
            Then build something people
            <span> love.</span>
          </p>

        </div>


        <div className="about-description">

          <p>
            My journey started with curiosity about
            how websites actually work. That curiosity
            turned into programming, design, backend
            systems and eventually full-stack development.
          </p>

          <p>
            Today I'm interested in building ambitious
            products, experimenting with new technology
            and continuously improving my craft.
          </p>

        </div>

      </div>


      {/* SKILLS */}

      <div className="skills-section">

        <SectionHeading
          number="01"
          label="SKILLS"
          title="What I"
          highlight="work with."
        />


        <div className="skill-filters">

          {categories.map((category) => (

            <button
              key={category}
              className={
                skillFilter === category
                  ? "filter-active"
                  : ""
              }
              onClick={() =>
                setSkillFilter(category)
              }
            >
              {category}
            </button>

          ))}

        </div>


        <div className="skills-list">

          {filtered.map((skill) => (

            <div
              className="skill-row"
              key={skill.name}
            >

              <div className="skill-name">

                <strong>
                  {skill.name}
                </strong>

                <span>
                  {skill.type}
                </span>

              </div>


              <div className="skill-bar">

                <span
                  style={{
                    width: `${skill.level}%`,
                  }}
                ></span>

              </div>


              <span className="skill-percent">
                {skill.level}%
              </span>

            </div>

          ))}

        </div>

      </div>


      {/* JOURNEY */}

      <div className="journey-section">

        <SectionHeading
          number="02"
          label="JOURNEY"
          title="How I"
          highlight="got here."
        />


        <div className="journey">

          {experience.map(
            (item, index) => (

              <div
                className="journey-item"
                key={item.year + index}
              >

                <div className="journey-year">
                  {item.year}
                </div>


                <div className="journey-line">
                  <span></span>
                </div>


                <div className="journey-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   LAB
========================================================= */

function Lab() {

  const experiments = [
    {
      title: "Particle Playground",
      description:
        "Interactive canvas experiments and generative visuals.",
      symbol: "✦",
    },
    {
      title: "Glass Interface",
      description:
        "Exploring depth, blur, light and modern UI systems.",
      symbol: "◈",
    },
    {
      title: "AI Workspace",
      description:
        "Ideas around interfaces for AI-powered applications.",
      symbol: "⌁",
    },
    {
      title: "Motion Studies",
      description:
        "Micro-interactions, transitions and interface motion.",
      symbol: "∞",
    },
  ];


  return (
    <section className="page-container inner-page">

      <PageIntro
        eyebrow="LAB / EXPERIMENTS"
        title="Things I'm"
        highlight="exploring."
        description="Not everything needs to become a product. Sometimes the best way to learn is to break things, experiment and see what happens."
      />


      <div className="lab-grid">

        {experiments.map(
          (item, index) => (

            <div
              className="lab-card"
              key={item.title}
            >

              <div className="lab-symbol">
                {item.symbol}
              </div>


              <span>
                EXPERIMENT 0{index + 1}
              </span>


              <h3>
                {item.title}
              </h3>


              <p>
                {item.description}
              </p>


              <button type="button">
                Explore experiment →
              </button>

            </div>

          )
        )}

      </div>


      <div className="lab-terminal">

        <div className="terminal-header">

          <span>
            experiments.log
          </span>

          <span>
            RUNNING
          </span>

        </div>


        <div className="terminal-body">

          <p>
            <span className="terminal-green">
              [OK]
            </span>{" "}
            Initializing creative engine...
          </p>

          <p>
            <span className="terminal-green">
              [OK]
            </span>{" "}
            Loading experiments...
          </p>

          <p>
            <span className="terminal-green">
              [OK]
            </span>{" "}
            Curiosity detected.
          </p>

          <p>
            <span className="terminal-blue">
              [RUN]
            </span>{" "}
            Building something interesting...
          </p>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   JOURNAL
========================================================= */

function Journal() {

  const posts = [
    {
      date: "AUG 2026",
      title:
        "What I learned building my first serious portfolio",
      category: "BUILDING",
    },
    {
      date: "JUL 2026",
      title:
        "Why understanding JavaScript matters",
      category: "ENGINEERING",
    },
    {
      date: "JUN 2026",
      title:
        "From copying tutorials to building products",
      category: "LEARNING",
    },
  ];


  return (
    <section className="page-container inner-page">

      <PageIntro
        eyebrow="JOURNAL / NOTES"
        title="Thoughts &"
        highlight="ideas."
        description="A place for things I've learned, mistakes I've made and ideas I'm currently thinking about."
      />


      <div className="journal-list">

        {posts.map(
          (post, index) => (

            <article
              className="journal-item"
              key={post.title}
            >

              <div className="journal-index">
                0{index + 1}
              </div>


              <div className="journal-date">
                {post.date}
              </div>


              <div className="journal-content">

                <span>
                  {post.category}
                </span>


                <h3>
                  {post.title}
                </h3>


                <button type="button">
                  Read article →
                </button>

              </div>

            </article>

          )
        )}

      </div>

    </section>
  );
}


/* =========================================================
   RESUME
========================================================= */

function Resume() {

  return (
    <section className="page-container inner-page resume-page">

      <PageIntro
        eyebrow="RESUME / 2026"
        title="The short"
        highlight="version."
        description="A quick overview of my technical background, projects and direction."
      />


      <div className="resume-layout">

        <aside className="resume-sidebar">

          <div className="resume-avatar">
            YN
          </div>


          <h2>
            Your Name
          </h2>


          <p>
            Full Stack Developer
          </p>


          <button
            className="primary resume-button"
            type="button"
            onClick={() => window.print()}
          >
            Print Resume
            <span>↗</span>
          </button>

        </aside>


        <div className="resume-content">

          <div className="resume-block">

            <span>
              PROFILE
            </span>


            <p>
              Full Stack Developer passionate about
              building modern web applications,
              interactive interfaces and useful
              digital products.
            </p>

          </div>


          <div className="resume-block">

            <span>
              TECHNOLOGIES
            </span>


            <div className="resume-tags">

              {skills.map((skill) => (

                <span key={skill.name}>
                  {skill.name}
                </span>

              ))}

            </div>

          </div>


          <div className="resume-block">

            <span>
              SELECTED EXPERIENCE
            </span>


            {experience.map(
              (item, index) => (

                <div
                  className="resume-experience"
                  key={item.year + index}
                >

                  <strong>
                    {item.year}
                  </strong>


                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   CONTACT
========================================================= */

function Contact() {

  const [sent, setSent] =
    useState(false);


  const submitForm = (event) => {

    event.preventDefault();

    setSent(true);

  };


  return (
    <section className="page-container inner-page contact-page">

      <PageIntro
        eyebrow="CONTACT / LET'S TALK"
        title="Let's build"
        highlight="something."
        description="Have an idea, opportunity or simply want to talk about technology? Send me a message."
      />


      <div className="contact-grid">

        <div className="contact-info">

          <span>
            EMAIL
          </span>


          <a href="mailto:your@email.com">
            your@email.com
          </a>


          <span>
            SOCIAL
          </span>


          <a
            href="https://github.com/Bit-dev-bit"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>


          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

        </div>


        <form
          className="contact-form"
          onSubmit={submitForm}
        >

          <label>

            YOUR NAME

            <input
              type="text"
              placeholder="John Doe"
              required
            />

          </label>


          <label>

            EMAIL

            <input
              type="email"
              placeholder="john@example.com"
              required
            />

          </label>


          <label>

            MESSAGE

            <textarea
              rows="6"
              placeholder="Tell me about your idea..."
              required
            />

          </label>


          <button
            className="primary"
            type="submit"
          >

            {sent
              ? "Message ready ✓"
              : "Send message ↗"}

          </button>


          {sent && (

            <p className="form-note">
              Frontend demo complete. Connect this form
              to your backend/email service to receive
              messages.
            </p>

          )}

        </form>

      </div>

    </section>
  );
}


/* =========================================================
   404
========================================================= */

function NotFound({ navigate }) {

  return (
    <section className="not-found">

      <span>
        404
      </span>


      <h1>

        Lost in

        <em>
          cyberspace.
        </em>

      </h1>


      <p>
        The page you're looking for doesn't exist.
      </p>


      <button
        className="primary"
        onClick={() => navigate("/")}
      >
        Take me home ↗
      </button>

    </section>
  );
}


/* =========================================================
   PROJECT MODAL
========================================================= */

function ProjectModal({
  project,
  close,
}) {

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {

        if (
          event.target ===
          event.currentTarget
        ) {
          close();
        }

      }}
    >

      <div className="project-modal">

        <button
          className="modal-close"
          onClick={close}
          aria-label="Close project"
        >
          ×
        </button>


        <div
          className={`modal-art ${project.accent}`}
        >
          <span>
            {project.title.charAt(0)}
          </span>
        </div>


        <div className="modal-content">

          <div className="work-card-meta">

            <span>
              {project.category}
            </span>

            <span>
              {project.year}
            </span>

          </div>


          <h2>
            {project.title}
          </h2>


          <p>
            {project.longDescription}
          </p>


          <div className="tech-row">

            {project.tech.map((tech) => (

              <span key={tech}>
                {tech}
              </span>

            ))}

          </div>


          <div className="modal-actions">

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="primary"
            >
              Live project ↗
            </a>


            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="secondary"
            >
              Source code ↗
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   COMMAND PALETTE
========================================================= */

function CommandPalette({
  close,
  navigate,
}) {

  const commands = [
    ["Home", "/"],
    ["Work", "/work"],
    ["About", "/about"],
    ["Lab", "/lab"],
    ["Journal", "/journal"],
    ["Resume", "/resume"],
    ["Contact", "/contact"],
  ];


  return (
    <div
      className="command-backdrop"
      onMouseDown={(event) => {

        if (
          event.target ===
          event.currentTarget
        ) {
          close();
        }

      }}
    >

      <div className="command-palette">

        <div className="command-search">

          <span>
            ⌕
          </span>


          <input
            autoFocus
            placeholder="Search pages..."
            aria-label="Search pages"
          />


          <kbd>
            ESC
          </kbd>

        </div>


        <div className="command-list">

          {commands.map(
            ([name, path]) => (

              <button
                key={path}
                onClick={() => {

                  navigate(path);

                  close();

                }}
              >

                <span>
                  {name}
                </span>

                <span>
                  ↗
                </span>

              </button>

            )
          )}

        </div>


        <div className="command-footer">
          Navigate with your keyboard
        </div>

      </div>

    </div>
  );
}


/* =========================================================
   COMPONENTS
========================================================= */

function SectionHeading({
  number,
  label,
  title,
  highlight,
}) {

  return (
    <div className="section-heading">

      <div className="section-heading-label">

        <span>
          {number}
        </span>

        {label}

      </div>


      <h2>

        {title}{" "}

        <span>
          {highlight}
        </span>

      </h2>

    </div>
  );
}


function PageIntro({
  eyebrow,
  title,
  highlight,
  description,
}) {

  return (
    <div className="page-intro">

      <span className="eyebrow">
        {eyebrow}
      </span>


      <h1>

        {title}

        <br />

        <span>
          {highlight}
        </span>

      </h1>


      <p>
        {description}
      </p>

    </div>
  );
}


function Footer({ navigate }) {

  return (
    <footer className="footer">

      <div>

        <button
          className="footer-brand"
          onClick={() => navigate("/")}
        >
          ✦ YOURNAME
        </button>


        <p>
          Designed & built with React.
        </p>

      </div>


      <div className="footer-center">

        <span>
          INDIA
        </span>

        <span>
          •
        </span>

        <span>
          2026
        </span>

      </div>


      <div className="footer-links">

        <a
          href="https://github.com/Bit-dev-bit"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>


        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>


        <button
          onClick={() => navigate("/contact")}
        >
          Contact
        </button>

      </div>

    </footer>
  );
}

export default App;