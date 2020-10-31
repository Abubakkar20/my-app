import React from 'react';
import './HeaderMain.css'
import image from '../../image/received_528313511346048-removebg-preview (1).png'
import Resume from './Resume';
const HeaderMain = () => {
    return (
        <div className="bg-dark headerMain">
            <div class="container">
                <div class="row">
                    <div className="col-md-6 text-white mt-5 mainBody">
                        <h4>HI THERE</h4>
                        <h2>I Am Web Developer</h2>
                        <p>I'm Abu Bakkar,professional frontend web developer with experience in this field </p>
                        <Resume></Resume>
                    </div>
                    <div class="col-md-6">
                        <img style={{ width: '500px', height: '700px' }} src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;