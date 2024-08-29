import "./Cart.scss";
import{MdClose} from "react-icons/md"
import{BsCartX} from "react-icons/bs"
import CartItem from "./CartItem/CartItem"

const Cart = ({setShowCart}) => {
    return (
        <div className="cart-panel">
            <div className="open-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-button" onClick={()=>setShowCart(false)}>
                        <MdClose/>
                        <span className="text">Close</span>
                    </span>
                </div>
                {/* <div className="empty-cart">
                    <BsCartX/>
                    <span>NO products in the cart</span>
                    <button className="return-cta">Return to shop</button>
                </div> */}
                <>
                <CartItem/>
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">subtotal</span>
                        <span className="text total">&#8377;1223</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta">Checkout</button>
                    </div>
                </div>
                </>
            </div>
        </div>
    )
};

export default Cart;
