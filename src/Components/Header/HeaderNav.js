import React from 'react';
import './HeaderNav.css'

const Nav = () => {
    return (
        <div className="bg-dark">
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <a class="navbar-brand text-white" href="#">ABU BAKKAR</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active ">
                                <a class="nav-link mr-5 text-white" href="about">About <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mr-5 text-white" href="#">Project</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mr-5 text-white" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mr-5 text-white" href="#">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mr-5 text-white" href="#">Resume</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

    );
};

export default Nav;