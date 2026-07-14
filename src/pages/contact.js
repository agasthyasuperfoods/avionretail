import Head from "next/head";
import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    developer: "",
    solution: "Paints & Coatings",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setFormSubmitted(true);
    }, 500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Head>
        <title>Contact Us | Avion Retail India Pvt Ltd</title>
        <meta
          name="description"
          content="Get in touch with Avion Retail India. Contact our MD Ashok Agarwal, visit our Banjara Hills showroom, or schedule a premium building solutions consultation."
        />
      </Head>

      {/* Header section */}
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className="fade-in-up">Get In Touch</h1>
          <p className="fade-in-up delay-1">
            Let's discuss how we can execute premium building solutions for your custom home or high-rise development.
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section style={{ padding: "0 0 4rem 0" }}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Info Section */}
            <div className={styles.infoSection}>
              {/* Block 1: Showroom */}
              <div className={styles.infoBlock}>
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Banjara Hills Showroom
                </h3>
                <p style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                  Avion Retail India Pvt Ltd
                </p>
                <p>
                  8-3-231/W/A/1&2/G-4, Jubilee Ballpark Building,<br />
                  Krishna Nagar, Banjara Hills,<br />
                  Hyderabad - 500045, Telangana, India.
                </p>
              </div>

              {/* Block 2: Corporate Office */}
              <div className={styles.infoBlock}>
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  Corporate Office
                </h3>
                <p>
                  Unit No. L20, One West A Terminus,<br />
                  Nanakramguda, Gachibowli,<br />
                  Hyderabad - 500008, Telangana, India.
                </p>
              </div>

              {/* Block 3: Direct Line */}
              <div className={styles.infoBlock}>
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Direct MD Communication
                </h3>
                <p>Connect with our Managing Director, Ashok Agarwal, for enterprise/B2B project queries.</p>
                <ul className={styles.directLinks}>
                  <li>
                    Phone: <a href="tel:+919848912128">+91-98489-12128</a>
                  </li>
                  <li>
                    Email: <a href="mailto:Ashok@avionretail.com">Ashok@avionretail.com</a>
                  </li>
                  <li>
                    Web: <a href="https://www.avionretail.in" target="_blank" rel="noopener noreferrer">www.avionretail.in</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form Section */}
            <div>
              <div className={styles.formCard}>
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <h2>Request Consultation</h2>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91-XXXXX-XXXXX"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="developer">Company / Developer Name (Optional)</label>
                      <input
                        type="text"
                        id="developer"
                        name="developer"
                        value={formData.developer}
                        onChange={handleInputChange}
                        placeholder="e.g. SAS Infra"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="solution">Solution of Interest</label>
                      <select
                        id="solution"
                        name="solution"
                        value={formData.solution}
                        onChange={handleInputChange}
                      >
                        <option>Paints & Coatings (Jotun)</option>
                        <option>Sanitary Ware (Kohler/Duravit)</option>
                        <option>Flooring (Parador/Jotafloor)</option>
                        <option>Ceilings & Drywalls (Gyproc)</option>
                        <option>Complete Integrated Solutions</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message">Project Requirements</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        required
                        placeholder="Describe your design specifications..."
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }}>
                      Send Message
                    </button>
                  </form>
                ) : (
                  <div className={styles.successMessage}>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginBottom: "1.5rem" }}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <h3>Message Sent!</h3>
                    <p>Thank you for contacting Avion Retail. Our specialists or MD Ashok Agarwal will connect with you shortly.</p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="btn btn-secondary"
                      style={{ marginTop: "2rem" }}
                    >
                      Submit Another Query
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
