import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContent";
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
// import About from "./About";
import Cart from "./Cart";
import ContactForm from "./ContactForm";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirm" element={<ContactForm />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
