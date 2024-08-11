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

const Header = () => {
     const[scrolled,setScrolled]=useState(false);
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
    <header className={`main-header ${scrolled? "sticky-header": ""}`}>
             <div className="header-content">
                <ul className="left">
                    <Link to="Home">Home</Link>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center">VMART</div>
                <div className="right">
                    <TbSearch/>
                    <AiOutlineHeart/>
                    <span className="cart-icon"><span>{8}</span><CgShoppingCart/></span>
                </div>
             </div>
    </header>
    )
};

export default Header;
