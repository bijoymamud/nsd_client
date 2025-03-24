// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#17141D] text-gray-400 py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
            <img src="https://i.ibb.co.com/84ss8tXS/Frame-1597882443.png" alt="" />

            </div>
            <p className="text-sm">
              Villa No. 45, Street 12, Khalifa City,<br />
              Abu Dhabi, United Arab Emirates
            </p>
            <p className="text-sm mt-2">
              <a href="mailto:demonexusvision@nexusvision.com" className="hover:text-purple-400">
                demonexusvision@nexusvision.com
              </a>
            </p>
          </div>

          {/* Our Collaborators */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our collaborators</h3>
            <ul className="text-sm space-y-2">
              <li>Demo company limited</li>
              <li>Demo task company</li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">About Us</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-purple-400">Why us?</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">Learn more</a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow us on</h3>
            <div className="flex space-x-4">
              <a href="#" className="btn btn-circle btn-sm bg-white border-none hover:bg-purple-500">
                <FaFacebookF className="text-black" size={18} />
              </a>
              <a href="#" className="btn btn-circle btn-sm bg-white border-none hover:bg-purple-500">
                <FaInstagram className="text-black" size={18} />
              </a>
              <a href="#" className="btn btn-circle btn-sm bg-white border-none hover:bg-purple-500">
                <FaTwitter className="text-black" size={18} />
              </a>
              <a href="#" className="btn btn-circle btn-sm bg-white border-none hover:bg-purple-500">
                <FaLinkedinIn className="text-black" size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#636CDE] my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 Nexus vision. All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-400">Privacy Notice</a>
            <a href="#" className="hover:text-purple-400">Terms of service</a>
            <a href="#" className="hover:text-purple-400">Cookies Policy & Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;