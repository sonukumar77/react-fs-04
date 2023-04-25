import {
  BsFillRocketTakeoffFill,
  BsFillPeopleFill,
  BsBookFill
} from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="icon">
          <BsFillRocketTakeoffFill />
        </div>
        <h3>2500</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="footer-middle">
        <div className="icon">
          <BsBookFill />
        </div>
        <h3>45,000</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="footer-right">
        <div className="icon">
          <BsFillPeopleFill />
        </div>
        <h3>200,000+</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Footer;
