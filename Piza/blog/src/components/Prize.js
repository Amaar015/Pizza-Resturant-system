import React from 'react'
import '../App.css';
import pizza1 from '../components/img/pizza1.png';
import pizza2 from '../components/img/pizza2.png';
import pizza3 from '../components/img/pizza3.png';
import pizza4 from '../components/img/pizza4.png';
import pizza5 from '../components/img/pizza5.png';
import pizza6 from '../components/img/pizza6.png';

const Prize = () => {
  return (
  <div className="prices">
        <div className="container">
             <div className="row">

                    <div className="col-4">
                                        <div className="price">
                                         <div className="price_img">
                                              <img src={pizza1} alt=''/>
                                         </div>
                                         <h1 className="price_heading">Pizza Margaritta </h1>
                                         <p className="price_text">
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem molestiae
                                         , maxime numquam eius modi sit quos quas incidunt corporis provident dignissimos 
                                         </p>
                                        <p className="price_rs">550.00$</p>
                                        </div>
                    </div>

                    <div className="col-4">
                                        <div className="price">
                                         <div className="price_img">
                                         <img src={pizza2} alt=''/>
                                         </div>
                                         <h1 className="price_heading">Pizza Margaritta </h1>
                                         <p className="price_text">
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem molestiae
                                         , maxime numquam eius modi sit quos quas incidunt corporis provident dignissimos 
                                         </p>
                                        <p className="price_rs">550.00$</p>
                                        </div>
                    </div>

                    <div className="col-4">
                                        <div className="price">
                                         <div className="price_img">
                                         <img src={pizza3} alt=''/>
                                         </div>
                                         <h1 className="price_heading">Pizza Margaritta </h1>
                                         <p className="price_text">
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem molestiae
                                         , maxime numquam eius modi sit quos quas incidunt corporis provident dignissimos 
                                         </p>
                                        <p className="price_rs">550.00$</p>
                                        </div>
                    </div>

                    <div className="col-4">
                                        <div className="price">
                                         <div className="price_img">
                                         <img src={pizza4} alt=''/>
                                         </div>
                                         <h1 className="price_heading">Pizza Margaritta </h1>
                                         <p className="price_text">
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem molestiae
                                         , maxime numquam eius modi sit quos quas incidunt corporis provident dignissimos 
                                         </p>
                                        <p className="price_rs">550.00$</p>
                                        </div>
                    </div>

                    <div className="col-4">
                                        <div className="price">
                                         <div className="price_img">
                                         <img src={pizza5} alt=''/>
                                         </div>
                                         <h1 className="price_heading">Pizza Margaritta </h1>
                                         <p className="price_text">
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem molestiae
                                         , maxime numquam eius modi sit quos quas incidunt corporis provident dignissimos 
                                         </p>
                                        <p className="price_rs">550.00$</p>
                                        </div>
                    </div>

                    <div className="col-4">
                                        <div className="price">
                                         <div className="price_img">
                                         <img src={pizza6} alt=''/>
                                         </div>
                                         <h1 className="price_heading">Pizza Margaritta </h1>
                                         <p className="price_text">
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem molestiae
                                         , maxime numquam eius modi sit quos quas incidunt corporis provident dignissimos 
                                         </p>
                                        <p className="price_rs">550.00$</p>
                                        </div>
                    </div>
             </div>
        </div>
  </div>
  )
}

export default Prize;