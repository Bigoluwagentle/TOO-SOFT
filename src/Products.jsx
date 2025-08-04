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
            <p>₦{item.price}</p>
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
          <Link to="/cart">Cart</Link>
        </div>
        <div>
          
          <i class="fa-brands fa-whatsapp" onClick={() => {
            const go = document.createElement("a");
            go.href = "https://wa.me/9075394735";
            go.target = "_blank";
            go.click();
            document.querySelector("body").appendChild(go);
            document.querySelector("body").removeChild(go);
          }}></i>
          <i class="fa-brands fa-instagram" onClick={() => {
             const go = document.createElement("a");
              go.href = "https://www.instagram.com/2soft_collection?igsh=MTg0cWgwaHP1cDk5bw==";
              go.target = "_blank";
              go.click();
              document.querySelector("body").appendChild(go);
              document.querySelector("body").removeChild(go);
          }}></i>
          <i class="fa-brands fa-tiktok" onClick={() => {
             const go = document.createElement("a");
              go.href = "https://www.tiktok.com/@2soft_collection?_t=ZS-8yZqapNlmil&_r=1";
              go.target = "_blank";
              go.click();
              document.querySelector("body").appendChild(go);
              document.querySelector("body").removeChild(go);
          }}></i>
        </div>
        <div>
          <button>Chat on Email</button>
          <i class="fa-solid fa-phone"> +2349075394735</i>
        </div>
      </footer>
    </div>
  );
};

export default Products;
