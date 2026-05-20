import profile from "../assets/profile.png";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

function Hero() {

  return (

    <section
      className="hero"
      data-aos="fade-up"
    >

      {/* LEFT SIDE */}

      <div className="hero-left">

        <p className="hero-tag">
          AVAILABLE FOR WORK
        </p>

        <h1>
          Hi, I'm{" "}
          <span className="highlight">
            Swathikala Ediga
          </span>{" "}
          👋
        </h1>

        <p className="subtitle">
          Full Stack Developer | MERN Stack |
          React.js • Node.js • MongoDB
        </p>

        <p className="hero-desc">
          I build AI-powered, scalable, responsive,
          and user-friendly web applications with
          modern frontend and backend technologies.
        </p>

        {/* BUTTONS */}

        <div className="hero-buttons">

          {/* GITHUB */}

          <a
            href="https://github.com/Swathikala2004"
            target="_blank"
            rel="noreferrer"
            className="btn github"
          >
            <FaGithub />
            GitHub
          </a>

          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/swathikala"
            target="_blank"
            rel="noreferrer"
            className="btn linkedin"
          >
            <FaLinkedin />
            LinkedIn
          </a>

         

        </div>

      </div>

      {/* RIGHT SIDE IMAGE */}

      <div className="hero-right">

        <div className="image-circle">

          <img
            src={profile}
            alt="profile"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;