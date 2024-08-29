import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search product" />
        <MdClose onClick={() => setShowSearch(false)} className="close" />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="product-image" className="imageofprod"/>
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="desc">Product description</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
