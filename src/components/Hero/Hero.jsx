import React from "react";
import "./Hero.css";
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import {motion} from 'framer-motion'

export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>
            <motion.h1 
              initial={{y: "2rem", opacity: 0}} 
              animate={{y: 0, opacity: 1}} 
              transition={{duration: 2, type: "spring"}}
            >
              Discover <br />The Most Viable<br />Apartments
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a choice of properties that will suit you quite well.</span>
            <span className="secondaryText">Forget about your challenges in locating a place to live.</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text" name="" id="" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={3000} end={4500} duration={3}/>
                    <span>+</span>
                </span>
                <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={1500} end={2000} duration={3}/>
                    <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
                <span>
                    <CountUp end={10} duration={3}/>
                    <span>+</span>
                </span>
                <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flexCenter hero-right">
          <motion.div 
            initial={{x: "7rem", opacity: 0}} 
            animate={{x: 0, opacity: 1}} 
            transition={{duration: 2, type: "spring"}} 
            className="image-container"
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
