import React from 'react';
import { useState } from "react";
import "../App.css";
const Navbar = () => {
  const [nav,setnav]=useState('#');
  const [show, setShow] = useState(false)

  return (
 <div className="navbar">
                    <div className="navbar_text">
                                        <div className="logo">
                                                            <h2> <span>maestro</span>pizzini</h2>
                                                                                                    </div>
                                        <ul className='navbar_ul'>
        <a  onClick={()=>setnav('#')}   className={nav==='#'? 'active': ''}  href="#">Home</a>
        <a href="#about" onClick={()=>setnav('#about')} className={nav==='#about'? 'active':''}>About</a>
        <a href="#service" onClick={()=>setnav('#service')} className={nav==='#service'? 'active':''}>Service</a>
        <a href="#product" onClick={()=>setnav('#product')} className={nav==='#product'? 'active':''}>Product</a>
         <a href="#menu" onClick={()=>setnav('#menu')} className={nav==='#menu'? 'active':''}>Menu</a>
         <a href="#contact" onClick={()=>setnav('#contact')} className={nav==='#contact'? 'active':''}>Contact</a>
                                           </ul>
                        
                        {/* <button onClick={() => setShow(!show)}>{show ? <i>B</i> : <i>A</i>}</button> */}
                    </div>
 </div>
                    )
}

export default Navbar