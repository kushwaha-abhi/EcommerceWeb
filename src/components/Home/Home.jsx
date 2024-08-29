import "./Home.scss";
import Category from "./Category/Category";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import { useContext, useEffect } from "react";
import { fetchData } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const { categories, setCategories, products, setProducts } = useContext(Context);

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    const getCategories = () => {
        fetchData("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res.data);
        }).catch((error) => {
            console.error("Error fetching categories:", error);
        });
    };

    const getProducts = () => {
        fetchData("/api/products?populate=*").then((res) => {
            console.log(res);
            setProducts(res.data);
        }).catch((error) => {
            console.error("Error fetching products:", error);
        });
    };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products headingText="Top Products" products={products} />
                </div>
            </div>
        </div>
    );
};

export default Home;
