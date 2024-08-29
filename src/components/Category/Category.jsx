import "./Category.scss";
import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import useFetch from "../../hooks/useFetch";

const Category = () => {
    const { id } = useParams();

    // Fetch products based on category ID
    const { data: productsData, loading: productsLoading, error: productsError } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

    // Fetch category details based on category ID
    const { data: categoryData, loading: categoryLoading, error: categoryError } = useFetch(`/api/categories/${id}`);

    // Show loading state for either fetch
    if (productsLoading || categoryLoading) return <p>Loading...</p>;

    // Show error state if either fetch fails
    if (productsError || categoryError) return <p>Error: {productsError?.message || categoryError?.message}</p>;

    // Extract category title from fetched category data
    const categoryTitle = categoryData?.data?.attributes?.name || "Category Title";
    
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">{categoryTitle}</div>
                <Products innerPage={true} products={productsData?.data || []} />
            </div>
        </div>
    );
};

export default Category;
