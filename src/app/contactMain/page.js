"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const contactMain = () => {
  const phoneNumber = "+919876543210";

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleWhatsApp = () => {
    const whatsappURL = `https://wa.me/${phoneNumber.replace("+", "")}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center px-6 md:px-12 py-16">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 dark:text-green-400 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Reach out via phone, WhatsApp, or visit
            our office.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin
                className="text-green-600 dark:text-green-400 mt-1"
                size={28}
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Address
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Main Road, Saharanpur, Uttar Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone
                className="text-green-600 dark:text-green-400 mt-1"
                size={28}
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {phoneNumber}
                </p>
                <div className="flex gap-4 mt-3">
                  <button
                    onClick={handleCall}
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl shadow transition"
                  >
                    Call
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow transition"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail
                className="text-green-600 dark:text-green-400 mt-1"
                size={28}
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  info@yourcompany.com
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.124437392907!2d77.53800811505777!3d29.96411558190725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eba3a3dbe1b75%3A0x7ff801aa0e5f23f3!2sSaharanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1686313092622!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-none"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactMain;
