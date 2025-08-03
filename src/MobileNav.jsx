import { Link } from "react-router-dom";
import "./MobileNav.css";
import { useCart } from "./CartContent";
function NavBar(){
    const { cartItems } = useCart();
    return(
        <div id="navBar">
            <div className="navBar">
                <Link to="/">
                    <i class="fa-solid fa-house"></i>
                    <li>HOME</li>
                </Link>
                <Link to="/products">
                    <i class="fa-brands fa-product-hunt"></i>
                    <li>PRODUCT</li>
                </Link>
                <Link to="/cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <li>CART ({cartItems.length})</li>
                </Link>
            </div>
        </div>
    )
}
export default NavBar;