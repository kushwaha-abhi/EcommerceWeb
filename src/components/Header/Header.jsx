import "./Header.scss";
import React from "react";
import { useContext,useEffect,useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import {TbSearch} from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg"
import {AiOutlineHeart} from "react-icons/ai"
import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import {context} from "../../utils/context"
import Home from "../Home/Home";


const Header = () => {
     const[scrolled,setScrolled]=useState(false);
     const [showCart,setShowCart]=useState(false);
     const [showSearch,setShowSearch]=useState(false);

    const handleScroll=()=>{

        const offset = window.scrollY;
        if(offset>200){
          setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }
    useEffect(()=>{
      window.addEventListener("scroll",handleScroll)
    },[])
    return (
        <>
    <header className={`main-header ${scrolled? "sticky-header": ""}`}>
             <div className="header-content">
                <ul className="left">
                 <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link>
                 <Link to="/About" style={{ color: 'inherit', textDecoration: 'inherit'}}>About</Link>
                 <Link to="/Categories" style={{ color: 'inherit', textDecoration: 'inherit'}}>Categories</Link>
                </ul>
                <div className="center">VMART</div>
                <div className="right">
                    <TbSearch onClick={()=>setShowSearch(true)}/>
                    <AiOutlineHeart/>
                    <span className="cart-icon" onClick={()=>setShowCart(true)}>
                       <CgShoppingCart/>
                        <span>{8}</span>
                        </span>
                </div>
             </div>
    </header>
       {showCart && <Cart setShowCart={setShowCart}/>}
     {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
    )
};

export default Header;
