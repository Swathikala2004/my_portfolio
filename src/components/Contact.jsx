function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Get In Touch</h2>

      <p className="contact-desc">
        I’m currently open to Frontend / Full Stack opportunities and internships.
        If you have an opportunity or want to collaborate, feel free to reach out.
      </p>

      <div className="contact-boxes">
        
        <div className="contact-card">
          📧 swathikala65@gmail.com
        </div>

        <a
          href="https://github.com/Swathikala2004"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          💻 GitHub Profile
        </a>

        <a
          href="https://www.linkedin.com/in/swathikala"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          🔗 LinkedIn Profile
        </a>

      </div>
    </section>
  );
}

export default Contact;