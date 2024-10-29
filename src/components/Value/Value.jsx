import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { motion, useAnimation, useInView } from "framer-motion";
import "./Value.css";
import data from "../../utils/accordion";

const Value = () => {
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  // Detect when each div is in view
  const leftRef = React.useRef(null);
  const rightRef = React.useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-50px 0px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-50px 0px" });

  React.useEffect(() => {
    if (leftInView) {
      leftControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
    if (rightInView) {
      rightControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [leftInView, rightInView, leftControls, rightControls]);

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left side animation */}
        <motion.div
          ref={leftRef}
          initial={{ x: -100, opacity: 0 }}
          animate={leftControls}
          className="v-left"
        >
          <div className="image-container">
            <img src="./value.png" alt="Value" />
          </div>
        </motion.div>

        {/* Right side animation */}
        <motion.div
          ref={rightRef}
          initial={{ x: 100, opacity: 0 }}
          animate={rightControls}
          className="flexColStart v-right"
        >
          <span className="orangeText">Our Value</span>
          <span className="primaryText">We Provide Worth</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life a better place.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);

              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          setClassName(expanded ? "expanded" : "collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Value;
