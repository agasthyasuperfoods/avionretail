import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Solutions", path: "/solutions" },
    { label: "Projects", path: "/projects" },
    { label: "About Us", path: "/about" },
  ];

  return (
    <div className={mobileMenuOpen ? styles.menuOpen : ""}>
      {/* Navigation Header */}
      <header className={styles.header}>
        <div className={`container ${styles.navContainer}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoWrapper}>
              <img src="/logos/avion-logo.png" alt="Avion Retail" className={styles.logoImg} />
            </div>
            <div className={styles.logoBrand}>
              <span className={styles.logoName}>AVION RETAIL</span>
              <span className={styles.logoSub}>INDIA PVT LTD</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav>
            <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ""}`}>
              {navItems.map((item) => {
                const isActive = router.pathname === item.path;
                return (
                  <li
                    key={item.path}
                    className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href={item.path}>{item.label}</Link>
                  </li>
                );
              })}
              <li className={styles.navItem} onClick={() => setMobileMenuOpen(false)}>
                <Link href="/contact" className={styles.contactBtn}>
                  Get in Touch
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className={styles.mobileToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className={styles.main}>{children}</main>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          {/* Column 1: Branding & Intro */}
          <div className={styles.footerCol}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/logos/avion-logo.png" alt="Avion Retail" style={{ height: '42px' }} />
              <div>
                <div style={{ fontWeight: '800', fontSize: '1rem', color: '#ffffff', letterSpacing: '1.2px' }}>AVION RETAIL</div>
                <div style={{ fontSize: '0.62rem', color: 'var(--green-primary)', letterSpacing: '1px', marginTop: '2px', fontWeight: '600' }}>INDIA PVT LTD</div>
              </div>
            </div>
            <p style={{ marginBottom: "1.5rem" }}>
              Your one-stop partner for premium building solutions. We bring the world's finest
              brands in paints, floors, ceilings, and sanitary ware under one roof.
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Showroom: 8-3-231/W/A/1&2/G-4, Jubilee Ballpark Building, Krishna Nagar, Banjara Hills,
              Hyderabad-500045, Telangana.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.footerCol}>
            <h4>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/solutions">Solutions</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className={styles.footerCol}>
            <h4>Our Solutions</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/solutions#coatings">Jotun Paints & Coatings</Link>
              </li>
              <li>
                <Link href="/solutions#flooring">Jotafloor & Parador Floors</Link>
              </li>
              <li>
                <Link href="/solutions#drywalls">Gyproc Saint-Gobain</Link>
              </li>
              <li>
                <Link href="/solutions#sanitary">Premium Sanitary Ware</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Shortcuts */}
          <div className={styles.footerCol}>
            <h4>Contact Info</h4>
            <div className={styles.footerContactInfo}>
              <p>
                <strong>MD:</strong> Ashok Agarwal
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+9198489121218" style={{ color: "var(--accent-secondary)" }}>
                  +91-98489121218
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:Ashok@avionretail.com" style={{ color: "var(--accent-secondary)" }}>
                  Ashok@avionretail.com
                </a>
              </p>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>
                <strong>Corporate Office:</strong> Unit No. L20 One West A Terminus, Nanakramguda,
                Hyderabad-500008, Telangana.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright bar */}
        <div className={`container ${styles.footerBottom}`}>
          <div>© {new Date().getFullYear()} Avion Retail India Pvt Ltd. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'var(--text-muted)' }}>Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
