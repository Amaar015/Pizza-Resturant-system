import React from 'react';
import "../App.css";
import pizza from '../components/img/pizza.jpg';
const Menu = () => {
  return (
                    <div className="about">
                    <div className="container">
                        <div className="row">
                        <div className="col-6">
                              <div className="about_img">
                                     <img src={pizza}/>
                            </div>
                          </div>
                          <div className="col-6 content" >
                            <h3>The Pizza Menu</h3>
                            <h1>CHICAGO THIN CRUST</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ipsa at,
                               hic quam vitae blanditiis vel. Mollitia rem accusamus dolorum!</p>
                          <div className="about-btn">
                            <a href="" className='btn btn-smart'>
                              View More</a>                          </div>
                          </div>
                         
                        </div>
                    </div>
   </div>
 
  )
}

export default Menu