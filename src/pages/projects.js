import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Projects.module.css";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "highrise", name: "Residential High-rise" },
    { id: "commercial", name: "Commercial & IT" },
    { id: "villas", name: "Luxury Villas & Condos" },
  ];

  const projectsList = [
    { 
      name: "SAS Crown", 
      floors: "60 Floors", 
      desc: "Hyderabad's tallest skyscraper, painted entirely using premium Jotun weather-protection coatings.", 
      image: "/projects/sas_crown.jpg",
      category: "highrise",
      brandTag: "Jotun Paints",
      sourceLink: "https://sasinfra.com"
    },
    { 
      name: "The Trilight", 
      floors: "56 Floors", 
      desc: "A prestigious three-tower high-rise completed with Avion's luxury finishes.", 
      image: "/projects/Trilight.jpg",
      category: "highrise",
      brandTag: "Jotun Paints",
      sourceLink: "https://thetrilight.com"
    },
    { 
      name: "Candeur Crescent", 
      floors: "50 Floors", 
      desc: "Soaring modern residential development featuring top-tier exterior paint coatings.", 
      image: "/projects/crescent_crescent.jpg",
      category: "highrise",
      brandTag: "Jotun Paints",
      sourceLink: "https://candeurcrescent.com"
    },
    { 
      name: "Navanaami Megaleio", 
      floors: "50 Floors", 
      desc: "Iconic high-density twin residential towers executing Avion's premium materials with modern sky bridges.", 
      image: "/projects/megaleio-ele.jpg",
      category: "highrise",
      brandTag: "Jotun & Gyproc",
      sourceLink: "https://navanaami.com/megaleio/"
    },
    { 
      name: "Candeur Lakescape", 
      floors: "48 Floors", 
      desc: "Waterfront luxury skyscraper development utilizing high-performance surface systems.", 
      image: "/projects/lakescape.webp",
      category: "highrise",
      brandTag: "Jotun Paints",
      sourceLink: "https://lakescapebycandeur.com"
    },
    { 
      name: "Vasavi Atlantis", 
      floors: "45 Floors", 
      desc: "Premium architectural towers styled with durable exterior protective paint coatings.", 
      image: "/projects/atlantis.png",
      category: "highrise",
      brandTag: "Jotun Paints",
      sourceLink: "https://vasaviatlantis.com"
    },
    { 
      name: "Shangrila Abbham", 
      floors: "40 Floors", 
      desc: "Bespoke high-end residential complex designed with eco-friendly interior coatings and automation.", 
      image: "/projects/abbham.png",
      category: "highrise",
      brandTag: "Jotun Paints",
      sourceLink: "https://shangrilainfra.com"
    },

    { 
      name: "DSR Valar", 
      floors: "36 Floors", 
      desc: "Super-luxury residential space completed with zero project-grade compromises.", 
      image: "/projects/dsr_velar.jpg",
      category: "highrise",
      brandTag: "Jotun & Kohler",
      sourceLink: "https://dsrinfra.com"
    },
    { 
      name: "Raghava Wave", 
      floors: "36 Floors", 
      desc: "Architectural masterpiece finished with premium coatings, wave layout, and a 19th-floor sky bridge.", 
      image: "/projects/wave.png",
      category: "highrise",
      brandTag: "Jotun Paints",
      sourceLink: "https://raghavawave.com"
    },
    { 
      name: "The Marquise", 
      floors: "Prestige Residencies", 
      desc: "Bespoke residential complex featuring high-end bathroom sanitary ware by Kohler.", 
      image: "/projects/marquise.png",
      category: "highrise",
      brandTag: "Kohler",
      sourceLink: "https://sasinfra.com"
    },
    { 
      name: "One Hyderabad Park", 
      floors: "Luxury Condos", 
      desc: "Integrated high-rise condos boasting Parador wooden flooring and luxury fittings.", 
      image: "/projects/one_hyd_park.png",
      category: "villas",
      brandTag: "Parador & Kohler",
      sourceLink: "https://basalte.be"
    },
    { 
      name: "Courtyard Koncept Ambience", 
      floors: "Elite Living", 
      desc: "Landscaped premium development utilizing low-carbon Gyproc ceiling drywalls.", 
      image: "/projects/courtyard_ambience.jpg",
      category: "villas",
      brandTag: "Gyproc Drywalls",
      sourceLink: "https://konceptambience.com"
    },
    { 
      name: "Hill Crest by Pacifica", 
      floors: "Residential Highrise", 
      desc: "Commercial-residential development finished with durable exterior coatings.", 
      image: "/projects/hillcrest.jpg",
      category: "highrise",
      brandTag: "Jotun Paints",
      sourceLink: "https://pacificahillcrest.co.in"
    },
    { 
      name: "Auro Pearl", 
      floors: "Commercial Towers", 
      desc: "Premium workspace skyscraper using industrial-grade Jotafloor coatings in car parks.", 
      image: "/projects/auro_pearl.jpg",
      category: "commercial",
      brandTag: "Jotafloor Coatings",
      sourceLink: "https://aurorealty.com"
    },
    { 
      name: "Fortune Sonthalia Sky Villas", 
      floors: "Luxury Villas", 
      desc: "Super-premium residential duplexes finished with top-tier designer paints and fittings.", 
      image: "/projects/fortune_skyvilla.jpg",
      category: "villas",
      brandTag: "Kohler & Jotun",
      sourceLink: "https://sonthaliasf.com"
    },
    { 
      name: "Phoenix 285FD", 
      floors: "IT Tech Park", 
      desc: "Massive commercial office spaces featuring heavy-duty car park coatings and acoustic ceilings.", 
      image: "/projects/phoenix_285.jpg",
      category: "commercial",
      brandTag: "Jotafloor & Gyproc",
      sourceLink: "https://phoenixindia.co"
    },
    { 
      name: "Lisa Grove", 
      floors: "Boutique Villas", 
      desc: "Premium villa community utilizing high-end European wood flooring from Parador.", 
      image: "/projects/lisa_groove.jpg",
      category: "villas",
      brandTag: "Parador Flooring",
      sourceLink: "https://lansumproperties.com"
    },
    { 
      name: "Navanaami Eon", 
      floors: "Commercial Space", 
      desc: "High-end corporate office park executing complete painting and drywall installations.", 
      image: "/projects/eon.png",
      category: "commercial",
      brandTag: "Jotun & Gyproc",
      sourceLink: "https://navanaami.com/eon/"
    },
    { 
      name: "Dukes Aika", 
      floors: "Prestige Villas", 
      desc: "Bespoke customized luxury villas finished with Kohler bathroom fittings.", 
      image: "/projects/dukes_aiko.jpg",
      category: "villas",
      brandTag: "Kohler",
      sourceLink: "https://dukesinfra.com"
    }
  ];

  const clientLogos = [
    "DSR Group", "Sri Sreenivasa", "SAS Infra", "The Trilight", "Vasavi Group",
    "Shangrila", "Candeur", "Navanaami", "Koncept", "Sri Aditya", "Gothic",
    "Pacifica", "Poulomi", "Auro Realty", "Namishree", "Hallmark", "Raghava",
    "Terminus", "Phoenix", "Rajapushpa", "L&T Construction", "Highrise", "Lansum",
  ];

  const filteredProjects = activeTab === "all"
    ? projectsList
    : projectsList.filter(project => project.category === activeTab);

  return (
    <>
      <Head>
        <title>Prestige Projects & Clients | Avion Retail India</title>
        <meta  
          name="description"
          content="View our list of premium high-rise projects and esteemed developer clients."
        />
      </Head>

      <section className={styles.headerSection}>
        <div className="container">
          <h1 className="fade-in-up">Prestige Projects</h1>
          <p className="fade-in-up delay-1">
            We work alongside leading developers to define the skylines and luxury residences of South India.
          </p>
        </div>
      </section>

      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterTabs}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterTab} ${activeTab === cat.id ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.projectsGridSection}>
        <div className="container">
          <div className={styles.skyScraperGrid}>
            {filteredProjects.map((project, idx) => (
              <div className={styles.projectCard} key={idx}>
                {project.image ? (
                  <div className={styles.cardImageWrapper}>
                    <div 
                      className={styles.projectCardImage} 
                      style={{ 
                        backgroundImage: `url(${project.image})` 
                      }}
                    />
                  </div>
                ) : (
                  <div className={styles.projectCardPlaceholder}>
                    <div className={styles.blueprintGrid} />
                    <div className={styles.blueprintIcon}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 21h18" />
                        <path d="M5 21V7l7-4 7 4v14" />
                        <path d="M9 21v-6h6v6" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className={styles.cardContent}>
                  <div>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.projectTitle}>{project.name}</h3>
                      <span className={styles.projectFloors}>{project.floors}</span>
                    </div>
                    <p className={styles.projectDescription}>{project.desc}</p>
                  </div>
                  <div className={styles.cardFooter}>
                    {project.brandTag && (
                      <span className={styles.brandBadge}>{project.brandTag}</span>
                    )}
                    {project.sourceLink && (
                      <a 
                        href={project.sourceLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.sourceButton}
                      >
                        View Source
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: "4px" }}>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className={styles.clientsSection}>
        <div className="container">
          <div className={styles.clientsTitle}>
            <h2>Our Esteemed Clients</h2>
            <p style={{ marginTop: "1rem" }}>
              Avion is proud to partner with the region's most prominent real estate developers and contractors.
            </p>
          </div>
          <div className={styles.clientsGrid}>
            {clientLogos.map((client, idx) => (
              <div className={styles.clientLogo} key={idx}>
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
