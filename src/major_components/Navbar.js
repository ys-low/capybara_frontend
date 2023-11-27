import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick=()=>setClick(!click)
  return (
    <div className="NavbarContainer">
      <Link to="/">
        <h1>CapyKid</h1>
      </Link>
      <ul className={click?"NavMenu On":"NavMenu"}>
        <li>
          <Link to="/" onClick={handleClick}>About Us</Link>
        </li>
        <li>
          <Link to="/capybaras" onClick={handleClick}>Capybaras</Link>
        </li>
        <li>
          <Link to="/my_capybaras" onClick={handleClick}>My CapyKid</Link>
        </li>
        <li>
          <Link to="/steps" onClick={handleClick}>Adopt Step</Link>
        </li>
        <li>
          <Link to="/contact_us" onClick={handleClick}>Contact Us</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ?(
          <FaTimes style={{ color: "white", fontSize: "2rem"} }/>)
          :(<FaBars style={ {color:"white", fontSize: "2rem"}} />)
        }
        

      </div>
    </div>
  );
};

export default Navbar;
