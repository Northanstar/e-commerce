import React from 'react'
import { motion } from "framer-motion"


const Hero = () => {
  return (
    <section className="hero-section">
    <motion.div className="content"
    initial={{
   
      opacity:0
    }}
    animate={{
      opacity:1,
     
    }}
    >
      <h2>Feel more confident</h2>
      <p>
      a global leader in athletic footwear and apparel, is known for its innovative products, iconic logo
      </p>
      <button>Order Now</button>
    </motion.div>
  </section>
  )
}

export default Hero