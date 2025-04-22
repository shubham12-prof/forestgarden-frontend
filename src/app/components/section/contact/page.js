"use client";

import React from "react";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const ContactPage = () => {
  const phoneNumber = "+919876543210";

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleWhatsApp = () => {
    const whatsappURL = `https://wa.me/${phoneNumber.replace("+", "")}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-600 dark:text-green-400 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Need help or want to discuss a property?
        </p>

        {/* <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <button
            onClick={handleCall}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl shadow-lg transition duration-300"
          >
            <Phone size={20} /> Call Us
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl shadow-lg transition duration-300"
          >
            <MessageCircle size={20} /> WhatsApp Us
          </button>
        </div> */}

        <div className="text-center text-gray-800 dark:text-gray-300 space-y-8">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
              <MapPin className="inline-block mr-1" /> Head Office
            </h3>
            <p>📍 Badshahibagh Mayapur, RoopPur, Saharanpur (UP) - 247122</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
              <MapPin className="inline-block mr-1" /> Branch Office
            </h3>
            <p>
              📍 201, 2nd Floor, Anupam Building, 218 Rama Market, Pritampura,
              Delhi - 110034
            </p>
          </div>

          <div className="space-y-3">
            <p className="flex items-center justify-center gap-2 text-lg">
              <Mail className="text-green-600 dark:text-green-400" />
              Email Id : forestgarden77@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
