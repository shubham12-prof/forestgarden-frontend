"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

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
    <section className="bg-white dark:bg-gray-900 py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-600 dark:text-green-400 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-800 dark:text-gray-200 mb-10 text-lg">
          Need help or want to discuss a property? Call or WhatsApp us now!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <button
            onClick={handleCall}
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl shadow-lg transition"
          >
            <Phone size={20} /> Call Us
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl shadow-lg transition"
          >
            <MessageCircle size={20} /> WhatsApp Us
          </button>
        </div>

        <div className="mt-12 text-gray-700 dark:text-gray-300">
          <p>📍 Location: Saharanpur, U.P</p>
          <p>📞 Phone: {phoneNumber}</p>
          <p>📧 Email: info@yourcompany.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
