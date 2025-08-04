import "./Home.css";
import { useCart } from "./CartContent";
import data from "./Data.json";
import Test1 from "./Test/test1.mp4";
import Test2 from "./Test/test2.mp4";
import Test3 from "./Test/test3.mp4";
import Logo from "./logo.jpg";
import { Link } from "react-router-dom"; 
const Home = () => { 
  const { addToCart } = useCart(); 
  const nineData = data.slice(0, 9);
  // const product = { id: 1, name: "Welcome Book", price: 1000 }; 
  return (
    <div className="home-container">
      <span>Welcome to 2Soft Collections</span>
      <p>We bring the Sparkle, you make it shine</p>
      <h3>Our Products</h3>
      <aside>
        <li>JOGGERS</li>
        <li>SHORT</li>
        <li>SINGLETS</li>
        <li>ROUNDED NECK</li>
        <li>MATERIAL</li>
        <li>UNISEX</li>
        <li>ADIRE</li>
        <li>CAP</li>
        <li>Scrub</li>
        <li>Ready To Wear</li>
        <li>Kaftan</li>
        <li>AND LOT MORE</li>
      </aside>
      <div className="products">
        {nineData.map((item) => (
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
        <h3>Testimonial</h3>
      <div id="testimonial" style={{marginTop: "40px"}}>
        <video src={Test1} autoPlay loop playsInline muted></video>
        <video src={Test2} autoPlay loop playsInline muted></video>
        <video src={Test3} autoPlay loop playsInline muted></video>
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
 
export default Home; 