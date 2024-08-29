import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({ id, data }) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/products/${id}`);
    };

    return (
        <div className="product-card" onClick={handleNavigation}>
            <div className="thumbnail">
                <img
                    src={`${process.env.REACT_APP_DEV_URL}${data?.img?.data?.[0]?.attributes?.url}`}
                    alt={data?.title || "Product Image"}
                />
            </div>
            <div className="product-detail">
                <span className="name">{data?.title || "Product Title"}</span>
                <span className="price">&#8377;{data?.price || "0"}</span>
            </div>
        </div>
    );
};

export default Product;
