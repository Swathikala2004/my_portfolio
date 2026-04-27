import profile from "../assets/profile.png"; // add your image

function Hero() {
  return (
    <section className="hero">

      {/* LEFT SIDE */}
      <div className="hero-left">
        <h1>
          Hi, I'm <span className="highlight">Swathikala Ediga</span> 👋
        </h1>

        <p className="subtitle">
          Frontend Developer | React Developer | Python Fullstack Developer
        </p>

        <p className="hero-desc">
          I build AI-powered, scalable, and user-friendly web applications.
        </p>

        {/* BUTTONS */}
        <div className="hero-buttons">
          <a
            href="https://github.com/Swathikala2004"
            target="_blank"
            rel="noreferrer"
            className="btn github"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/swathikala"
            target="_blank"
            rel="noreferrer"
            className="btn linkedin"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hero-right">
        <div className="image-circle">
          <img src={profile} alt="profile" />
        </div>
      </div>

    </section>
  );
}

export default Hero;