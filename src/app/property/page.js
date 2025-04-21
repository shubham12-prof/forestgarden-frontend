"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PropertyGallery = () => {
  const router = useRouter();

  const properties = [
    {
      id: "plot-1",
      image:
        "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829155/smtgs0eeqvq7pzodpn6a.jpg",
      title: "Premium Plot in Saharanpur",
    },
    {
      id: "home-1",
      image:
        "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829154/hmzph11yv4cn8w0xtrih.jpg",
      title: "Elegant Family Home",
    },
    {
      id: "office-1",
      image:
        "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829154/oufhnwfnee7bsrsa39vl.jpg",
      title: "Modern Office Space",
    },
    {
      id: "plot-2",
      image:
        "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829153/sylon71yhel1hqgxpz0j.jpg",
      title: "Premium Plot in Saharanpur",
    },
    {
      id: "home-2",
      image:
        "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829154/hmzph11yv4cn8w0xtrih.jpg",
      title: "Elegant Family Home",
    },
    {
      id: "office-2",
      image:
        "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829154/oufhnwfnee7bsrsa39vl.jpg",
      title: "Modern Office Space",
    },
    {
      id: "plot-1",
      image:
        "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829155/smtgs0eeqvq7pzodpn6a.jpg",
      title: "Premium Plot in Saharanpur",
    },
    {
      id: "home-1",
      image:
        "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829154/hmzph11yv4cn8w0xtrih.jpg",
      title: "Elegant Family Home",
    },
    {
      id: "office-1",
      image:
        "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829154/oufhnwfnee7bsrsa39vl.jpg",
      title: "Modern Office Space",
    },
    {
      id: "plot-2",
      image:
        "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829153/sylon71yhel1hqgxpz0j.jpg",
      title: "Premium Plot in Saharanpur",
    },
    {
      id: "home-2",
      image:
        "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829154/hmzph11yv4cn8w0xtrih.jpg",
      title: "Elegant Family Home",
    },
    {
      id: "office-2",
      image:
        "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829154/oufhnwfnee7bsrsa39vl.jpg",
      title: "Modern Office Space",
    },
  ];

  const handleClick = (id) => {
    router.push(`/property/${id}`);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-37 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-600 dark:text-green-400 mb-4">
          Featured Properties
        </h2>
        <p className="text-gray-800 dark:text-gray-200 mb-6">
          Discover plots, homes, and office spaces hand-picked for you.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 italic">
          Site Location: Badshahibagh Mayapur Roop Pur, Delhi Yamunotri Highway
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {properties.map((property) => (
          <div
            key={property.id}
            onClick={() => handleClick(property.id)}
            className="cursor-pointer group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <Image
              src={property.image}
              alt={property.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
            />
            {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center text-lg font-semibold">
              {property.title}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyGallery;
