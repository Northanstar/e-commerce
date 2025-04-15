import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
        
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl text-white mb-4">Our Story</h2>
          <p className="text-gray-300 mb-4">
            Founded in 2023, we've been passionate about providing our customers with the finest selection of footwear. 
            Our journey began with a simple idea: to create a space where style meets comfort, and where every customer 
            can find their perfect pair of shoes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To deliver exceptional quality footwear while providing an unmatched shopping experience. 
              We believe that the right pair of shoes can boost confidence and comfort in every step.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl text-white mb-4">Quality Promise</h2>
            <p className="text-gray-300">
              We carefully curate our collection, partnering with renowned brands and manufacturers 
              to ensure that every product meets our high standards of quality and style.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl text-white mb-4">Visit Us</h2>
          <p className="text-gray-300">
            Located in the heart of the city, our store is more than just a shoe shop - it's a destination 
            for footwear enthusiasts. Come visit us and experience our exceptional service firsthand.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About