import "./App.css";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "GitHub",
    "Tailwind CSS",
  ];

  const projects = [
    {
      number: "01",
      title: "Spotify Clone",
      description:
        "A responsive music streaming application with custom audio controls, playlists, seek bar and dynamic song handling.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://example.com",
      github: "https://github.com/Bit-dev-bit",
    },
    {
      number: "02",
      title: "Social Media App",
      description:
        "A modern social platform with authentication, posts, profiles, interactions and a scalable backend architecture.",
      tech: ["React", "Node.js", "MongoDB"],
      live: "https://example.com",
      github: "https://github.com/Bit-dev-bit",
    },
    {
      number: "03",
      title: "Student Platform",
      description:
        "A platform for students to discover notes, resources, solved questions and useful academic content.",
      tech: ["React", "Express", "MongoDB"],
      live: "https://example.com",
      github: "https://github.com/Bit-dev-bit",
    },
  ];

  return (
    <div className="portfolio">

      {/* Background */}
      <div className="background">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="grid"></div>
      </div>

      {/* Navbar */}
      <header className="navbar">

        <a href="#home" className="logo">
          <span>&lt;</span>DEV<span>/&gt;</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk <span>↗</span>
        </a>

      </header>

      <main>

        {/* ================= HERO ================= */}

        <section id="home" className="hero">

          <div className="hero-content">

            <div className="availability">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="hello">
              HELLO, I'M
            </p>

            <h1>
              Your
              <span> Name.</span>
            </h1>

            <div className="hero-role">
              <span>Full Stack</span> Developer
            </div>

            <p className="hero-description">
              I build fast, scalable and visually impressive web
              applications. I turn complex ideas into simple,
              beautiful digital experiences.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >
                Explore My Work
                <span>↗</span>
              </a>

              <a
                href="#contact"
                className="outline-button"
              >
                Contact Me
              </a>

            </div>

            {/* Social Links */}
            <div className="socials">

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

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                Twitter ↗
              </a>

            </div>

          </div>


          {/* Developer Visual */}

          <div className="hero-visual">

            <div className="code-window">

              <div className="window-top">

                <div className="window-buttons">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p>developer.js</p>

              </div>

              <div className="code">

                <p>
                  <span className="purple">const</span>{" "}
                  <span className="blue">developer</span> = {"{"}
                </p>

                <p className="indent">
                  <span className="red">name</span>:{" "}
                  <span className="green">
                    "Your Name"
                  </span>,
                </p>

                <p className="indent">
                  <span className="red">role</span>:{" "}
                  <span className="green">
                    "Full Stack Developer"
                  </span>,
                </p>

                <p className="indent">
                  <span className="red">skills</span>: [
                </p>

                <p className="indent-two">
                  <span className="green">
                    "React"
                  </span>,
                </p>

                <p className="indent-two">
                  <span className="green">
                    "Node.js"
                  </span>,
                </p>

                <p className="indent-two">
                  <span className="green">
                    "MongoDB"
                  </span>
                </p>

                <p className="indent">
                  ],
                </p>

                <p className="indent">
                  <span className="red">coffee</span>:{" "}
                  <span className="orange">true</span>
                </p>

                <p>
                  {"}"};
                </p>

                <p className="cursor-line">
                  <span className="purple">
                    developer
                  </span>
                  .
                  <span className="blue">
                    build
                  </span>
                  ();
                  <span className="cursor"></span>
                </p>

              </div>

            </div>


            {/* Floating Cards */}

            <div className="floating-card card-one">

              <span>⚡</span>

              <div>
                <strong>Fast</strong>
                <small>Performance</small>
              </div>

            </div>


            <div className="floating-card card-two">

              <span>◈</span>

              <div>
                <strong>Modern</strong>
                <small>Technology</small>
              </div>

            </div>

          </div>

        </section>


        {/* ================= MARQUEE ================= */}

        <div className="marquee">

          <div className="marquee-content">

            <span>FULL STACK DEVELOPMENT</span>
            <b>✦</b>

            <span>REACT</span>
            <b>✦</b>

            <span>NODE.JS</span>
            <b>✦</b>

            <span>MODERN WEB</span>
            <b>✦</b>

            <span>FULL STACK DEVELOPMENT</span>
            <b>✦</b>

          </div>

        </div>


        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section about-section"
        >

          <div className="section-heading">

            <p>01 — ABOUT ME</p>

            <h2>
              Building things that
              <span> matter.</span>
            </h2>

          </div>


          <div className="about-grid">

            <div className="about-text">

              <p className="large-text">
                I'm a developer who enjoys turning ideas into
                real products.
              </p>

              <p>
                I specialize in full-stack web development and
                love working on projects that combine clean
                interfaces with powerful functionality.
              </p>

              <p>
                I'm constantly learning, experimenting with new
                technologies and improving my ability to build
                better software.
              </p>

              <a
                href="#contact"
                className="text-link"
              >
                More about me <span>→</span>
              </a>

            </div>


            <div className="stats">

              <div className="stat">
                <strong>10+</strong>
                <span>Technologies</span>
              </div>

              <div className="stat">
                <strong>03+</strong>
                <span>Projects Built</span>
              </div>

              <div className="stat">
                <strong>∞</strong>
                <span>Ideas to Build</span>
              </div>

              <div className="stat">
                <strong>24/7</strong>
                <span>Learning</span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section"
        >

          <div className="section-heading">

            <p>02 — SKILLS</p>

            <h2>
              My <span>toolbox.</span>
            </h2>

          </div>


          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div
                className="skill"
                key={skill}
              >

                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{skill}</h3>

                <span className="skill-arrow">
                  ↗
                </span>

              </div>

            ))}

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section"
        >

          <div className="section-heading projects-heading">

            <div>

              <p>03 — SELECTED WORK</p>

              <h2>
                Things I've <span>built.</span>
              </h2>

            </div>

            <p className="heading-description">
              A collection of projects that showcase my
              skills, creativity and problem-solving ability.
            </p>

          </div>


          <div className="projects-list">

            {projects.map((project) => (

              <article
                className="project"
                key={project.number}
              >

                <div className="project-number">
                  {project.number}
                </div>


                <div className="project-info">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>


                  <div className="project-tech">

                    {project.tech.map((tech) => (

                      <span key={tech}>
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>


                <div className="project-actions">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ================= JOURNEY ================= */}

        <section className="section experience">

          <div className="section-heading">

            <p>04 — JOURNEY</p>

            <h2>
              My <span>journey.</span>
            </h2>

          </div>


          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-year">
                2026
              </div>

              <div className="timeline-dot"></div>

              <div>

                <h3>
                  Full Stack Development
                </h3>

                <p>
                  Building real-world applications using
                  React, Node.js, Express and MongoDB.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-year">
                2025
              </div>

              <div className="timeline-dot"></div>

              <div>

                <h3>
                  Started Web Development
                </h3>

                <p>
                  Learned HTML, CSS and JavaScript and started
                  building interactive websites.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="contact-section"
        >

          <p className="contact-label">
            05 — HAVE A PROJECT?
          </p>

          <h2>
            Let's build
            <br />
            something <span>great.</span>
          </h2>

          <p>
            I'm always open to interesting projects,
            collaborations and opportunities.
          </p>

          <a
            href="mailto:your@email.com"
            className="contact-button"
          >
            Get In Touch ↗
          </a>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <div>

          <a
            href="#home"
            className="footer-logo"
          >
            &lt;DEV/&gt;
          </a>

          <p>
            Designed & built with React.
          </p>

        </div>

        <p>
          © 2026 Your Name
        </p>

      </footer>

    </div>
  );
}

export default App;