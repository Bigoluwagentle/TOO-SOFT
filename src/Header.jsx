import "./Header.css";
import { useCart } from "./CartContent";
import { Link } from "react-router-dom";
import Logo from "./logo.jpg";

const Header = () => {
  const { cartItems } = useCart();

  return (
    <div id="headerContainer">
      <video src="/bg-video.mp4" className="bg-video" autoPlay muted loop playsInline></video>
      <header>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div id="go">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          {/* <Link to="/about">About</Link> */}
        </div>
        <div>
          <button>
            <Link to="/cart">
              Cart <i className="fa-solid fa-cart-shopping"></i> ({cartItems.length})
            </Link>
          </button>
        </div>
      </header>
      <h1>WE BRING THE SPARKLE, YOU MAKE IT SHINE</h1>
      <p>Where style meets the value - shop the sparkle, live the shine.</p>
    </div>
  );
};

export default Header;
