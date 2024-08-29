import "./Footer.scss";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa"
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    We offer a wide range of items,
                    from electronic to fashion, ensuring
                    convenience and satisfaction with every 
                    purchase. Experience fast shipping, secure
                    payments, and exceptional customer service.
                    Shop smart, shop with us!</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-icon">
                    <FaLocationArrow/>
                    <div className="text">
                    Address: 12A, Tech Hub Street, Sector 21,
                    Bengaluru, Karnataka 560100, India
                    </div>
                </div>
                <div className="c-icon">
                    <FaMobileAlt/>
                    <div className="text">
                    Phone: +91 9876543210
                    </div>
                </div>
                <div className="c-icon">
                    <FaEnvelope/>
                    <div className="text">
                    Email: support@business.in
                    Address: 12A, Tech Hub Street, Sector 21,
                    Bengaluru, Karnataka 560100, India
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Catagories</div>
                <span className="text">Electronics</span>
                <span className="text">Fashion</span>
                 <span className="text">Home & Kitchen</span>
                 <span className="text">Books</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
               <span className="text">Shop</span>
              <span className="text">About Us</span>
              <span className="text">Contact</span>  
               <span className="text">FAQs</span>
              <span className="text">Blog</span>
               <span className="text">Cart</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                THIS WEBSITE IS CREATED BY ABHISHEK KUSHWAHA.
                IT PROVIDE PRIMIUM E-COMMERCE SOLUTINS.
                </div>
                <img src={Payment} alt="payimg" />
            </div>
        </div>
    </footer>
};

export default Footer;
