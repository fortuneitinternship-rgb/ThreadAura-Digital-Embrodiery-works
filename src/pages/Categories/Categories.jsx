
import "./Categories.css";

function Categories() {
  const categories = [
    "Embroidered Blouses",
    "Embroidery Sarees",
    "Kurtis",
    "Dresses"
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Our Categories
      </h2>

      <div className="row">
        {categories.map((category, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card p-4 text-center">
              <h5>{category}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
