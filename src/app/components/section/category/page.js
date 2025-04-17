"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { LandPlot, Home, Building2 } from "lucide-react";

const CategoryCards = () => {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  const categories = [
    {
      title: "Plot",
      description: "Explore available residential plots in prime locations.",
      icon: (
        <LandPlot className="w-10 h-10 text-green-600 dark:text-green-400" />
      ),
      route: "/plot",
    },
    {
      title: "Home",
      description: "Find beautifully designed homes for your family.",
      icon: <Home className="w-10 h-10 text-green-600 dark:text-green-400" />,
      route: "/home",
    },
    {
      title: "Office",
      description: "Modern office spaces tailored for your business needs.",
      icon: (
        <Building2 className="w-10 h-10 text-green-600 dark:text-green-400" />
      ),
      route: "/office",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-600 dark:text-green-400 mb-4">
          Our Categories
        </h2>
        <p className="text-gray-800 dark:text-gray-200">
          Choose what suits your need – Plot, Home or Office.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavigate(item.route)}
            className="cursor-pointer group border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md bg-gray-50 dark:bg-gray-800 hover:shadow-xl hover:border-green-500 transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="transform transition-transform duration-300 group-hover:rotate-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
