"use client";

import ContactPage from "./components/section/contact/page";
import ImageSlider from "./components/section/imageSlider/page";
import CategoryCards from "./components/section/category/page";
import InfoSection from "./components/section/info/page";
import PropertyGallery from "./components/section/propertyGallary/page";

export default function Home() {
  return (
    <div>
      <ImageSlider />
      <InfoSection />
      <CategoryCards />
      <PropertyGallery />
      <ContactPage />
    </div>
  );
}
