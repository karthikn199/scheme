// src/components/Contact.js
import React from 'react';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-800 text-white p-8">
              <h3 className="text-xl font-bold mb-6">CONTACT GY TALKS</h3>
              
              <div className="flex items-start mb-6">
                <FaMapMarkerAlt className="text-xl mr-4 mt-1" />
                <div>
                  <h4 className="font-bold">Commissioner of Social Welfare Department</h4>
                  <p>80a Floor, US Building DX</p>
                  <p>Arrestabad Yereesh Nagarjee 800007</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <FaPhone className="mr-4" />
                <span className="font-bold">9480843005</span>
              </div>
              
              <div className="flex items-center mb-4">
                <FaEnvelope className="mr-4" />
                <span className="font-bold">helpswkar@gmail.com</span>
              </div>
              
              <div className="flex items-center">
                <FaClock className="mr-4" />
                <span className="font-bold">Help-Line 24X7</span>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows="3" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition"
                >
                  Submit Query
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;