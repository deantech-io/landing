import { useMemo, useState, useEffect } from "react";
import HeroScene from "./components/HeroScene.jsx";

const partners = [
  "NovaLayer",
  "Quantis Labs",
  "Hypergrid",
  "Cobalt AI",
  "SynapseX",
  "MetaQuantum",
  "Lumen Finance",
];

const capabilities = [
  {
    title: "Product Intelligence",
    description:
      "AI-driven product discovery, predictive analytics, and growth experimentation frameworks.",
    items: ["Generative AI copilots", "Data platform engineering", "ML-augmented insights"],
  },
  {
    title: "Immersive Experiences",
    description:
      "High-fidelity 3D, XR interfaces, and spatial storytelling for Web and native platforms.",
    items: ["Spatial UI labs", "Real-time 3D ecosystems", "Metaverse prototyping"],
  },
  {
    title: "Secure Infrastructure",
    description:
      "Blockchain architectures, zero-trust security, and scalable cloud-native systems.",
    items: ["Cross-chain protocols", "Smart contract audits", "Privacy engineering"],
  },
  {
    title: "Launch & Growth",
    description:
      "Market-ready delivery pods, DevOps automation, and continuous innovation loops.",
    items: ["Design-to-code automation", "Growth telemetry", "Multi-cloud deployments"],
  },
];

const processSteps = [
  {
    index: "01",
    title: "Discovery Alignment",
    description:
      "We map out stakeholder objectives, user signals, and systemic constraints to architect a product north star.",
  },
  {
    index: "02",
    title: "Immersive Prototyping",
    description:
      "Motion-first experiments, spatial prototypes, and rapid validation loops to align vision with reality.",
  },
  {
    index: "03",
    title: "Intelligent Build",
    description:
      "Full-stack engineering driven by AI pair programming, automated QA, and continuous integration pipelines.",
  },
  {
    index: "04",
    title: "Launch Orchestration",
    description:
      "DevOps activation, growth telemetry, and iteration roadmaps to accelerate adoption.",
  },
];

const insights = [
  {
    tag: "AI Systems",
    title: "Designing ethical generative AI copilots",
    description:
      "Our framework for aligning AI creativity with human intention, grounded in responsible innovation.",
  },
  {
    tag: "Spatial Web",
    title: "Why spatial UX becomes the new default",
    description:
      "Multi-modal interfaces reimagined through volumetric storytelling and adaptive environments.",
  },
  {
    tag: "Blockchain",
    title: "The era of programmable trust",
    description:
      "Next-gen token governance, real-world assets, and compliance automation for enterprises.",
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const metrics = useMemo(
    () => [
      { label: "Products Launched", value: "120+" },
      { label: "Users Impacted", value: "6.2M" },
      { label: "Faster Time-to-Market", value: "38%" },
    ],
    []
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());
    console.table(data);
    event.currentTarget.reset();
  };

  return (
    <>
      <HeroScene />
      <div className="page">
        <header className="top-bar">
          <div className="logo">
            <img src="/favicon_io/android-chrome-512x512.png" alt="DeanTech Logo" className="logo-image" />
            <span className="logo-text">DeanTech</span>
          </div>
          <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <a href="#about">About</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#process">Process</a>
            <a href="#insights">Insights</a>
            <a href="#contact" className="cta">
              Start a Project
            </a>
          </nav>
          <button
            className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </header>

        <main>
          <section className="hero" id="about">
            <div className="hero-content">
              <p className="eyebrow">Software Development Agency</p>
              <h1>
                Building the digital futures <br />
                your imagination deserves
              </h1>
              <p className="description">
                DeanTech partners with visionary founders and enterprises to architect immersive
                digital experiences, accelerated by advanced AI, blockchain, and spatial computing.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="primary">
                  Launch Discovery Call
                </a>
                <a href="#capabilities" className="secondary">
                  Our Expertise
                </a>
              </div>
              <div className="hero-metrics">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="metric-number">{metric.value}</span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="partners" aria-label="Partnerships">
            <p>Trusted by pioneers in Web3, AI, XR, and Fintech</p>
            <div className="partner-marquee">
              {partners.map((partner) => (
                <span key={partner}>{partner}</span>
              ))}
            </div>
          </section>

          <section className="capabilities" id="capabilities">
            <div className="section-header">
              <h2>Capabilities engineered for the next decade</h2>
              <p>
                Our multidisciplinary squads fuse product strategy, design systems, and emerging tech
                R&amp;D to solve impossible challenges.
              </p>
            </div>
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <article key={capability.title}>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <ul>
                    {capability.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="process" id="process">
            <div className="section-header">
              <h2>The DeanTech acceleration framework</h2>
              <p>A modular approach for clarity, velocity, and measurable impact.</p>
            </div>
            <ol className="process-steps">
              {processSteps.map((step) => (
                <li key={step.index}>
                  <span className="step-index">{step.index}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="insights" id="insights">
            <div className="section-header">
              <h2>Latest intelligence briefings</h2>
              <p>Thought leadership from our R&amp;D labs on what’s next in software innovation.</p>
            </div>
            <div className="insight-grid">
              {insights.map((insight) => (
                <article key={insight.title}>
                  <p className="tag">{insight.tag}</p>
                  <h3>{insight.title}</h3>
                  <p>{insight.description}</p>
                  <a href="#" className="text-link">
                    Read briefing
                  </a>
                </article>
              ))}
            </div>
          </section>
        </main>

        <section className="contact" id="contact">
          <div className="contact-card">
            <h2>Let’s architect what’s next</h2>
            <p>
              Tell us about your mission-critical challenge and we’ll assemble a bespoke team in
              under 48 hours.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="you@company.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" placeholder="Organization name" />
              </div>
              <div className="form-group full-width">
                <label htmlFor="project">Project Vision</label>
                <textarea
                  id="project"
                  name="project"
                  rows="4"
                  placeholder="What future do you want to build?"
                />
              </div>
              <button type="submit" className="primary">
                Schedule Strategy Session
              </button>
            </form>
          </div>
        </section>

        <footer className="footer">
          <div>
            <div className="logo footer-logo">
              <img src="/favicon_io/android-chrome-512x512.png" alt="DeanTech Logo" className="logo-image" />
              <span className="logo-text">DeanTech</span>
            </div>
            <p>We architect intelligent software ecosystems for trailblazing organizations worldwide.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>HQ</h4>
              <p>Singularity Tower, Level 47<br />Dubai Future District</p>
            </div>
            <div>
              <h4>Contact</h4>
              <p>
                <a href="mailto:hello@deantech.agency">hello@deantech.agency</a>
              </p>
              <p>
                <a href="tel:+14155551234">+1 (415) 555-1234</a>
              </p>
            </div>
            <div>
              <h4>Social</h4>
              <p className="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">X</a>
                <a href="#">Dribbble</a>
              </p>
            </div>
          </div>
          <p className="footer-note">
            © {new Date().getFullYear()} DeanTech. Minds aligned with the future.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;

