import React from 'react'
import image from '../assets/pexels-jddaniel-2385477.jpg'

const Feature = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-8 p-6">
        <div className="flex-1">
            <h2 className='text-lg text-white font-bold text-center'>Choose Confort</h2>
            <p className="text-lg leading-relaxed text-white text-wrap">
         Step into style and comfort with our exclusive collection of footwear. <br /> From sleek athletic shoes engineered for peak performance 
         to elegant dress shoes crafted with premium materials, we offer the perfect pair for every occasion. Our shoes combine 
         cutting-edge design with ergonomic support, ensuring both fashion-forward aesthetics and all-day comfort. <br />Whether you're 
         hitting the gym, heading to the office, or stepping out for a special evening, our diverse selection caters to all your 
         footwear needs. <br />Each pair is meticulously crafted with attention to detail, durability, and style, making them an essential 
         addition to your wardrobe.
          </p>
        </div>

        <div className='flex-1'>
            <img src={image} alt="feature" className="w-full h-auto object-cover rounded-lg" />
        </div>
    </div>
  )
}

export default Feature