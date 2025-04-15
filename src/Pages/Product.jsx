import React from 'react'
import image1 from '../assets/pexels-melvin-buezo-1253763-2529148.jpg'
import image2 from '../assets/pexels-adrian-dorobantu-989175-2300334.jpg'
import image3 from '../assets/pexels-desertedinurban-4462781.jpg'
import image4 from '../assets/pexels-jddaniel-2385477.jpg'
import image5 from '../assets/pexels-felipepelaquim-1895019.jpg'
import image6 from '../assets/pexels-thnhphng1520-3611797.jpg'
import image7 from '../assets/pexels-amanjakhar-1124466.jpg'
import image8 from '../assets/pexels-micaasato-1580267.jpg'

const Product = () => {
  const products = [
    { id: 1, image: image1, name: "Premium Leather Sneakers", price: 500, description: "Luxurious leather sneakers with superior comfort" },
    { id: 2, image: image2, name: "Classic Sport Shoes", price: 900, description: "Versatile athletic shoes for everyday wear" },
    { id: 3, image: image3, name: "Urban Style Boots", price: 1000, description: "Modern boots perfect for city life" },
    { id: 4, image: image4, name: "Designer Collection", price: 1500, description: "Exclusive designer shoes for the fashion-forward" },
    { id: 5, image: image5, name: "Comfort Elite", price: 550, description: "Ultimate comfort with stylish design" },
    { id: 6, image: image6, name: "Colorful Series", price: 250, description: "Vibrant and eye-catching footwear" },
    { id: 7, image: image7, name: "Modern Custom", price: 350, description: "Customizable modern sneakers" },
    { id: 8, image: image8, name: "Trendy Edition", price: 450, description: "Latest trends in footwear fashion" },
  ]

  return (
    <div className='min-h-screen bg-gray-900 p-8'>
      <h1 className='text-white text-4xl font-bold mb-8 text-center'>Our Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {products.map((product) => (
          <div key={product.id} className='bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all'>
            <img 
              src={product.image} 
              alt={product.name} 
              className='w-full h-64 object-cover hover:scale-105 transition-transform duration-300'
            />
            <div className='p-4'>
              <h2 className='text-white text-xl font-semibold mb-2'>{product.name}</h2>
              <p className='text-gray-400 mb-3'>{product.description}</p>
              <div className='flex justify-between items-center'>
                <span className='text-white text-2xl'>₦{product.price}</span>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product