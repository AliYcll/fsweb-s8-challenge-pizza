import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/order.css";

export default function Order() {
  const history = useHistory();

  // sabitler
  const basePrice = 85.5;
  const toppingPrice = 5;
  const toppingsList = [
    "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates",
    "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Kabak", "Ananas"
  ];

  // form state
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);

  // doğrulama görünürlüğü için
  const [touched, setTouched] = useState({
    name: false,
    size: false,
    dough: false,
    toppings: false,
  });

  // hesaplamalar
  const extrasCost = useMemo(() => toppings.length * toppingPrice, [toppings]);
  const subtotal = useMemo(() => basePrice + extrasCost, [basePrice, extrasCost]);
  const total = useMemo(() => subtotal * quantity, [subtotal, quantity]);

  // helpers
  const toggleTopping = (item) => {
    setToppings((prev) => {
      if (prev.includes(item)) return prev.filter((t) => t !== item);
      if (prev.length >= 10) return prev; // 10 üstü yok
      return [...prev, item];
    });
  };

  const changeQty = (type) => {
    setQuantity((q) => {
      if (type === "inc") return q + 1;
      if (type === "dec") return q > 1 ? q - 1 : 1;
      return q;
    });
  };

  // doğrulama kuralları
  const errors = {
    name: name.trim().length < 3 ? "İsim en az 3 karakter olmalı." : "",
    size: !size ? "Boyut seçmek zorunludur." : "",
    dough: !dough ? "Hamur seçmek zorunludur." : "",
    toppings:
      toppings.length < 4
        ? "En az 4 malzeme seçmelisin."
        : toppings.length > 10
        ? "En fazla 10 malzeme seçebilirsin."
        : "",
  };

  const isValid =
    !errors.name && !errors.size && !errors.dough && !errors.toppings;

  const handleSubmit = (e) => {
    e.preventDefault();

    // hataları göster
    setTouched({ name: true, size: true, dough: true, toppings: true });

    if (!isValid) return;

    const order = {
      product: "Position Absolute Acı Pizza",
      name: name.trim(),
      size,
      dough,
      toppings,
      note,
      quantity,
      basePrice,
      extrasCost,
      total,
    };

    // v5: state ile yönlendir
    history.push("/success", { order });
  };

  return (
    <>
      <Header currentPage="Sipariş Oluştur" />

      <main className="order-container">
        {/* Üst bilgi / fiyat / rating */}
        <h2>Position Absolute Acı Pizza</h2>

        <div className="order-topbar">
          <div className="order-price">{basePrice.toFixed(2)}₺</div>
          <div className="order-rating">
            <span>4.9</span> <span>(200)</span>
          </div>
        </div>

        <p className="order-desc">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra
          geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. 
          Küçük bir pizzaya bazen pizzetta denir.
        </p>

        {/* İSİM */}
        <div className="option-group">
          <h3>İsim <span className="req">*</span></h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            placeholder="Adınızı giriniz"
            className="name-input"
          />
          {touched.name && errors.name && <div className="error">{errors.name}</div>}
        </div>

        {/* BOYUT + HAMUR (YAN YANA) */}
        <div className="order-options">
          {/* Boyut */}
          <div className="option-group">
            <h3>Boyut Seç <span className="req">*</span></h3>
            <div className="size-pills">
              {["S", "M", "L"].map((s) => (
                <label
                  key={s}
                  className={`pill ${size === s ? "active" : ""}`}
                >
                  <input
                    type="radio"
                    name="size"
                    value={s}
                    onChange={(e) => setSize(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, size: true }))}
                  />
                  {s}
                </label>
              ))}
            </div>
            {touched.size && errors.size && <div className="error">{errors.size}</div>}
          </div>

          {/* Hamur */}
          <div className="option-group">
            <h3>Hamur Seç <span className="req">*</span></h3>
            <select
              value={dough}
              onChange={(e) => setDough(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, dough: true }))}
            >
              <option value="">—Hamur Kalınlığı Seç—</option>
              <option value="İnce">İnce</option>
              <option value="Normal">Normal</option>
              <option value="Kalın">Kalın</option>
            </select>
            {touched.dough && errors.dough && <div className="error">{errors.dough}</div>}
          </div>
        </div>

        {/* MALZEMELER */}
        <div className="toppings">
          <h3>Ek Malzemeler</h3>
          <p>En Fazla 10 malzeme seçebilirsiniz. {toppingPrice}₺</p>

          <div className="toppings-grid">
            {toppingsList.map((item) => (
              <label key={item} className={`topping-item ${toppings.includes(item) ? "checked" : ""}`}>
                <input
                  type="checkbox"
                  checked={toppings.includes(item)}
                  onChange={() => toggleTopping(item)}
                  onBlur={() => setTouched((t) => ({ ...t, toppings: true }))}
                />
                {item}
              </label>
            ))}
          </div>

          {touched.toppings && errors.toppings && (
            <div className="error">{errors.toppings}</div>
          )}
        </div>

        {/* NOT */}
        <div className="order-note">
          <h3>Sipariş Notu</h3>
          <input
            type="text"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        {/* ÖZET */}
        <div className="order-footer">
          <div className="quantity">
            <button onClick={() => changeQty("dec")}>-</button>
            <span>{quantity}</span>
            <button onClick={() => changeQty("inc")}>+</button>
          </div>

          <div className="order-summary">
            <p>Seçimler: <span>{extrasCost.toFixed(2)}₺</span></p>
            <p>Toplam: <span className="total">{total.toFixed(2)}₺</span></p>
            <button className="btn-submit" onClick={handleSubmit}>SİPARİŞ VER</button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
