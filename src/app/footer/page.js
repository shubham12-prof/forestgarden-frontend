"use client";

import React from "react";
import { MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-bold text-green-500 hover:text-green-400 transition-colors">
            FORESTGARDEN
          </h3>
          <p className="text-gray-300">
            Bringing nature to your doorstep. We provide you the best properties
            in your favorite locations.
          </p>
          <p className="text-sm text-gray-400">
            © 2025 FORESTGARDEN. All rights reserved.
          </p>
        </div>

        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-xl font-semibold text-green-500 flex items-center justify-center md:justify-start gap-2">
            <MapPin size={20} /> Head Office
          </h4>
          <p className="text-gray-300">
            📍 Badshahibagh Mayapur, RoopPur,
            <br />
            Saharanpur (UP) - 247122
          </p>
        </div>

        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-xl font-semibold text-green-500 flex items-center justify-center md:justify-start gap-2">
            <MapPin size={20} /> Branch Office
          </h4>
          <p className="text-gray-300">
            📍 201, 2nd Floor, Anupam Building,
            <br />
            218 Rama Market, Pritampura, Delhi - 110034
          </p>
        </div>

        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-xl font-semibold text-green-500 flex items-center justify-center md:justify-start gap-2">
            <Mail size={20} /> Contact Us
          </h4>
          <p className="text-gray-300 break-words">
            Email: forestgarden77@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
