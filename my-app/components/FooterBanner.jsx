import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { motion } from "framer-motion";
const FooterBanner = ({ footerBanner: { discount, largeText1, 
  largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <motion.div
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }}
    
  >
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div>

        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1} {largeText2}</h3>
          <h3></h3>
          <p>{saleTime}</p>
          </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        </div>
        <img src={urlFor(image)} alt="footer banner" className='footer-banner-image'/>
      </div>
    </div>
    </motion.div>
  );
};

export default FooterBanner;
