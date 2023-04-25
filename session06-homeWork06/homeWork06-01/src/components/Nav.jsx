import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <h1>Logo</h1>
      </div>
      <div className="nav-middle">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <div className="nav-right">
        <div>
          <FaFacebookF />
        </div>
        <div>
          <BsTwitter />
        </div>
        <div>
          <BsInstagram />
        </div>
      </div>
    </div>
  );
};

export default Nav;
