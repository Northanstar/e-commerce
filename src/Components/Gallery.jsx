import React from 'react'
import { motion } from "framer-motion"
import image1 from '../assets/pexels-melvin-buezo-1253763-2529148.jpg'
import image2 from '../assets/pexels-adrian-dorobantu-989175-2300334.jpg'
import image3 from '../assets/pexels-desertedinurban-4462781.jpg'
import image4 from '../assets/pexels-jddaniel-2385477.jpg'
import image5 from '../assets/pexels-felipepelaquim-1895019.jpg'
import image6 from '../assets/pexels-thnhphng1520-3611797.jpg'
import image7 from '../assets/pexels-amanjakhar-1124466.jpg'
import image8 from '../assets/pexels-micaasato-1580267.jpg'



const Gallery = () => {


  return (
    <motion.div className='grid grid-cols-4 gap-5 p-4'
    initial={{

    }}
    >
        <div class='box'>
             <img src={image1} alt="" className='w-full h-64 object-cover rounded-lg' />
             <p>
                Step into luxury with our premium leather sneakers.
             </p>
             <p className='text-white'> ₦50,000</p>
             
        </div>
       
        <div>
            <img src={image2} alt="" className='w-full h-64 object-cover rounded-lg '/>
            <p>
                Pick from our quality selection of shoes 
            </p>
            <p className='text-white'> ₦9,000</p>
        </div>
        
        <div>
            <img src={image3} alt="" className='object-cover w-full h-64 rounded-lg'/>
            <p>
                Discover the perfect pair of shoes for any occasion.
            </p>
            <p className='text-white'> ₦10,000</p>
        </div>
       
        
        <div>
             <img src={image4} alt="" className='w-full object-cover h-64 rounded-lg'/>
             <p>
                Step into style and comfort with our exclusive collection of footwear.
             </p>
             <p className='text-white'> ₦15,000</p>

        </div>

        <div>
             <img src={image5} alt="" className='w-full object-cover h-64 rounded-lg'/>
             <p>
                comfort and style all in one pair.
             </p>
             <p className='text-white'> ₦100,000</p>
        </div>

        <div>
             <img src={image6} alt="" className='w-full object-cover h-64 rounded-lg'/>
             <p>
                colourful and stylish shoes.
             </p>
             <p className='text-white'> ₦250,000</p>
        </div>

        <div>
             <img src={image7} alt="" className='w-full object-cover h-64 rounded-lg'/>
             <p>
                customizable and modern design.
             </p>
             <p className='text-white'>
             ₦35,000
             </p>
        </div>

        <div>
             <img src={image8} alt="" className='w-full object-cover h-64 rounded-lg'/>
             <p>
                stylish and trendy shoes.
             </p>
             <p className='text-white'> ₦40,000
             </p>
        </div>
       
    </motion.div>
  )
}

export default Gallery