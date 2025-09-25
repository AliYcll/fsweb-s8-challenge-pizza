import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/home.css'

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <Header />
        <p className="hero-subtitle">fırsatı kaçırma</p>
        <div className="hero-content">
          <h2 className="hero-mobile-title">
            KOD<br />ACIKTIRIR<br />PİZZA,<br />DOYURUR
          </h2>
          <h2 className="hero-desktop-title">
            KOD ACIKTIRIR<br />PİZZA, DOYURUR
          </h2>
          <Link to="/order" className="btn-primary">ACIKTIM</Link>
        </div>
      </section>
      {/* CATEGORIES */}
      <section className="categories">
        <div className="categories-inner">
          <Link to="/" className="category">
            <img src="/images/iteration-2-images/icons/kore.svg" alt="Kore" />
            <span>YENİ! Kore</span>
          </Link>

          <Link to="/order" className="category">
            <img src="/images/iteration-2-images/icons/pizza.svg" alt="Pizza" />
            <span>Pizza</span>
          </Link>

          <Link to="/" className="category">
            <img src="/images/iteration-2-images/icons/burger.svg" alt="Burger" />
            <span>Burger</span>
          </Link>

          <Link to="/" className="category">
            <img src="/images/iteration-2-images/icons/kizartma.svg" alt="Kızartmalar" />
            <span>Kızartmalar</span>
          </Link>

          <Link to="/" className="category">
            <img src="/images/iteration-2-images/icons/fastfood.svg" alt="Fast food" />
            <span>Fast food</span>
          </Link>

          <Link to="/" className="category">
            <img src="/images/iteration-2-images/icons/gazli.svg" alt="Gazlı İçecek" />
            <span>Gazlı İçecek</span>
          </Link>
        </div>
      </section>

      {/* CAMPAIGNS */}
      <section className="campaigns">
        <Link to="/order" className="campaign red lezzetus">
          <h3>Özel <br />Lezzetus</h3>
          <p>Position:Absolute Acı Burger</p>
        </Link>

        <Link to="/order" className="campaign dark burger">
          <h3>Hackathlon <br />Burger Menü</h3>
        </Link>

        <Link to="/order" className="campaign beige kurye">
          <h3><span className="highlight">Çooook</span> hızlı<br /> npm gibi kurye</h3>
        </Link>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <Link to="/order" className="product-card">
          <img src="/images/iteration-2-images/pictures/food-1.png" alt="Terminal Pizza" />
          <h4>Terminal Pizza</h4>
          <div className="product-info">
            <span className="rating">4.9</span>
            <span className="reviews">(200)</span>
            <span className="price">60₺</span>
          </div>
        </Link>

        <Link to="/order" className="product-card">
          <img src="/images/iteration-2-images/pictures/food-2.png" alt="Position Absolute Acı Pizza" />
          <h4>Position Absolute Acı Pizza</h4>
          <div className="product-info">
            <span className="rating">4.9</span>
            <span className="reviews">(200)</span>
            <span className="price">60₺</span>
          </div>
        </Link>

        <Link to="/order" className="product-card">
          <img src="/images/iteration-2-images/pictures/food-3.png" alt="useEffect Tavuklu Burger" />
          <h4>useEffect Tavuklu Burger</h4>
          <div className="product-info">
            <span className="rating">4.9</span>
            <span className="reviews">(200)</span>
            <span className="price">60₺</span>
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
