import Head from "next/head";
import styles from "@/styles/Projects.module.css";

export default function Projects() {
  const projectsList = [
    { name: "SAS Crown", floors: "60 Floors", desc: "Hyderabad's tallest skyscraper, painted entirely using premium Jotun weather-protection coatings.", image: "/projects/sas_crown.png" },
    { name: "The Trilight", floors: "56 Floors", desc: "A prestigious three-tower high-rise completed with Avion's luxury finishes.", image: "/projects/trilight.png" },
    { name: "Candeur Crescent", floors: "50 Floors", desc: "Soaring modern residential development featuring top-tier exterior paint coatings.", image: "/projects/crescent.png" },
    { name: "Navanaami Megalio", floors: "50 Floors", desc: "Iconic high-density residential towers executing Avion's premium materials." },
    { name: "Candeur Lakescape", floors: "48 Floors", desc: "Waterfront luxury skyscraper development utilizing high-performance surface systems." },
    { name: "Vasavi Atlantis", floors: "45 Floors", desc: "Premium architectural towers styled with durable exterior protective paint coatings.", image: "/projects/atlantis.png" },
    { name: "Shangrila Abbham", floors: "40 Floors", desc: "Bespoke high-end residential complex designed with eco-friendly interior coatings." },
    { name: "AVR Evania", floors: "40 Floors", desc: "State-of-the-art skyscraper utilizing Avion's premium building solution supply." },
    { name: "DSR Valar", floors: "36 Floors", desc: "Super-luxury residential space completed with zero project-grade compromises." },
    { name: "Raghava Wave", floors: "36 Floors", desc: "Architectural masterpiece finished with premium coatings and details." },
    { name: "The Marquise", floors: "Prestige Residencies", desc: "Bespoke residential complex featuring high-end bathroom sanitary ware by Kohler." },
    { name: "One Hyderabad Park", floors: "Luxury Condos", desc: "Integrated high-rise condos boasting Parador wooden flooring and luxury fittings." },
    { name: "Courtyard Koncept Ambience", floors: "Elite Living", desc: "Landscaped premium development utilizing low-carbon Gyproc ceiling drywalls." },
    { name: "Hill Crest by Pacifica", floors: "Residential Highrise", desc: "Commercial-residential development finished with durable exterior coatings." },
    { name: "Auro Pearl", floors: "Commercial Towers", desc: "Premium workspace skyscraper using industrial-grade Jotafloor coatings in car parks." },
    { name: "Fortune Sonthalia Sky Villas", floors: "Luxury Villas", desc: "Super-premium residential duplexes finished with top-tier designer paints and fittings." },
    { name: "Phoenix 285FD", floors: "IT Tech Park", desc: "Massive commercial office spaces featuring heavy-duty car park coatings and acoustic ceilings." },
    { name: "Lisa Grove", floors: "Boutique Villas", desc: "Premium villa community utilizing high-end European wood flooring from Parador." },
    { name: "Navanaami Eon", floors: "Commercial Space", desc: "High-end corporate office park executing complete painting and drywall installations." },
    { name: "Dukes Aika", floors: "Prestige Villas", desc: "Bespoke customized luxury villas finished with Kohler bathroom fittings." },
  ];

  const clientLogos = [
    "DSR Group",
    "Sri Sreenivasa",
    "SAS Infra",
    "The Trilight",
    "Vasavi Group",
    "Shangrila",
    "Candeur",
    "Navanaami",
    "Koncept",
    "Sri Aditya",
    "Gothic",
    "Pacifica",
    "Poulomi",
    "Auro Realty",
    "Namishree",
    "Hallmark",
    "Raghava",
    "Terminus",
    "Phoenix",
    "Rajapushpa",
    "L&T Construction",
    "Highrise",
    "Lansum",
  ];

  return (
    <>
      <Head>
        <title>Prestige Projects & Clients | Avion Retail India</title>
        <meta
          name="description"
          content="View our list of premium high-rise projects and esteemed developer clients, including SAS Crown, The Trilight, Candeur, Vasavi, DSR, and more."
        />
      </Head>

      {/* Header section */}
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className="fade-in-up">Prestige Projects</h1>
          <p className="fade-in-up delay-1">
            We work alongside leading developers to define the skylines and luxury residences of South India.
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 0 4rem 0" }}>
        <div className="container">
          <div className={styles.skyScraperGrid}>
            {projectsList.map((project, idx) => (
              <div className={styles.projectCard} key={idx}>
                <div>
                  <h3 className={styles.projectTitle}>{project.name}</h3>
                  <div className={styles.projectFloors}>{project.floors}</div>
                </div>
                <p className={styles.projectDescription}>{project.desc}</p>
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
