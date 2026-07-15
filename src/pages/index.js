import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const strengths = [
    {
      title: "Complete Painting Solution",
      description: "One-stop partner for supply + apply. Interior, exterior, designer finishes, industrial floor coatings, protective and powder/marine coatings.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 2 12 22Z" />
          <path d="M12 6V12L16 14" />
        </svg>
      ),
    },
    {
      title: "Consistent Global Quality",
      description: "Absolutely no project-grade materials. Same premium quality standard for retail, residential, and mega-projects alike. Adheres strictly to international standards.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      title: "Health & Environment First",
      description: "Delivering the lowest VOC levels in the building industry. Handpicking platinum-grade LEED-certified green products to ensure a healthy living environment.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 22c1.25-3.33 3.5-5 6.75-5 3.25 0 5.5 1.67 6.75 5" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10c0 .7-.05 1.37-.14 2" />
          <path d="M8 12c.5-1.5 1.75-3 3-3s2.5 1.5 3 3" />
        </svg>
      ),
    },
    {
      title: "Trusted Worldwide",
      description: "Representing manufacturers with over a century of excellence. Backed by top global brand reputations and massive project reference archives.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>
      ),
    },
  ];

  const featuredProjects = [
    {
      name: "SAS Crown",
      height: "Hyderabad's Tallest - 60 Floors",
      detail: "Complete premium coatings by Jotun Paints",
      image: "/projects/sas_crown.jpg",
    },
    {
      name: "The Trilight",
      height: "Luxury Living - 56 Floors",
      detail: "Ultra-durable skyscraper exterior coatings",
      image: "/projects/Trilight.jpg",
    },
    {
      name: "Candeur Crescent",
      height: "Iconic Skyscraper - 50 Floors",
      detail: "Premium building solution application",
      image: "/projects/Cresent Property Banner.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Avion Retail India | Premium Building Solutions & Global Brands</title>
        <meta
          name="description"
          content="Avion Retail India Pvt Ltd is Hyderabad's premier partner for Jotun Paints, Jotafloor, Kohler, Duravit, VitrA, Delta, Gyproc, and Parador flooring."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={`${styles.heroContent} fade-in-up`}>
            {/* Badge */}
            <div className={styles.heroBadge}>
              <span></span>
              Hyderabad's Premier Building Solutions Partner
            </div>

            <h1>
              Premium Building Solutions{' '}
              <br />
              Powered by the World's Best Brands
            </h1>

            <p className={styles.heroSubtitle}>
              Avion Retail India is Hyderabad's exclusive partner for ultra-premium paints,
              drywalls, sanitary ware, and wooden flooring — with zero compromise on quality.
            </p>

            <div className={styles.heroCtas}>
              <Link href="/solutions" className="btn btn-primary">
                Explore Solutions
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>

            {/* Stats Row */}
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>20+</div>
                <div className={styles.statLabel}>Landmark Projects</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>23</div>
                <div className={styles.statLabel}>Global Brands</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Years of Excellence</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>ZERO</div>
                <div className={styles.statLabel}>Compromises on Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Scroll Banner */}
      <section className={styles.brandsSection}>
        <div className={`container ${styles.brandsContainer}`}>
          <span className={styles.brandsLabel}>Exclusive Global Brand Partners</span>
          <div className={styles.brandsList}>
            <img src="/logos/jotun.svg" alt="Jotun" className={styles.brandLogo} />
            <img src="/logos/kohler.svg" alt="Kohler" className={styles.brandLogo} />
            <img src="/logos/gyproc.svg" alt="Gyproc" className={styles.brandLogo} />
            <img src="/logos/duravit.svg" alt="Duravit" className={styles.brandLogo} />
            <img src="/logos/vitra.svg" alt="VitrA" className={styles.brandLogo} />
            <img src="/logos/delta.svg" alt="Delta" className={styles.brandLogo} />
            <img src="/logos/parador.svg" alt="Parador" className={styles.brandLogo} />
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className={styles.strengthsSection} id="advantages">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div style={{ fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.8rem' }}>
              Why Choose Avion
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', display: 'block', margin: '0' }}>Excellence In Every Element</h2>
          </div>
          <div className="grid-2">
            {strengths.map((item, idx) => (
              <div className={styles.strengthCard} key={idx}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skyscraper / Featured Projects Section */}
      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div style={{ textTransform: "uppercase", fontSize: "0.85rem", fontWeight: "700", color: "var(--accent-gold)", letterSpacing: "0.15em", display: 'block', margin: '0 auto 1.2rem auto' }}>
              Skyscraper Projects
            </div>
            <h3 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1rem" }}>
              Painting Hyderabad's Tallest Landmarks
            </h3>
            <p>
              Avion, powered by Jotun, is the trusted partner for Hyderabad's highest residential and commercial developments.
            </p>
          </div>
          <div className="grid-3">
            {featuredProjects.map((project, idx) => (
              <div className={styles.projectCard} key={idx}>
                <div 
                  className={styles.projectCardBackground} 
                  style={{ 
                    backgroundImage: `linear-gradient(to bottom, rgba(17, 26, 13, 0.05) 0%, rgba(17, 26, 13, 0.92) 100%), url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} 
                />
                <div className={styles.projectOverlay}>
                  <h3>{project.name}</h3>
                  <p>{project.detail}</p>
                  <div className={styles.projectHeight}>{project.height}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link href="/projects" className="btn btn-secondary">
              View All Prestige Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className={styles.quoteSection}>
        <div className={`container ${styles.quoteContainer}`}>
          <div className={styles.quoteText}>
            "We believe that premium building materials shouldn't just look luxurious; they must adhere to global standards of durability, health, and environmental sustainability. We provide the same elite grade to both independent custom homes and soaring skyscrapers."
          </div>
          <div className={styles.quoteAuthor}>Ashok Agarwal</div>
          <div className={styles.quoteRole}>Managing Director, Avion Retail India Pvt Ltd</div>
        </div>
      </section>
    </>
  );
}
