import React from "react";
import "./ProductsSection.scss";

import yaxsiOglan from "../../assets/yaxs╠º─▒_og╠ålan.png";
import prod2 from "../../assets/prod2.jpg";
import aura from "../../assets/aura.jpg";
import varli from "../../assets/varli.jpg";
import ozguven from "../../assets/ozguven.jpg";
import money from "../../assets/money.jpg";
import laugh from "../../assets/laugh.jpg";

const products = [
  {
    id: 1,
    badge: "TRENDING",
    image: yaxsiOglan,
    name: "YAXŞI OĞLAN OL",
    desc: "Hər kruqda iki əlnən görüşəcəklər sənnən, sən otağa girəndə hamı qalxacağ ayağa",
    price: "3 AZN",
    oldPrice: "5 AZN",
  },
  {
    id: 2,
    badge: "NEW",
    image: prod2,
    name: "STİLİNİ QALDIR",
    desc: "Daha güclü görün, daha fərqli ol, girdiyin hər mühitdə diqqət çək.",
    price: "2 AZN",
    oldPrice: "4 AZN",
  },
  {
    id: 3,
    badge: "HOT",
    image: aura,
    name: "AURA YÜKSƏLT",
    desc: "Səni görən bir də baxsın, enerjinlə fərq yarat, daha premium hiss etdir.",
    price: "6 AZN",
    oldPrice: "13 AZN",
  },
  {
    id: 4,
    badge: "BEST",
    image: varli,
    name: "VARLI OĞLAN TAP",
    desc: "Pullu erkek axtaran xanımların diqqətinə, bu paketdən sonra qapında yatacaqlar!!!",
    price: "4 AZN",
    oldPrice: "5 AZN",
  },
  {
    id: 5,
    badge: "BEST",
    image: ozguven,
    name: "ÖZGÜVƏN PAKETİ",
    desc: "Dur, bax, danış — hər hərəkətində özünəinam hiss olunsun.",
    price: "3 AZN",
    oldPrice: "4 AZN",
  },
  {
    id: 6,
    badge: "BEST",
    image: money,
    name: "VARLI OL",
    desc: "Daşdan belə pul çıxardan adama dönüş!",
    price: "1 AZN",
    oldPrice: "1.99 AZN",
  },
  {
    id: 7,
    badge: "BEST",
    image: laugh,
    name: "MİZAH PRO",
    desc: "Özün deyib özün gülmə, bundan sonra hamını güldür.",
    price: "2.50 AZN",
    oldPrice: "5 AZN",
  },
];

const ProductsSection = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="products__wrapper">
          {products.map((product) => (
            <div className="product__card" key={product.id}>
              <span className="card__badge">{product.badge}</span>

              <div className="product__image-box">
                <img src={product.image} alt={product.name} />
              </div>

              <h2 className="product__name">{product.name}</h2>
              <p className="product__desc">{product.desc}</p>

              <div className="product__price-box">
                <span className="product__price">{product.price}</span>
                <span className="product__old-price">{product.oldPrice}</span>
              </div>

              <button className="product__buy">İNDİ AL</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;