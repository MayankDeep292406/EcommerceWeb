import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* About Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">ShopNow</h3>
          <p>Your one-stop shop for top deals and trending products. Quality & trust delivered to your door.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/top-products" className="hover:underline">Top Products</Link></li>
            <li><Link to="/liked" className="hover:underline">Liked Products</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold mb-3">Customer Support</h4>
          <ul className="space-y-2">
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/returns" className="hover:underline">Returns</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Get In Touch</h4>
          <p>Email: support@shopsmart.com</p>
          <p>Phone: +91 98765 43210</p>
          <div className="flex space-x-4 mt-3">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="h-5" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="h-5" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="h-5" /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center py-4 border-t border-gray-700 text-xs">
        &copy; {new Date().getFullYear()} @ShopNow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
