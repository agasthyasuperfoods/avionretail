import Head from "next/head";
import styles from "@/styles/About.module.css";

export default function About() {
  const stats = [
    { value: "14+", label: "Skyscrapers Painted in World's Top 20" },
    { value: "20+", label: "Hyderabad Mega Projects" },
    { value: "100%", label: "Anti Project-Grade Integrity" },
    { value: "8+", label: "Global Brand Partners" },
  ];

  return (
    <>
      <Head>
        <title>About Us | Avion Retail India Pvt Ltd</title>
        <meta
          name="description"
          content="Learn about Avion Retail India Pvt Ltd, our Managing Director Ashok Agarwal, and our commitment to providing premium building materials without compromises."
        />
      </Head>

      {/* Header section */}
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className="fade-in-up">About Avion Retail</h1>
          <p className="fade-in-up delay-1">
            Setting the standard for luxury architectures with uncompromising building solutions and world-renowned brands.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={styles.storySection}>
        <div className="container grid-2">
          <div className={styles.storyContent}>
            <div style={{ textTransform: "uppercase", fontSize: "0.85rem", fontWeight: "700", color: "var(--accent-gold)", letterSpacing: "0.15em", display: 'block', marginBottom: '1.2rem' }}>
              Our Foundation
            </div>
            <h3>Pioneering Premium Living</h3>
            <p>
              Avion Retail India Pvt Ltd was established with a singular vision: to bridge the gap between global construction standards and Indian spaces. We noticed that luxury homes and landmarks in South India were often finished with second-rate building materials due to complex supply chains and lack of authentic brand representation.
            </p>
            <p>
              By aligning with the world's most trusted manufacturers, we have created an integrated channel that brings paint, drywalls, ceilings, flooring, and sanitary solutions directly from premium European and global production lines to your property.
            </p>
          </div>

          <div className={styles.storyContent}>
            <div className={styles.philosophyBox}>
              <h4>The "Anti-Project Grade" Promise</h4>
              <p>
                In the Indian building industry, distributors often supply a diluted, inferior variant of materials labeled "project-grade" for large-scale developments. 
              </p>
              <p style={{ marginTop: "1rem", fontWeight: 500 }}>
                Avion Retail stands firmly against this practice. We promise <strong>zero dilution</strong>. Whether you are painting a single room or developing a 60-floor residential skyscraper like SAS Crown, you receive the exact same high-performance, retail-grade formulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones / Stats Banner */}
      <section className={styles.milestonesSection}>
        <div className="container grid-4">
          {stats.map((stat, idx) => (
            <div className={styles.milestoneCard} key={idx}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Profile */}
      <section className={styles.leadershipSection}>
        <div className="container">
          <div className={styles.mdCard}>
            <div className={styles.mdInfo}>
              <div style={{ textTransform: "uppercase", fontSize: "0.85rem", fontWeight: "700", color: "var(--accent-gold)", letterSpacing: "0.15em", display: 'block', marginBottom: '1.2rem' }}>
                Leadership
              </div>
              <h3>Ashok Agarwal</h3>
              <div className={styles.mdRole}>Managing Director</div>
              <p>
                "At Avion, our goal isn't simply to supply building products; it is to consult, execute, and deliver lasting art. By combining premium brands like Jotun, Kohler, and Parador under a unified channel, we give architects and developers in South India the freedom to design spaces without worrying about product quality or execution lapses."
              </p>
              <p style={{ marginTop: "1.5rem", fontStyle: "normal", fontSize: "0.95rem", color: "var(--text-muted)" }}>
                Ashok has led Avion Retail to become the foremost partner for Hyderabad's top real estate developers, securing project pipelines in the city's tallest high-rises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
