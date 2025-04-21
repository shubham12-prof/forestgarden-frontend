"use client";

import { useState } from "react";

export default function GalleryPage() {
  const [activeSection, setActiveSection] = useState("photos");

  const photos = [
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1745222317/f5pdgmtdshku9asrh1xg.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1745222316/ifow1kyut9oflv2mgye5.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829154/oufhnwfnee7bsrsa39vl.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1745222317/yre0fovtclwpa88hjwvr.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1745222317/ckakuctzxzmkxliag4ud.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1745222318/f4kw7hs1iyry8qyssozl.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1745222318/tqexe9vhshcmpcyewjsu.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1745222319/zysjtoh3gmgu7ln16nnt.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1745222319/plu23okufiekeryzvvvk.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829153/sylon71yhel1hqgxpz0j.jpg",
    "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1744829154/hmzph11yv4cn8w0xtrih.jpg",
  ];

  const videos = [
    "https://res.cloudinary.com/dmj6ur8sm/video/upload/f_auto:video,q_auto/jh6u44kuog0sbrsoxrri.mp4",
  ];

  return (
    <div className="pt-36 px-4">
      <div className="sticky top-30  transform  z-50 bg-white dark:bg-black py-3 px-4 rounded-xl shadow-lg flex justify-center gap-4">
        <button
          onClick={() => setActiveSection("photos")}
          className={`px-6 py-2 text-md font-semibold rounded-full transition-all duration-300 border 
            ${
              activeSection === "photos"
                ? "bg-green-600 text-white border-green-600 shadow-md"
                : "bg-transparent text-gray-800 dark:text-gray-200 border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
        >
          Photos
        </button>
        <button
          onClick={() => setActiveSection("videos")}
          className={`px-6 py-2 text-md font-semibold rounded-full transition-all duration-300 border 
            ${
              activeSection === "videos"
                ? "bg-green-600 text-white border-green-600 shadow-md"
                : "bg-transparent text-gray-800 dark:text-gray-200 border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
        >
          Videos
        </button>
      </div>
      {activeSection === "photos" && (
        <section className="mt-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-600 dark:text-green-400">
            Photo Gallery
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {photos.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Photo ${index + 1}`}
                className="h-64 w-auto rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </section>
      )}

      {activeSection === "videos" && (
        <section className="mt-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-600 dark:text-green-400">
            Video Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((src, index) => (
              <video
                key={index}
                controls
                preload="auto"
                className="w-full h-64 rounded-xl shadow-md"
                onError={(e) => console.error("Error loading video", e)}
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
