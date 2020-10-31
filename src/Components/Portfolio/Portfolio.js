import React from 'react'
import service1 from '../../image/service5.png'
import service2 from '../../image/service4.png'
import service3 from '../../image/service3.png'
import './Portfolio.css'
const Portfolio = () => {
    return (
        <div className="bg-dark pt-5">
            <div className="container">
                <div className="text-white text-center">
                    <h1>PORTFOLIO</h1>
                    <h2>All are responsive</h2>
                </div>

                <div className="row text-center mt-5 pb-5 portfolio">
                    <div className="col-md-4"><img src={service1} alt="" /></div>
                    <div className="col-md-4"><img src={service2} alt="" /></div>
                    <div className="col-md-4"><img src={service3} alt="" /></div>
                </div>
            </div>
        </div >
    );
};

export default Portfolio;