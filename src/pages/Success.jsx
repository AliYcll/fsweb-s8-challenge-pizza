import React from "react";
import { useLocation, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/success.css";

export default function Success() {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <>
        <section className="success-page">
        <Header />
          <p style={{ marginTop: 12 }}>Geçerli sipariş bulunamadı.</p>
          <Link to="/" className="btn-back" style={{ marginTop: 20 }}>
            Anasayfa
          </Link>
        </section>
        <Footer />
      </>
    );
  }

  const {
    product, name, size, dough, toppings, quantity,
    basePrice, extrasCost, total, note
  } = order;

  return (
    <>
      <section className="success-page">
        <Header />
        <p className="success-tagline">lezzetin yolda</p>
        <h2 className="success-title">SİPARİŞ ALINDI</h2>
        <hr className="success-hr" />

        <div className="success-details">
          <h3 className="pizza-title">{product}</h3>

          <div className="kv"><span>İsim:</span><b>{name}</b></div>
          <div className="kv"><span>Boyut:</span><b>{size}</b></div>
          <div className="kv"><span>Hamur:</span><b>{dough}</b></div>
          <div className="kv" style={{ alignItems: "flex-start" }}>
            <span>Ek Malzemeler:</span>
            <b>{toppings.join(", ") || "—"}</b>
          </div>
          {note && (
            <div className="kv" style={{ alignItems: "flex-start" }}>
              <span>Not:</span><b>{note}</b>
            </div>
          )}
          <div className="kv"><span>Adet:</span><b>{quantity}</b></div>

          <div className="success-box">
            <div className="row">
              <span>Seçimler</span>
              <span>{extrasCost.toFixed(2)}₺</span>
            </div>
            <div className="row">
              <span>Toplam</span>
              <span className="total">{total.toFixed(2)}₺</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
