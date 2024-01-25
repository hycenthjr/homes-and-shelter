import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* Left Side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120} />

                <span className="secondaryText">
                    Our mission is to make the world <br />a better place for everyone.
                </span>
            </div>
            
            {/* Right Side */}
            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText">145 New York, FL 4571, USA</span>
                <span className="secondaryText">info@Shelter.com</span>

                <div className="flexCenter f-menu">
                    <span><a href="">Properties</a></span>
                    <span><a href="">Services</a></span>
                    <span><a href="">Product</a></span>
                    <span><a href="">About Us</a></span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer