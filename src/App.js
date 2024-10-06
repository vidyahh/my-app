import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Homepage (Introduction) */}
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="intro-section">
          <div className="intro-text">
            <h1>Hi, I'm VIDYASHREE</h1>
            <h2>Full Stack Development</h2>
            <p>I build modern, scalable, and dynamic web applications.</p>
            <div className="cta-buttons">
              <a href="#projects" className="cta-button">Explore My Projects</a>
              <a href="#contact" className="cta-button-secondary">Get in Touch</a>
            </div>
          </div>
          <div className="intro-photo">
          
            <img src={require('./WhatsApp Image 2024-09-30 at 3.59.57 PM.jpeg')} alt="Your Profile" />
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
        <p>
            I'm Vidyashree, studying diploma in Computer Science and Engineering, specializing in full-stack development. I love building interactive web applications and solving real-world problems using technology. My journey in tech began during my early college years.I have a strong foundation in both frontend and backend technologies. On the frontend, I enjoy creating user-friendly interfaces using React, HTML, and CSS. I focus on ensuring that the applications I build are not only visually appealing but also accessible and responsive, providing an excellent user experience across various devices. 
          </p>
          <p>
            On the backend, I work with Node.js to build scalable server-side applications. I am proficient in managing databases such as MongoDB, which enables me to create efficient data management systems.
            Beyond development, I am an avid learner who enjoys keeping up with the latest industry trends and technologies. I am particularly interested in exploring topics like cloud computing, machine learning, and blockchain technology. My career goal is to create efficient, scalable, and user-friendly applications that make a positive impact on people's lives and contribute to the tech community.
          </p>
          <div className="about-details">
            <div className="skills-list">
              <h3>Technical Skills</h3>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML, CSS, JavaScript</li>
                <li>MongoDB</li>
                <li>Git, GitHub</li>
                <li>RESTful APIs</li>
                <li>TypeScript</li>
                <li>SQL, MySQL</li>
                <li>Jira software</li>
              </ul>
              <h3>Soft Skills</h3>
              <ul>
                <li>Problem-solving</li>
                <li>Teamwork & Collaboration</li>
                <li>Communication</li>
                <li>Time Management</li>
                <li>Adaptability</li>
                <li>Leadership</li>
              </ul>
            </div>
            <div className="certifications">
              <h3>Certifications</h3>
              <ul>
                <li>Infosys Spring board</li>
                <li>Zephyr Technologies</li>
                <li>NXT Wave</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
        <div className="project-card">
  <h3>Project 1: HTML and CSS Project</h3>
  <p>A simple project showcasing HTML and CSS skills. This project demonstrates responsive design and layout techniques.</p>
  <p><strong>Tech Stack:</strong> HTML, CSS</p>
  <a href="https://vidyahh.github.io/project/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
 

</div>
          <div className="project-card">
            <h3>Project 2: Receipe Book </h3>
            <p>A simple project showcasing the book of receipes. this involves React. This project demonstrates responsive design and layout techniques.</p>
            <p><strong>Tech Stack:</strong> React</p>
            <a href="https://vidyahh.github.io/receipe-book/" className="project-link">View Project</a>
            

          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React,TypeScript, HTML, CSS, JavaScript</p>
          </div>
          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js, MongoDB, RESTful APIs</p>
          </div>
          <div className="skill-card">
            <h3>Databases</h3>
            <p>MySQL, MongoDB</p>
          </div>
          <div className="skill-card">
            <h3>Tools & Platforms</h3>
            <p>Git, GitHub, Docker, AWS, Jira Software</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <h2>Education</h2>
        <div className="education-details">
          <h3>Diploma in Computer Science and Engineering</h3>
          <p><strong>Institution:</strong>Karnataka (Govt.) Polytechnic, Mangalore </p>
          <p><strong>Specialization:</strong> Full Stack Development</p>
          <h4>Relevant Courses</h4>
          <ul>
            <li>Web Development</li>
            <li>Database Management</li>
            <li>Software Engineering</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <p>Or reach me at: <strong>viyahh04@gmai.com</strong></p>
      </section>

      <footer className="footer">
        <p>© 2024 vidyahhh. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
