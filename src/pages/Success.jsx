import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/success.css";
import Header from "../components/Header";


export default function Success() {
  const location = useLocation();
  const data = location.state;

  if (!data) return <p>Geçerli sipariş bulunamadı.</p>;

  return (
    <>

      <Header />

      <section className="success-page">
        <h1 className="success-brand">Teknolojik Yemekler</h1>
        <p className="success-tagline">lezzetin yolda</p>
        <h2 className="success-title">SİPARİŞ ALINDI</h2>
        <hr className="success-hr" />

        <div className="success-details">
          <h3 className="pizza-title">{data.product}</h3>
          <p><b>Boyut:</b> {data.size}</p>
          <p><b>Hamur:</b> {data.dough}</p>
          <p><b>Ek Malzemeler:</b> {data.toppings.join(", ") || "Seçilmedi"}</p>
          {data.note && <p><b>Not:</b> {data.note}</p>}

          <div className="success-box">
            <div className="row">
              <span>Seçimler</span>
              <span>{data.extrasCost.toFixed(2)}₺</span>
            </div>
            <div className="row">
              <span>Toplam</span>
              <span className="total">{data.total.toFixed(2)}₺</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
