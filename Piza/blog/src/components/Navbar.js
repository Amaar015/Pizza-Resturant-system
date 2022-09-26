import React from 'react';
import { useState } from "react";
import logo from '../components/img/logo.png';
import "../App.css";
const Navbar = () => {
  const [nav,setnav]=useState('#');
  const [show, setShow] = useState(false)

  return (
<nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
                    )
}

export default Navbar