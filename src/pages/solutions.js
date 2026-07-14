import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Solutions.module.css";

export default function Solutions() {
  const anchors = [
    { label: "Paints & Coatings", id: "#coatings" },
    { label: "Ceilings & Drywalls", id: "#drywalls" },
    { label: "Luxury Sanitary Ware", id: "#sanitary" },
    { label: "Premium Flooring", id: "#flooring" },
  ];

  return (
    <>
      <Head>
        <title>Our Solutions & Brand Partners | Avion Retail India</title>
        <meta
          name="description"
          content="Browse Avion's premium solution verticals: Jotun paints, Jotafloor, Saint-Gobain Gyproc ceilings, Parador wood flooring, and luxury sanitary brands like Kohler, Duravit, VitrA, and Delta."
        />
      </Head>

      {/* Header section */}
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className="fade-in-up">Solutions Portfolio</h1>
          <p className="fade-in-up delay-1">
            We partner with the world's most elite brands to deliver bespoke architectural surfaces and luxury fixtures.
          </p>

          <div className={`${styles.navAnchors} fade-in-up delay-2`}>
            {anchors.map((anchor) => (
              <a key={anchor.id} href={anchor.id} className={styles.anchorLink}>
                {anchor.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical 1: Paints & Coatings */}
      <section className={styles.categorySection} id="coatings">
        <div className="container">
          <div className="grid-2">
            <div>
              <div style={{ textTransform: "uppercase", fontSize: "0.85rem", fontWeight: "700", color: "var(--accent-gold)", letterSpacing: "0.15em", display: 'block', marginBottom: '1.2rem' }}>
                Vertical 01
              </div>
              <h3 className={styles.sectionHeading}>Paints & Protective Coatings</h3>
              <p>
                Avion is the primary premium partner for Jotun in South India. Jotun stands at the pinnacle of global coatings technology, known for protecting the world's most iconic super-tall structures.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Our application services guarantee absolute material integrity. We refuse to supply "project-grade" substitutes, ensuring every layer applied offers optimal weather protection, scrub-resistance, and visual perfection.
              </p>
            </div>
            <div>
              <div className={styles.brandCard}>
                <div className={styles.brandHeader}>
                  <span className={styles.brandTitle}>JOTUN</span>
                  <span className={styles.brandTagline}>No. 1 Worldwide</span>
                </div>
                <p>Global leader in protective, decorative, marine, and powder coatings.</p>
                <ul className={styles.featuresList}>
                  <li>Present in 100+ countries with 37 manufacturing facilities.</li>
                  <li>Ultra-low VOC emissions for healthy, green indoor air.</li>
                  <li>Jotun GreenSteps: strict environmental and LEED certification standards.</li>
                  <li>Elite designer finishes, rich texture systems, and exterior weather guards.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical 2: Ceilings & Drywalls */}
      <section className={styles.categorySection} id="drywalls">
        <div className="container">
          <div className="grid-2">
            <div style={{ order: 2 }}>
              <div style={{ textTransform: "uppercase", fontSize: "0.85rem", fontWeight: "700", color: "var(--accent-gold)", letterSpacing: "0.15em", display: 'block', marginBottom: '1.2rem' }}>
                Vertical 02
              </div>
              <h3 className={styles.sectionHeading}>POP & Drywall Systems</h3>
              <p>
                We bring modern gypsum engineering to interior walls and ceilings in partnership with Gyproc by Saint-Gobain. 
              </p>
              <p style={{ marginTop: "1rem" }}>
                These lightweight building solutions offer architects incredible design freedom to sculpt custom geometric profiles, suspended ceilings, and partition walls without adding deadweight to building foundations.
              </p>
            </div>
            <div style={{ order: 1 }}>
              <div className={styles.brandCard}>
                <div className={styles.brandHeader}>
                  <span className={styles.brandTitle}>GYPROC</span>
                  <span className={styles.brandTagline}>Saint-Gobain</span>
                </div>
                <p>Leading name in gypsum-based building systems and ceiling tiles.</p>
                <ul className={styles.featuresList}>
                  <li>EPD-certified low-carbon plaster panels.</li>
                  <li>Advanced acoustics, sound dampening, and noise insulation.</li>
                  <li>Thermal efficiency that cuts air conditioning energy costs.</li>
                  <li>High moisture and fire-resistance ratings for safety.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical 3: Luxury Sanitary Ware */}
      <section className={styles.categorySection} id="sanitary">
        <div className="container">
          <div>
            <div style={{ textTransform: "uppercase", fontSize: "0.85rem", fontWeight: "700", color: "var(--accent-gold)", letterSpacing: "0.15em", display: 'block', marginBottom: '1.2rem', textAlign: 'center' }}>
              Vertical 03
            </div>
            <h3 className={styles.sectionHeading} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              Luxury Sanitary Ware & Fittings
            </h3>
          </div>
          <div className={styles.brandGrid}>
            <div className={styles.brandCard}>
              <div className={styles.brandHeader}>
                <span className={styles.brandTitle}>KOHLER</span>
                <span className={styles.brandTagline}>Luxury Dealer</span>
              </div>
              <p>India's largest brand in premium and luxury bathroom fittings.</p>
              <ul className={styles.featuresList}>
                <li>Avion showroom in Jubilee Hills features exclusive luxury catalogs.</li>
                <li>Completely zero "project-grade" material.</li>
                <li>US-based design heritage with global design awards.</li>
                <li>Complete bathroom portfolios: intelligent toilets, digital showers, vanities.</li>
              </ul>
            </div>

            <div className={styles.brandCard}>
              <div className={styles.brandHeader}>
                <span className={styles.brandTitle}>DURAVIT</span>
                <span className={styles.brandTagline}>German Premium</span>
              </div>
              <p>High-end German sanitary manufacturer established in 1817.</p>
              <ul className={styles.featuresList}>
                <li>Designer lines created by Philippe Starck and Matteo Thun.</li>
                <li>Innovative Rimless flushing and water-saving technology.</li>
                <li>Sleek, minimalist design language tailored for modern architecture.</li>
                <li>Virtual showroom rendering and spatial planning tools support.</li>
              </ul>
            </div>

            <div className={styles.brandCard}>
              <div className={styles.brandHeader}>
                <span className={styles.brandTitle}>VITRA</span>
                <span className={styles.brandTagline}>Intelligent Bath</span>
              </div>
              <p>World-class bathroom systems from the Eczacıbaşı Group, Turkey.</p>
              <ul className={styles.featuresList}>
                <li>A perfect blend of advanced technology and hygiene.</li>
                <li>Wall-hung WCs and space-saving modular vanities.</li>
                <li>Designed in collaboration with top European design agencies.</li>
                <li>High scratch-resistance and anti-bacterial glaze coatings.</li>
              </ul>
            </div>

            <div className={styles.brandCard}>
              <div className={styles.brandHeader}>
                <span className={styles.brandTitle}>DELTA</span>
                <span className={styles.brandTagline}>Smart Fittings</span>
              </div>
              <p>Smart, responsive bath and kitchen faucets with US technology.</p>
              <ul className={styles.featuresList}>
                <li>Touch2O®: turn water on/off with a simple tap on the spout.</li>
                <li>H2Okinetic®: wave patterns that feel like more water using less.</li>
                <li>ShieldSpray®: high-velocity jet stream that reduces splashes.</li>
                <li>Industry-leading warranty for long-term commercial peace of mind.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical 4: Premium Flooring & Jotafloor */}
      <section className={styles.categorySection} id="flooring">
        <div className="container">
          <div className="grid-2">
            <div>
              <div style={{ textTransform: "uppercase", fontSize: "0.85rem", fontWeight: "700", color: "var(--accent-gold)", letterSpacing: "0.15em", display: 'block', margin: '0 auto 1.2rem auto' }}>
                Vertical 04
              </div>
              <h3 className={styles.sectionHeading}>Flooring Solutions</h3>
              <p>
                From highly heavy-duty industrial coatings to premium hand-crafted residential wood boards, Avion provides end-to-end flooring surfaces.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Our industrial epoxy systems (Jotafloor) protect massive commercial structures and high-traffic basements, while Parador's premium wood sets provide luxurious comfort inside living rooms.
              </p>
            </div>
            <div>
              <div className={styles.brandCard} style={{ marginBottom: "2rem" }}>
                <div className={styles.brandHeader}>
                  <span className={styles.brandTitle}>PARADOR</span>
                  <span className={styles.brandTagline}>Wood Flooring</span>
                </div>
                <p>Premium engineered and laminate wood flooring made in Germany and Austria.</p>
                <ul className={styles.featuresList}>
                  <li>Traditional European craftsmanship since 1977.</li>
                  <li>Eco-friendly *Modular ONE* design flooring.</li>
                  <li>Vast range of formats, surface finishes, and wood gradings.</li>
                  <li>Patented clicking mechanism for seamless joints.</li>
                </ul>
              </div>

              <div className={styles.brandCard}>
                <div className={styles.brandHeader}>
                  <span className={styles.brandTitle}>JOTAFLOOR</span>
                  <span className={styles.brandTagline}>Epoxies</span>
                </div>
                <p>Heavy-duty, high-performance industrial and decorative floor coatings.</p>
                <ul className={styles.featuresList}>
                  <li>Perfect for car parks, warehouses, and cleanrooms.</li>
                  <li>Extremely high impact, wear, and chemical resistance.</li>
                  <li>Seamless application prevents cracks and dust collection.</li>
                  <li>Available in a wide range of colors and textures.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContent}`}>
          <h2>Ready to Elevate Your Space?</h2>
          <p>
            Consult with our product specialists to choose the ideal premium solutions and plan execution for your architectural project.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Our MD
          </Link>
        </div>
      </section>
    </>
  );
}
