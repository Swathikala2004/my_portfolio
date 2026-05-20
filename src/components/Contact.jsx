import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (

    <section
      id="contact"
      className="contact"
      data-aos="fade-left"
    >

      <h2 className="contact-title">
        Get In Touch
      </h2>

      <p className="contact-desc">
        I’m currently open to Frontend / Full Stack opportunities
        and internships. If you have an opportunity or want to
        collaborate, feel free to reach out.
      </p>

      <div className="contact-boxes">

        {/* EMAIL */}

        <a
          href="mailto:swathikala65@gmail.com"
          className="contact-card"
        >
          <FaEnvelope />
          <span>swathikala65@gmail.com</span>
        </a>

        {/* GITHUB */}

        <a
          href="https://github.com/Swathikala2004"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub />
          <span>GitHub Profile</span>
        </a>

        {/* LINKEDIN */}

        <a
          href="https://www.linkedin.com/in/swathikala"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaLinkedin />
          <span>LinkedIn Profile</span>
        </a>

      </div>

    </section>
  );
}

export default Contact;