import React from 'react'

const Footer = () => {
  return (
    <div>
<footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div>
        <h3 className="text-xl font-bold mb-4">Company</h3>
        <ul>
          <li className="mb-2"><a href="/about">About Us</a></li>
          <li className="mb-2"><a href="/contact">Contact</a></li>
          <li className="mb-2"><a href="/careers">Careers</a></li>
        </ul>
      </div>

      {/* Shop */}
      <div>
        <h3 className="text-xl font-bold mb-4">Shop</h3>
        <ul>
          <li className="mb-2"><a href="/products">All Products</a></li>
          <li className="mb-2"><a href="/new-arrivals">New Arrivals</a></li>
          <li className="mb-2"><a href="/deals">Special Deals</a></li>
        </ul>
      </div>

      {/* Customer Service */}
      <div>
        <h3 className="text-xl font-bold mb-4">Customer Service</h3>
        <ul>
          <li className="mb-2"><a href="/faq">FAQ</a></li>
          <li className="mb-2"><a href="/shipping">Shipping Info</a></li>
          <li className="mb-2"><a href="/returns">Returns</a></li>
        </ul>
      </div>

      {/* Connect */}
      <div>
        <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
        <ul>
          <li className="mb-2"><a href="https://facebook.com">Facebook</a></li>
          <li className="mb-2"><a href="https://twitter.com">Twitter</a></li>
          <li className="mb-2"><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-600 mt-8 pt-8 text-center">
      <p>&copy; 2025 Northstar. All rights reserved.</p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer