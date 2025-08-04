import { useCart } from "./CartContent";
import "./Cart.css";
import { Link } from "react-router-dom";
import Logo from "./logo.jpg";
const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  // console.log(cartItems[0].price);
  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
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
                <p><strong>Price:</strong> ₦{(item.price)}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Total:</strong> ₦{(parseFloat(item.price) * item.quantity)}</p>
                
                <button onClick={() => removeFromCart(item.id)} id="remove">Remove</button>
              </div>
            </div>
          ))}
          </summary>
          <h3 id="total">Total Price: ₦{totalPrice}</h3>
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

export default Cart;
