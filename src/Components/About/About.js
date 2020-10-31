import React from 'react';
import image from '../../image/received_528313511346048-removebg-preview (1).png'
import Resume from '../Header/Resume';
import './About.css'
const About = () => {
    return (
        <div className="bg-dark abouteSection">
            <div class="container">
                <div className="text-center text-white">
                    <h2>Abote Me</h2>
                    <p>As a web developer I have a lot of excitement beacuse of i love my professition <br></br>
                    Here is my information</p>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <img style={{ width: '500px', height: '700px' }} src={image} alt="" />
                    </div>
                    <div className="col-md-6 text-white mt-5">
                        <h4>HI THERE</h4>
                        <p>I'm Web developer,I'm working this section within an experience last 1 year.Now I'm dedicated to my professional work </p>
                        <p>So,if your need any kind of web site,You contact me any time</p><br></br>
                        <div>
                            <div className="">
                                <div className="col-md-6 text-white">
                                    <h5>Name:</h5>
                                    <p>Abu Bakkar</p>
                                    <h5>Email:</h5>
                                    <a href="#">bakkar@gmail.com</a>

                                </div>
                                <div className="col-md-6 text-white">
                                    <h5>Phone:</h5>
                                    <p>88+ 01798999227</p>
                                    <h5>Linkedin:</h5>
                                    <a href="#">Abubakkar34</a>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <Resume></Resume>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;