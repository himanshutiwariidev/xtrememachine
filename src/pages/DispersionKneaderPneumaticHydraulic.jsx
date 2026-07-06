import { useState } from "react";
import dispersion_kne1 from "../assets/dispersion_kne1.webp";
import dispersion_kne2 from "../assets/dispersion_kne2.webp";
import dispersion_kne3 from "../assets/dispersion_kne3.webp";
import dispersion_kne4 from "../assets/dispersion_kne4.webp";
import dispersion_kne5 from "../assets/dispersion_kne5.webp";
import dispersion_kne6 from "../assets/dispersion_kne6.webp";
import dispersion_kne7 from "../assets/dispersion_kne7.webp";
import dispersion_kne8 from "../assets/dispersion_kne8.webp";
import dispersion_kne9 from "../assets/dispersion_kne9.webp";
import dispersion_kne10 from "../assets/dispersion_kne10.webp";
import dispersion_kne11 from "../assets/dispersion_kne11.webp";
import dispersion_kne12 from "../assets/dispersion_kne12.webp";

import {
  FaPlus,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";



function DispersionKneaderPneumaticHydraulic() {

  const galleryImages = [
    dispersion_kne1,
    dispersion_kne2,
    dispersion_kne3,
    dispersion_kne4,
    dispersion_kne5,
    dispersion_kne6,
    dispersion_kne7,
    dispersion_kne8,
    dispersion_kne9,
    dispersion_kne10,
    dispersion_kne11,
    dispersion_kne12,
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };
  
  return (
    <>
         {/* TOP BANNER */}
      <div className="bg-[#ff5c0a] py-24 text-center">
        <h1 className="text-white text-4xl lg:text-4xl font-bold uppercase">
          Dispersion Kneader Pneumatic Hydraulic
        </h1>
      </div>


        {/* IMAGE GALLERY */}
          <div className="flex flex-wrap gap-1.5 mt-16 px-6 mb-8">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="w-full md:w-[49.5%] lg:w-[33%] relative overflow-hidden group cursor-pointer"
                onClick={() => openImage(index)}
              >
                {/* IMAGE */}
                <img
                  src={img}
                  alt="Dispersion Kneader Machine"
                  className="w-full h-100 object-cover transition duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <FaPlus className="text-white text-2xl" />
                </div>
              </div>
            ))}
          </div>

            {/* IMAGE POPUP */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-9999 flex items-center justify-center">
            {/* CLOSE BUTTON */}
            <button
              onClick={closeImage}
              className="absolute top-6 right-6 text-white text-2xl z-50 cursor-pointer"
            >
              <FaTimes />
            </button>

            {/* PREV BUTTON */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-2xl z-50 cursor-pointer"
            >
              <FaChevronLeft />
            </button>

            {/* IMAGE */}
            <img
              src={galleryImages[selectedImage]}
              alt="Dispersion Kneader Machine"
              className="max-w-[90%] max-h-[85vh] object-contain"
            />

            {/* NEXT BUTTON */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-2xl z-50 cursor-pointer"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
    </>
  )
}

export default DispersionKneaderPneumaticHydraulic
