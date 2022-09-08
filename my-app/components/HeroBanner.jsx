import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { motion } from "framer-motion";
const HeroBanner = ({ heroBanner }) => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      
    >

    <div className="hero-banner-container">
      <div>
        <div className="app__hero-banner">
        <div>

        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
          </div>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="app__hero-banner-image" />

        </div>
        <div>
            <Link href={`/product/${heroBanner.product}`}>
                <button type="button">{heroBanner.buttonText}</button>
            </Link>
            <div className="desc">
                <h5>Description</h5>
              <p>{heroBanner.desc}</p>
            </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default HeroBanner;
