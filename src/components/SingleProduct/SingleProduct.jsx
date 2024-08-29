import "./SingleProduct.scss";
import RelatedProducts from"./RelatedProducts/RelatedProducts"
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus 
}from "react-icons//fa"
import prod from "../../assets/products/earbuds-prod-1.webp"
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
const SingleProduct = () => {
    const {id}=useParams();
    const {data}=useFetch(`/api/products?populate=*&[filters[id]]=${id}`);
    return(
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={prod} alt="single poduct image" />
                    </div>
                    <div className="right">
                        <span className="name">Product Name</span>
                        <span className="price">Price</span>
                        <span className="desc">produt discription</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                               <span>-</span>
                               <span>8</span>
                               <span>+</span>
                         </div>
                            <button className="add-to-cart">
                        <FaCartPlus size={20}/>
                         add to cart
                         </button>
                        </div>
                         <div>
                            <span className="divider"></span>
                            <div className="info-item">
                                <span className="text-bold">
                                    Category:
                                    <span>Headphones</span>
                                    </span>
                                    <span className="text-bold">
                                    Share:
                                    <span className="social-icons">
                                        <FaFacebookF size={16}/>
                                        <FaInstagram size={16}/>
                                        <FaLinkedinIn size={16}/>
                                        <FaPinterest size={16}/>
                                    </span>
                                    </span>
                            </div>
                         </div>
                    </div>
                </div>
                <RelatedProducts/>
            </div>
        </div>
    )
};

export default SingleProduct;
