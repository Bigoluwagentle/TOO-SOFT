import { useCart } from "./CartContent";
import "./Cart.css";
import { Link } from "react-router-dom";
import Logo from "./logo.jpg";
const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }} id="CartContainer">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p id="empty">Your cart is empty.</p>
      ) : (
        <section className="cartList">
          <summary>
            {cartItems.map((item) => (
            <div key={item.id} id="cartList">
              <img
                src={item.image} alt={item.category}/>
              <div>
                <p><strong>Name:</strong> {item.id}</p>
                <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Total:</strong> ${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          </summary>
          <h3 id="total">Total Price: ${totalPrice.toFixed(2)}</h3>
          <button id="order" onClick={() => {
            document.getElementById("confirm").click();
          }}>Confirm Order</button>
          <button onClick={clearCart} id="clear">Clear Cart</button>
        </section>
      )}
      <Link to="/confirm" id="confirm"></Link>
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
          <i class="fa-solid fa-phone"></i>
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-tiktok"></i>
        </div>
        <div>
          <button>Whatsapp</button>
          <button>Email</button>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
