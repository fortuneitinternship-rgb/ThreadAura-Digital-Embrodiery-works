
import React from "react";
import "./Categories.css";

const categories = [
  {
    id: 1,
    name: "Embroidery Blouses",
    image: "/images/Embroidered.png"
  },
  {
    id: 2,
    name: "Traditional Sarees",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500"
  },
  {
    id: 3,
    name: "Designer Kurtis",
    image: "https://www.lakshita.com/cdn/shop/files/Lakshita_Fashions_-_3280-Edit.jpg"
  },
  {
    id: 4,
    name: "Party Wear Dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500"
  },
  {
    id: 5,
    name: "Embroidered silk Dupattas",
    image: "https://masakalee.com/cdn/shop/files/green-blue-handmade-kantha-dupatta-in-silk-9232946.jpg?v=1789756156"
  }
];

function ShopByCategories() {
  return (
    <section className="shop-category">
      <h2>Shop By Categories</h2>
      <p>Explore our beautiful traditional collections</p>

      <div className="category-container">
        {categories.map((item) => (
          <div className="category-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopByCategories;
