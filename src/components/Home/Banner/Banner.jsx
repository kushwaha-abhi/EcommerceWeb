import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"
const Banner = () => {
   return <div className="hero-banner">
    <div className="content">
        <div className="text-content">
            <h1>Sales</h1>
            <p> 
             Convallis intendum purus adipiscing dis parturient
             posuere ac a quaa montes parturient posuerec
             curae tempor
            </p>
            <div className="ctas">
                <div className="banner-cta">Read More</div>
                <div className="banner-cta v2">Shop Now</div>
            </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="image" />
    </div>
   </div>
};

export default Banner;
