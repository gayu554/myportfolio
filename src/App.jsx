import { useState } from "react";
import "./App.css";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* NAVBAR */}
     <nav className="navbar">
  <div className="logo">Gayatri.</div>

  <div className={`nav-links ${menuOpen ? "active" : ""}`}>
    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
    <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
    <a href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </div>

  <button
    className="menu-btn"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation"
  >
    ☰
  </button>
</nav>
{/* HERO */}
<section className="hero" id="home">
  <div className="hero-container">

    <div className="hero-content">
      <p className="welcome">WELCOME TO MY PORTFOLIO</p>

      <h1>
        Hi, I'm <span>Gayatri Gavhane</span> 👋
      </h1>

      <h2>Aspiring Java Full Stack Developer</h2>

      <p>
        Java | Spring Boot | Python | SQL | Web Development
      </p>

      <div className="buttons">
        <a href="#projects" className="btn primary-btn">
          View My Projects
        </a>

         {/* <a href="/resume.pdf" className="btn secondary-btn" download>
          Download Resume
        </a>  */}

        <button className="btn secondary-btn" disabled>
          Download Resume
        </button>
      </div>

      <div className="social-buttons">
        <a
          href="https://github.com/gayu554"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          GitHub ↗
        </a>

        <a
          href="https://linkedin.com/in/gayatri-gavhane-580101332"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          LinkedIn ↗
        </a>
      </div>
    </div>

    <div className="hero-image">
     <img src="/myportfolio/profile.jpeg" alt="Gayatri Gavhane" />
    </div>

  </div>
</section>

      {/* ABOUT SECTION */}
<section className="about-section" id="about">
  <div className="section-title">
    <p>GET TO KNOW ME</p>
    <h2>About Me</h2>
  </div>

  <div className="about-container">
    <div className="about-text">
      <h3>Hi, I'm Gayatri 👋</h3>

      <p>
        I am an Information Technology engineering student and an
        aspiring Java Full Stack Developer with a strong interest in
        software development and problem solving.
      </p>

      <p>
        I have built a foundation in Java, Object-Oriented Programming,
        Data Structures & Algorithms, SQL, MySQL and Web Development.
        I am currently strengthening my backend development skills and
        exploring modern technologies.
      </p>

      <p>
        I enjoy building practical projects, learning new technologies
        and continuously improving my programming and development skills.
      </p>
    </div>

    <div className="about-card">
      <div className="about-item">
        <span>🎓</span>
        <div>
          <h4>Education</h4>
          <p>B.E. Information Technology</p>
        </div>
      </div>

      <div className="about-item">
        <span>💻</span>
        <div>
          <h4>Focus</h4>
          <p>Java Full Stack Development</p>
        </div>
      </div>

      <div className="about-item">
        <span>🧠</span>
        <div>
          <h4>Learning</h4>
          <p>Spring Boot, Python & DSA</p>
        </div>
      </div>

      <div className="about-item">
        <span>🚀</span>
        <div>
          <h4>Goal</h4>
          <p>Build impactful software solutions</p>
        </div>
      </div>
    </div>
  </div>
</section>
  {/* SKILLS SECTION */}
<section className="skills-section" id="skills">
  <div className="section-title">
    <p>MY TECHNICAL EXPERTISE</p>
    <h2>Skills</h2>
  </div>

  <div className="skills-container">

    <div className="skill-card">
      <div className="skill-icon">☕</div>
      <h3>Java</h3>
      <p>Core Java, OOP, Collections, Exception Handling</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🌱</div>
      <h3>Spring Boot</h3>
      <p>REST APIs, MVC, JPA, Backend Development</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🐍</div>
      <h3>Python</h3>
      <p>Programming, Backend Development and APIs</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🗄️</div>
      <h3>SQL & MySQL</h3>
      <p>Database Design, Queries, Joins and CRUD</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🌐</div>
      <h3>Web Development</h3>
      <p>HTML, CSS, JavaScript and Responsive Design</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">⚛️</div>
      <h3>React</h3>
      <p>Components, JSX, Props and Modern UI Development</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🧠</div>
      <h3>DSA</h3>
      <p>Arrays, Linked Lists, Stacks, Queues and Algorithms</p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🔧</div>
      <h3>Tools</h3>
      <p>Git, GitHub, VS Code, IntelliJ IDEA and Postman</p>
    </div>

  </div>
</section>

  {/* PROJECTS SECTION */}
<section className="projects-section" id="projects">
  <div className="section-title">
    <p>MY RECENT WORK</p>
    <h2>Projects</h2>
  </div>

  <div className="projects-container">

    {/* Project 1 */}
    <div className="project-card">
      <div className="project-number">01</div>
      <div className="project-icon">🤖</div>

      <h3>SkillGap AI</h3>

      <p>
        An AI-powered career readiness platform that analyzes a user's
        resume and target job description to identify skill gaps and
        provide personalized learning roadmaps.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>AI</span>
        <span>React</span>
        <span>SQL</span>
      </div>

      <div className="project-buttons">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="project-btn"
        >
          GitHub ↗
        </a>

        <a href="#" className="project-btn live">
          Live Demo ↗
        </a>
      </div>
    </div>


    {/* Project 2 */}
    <div className="project-card">
      <div className="project-number">02</div>
      <div className="project-icon">🛒</div>

      <h3>E-Commerce Web Application</h3>

      <p>
        A full-stack e-commerce application with product management,
        shopping cart, checkout, user authentication and role-based
        admin access.
      </p>

      <div className="tech-stack">
        <span>Java</span>
        <span>Spring Boot</span>
        <span>MySQL</span>
        <span>HTML/CSS/JS</span>
      </div>

      <div className="project-buttons">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="project-btn"
        >
          GitHub ↗
        </a>

        <a href="#" className="project-btn live">
          Live Demo ↗
        </a>
      </div>
    </div>


    {/* Project 3 */}
    <div className="project-card">
      <div className="project-number">03</div>
      <div className="project-icon">📋</div>

      <h3>Task Management System</h3>

      <p>
        A task management application that allows users to create,
        update, delete and track tasks with authentication and
        authorization.
      </p>

      <div className="tech-stack">
        <span>Java</span>
        <span>Spring Boot</span>
        <span>REST API</span>
        <span>MySQL</span>
      </div>

      <div className="project-buttons">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="project-btn"
        >
          GitHub ↗
        </a>

        <a href="#" className="project-btn live">
          Live Demo ↗
        </a>
      </div>
    </div>


    {/* Project 4 */}
    <div className="project-card">
      <div className="project-number">04</div>
      <div className="project-icon">💼</div>

      <h3>Java Job Portal</h3>

      <p>
        A console-based job portal built with Java and MySQL where
        students can register, view jobs and apply for suitable
        opportunities.
      </p>

      <div className="tech-stack">
        <span>Java</span>
        <span>JDBC</span>
        <span>MySQL</span>
        <span>OOP</span>
      </div>

      <div className="project-buttons">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="project-btn"
        >
          GitHub ↗
        </a>

        <a href="#" className="project-btn live">
          Live Demo ↗
        </a>
      </div>
    </div>

  </div>
</section>

{/* EDUCATION SECTION */}
<section className="education-section" id="education">
  <div className="section-title">
    <p>MY ACADEMIC JOURNEY</p>
    <h2>Education</h2>
  </div>

  <div className="education-container">
    <div className="education-card">
      <div className="education-year">2024 - 2028</div>

      <h3>Bachelor of Engineering in Information Technology</h3>

      <h4>Pravara Rural Engineering College, Loni</h4>

      <p>
        Currently pursuing Bachelor of Engineering, with a strong focus on
        software development, programming, databases, web technologies and
        problem-solving.
      </p>

      <span className="education-score">
        Department Rank: 2nd
      </span>
    </div>
  </div>
</section>
{/* ACHIEVEMENTS SECTION */}
<section className="achievements-section" id="achievements">
  <div className="section-title">
    <p>MY MILESTONES</p>
    <h2>Achievements</h2>
  </div>

  <div className="achievements-container">

    {/* Achievement 1 */}
    <div className="achievement-card">
      <div className="achievement-icon">🥈</div>

      <h3>2nd Rank in First Year</h3>

      <p>
        Secured 2nd Rank in the First Year at Pravara Rural Engineering
        College, Loni, demonstrating strong academic performance and
        consistency.
      </p>
    </div>

    {/* Achievement 2 */}
    <div className="achievement-card">
      <div className="achievement-icon">🏆</div>

      <h3>India Tech Summit 2026 – Round 2 Qualifier</h3>

      <p>
        Qualified for Round 2 of the India Tech Summit 2026, demonstrating
        technical knowledge, problem-solving skills and innovation.
      </p>
    </div>

    {/* Achievement 3 */}
    <div className="achievement-card">
      <div className="achievement-icon">☕</div>

      <h3>NPTEL Programming in Java</h3>

      <p>
        Successfully completed the Programming in Java course from NPTEL
        with an Elite Certificate and secured an overall score of 77%.
      </p>
    </div>

  </div>
</section>

{/* CONTACT SECTION */}
<section className="contact-section" id="contact">
  <div className="section-title">
    <p>GET IN TOUCH</p>
    <h2>Contact Me</h2>
  </div>

  <div className="contact-container">

    <div className="contact-intro">
      <h3>Let's Connect!</h3>

      <p>
        I'm always interested in connecting with fellow developers,
        recruiters and people working on exciting technology projects.
      </p>

      <p>
        Feel free to reach out to me through email or connect with me
        on LinkedIn and GitHub.
      </p>
    </div>

    <div className="contact-details">

      {/* Email */}
      <a
        href="mailto:gavhanegayatri554@gmail.com"
        className="contact-item"
      >
        <span className="contact-icon">📧</span>

        <div>
          <h4>Email</h4>
          <p>gavhanegayatri554@gmail.com</p>
        </div>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/gayatri-gavhane-580101332"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >
        <span className="contact-icon">💼</span>

        <div>
          <h4>LinkedIn</h4>
          <p>Connect with me on LinkedIn</p>
        </div>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/gayu554"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >
        <span className="contact-icon">💻</span>

        <div>
          <h4>GitHub</h4>
          <p>github.com/gayu554</p>
        </div>
      </a>

    </div>

  </div>
</section>

<footer className="footer">
  <div className="footer-content">
    <h3>Gayatri Gavhane</h3>
    <p>Aspiring Java Full Stack Developer</p>

    <div className="footer-links">
      <a
        href="https://github.com/gayu554"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://linkedin.com/in/gayatri-gavhane-580101332"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>

      <a href="mailto:gavhanegayatri554@gmail.com">
        Email
      </a>
    </div>

    <div className="footer-line"></div>

    <p className="copyright">
      © 2026 Gayatri Gavhane. All Rights Reserved.
    </p>
  </div>
</footer>

<a href="#home" className="back-to-top" aria-label="Back to top">
  ↑
</a>

    </>
  );
}


export default App;