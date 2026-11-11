
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Menu,
  X,
  ArrowUpRight,
  MapPin,
  Camera,
  Star,
  Sparkles,
} from "lucide-react";
import "./App.css";



const cakes = [
  { name: "Mango", half: 250, full: 450, category: "FRUIT", image: "/IMAGES/mango.jpg" },
  { name: "Black Current", half: 300, full: 500, category: "FRUIT", image: "/IMAGES/black_current.jpg" },
  { name: "Vanilla", half: 250, full: 450, category: "CLASSIC", image: "/IMAGES/vanila.jpg" },
  { name: "Choco Vanilla", half: 300, full: 550, category: "CHOCOLATE", image: "/IMAGES/choco_vanila.jpg" },
  { name: "Vancho", half: 300, full: 550, category: "SIGNATURE", image: "/IMAGES/vancho.jpg" },
  { name: "Death By Chocolate", half: 500, full: 750, category: "CHOCOLATE", image: "/IMAGES/death_by_chocolate.jpg" },
  { name: "Choco Chips", half: 350, full: 650, category: "CHOCOLATE", image: "/IMAGES/chocochips.jpg" },
  { name: "Tripple Queen", half: 400, full: 700, category: "SIGNATURE", image: "/IMAGES/tripple_queen.jpg" },
  { name: "Rocky Road", half: 450, full: 900, category: "CHOCOLATE", image: "/IMAGES/rocky_road.jpg" },
  { name: "Red Velvet", half: 400, full: 800, category: "SIGNATURE", image: "/IMAGES/red_velvet.jpg" },
  { name: "Ferraro Rocher", half: 600, full: 1000, category: "PREMIUM", image: "/IMAGES/ferraro_rocher.jpg" },
  { name: "Oreo Chocolate", half: 450, full: 800, category: "CHOCOLATE", image: "/IMAGES/oreo_chocolate.jpg" },
  { name: "Rasmalai", half: 450, full: 900, category: "SIGNATURE", image: "/IMAGES/rasmalai.jpg" },
  { name: "Tender Coconut", half: 550, full: 850, category: "SPECIAL", image: "/IMAGES/tender_coconut.jpg" },
];


const imageUrl = (path) => path;

const mapsUrl = "https://maps.app.goo.gl/9zrGrwhCjMx9XcP49";

// Replace with the bakery's actual WhatsApp number.
// Format: country code + number, without + or spaces.
const WHATSAPP_NUMBER = "916364133244";

function orderCake(cake, weight, price) {
  const message = `Hi Royal Cake Bake! I'd like to enquire about ${cake}, ${weight}, ₹${price}.`;
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [weights, setWeights] = useState({});

  const getWeight = (index) => weights[index] || "half";

  const navLinks = [
    ["Home", "#home"],
    ["Our Cakes", "#cakes"],
    ["Our Story", "#story"],
    ["Visit Us", "#visit"],
  ];

  return (
    <div className="site">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon"><Crown size={23} /></span>
          <span>
            <strong>ROYAL</strong>
            <small>CAKE BAKE</small>
          </span>
        </a>

        <nav className={`nav-links ${mobileMenu ? "open" : ""}`}>
          {navLinks.map(([label, link]) => (
            <a key={label} href={link} onClick={() => setMobileMenu(false)}>
              {label}
            </a>
          ))}
          <a href="#cakes" className="nav-order">
            Explore Cakes <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">
              <Sparkles size={14} /> BAKED WITH LOVE IN KOLAR
            </span>

            <h1>
              Every moment
              <br />
              deserves a <em>cake.</em>
            </h1>

            <p>
              Crafted for celebrations. Created for memories.
              Discover your next sweetest moment with Royal Cake Bake.
            </p>

            <div className="hero-actions">
              <a href="#cakes" className="btn-primary">
                Explore Our Cakes <ArrowUpRight size={17} />
              </a>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                <MapPin size={16} /> Find Our Bakery
              </a>
            </div>
          </motion.div>
        </div>

        <div className="hero-bottom">
          <span>EST. WITH LOVE</span>
          <span>ROYAL CAKE BAKE · KOLAR</span>
          <span>01 — 14</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro" id="story">
        <span className="section-label">A LITTLE SOMETHING SPECIAL</span>
        <h2>
          Sweetness in every
          <br />
          <em>celebration.</em>
        </h2>
        <p>
          From timeless classics to irresistible chocolate creations,
          there's a little piece of happiness waiting for everyone.
        </p>
      </section>

      {/* CAKES */}
      <section className="cakes-section" id="cakes">
        <div className="section-heading">
          <div>
            <span className="section-label">THE COLLECTION</span>
            <h2>Our Signature <em>Cakes</em></h2>
          </div>
          <span className="collection-count">14 SWEET CREATIONS</span>
        </div>

        <div className="cake-grid">
          {cakes.map((cake, index) => {
            const weight = getWeight(index);
            const price = weight === "half" ? cake.half : cake.full;

            return (
              <motion.article
                className="cake-card"
                key={cake.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
              >
                <div className="cake-image-wrap">
                 <img
                 src={imageUrl(cake.image)}
                  alt={cake.name}
                  loading="lazy"
                  onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                   "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85";
                  }}
                  />
                  <span className="cake-category">{cake.category}</span>
                  <span className="cake-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="cake-info">
                  <h3>{cake.name}</h3>

                  <div className="weight-selector">
                    <button
                      className={weight === "half" ? "active" : ""}
                      onClick={() => setWeights({ ...weights, [index]: "half" })}
                    >
                      ½ KG
                    </button>
                    <button
                      className={weight === "full" ? "active" : ""}
                      onClick={() => setWeights({ ...weights, [index]: "full" })}
                    >
                      1 KG
                    </button>
                  </div>

                  <div className="cake-bottom">
                    <span className="cake-price">₹{price}</span>
                    <button
                      className="order-btn"
                      onClick={() => orderCake(cake.name, weight === "half" ? "½ KG" : "1 KG", price)}
                    >
                      Enquire <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="celebration">
        <div className="celebration-content">
          <span className="section-label">MADE FOR YOUR MOMENTS</span>
          <h2>
            Make your next
            <br />
            celebration <em>unforgettable.</em>
          </h2>
          <p>Birthdays, surprises, milestones. Let's make them sweeter.</p>
          <a href="#cakes" className="btn-primary">
            Find Your Cake <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* LOCATION */}
      <section className="visit-section" id="visit">
        <div className="visit-content">
          <span className="section-label">COME SAY HELLO</span>
          <h2>Find your way<br /><em>to something sweet.</em></h2>
          <p>
            Royal Cake Bake<br />
            44PJ+F2G, DoddaPet<br />
            Kolar, Karnataka 563101
          </p>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-primary">
            Get Directions <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="map-frame">
          <iframe
            title="Royal Cake Bake location"
            src="https://maps.google.com/maps?q=44PJ%2BF2G%20DoddaPet%20Kolar%20Karnataka&t=&z=16&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          <span className="brand-icon"><Crown size={22} /></span>
          <span>
            <strong>ROYAL</strong>
            <small>CAKE BAKE</small>
          </span>
        </a>

        <p>Made with love. Served with sweetness.</p>

        <div className="footer-socials">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Camera size={19} />
          </a>
          <a href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Google Maps">
            <MapPin size={19} />
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ROYAL CAKE BAKE</span>
          <span>BAKED WITH LOVE IN KOLAR</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
