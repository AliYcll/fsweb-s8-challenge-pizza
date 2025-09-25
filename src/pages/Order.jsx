import { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/order.css";

export default function Order() {
  const history = useHistory();

  const basePrice = 85.5;
  const toppingPrice = 5;
  const toppingsList = [
    "Pepperoni","Sosis","Kanada Jambonu","Tavuk Izgara","Soğan","Domates",
    "Mısır","Sucuk","Jalepeno","Sarımsak","Biber","Kabak","Ananas",
  ];

  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState({}); // ✅ hata mesajları için

  const handleToppingChange = (topping) => {
    if (toppings.includes(topping)) {
      setToppings(toppings.filter((t) => t !== topping));
    } else if (toppings.length < 10) {
      setToppings([...toppings, topping]);
    }
  };

  const handleQuantityChange = (type) => {
    if (type === "inc") setQuantity(quantity + 1);
    else if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
  };

  const extrasCost = toppings.length * toppingPrice;
  const subtotal = basePrice + extrasCost;
  const total = subtotal * quantity;

  const handleSubmit = () => {
    const newErrors = {};
    if (!size) newErrors.size = "Boyut seçmek zorunludur";
    if (!dough) newErrors.dough = "Hamur seçmek zorunludur";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const orderData = {
      product: "Position Absolute Acı Pizza",
      size,
      dough,
      toppings,
      extrasCost,
      total,
      note,
    };
    history.push("/success", orderData);
  };

  return (
    <div>
      <Header currentPage="Sipariş Oluştur" />

      <main className="order-container">
        <h2>Position Absolute Acı Pizza</h2>
        <div className="order-price">{basePrice.toFixed(2)}₺</div>
        <div className="order-rating">
          <span>4.9</span> <span>(200)</span>
        </div>
        <p className="order-desc">
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
        Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel 
        olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş 
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya 
        bazen pizzetta denir.

        </p>

        {/* seçenekler */}
        <div className="order-options">
          <div className="option-group">
            <h3>Boyut Seç *</h3>
            <label><input type="radio" name="size" value="Küçük" onChange={(e) => setSize(e.target.value)} /> Küçük</label>
            <label><input type="radio" name="size" value="Orta" onChange={(e) => setSize(e.target.value)} /> Orta</label>
            <label><input type="radio" name="size" value="Büyük" onChange={(e) => setSize(e.target.value)} /> Büyük</label>
            {errors.size && <p className="error">{errors.size}</p>}
          </div>

          <div className="option-group">
            <h3>Hamur Seç *</h3>
            <select value={dough} onChange={(e) => setDough(e.target.value)}>
              <option value="">Hamur Kalınlığı</option>
              <option value="İnce">İnce</option>
              <option value="Normal">Normal</option>
              <option value="Kalın">Kalın</option>
            </select>
            {errors.dough && <p className="error">{errors.dough}</p>}
          </div>
        </div>

        {/* malzemeler */}
        <div className="toppings">
          <h3>Ek Malzemeler</h3>
          <p>En fazla 10 malzeme seçebilirsiniz. {toppingPrice}₺</p>
          <div className="toppings-grid">
            {toppingsList.map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={toppings.includes(item)}
                  onChange={() => handleToppingChange(item)}
                /> {item}
              </label>
            ))}
          </div>
        </div>

        {/* not */}
        <div className="order-note">
          <h3>Sipariş Notu</h3>
          <input
            type="text"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        {/* özet */}
        <div className="order-footer">
          <div className="quantity">
            <button onClick={() => handleQuantityChange("dec")}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange("inc")}>+</button>
          </div>

          <div className="order-summary">
            <p>Seçimler: <span>{extrasCost.toFixed(2)}₺</span></p>
            <p>Toplam: <span className="total">{total.toFixed(2)}₺</span></p>
            <button className="btn-submit" onClick={handleSubmit}>SİPARİŞ VER</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
