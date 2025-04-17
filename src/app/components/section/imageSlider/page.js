"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ImageSlider = () => {
  const images = [
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829155/smtgs0eeqvq7pzodpn6a.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829154/oufhnwfnee7bsrsa39vl.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829154/oufhnwfnee7bsrsa39vl.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829153/sylon71yhel1hqgxpz0j.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <motion.div
        className="flex w-full h-full"
        initial={{ x: "-100%" }}
        animate={{ x: `-${currentIndex * 100}%` }}
        exit={{ x: "100%" }}
        transition={{ stiffness: 300 }}
      >
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Slider Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageSlider;
