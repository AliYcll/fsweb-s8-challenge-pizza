import "../styles/footer.css";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img
            src="/images/iteration-2-images/footer/logo-footer.svg"
            alt="Teknolojik Yemekler"
            className="footer-logo"
          />
          <ul className="footer-info">
            <li>
              <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="Adres" />
              <span>341 Londonderry Road,<br /> İstanbul Türkiye</span>
            </li>
            <li>
              <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="Mail" />
              <span>aciktim@teknolojikyemekler.com</span>
            </li>
            <li>
              <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="Telefon" />
              <span>+90 216 123 45 67</span>
            </li>
          </ul>
        </div>

        <div className="footer-menu">
          <h4>Hot Menu</h4>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Muffin Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        <div className="footer-insta">
          <h4>Instagram</h4>
          <div className="insta-grid">
            <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="Insta 1" />
            <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="Insta 2" />
            <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="Insta 3" />
            <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="Insta 4" />
            <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="Insta 5" />
            <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="Insta 6" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler.</p>
      </div>
    </footer>
  );
}
