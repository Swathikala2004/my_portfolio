function About() {
  return (
    <section
      id="about"
      className="about"
      data-aos="fade-right"
    >
      <div className="about-container">

        {/* ✅ TITLE */}
        <h2 className="about-title">
          About Me
        </h2>

        {/* ✅ TEXT */}
        <p className="about-text">
          Passionate Full Stack Developer with hands-on experience
          building real-world web applications using React.js,
          Node.js, Express.js, MongoDB, and Python.

          I enjoy developing scalable applications, REST APIs,
          and responsive user interfaces with modern deployment
          tools like Vercel, Render, and Docker.

          Built projects including an AI-Powered CRM Assistant,
          Multi-Device Booking System, and QR-Based Student
          Verification System focused on solving real-world
          problems.
        </p>

      </div>
    </section>
  );
}

export default About;