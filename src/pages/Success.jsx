import "../styles/success.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Success({ orderData }) {
  if (!orderData) {
    return <p>Geçerli sipariş bulunamadı.</p>;
  }

  return (
    <div className="success-page">
        <Header />

      <p className="success-tagline">lezzetin yolda</p>
      <h2 className="success-title">SİPARİŞ ALINDI</h2>
      <hr className="success-hr" />

      <div className="success-details">
        <h3 className="pizza-title">Position Absolute Acı Pizza</h3>

        <div className="order-summary-outside">
          <p>Boyut: <strong>{orderData.size}</strong></p>
          <p>Hamur: <strong>{orderData.hamur}</strong></p>
          <p>Ek Malzemeler: <strong>{orderData.toppings.join(", ")}</strong></p>
        </div>

        <div className="success-box">
          <h3>Sipariş Toplamı</h3>
          <div className="row">
            <span>Seçimler</span>
            <span>{(orderData.toppings.length * 5).toFixed(2)}₺</span>
          </div>
          <div className="row">
            <span>Toplam</span>
            <span>{orderData.totalPrice}₺</span>
          </div>
        </div>
      </div>
        <Footer />

    </div>
  );
}
