import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <h2>Hootsuite</h2>
      </div>
      <div className="menu">
        <div className="menu-left">
          <div>Platform</div>
          <div>Plans</div>
          <div>Enterprise</div>
          <div>Resources</div>
          <div>Education</div>
        </div>
        <div className="menu-right">
          <div>Contact us</div>
          <div>Log in</div>
          <div className="active">Sign up</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
