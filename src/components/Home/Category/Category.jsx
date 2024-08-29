import "./Category.scss";
import { useNavigate } from "react-router-dom";

const Category = ({ categories = [] }) => {
    const navigate = useNavigate();

    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories.length > 0 ? (
                    categories.map((item) => (
                        <div
                            key={item.id}
                            className="category"
                            onClick={() => navigate(`/category/${item.id}`)}
                        >
                            <img
                                src={
                                    item.attributes?.img?.data?.attributes?.url
                                        ? `${process.env.REACT_APP_DEV_URL}${item.attributes.img.data.attributes.url}`
                                        : "/default-category-image.webp" // Default image if URL is not available
                                }
                                alt={item.attributes?.name || "Category Image"} // Fallback alt text
                            />
                            <p>{item.attributes?.name || "Category Name"}</p> // Display category name
                        </div>
                    ))
                ) : (
                    <p>No categories available</p> // Fallback in case categories are empty
                )}
            </div>
        </div>
    );
};

export default Category;
