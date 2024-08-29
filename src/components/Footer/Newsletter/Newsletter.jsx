import "./Newsletter.scss";
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn}from "react-icons/fa"
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="content-section">
            <span className="small-text">News Letter</span>
            <span className="big-text">Sign up for letest update and efforts </span>
            <div className="form">
                <input type="text" placeholder="Email Address" />
                <button> Suscribe</button>
            </div>
            <div className="text">Will be ued in accordence with out privacy Policy</div>
            <div className="social-icons">
                <FaFacebookF size={18}/>
                <FaTwitter size={18}/>
                <FaInstagram size={18}/>
                <FaLinkedinIn size={18}/> 
            </div>
            
        </div>
    </div>;
};

export default Newsletter;
