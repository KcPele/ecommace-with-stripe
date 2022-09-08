import React from 'react'
import Link from "next/link"
import { urlFor } from '../lib/client'
import { motion } from 'framer-motion'
const Product = ({product: {image, name, slug, price}}) => {
  return (
    <motion.div
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }}
    
  >
    <div>
     <Link href={`/product/${slug.current}`} >
       <div className='product-card'>
         <img 
         src={urlFor(image && image[0])}
         width={250}
         alt="products cart"
         height={250}
         className="product-image"
         />
         <p className='product-name'>{name}</p>
         <p className='product-price'>${price}</p>
       </div>
     </Link>
    </div>
    </motion.div>
  )
}

export default Product