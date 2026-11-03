
import "./FeaturedProducts.css";

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Floral Embroidered Blouse",
      category: "Blouses",
      price: 1299,
      rating: "⭐ 4.5",
      icon: "bi-flower1",
      color: "pink"
    },
    {
      id: 2,
      name: "Traditional Silk Saree",
      category: "Sarees",
      price: 2499,
      rating: "⭐ 4.8",
      icon: "bi-stars",
      color: "purple"
    },
    {
      id: 3,
      name: "Designer Embroidery Kurti",
      category: "Kurtis",
      price: 1599,
      rating: "⭐ 4.6",
      icon: "bi-flower2",
      color: "orange"
    },
    {
      id: 4,
      name: "Elegant Party Dress",
      category: "Dresses",
      price: 1999,
      rating: "⭐ 4.7",
      icon: "bi-gem",
      color: "blue"
    }
  ];

  return (
    <section className="featured-section">
      <div className="container">

        <div className="featured-heading">
          <span>THREADAURA COLLECTION</span>
          <h2>Featured Products</h2>
          <p>Beautiful designs, crafted with love and elegance.</p>
        </div>

        <div className="row g-4">

          {products.map((product) => (
            <div className="col-lg-3 col-md-6" key={product.id}>

              <div className="featured-card">

                <div className={`featured-art ${product.color}`}>
                  <i className={`bi ${product.icon}`}></i>
                  <span>THREADAURA</span>
                  <small>Handcrafted Elegance</small>
                </div>

                <div className="featured-info">
                  <span className="featured-category">
                    {product.category}
                  </span>

                  <h5>{product.name}</h5>

                  <div className="featured-bottom">
                    <h5>₹{product.price}</h5>
                    <span>{product.rating}</span>
                  </div>

                  <button className="featured-btn">
                    Explore Collection
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
