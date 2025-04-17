import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-green-500 hover:text-green-400 transition-colors duration-300">
              FORESTGARDEN
            </h3>
            <p className="text-gray-300">
              Bringing nature to your doorstep. We provide you best property in
              your fav locations.
            </p>
            <p className="text-sm text-gray-400">
              © 2025 FORESTGARDEN. All rights reserved.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-green-500">Address</h4>
            <p className="text-gray-300">
              <strong>Head Office:</strong> Premises Office: 201, 2nd Floor,
              Anupam Building, 218, Rama Market, Pritampura, Delhi - 110034
            </p>
            <p className="text-gray-400">India</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-green-500">Contact</h4>
            <p className="text-gray-300">
              <strong>Email:</strong> contact@forestgarden.com
            </p>
            <p className="text-gray-300">
              <strong>Phone:</strong> +91 123 456 7890
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-green-500">Follow Us</h4>
            <div className="flex space-x-6 justify-center md:justify-start">
              <a
                href="#"
                className="text-gray-300 hover:text-green-500 transition-colors duration-300"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-500 transition-colors duration-300"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-500 transition-colors duration-300"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-500 transition-colors duration-300"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
