import React, { useEffect, useRef, useState } from "react";
import "./Companies.css";
import { motion, useAnimation } from "framer-motion";

const Companies = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0) {
          setIsInView(true);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [controls, isInView]);

  return (
    <section className="c-wrapper">
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        className="paddings innerWidth flexCenter c-container"
      >
        <CompanyLogo src="./prologis.png" alt="Prologis Logo" />
        <CompanyLogo src="./tower.png" alt="Tower Logo" />
        <CompanyLogo src="./equinix.png" alt="Equinix Logo" />
        <CompanyLogo src="./realty.png" alt="Realty Logo" />
      </motion.div>
    </section>
  );
};

const CompanyLogo = ({ src, alt }) => (
  <motion.img src={src} alt={alt} className="company-logo" />
);

export default Companies;
