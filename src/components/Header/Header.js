import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="loginArea">
                <nav>
                    <a href="register">Register</a>
                    <a href="login">Login</a>
                </nav>
            </div>
            <div className="mainheader">
                <h1 style={{margin:"0px", color:"white",paddingTop:"50px", fontSize:"50px"}}>The Best Online Training in the world</h1>
            </div>
            <div className="naveBar">
                <nav>
                    <a href="home">Home</a>
                    <a href="courses">Courses</a>
                    <a href="blog">Blog</a>
                    <a href="contact">Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;