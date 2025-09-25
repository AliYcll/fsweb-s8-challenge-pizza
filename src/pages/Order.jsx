import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/order.css";

export default function Order({ setOrderData }) {
  const history = useHistory();

  const basePrice = 85.5;
  const toppingPrice = 5;

  const toppingsList = [
    "Pepperoni","Sosis","Kanada Jambonu","Tavuk Izgara","Soğan","Domates",
    "Mısır","Jalepeno","Sucuk","Ananas","Kabak"
  ];

  const [formData, setFormData] = useState({
    size: "",
    hamur: "",
    toppings: [],
    notes: "",
    quantity: 1,
  });

  const [errors, setErrors] = useState({});
  const [totalPrice, setTotalPrice] = useState(basePrice);

  useEffect(() => {
    const total =
      (basePrice + formData.toppings.length * toppingPrice) * formData.quantity;
    setTotalPrice(total);
  }, [formData.toppings, formData.quantity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.size) validationErrors.size = "Pizza boyutu seçin";
    if (!formData.hamur) validationErrors.hamur = "Hamur kalınlığı seçin";
    if (formData.toppings.length < 4 || formData.toppings.length > 10)
      validationErrors.toppings = "4 ile 10 arasında malzeme seçmelisiniz";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const response = {
      ...formData,
      totalPrice: totalPrice.toFixed(2),
      id: Math.floor(Math.random() * 1000),
    };
    setOrderData(response);
    history.push("/success");
  };

  const handleQuantityChange = (operation) => {
    if (operation === "increment") {
      setFormData({ ...formData, quantity: formData.quantity + 1 });
    } else if (operation === "decrement" && formData.quantity > 1) {
      setFormData({ ...formData, quantity: formData.quantity - 1 });
    }
  };

  return (
    <>
        <Header />


      <main className="order-wrapper">
        <section className="order-image">
          <img src="images/iteration-2-images/pictures/form-banner.png" alt="pizza" />
        </section>

        <section className="order-details">
          <nav className="order-breadcrumb">
            <Link to="/">Anasayfa - </Link>
            <Link to="/">Seçenekler -</Link>
            <span aria-current="page"> Sipariş Oluştur</span>
          </nav>

          <div className="order-heading">
            <h1 className="order-title">Position Absolute Acı Pizza</h1>
            <div className="order-price-rating">
              <p className="order-price">85.50₺</p>
              <div className="order-rating">
                <p>4.9</p>
                <p>(200)</p>
              </div>
            </div>
            <p className="order-description">
              Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
              Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel 
              olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş 
              mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya 
              bazen pizzetta denir.
            </p>
          </div>
        </section>

        <section className="order-form">
          <form onSubmit={handleSubmit}>
            {/* Boyut ve Hamur */}
            <div className="order-size-dough">
              <div className="order-size">
                <h3 className="field-title">
                  Boyut Seç <span className="required">*</span>
                </h3>
                <div className="radio-group">
                  {["S", "M", "L"].map((size) => (
                    <label key={size} className="radio-option">
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={formData.size === size}
                        onChange={(e) =>
                          setFormData({ ...formData, size: e.target.value })
                        }
                      />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
                {errors.size && <div className="error-message">{errors.size}</div>}
              </div>

              <div className="order-dough">
                <h3 className="field-title">
                  Hamur Seç <span className="required">*</span>
                </h3>
                <select
                  className="dough-select"
                  value={formData.hamur}
                  onChange={(e) =>
                    setFormData({ ...formData, hamur: e.target.value })
                  }
                >
                  <option value="">-- Hamur Kalınlığı Seç --</option>
                  <option value="ince">İnce Hamur</option>
                  <option value="orta">Orta Hamur</option>
                  <option value="kalin">Kalın Hamur</option>
                </select>
                {errors.hamur && <div className="error-message">{errors.hamur}</div>}
              </div>
            </div>

            {/* Ek Malzemeler */}
            <div className="order-toppings">
              <h3 className="field-title">Ek Malzemeler</h3>
              <p className="toppings-info">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
              <div className="toppings-grid">
                {toppingsList.map((topping) => (
                  <label key={topping} className="topping-option">
                    <input
                      type="checkbox"
                      checked={formData.toppings.includes(topping)}
                      onChange={(e) => {
                        const newToppings = e.target.checked
                          ? [...formData.toppings, topping]
                          : formData.toppings.filter((t) => t !== topping);
                        setFormData({ ...formData, toppings: newToppings });
                      }}
                    />
                    <span>{topping}</span>
                  </label>
                ))}
              </div>
              {errors.toppings && (
                <div className="error-message">{errors.toppings}</div>
              )}
            </div>

            {/* Sipariş Notu */}
            <div className="order-notes">
              <h3 className="field-title">Sipariş Notu</h3>
              <textarea
                className="notes-input"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
              />
            </div>

            {/* Miktar ve Toplam */}
            <div className="order-footer">
              <div className="quantity-controls">
                <button
                  type="button"
                  className="quantity-btn"
                  onClick={() => handleQuantityChange("decrement")}
                  disabled={formData.quantity <= 1}
                >
                  −
                </button>
                <div className="quantity-display">{formData.quantity}</div>
                <button
                  type="button"
                  className="quantity-btn"
                  onClick={() => handleQuantityChange("increment")}
                >
                  +
                </button>
              </div>

              <div className="order-summary">
                <h3>Sipariş Toplamı</h3>
                <div className="summary-row">
                  <span>Seçimler</span>
                  <span>
                    {(
                      formData.toppings.length *
                      toppingPrice *
                      formData.quantity
                    ).toFixed(2)}₺
                  </span>
                </div>
                <div className="summary-row total">
                  <span>Toplam</span>
                  <span>{totalPrice.toFixed(2)}₺</span>
                </div>

                <button type="submit" className="btn-submit">
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
              <Footer />
      
    </>
  );
}
