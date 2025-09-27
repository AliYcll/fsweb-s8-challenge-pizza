import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/home.css";

export default function Home() {
  const POPULAR = [
    { key: "ramen", label: "Ramen", icon: "/images/iteration-2-images/icons/kore.svg", to: "/ramen", disabled: true },
    { key: "pizza", label: "Pizza", icon: "/images/iteration-2-images/icons/pizza.svg", to: "/order", disabled: false },
    { key: "burger", label: "Burger", icon: "/images/iteration-2-images/icons/burger.svg", to: "/burger", disabled: true },
    { key: "fries", label: "French fries", icon: "/images/iteration-2-images/icons/kizartma.svg", to: "/fries", disabled: true },
    { key: "fast", label: "Fast food", icon: "/images/iteration-2-images/icons/fastfood.svg", to: "/fastfood", disabled: true },
    { key: "soft", label: "Soft drinks", icon: "/images/iteration-2-images/icons/gazli.svg", to: "/softdrinks", disabled: true }
  ];

  const handlePopularClick = (e, disabled) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div>
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

      <section className="categories">
        <div className="categories-inner">
          <Link to="/" className="category">
            <img src="/images/iteration-2-images/icons/kore.svg" alt="" aria-hidden="true" />
            <span>YENİ! Kore</span>
          </Link>
          <Link to="/order" className="category">
            <img src="/images/iteration-2-images/icons/pizza.svg" alt="" aria-hidden="true" />
            <span>Pizza</span>
          </Link>
          <Link to="/" className="category">
            <img src="/images/iteration-2-images/icons/burger.svg" alt="" aria-hidden="true" />
            <span>Burger</span>
          </Link>
          <Link to="/" className="category">
            <img src="/images/iteration-2-images/icons/kizartma.svg" alt="" aria-hidden="true" />
            <span>Kızartmalar</span>
          </Link>
          <Link to="/" className="category">
            <img src="/images/iteration-2-images/icons/fastfood.svg" alt="" aria-hidden="true" />
            <span>Fast food</span>
          </Link>
          <Link to="/" className="category">
            <img src="/images/iteration-2-images/icons/gazli.svg" alt="" aria-hidden="true" />
            <span>Gazlı İçecek</span>
          </Link>
        </div>
      </section>

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

      <section className="popular">
        <p className="popular-subtitle">en çok paketlenen menüler</p>
        <h2 className="popular-title">Acıktıran Kodlara Doyuran Lezzetler</h2>
        <nav className="popular-options" aria-label="popüler menü kategorileri">
          {POPULAR.map(item => (
            <Link
              key={item.key}
              to={item.to}
              onClick={(e) => handlePopularClick(e, item.disabled)}
              aria-disabled={item.disabled ? "true" : undefined}
              tabIndex={item.disabled ? -1 : undefined}
              className={`popular-pill ${item.disabled ? "disabled" : ""}`}
            >
              <img src={item.icon} alt="" aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </section>

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
