import Image from "next/image";
import React from "react";

const InfoSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744831224/ojksk1fguu0x6idd17ys.jpg"
            alt="About Us"
            className="w-full h-full rounded-2xl shadow-lg object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-green-600 dark:text-green-400 hover:text-green-500 transition-colors duration-300">
            ABOUT Us
          </h2>
          <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base leading-relaxed">
            Saharanpur (U.P) and has made its position as one of the largest
            companies in the Real Estate Industry. The company is one of the
            fastest growing entities in the realty sector with a difference that
            offers Affordable Cost of Residential Plots, excellent customer care
            levels with highest customer satisfaction index and the highest
            imaginable standards for the welfare of its staff, society as well
            as for the environment.
          </p>
          <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base leading-relaxed">
            The Company has traversed a path of steady growth & expansion and
            has posted increasing turnover and profits year after year. Today
            the company is one of the largest in the Real Estate Industry with
            several projects spread across Saharanpur. The company has executed
            and delivered 06 million sq.ft. of plots and properties — and is
            currently working on approx. 7 million sq.ft.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
