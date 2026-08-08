import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Portfolio.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="intro">Hello, I'm</p>

          <h1>
            Your <span>Name</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="description">
            I build modern, responsive and user-friendly web applications
            using React, Node.js, Express and MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-circle">
            <span>&lt;/&gt;</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <p className="section-subtitle">Get To Know Me</p>

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <p>
          I'm a passionate developer who enjoys creating websites and
          applications that solve real-world problems. I love learning
          new technologies and turning ideas into working products.
        </p>

        <p>
          My main focus is full-stack web development, with an interest
          in building scalable applications and beautiful user interfaces.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <p className="section-subtitle">What I Know</p>

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <div className="skills-container">

          <div className="skill-card">
            <h3>Frontend</h3>

            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>

            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>Authentication</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Database</h3>

            <ul>
              <li>MongoDB</li>
              <li>MongoDB Atlas</li>
              <li>Mongoose</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>

            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>npm</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <p className="section-subtitle">My Work</p>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="projects-container">

          <div className="project-card">
            <div className="project-image">Project 01</div>

            <div className="project-content">
              <h3>Spotify Clone</h3>

              <p>
                A responsive music streaming website built with
                HTML, CSS and JavaScript.
              </p>

              <div className="project-buttons">
                <a href="/" className="project-btn">
                  Live Demo
                </a>

                <a href="/" className="project-btn">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">Project 02</div>

            <div className="project-content">
              <h3>Twitter Clone</h3>

              <p>
                A social media interface inspired by Twitter with
                responsive design and interactive components.
              </p>

              <div className="project-buttons">
                <a href="/" className="project-btn">
                  Live Demo
                </a>

                <a href="/" className="project-btn">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">Project 03</div>

            <div className="project-content">
              <h3>Netflix Clone</h3>

              <p>
                A modern streaming platform UI with responsive
                layouts and movie sections.
              </p>

              <div className="project-buttons">
                <a href="/" className="project-btn">
                  Live Demo
                </a>

                <a href="/" className="project-btn">
                  GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <p className="section-subtitle">Get In Touch</p>

        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>

        <p>
          Have a project or opportunity? Feel free to get in touch with me.
        </p>

        <a
          href="mailto:your@email.com"
          className="btn"
        >
          Send Me an Email
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2026 Your Name. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;