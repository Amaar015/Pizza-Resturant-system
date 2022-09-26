import React from 'react'
  import "../App.css";
import Navbar from './Navbar';
const Header = () => {
  return (
    <div className="banner">
      <Navbar/>
      <div className="banner_content">
        <div className="container">
          <div className='banner_text'>
          <h3>Pizza Delivery</h3>
          <h1>Maestro Pizzini</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Veritatis, quis doloremque doloribus neque earum debitis, 
           praesentium ipsam a animi alias </p>
        </div>
              <div className="banner_btn">
                 <button className="btn">Order Now</button>
                </div>       
        </div>
      </div>
    </div>
    )
}

export default Header