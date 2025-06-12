import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">MyApp</h3>
            <p className="text-gray-600 text-sm">
              Your trusted platform for amazing digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-md font-semibold text-gray-700 mb-2">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline text-gray-600">Home</Link></li>
              <li><Link to="/about" className="hover:underline text-gray-600">About</Link></li>
              <li><Link to="/contact" className="hover:underline text-gray-600">Contact</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-md font-semibold text-gray-700 mb-2">Account</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/login" className="hover:underline text-gray-600">Login</Link></li>
              <li><Link to="/register" className="hover:underline text-gray-600">Register</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-md font-semibold text-gray-700 mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4.01a8.38 8.38 0 01-2.36.65A4.1 4.1 0 0021.4 2a8.2 8.2 0 01-2.6.99A4.1 4.1 0 0015.4 2c-2.3 0-4.2 2.03-4.2 4.53 0 .36.04.72.12 1.06A11.65 11.65 0 013 3.11a4.3 4.3 0 001.3 6.06 4.04 4.04 0 01-1.9-.55v.06c0 2.24 1.52 4.1 3.52 4.52a4.1 4.1 0 01-1.88.07 4.15 4.15 0 003.86 2.92 8.25 8.25 0 01-5.1 1.84A8.44 8.44 0 012 19.54a11.6 11.6 0 006.29 1.9c7.55 0 11.68-6.64 11.68-12.4 0-.19 0-.39-.01-.58A8.6 8.6 0 0022 4.01z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 5.924a10.07 10.07 0 01-2.825.775 4.933 4.933 0 002.163-2.724 9.85 9.85 0 01-3.127 1.195A4.92 4.92 0 0015.448 4c-2.733 0-4.947 2.263-4.947 5.055 0 .396.042.782.127 1.153C7.728 9.944 4.1 8.142 1.67 5.166a5.097 5.097 0 00-.668 2.54c0 1.75.872 3.293 2.195 4.197a4.901 4.901 0 01-2.24-.63v.064c0 2.44 1.693 4.472 3.946 4.935a4.935 4.935 0 01-2.23.086c.628 2.02 2.448 3.488 4.6 3.53A9.867 9.867 0 012 19.544a13.945 13.945 0 007.548 2.215c9.057 0 14.01-7.796 14.01-14.548 0-.222-.005-.443-.014-.662A10.105 10.105 0 0024 4.59a9.85 9.85 0 01-2.77.756z" />
                </svg>
              </a>
              {/* Add more icons if needed */}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer