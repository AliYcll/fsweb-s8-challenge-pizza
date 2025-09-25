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

      <p className="success-tagline">lezzetin geleceği</p>
      <h2 className="success-title">SİPARİŞİNİZ ALINDI</h2>
      <hr className="success-hr" />

      <div className="success-details">
        <h3 className="pizza-title">Position Absolute Acı Pizza</h3>

        <div className="success-box">
          <div className="row">
            <span>Boyut:</span>
            <span>{orderData.size}</span>
          </div>
          <div className="row">
            <span>Hamur:</span>
            <span>{orderData.hamur}</span>
          </div>
          <div className="row">
            <span>Ek Malzemeler:</span>
            <span>{orderData.toppings.join(", ")}</span>
          </div>
          <div className="row">
            <span>Adet:</span>
            <span>{orderData.quantity}</span>
          </div>
          <div className="row total">
            <span>Toplam:</span>
            <span>{orderData.totalPrice}₺</span>
          </div>
        </div>
      </div>
        <Footer />

    </div>
  );
}
