"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactPage from "../components/section/contact/page";
import Image from "next/image";

const InfoSection = () => {
  return (
    <>
      <section className="mt-25 w-full bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-6 md:px-12 py-20">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full md:w-1/2 transform hover:scale-105 transition-transform duration-500 ease-in-out"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744836894/j99vxjm5twekkeuez8os.jpg"
              alt="About Us"
              className="w-full h-full rounded-3xl shadow-2xl object-cover"
              width={600}
              height={100}
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-green-600 dark:text-green-400 tracking-tight transition-colors duration-300">
              About Us
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              #1 Place To Find The Perfect Plots
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              MOON HILL VIEW HOME Plots has emerged as a leading real estate
              name in Saharanpur (U.P), offering affordable residential plots
              with a strong customer-centric approach. Our focus on quality,
              transparency, and sustainability has made us a trusted brand with
              over 6 million sq.ft. delivered and 7 million sq.ft. under
              development. We aim to elevate lifestyles while maintaining the
              highest standards of service and environmental care.
            </p>
          </motion.div>
        </motion.div>
      </section>
      <ContactPage />
    </>
  );
};

export default InfoSection;
