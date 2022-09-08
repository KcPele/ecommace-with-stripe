import React from 'react'
import { motion } from 'framer-motion'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
  return (
    <motion.div
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }}
    
  >
    <div className='footer-container'>
      <p>2022 JEMI Cars All right reserverd</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
    </motion.div>
  )
}

export default Footer