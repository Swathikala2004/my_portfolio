function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
        {/* ✅ TITLE */}
        <h2 className="about-title">About Me</h2>

        {/* ✅ TEXT */}
        <p className="about-text">
          Frontend Developer with hands-on experience in building real-world web
          applications using React.js, JavaScript, and modern deployment tools.
          I have developed projects like QR-Based Student Verification System
          and a full-featured E-commerce application with dynamic routing,
          API integration, and responsive UI.
        </p>

        {/* OPTIONAL BUTTON (remove if not needed) */}
        {/* <button className="about-btn">View Resume</button> */}

      </div>
    </section>
  );
}

export default About;