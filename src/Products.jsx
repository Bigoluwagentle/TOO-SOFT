import "./Products.css";
import { useCart } from "./CartContent";
import data from "./Data.json";
import { Link } from "react-router-dom";
import Logo from "./logo.jpg";

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div id="productContainer">
      <h3>Our Products</h3>

      <div className="products">
        {data.map((item) => (
          <div key={item.id} className="product-card">
            <nav>
              <img src={item.image} alt={item.category} />
            </nav>
            <span>{item.category}</span>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <footer>
        <div>
          <img src={Logo} alt="Logo" width="100px" />
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <i className="fa-solid fa-phone"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-tiktok"></i>
        </div>
        <div>
          <button>Whatsapp</button>
          <button>Email</button>
        </div>
      </footer>
    </div>
  );
};

export default Products;
