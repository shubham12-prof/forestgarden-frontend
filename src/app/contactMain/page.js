"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactMain = () => {
  const phoneNumber = "+919876543210";

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleWhatsApp = () => {
    const whatsappURL = `https://wa.me/${phoneNumber.replace("+", "")}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-gray-800 min-h-screen px-4 sm:px-6 py-26 mt-10 sm:mt-40">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-600 dark:text-green-400 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            We&apos;d love to hear from you! Reach out via EMail or visit our
            office.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="text-center mt-10 text-gray-800 dark:text-gray-300 space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                  <MapPin className="inline-block mr-1" /> Head Office
                </h3>
                <p>
                  📍 Badshahibagh Mayapur, RoopPur, Saharanpur (UP) - 247122
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                  <MapPin className="inline-block mr-1" /> Branch Office
                </h3>
                <p>
                  📍 201, 2nd Floor, Anupam Building, 218 Rama Market,
                  Pritampura, Delhi - 110034
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

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
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

export default ContactMain;
