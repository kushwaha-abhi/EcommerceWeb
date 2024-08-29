import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products = [], innerPage, headingText }) => {
    return (
        <div className="products-container">
            {!innerPage && headingText && (
                <div className="sec-heading">{headingText}</div>
            )}
            <div className="products">
                {products.length > 0 ? (
                    products.map((item) => (
                        <Product
                            key={item.id}
                            id={item.id}
                            data={item.attributes}
                        />
                    ))
                ) : (
                    <p>No products available</p> // Fallback message for empty product list
                )}
            </div>
        </div>
    );
};

export default Products;
