// import React from 'react'

import { useState } from "react";

import dispersion_banner from "../assets/disperdion-kneader_banner.webp";
import dispersion_Image from "../assets/disperdion-kneader_image.webp";
import technical_specification_dispersionKneader from "../assets/technical_specification_dispersionKneader.webp";

import dispersion_gallery1 from "../assets/dispersion_gallery1.webp";
import dispersion_gallery2 from "../assets/dispersion_gallery2.webp";
import dispersion_gallery3 from "../assets/dispersion_gallery3.webp";
import dispersion_gallery4 from "../assets/dispersion_gallery4.webp";
import dispersion_gallery5 from "../assets/dispersion_gallery5.webp";
import dispersion_gallery6 from "../assets/dispersion_gallery6.webp";
import dispersion_gallery7 from "../assets/dispersion_gallery7.webp";
import dispersion_gallery8 from "../assets/dispersion_gallery8.webp";
import dispersion_gallery9 from "../assets/dispersion_gallery9.webp";

import {
  FaPlus,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,

} from "react-icons/fa";
import SEO from "../component/SEO";

function DispersionKneaderMachine() {

   const galleryImages = [
      dispersion_gallery1,
      dispersion_gallery2,
      dispersion_gallery3,
      dispersion_gallery4,
      dispersion_gallery5,
      dispersion_gallery6,
      dispersion_gallery7,
      dispersion_gallery8,
      dispersion_gallery9,
    
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

       <SEO
        title="Dispersion Kneader Machine | Rubber Kneader | Kneader Machine"
        description="Dispersion Kneader Machine, Rubber Kneader, and Kneader Machine for efficient mixing solutions in various industries. Dispersion kneaders with...."
        keywords="
          Dispersion Kneader,
          Rubber Kneader,
          Kneader Machine,
        "
        url="https://www.xtrememachines.in/dispersion-kneader-machine/"
      />
      {/* BANNER */}
      <section className="w-full">
        <img
          src={dispersion_banner}
          alt="Dispersion Kneader Machine"
          className="w-full h-auto object-cover"
        />
      </section>

      <section className="bg-[rgb(255,255,255)] pt-12 ">
        <div className="max-w-375 mx-auto px-5 lg:px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12">
            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-4xl leading-tight font-semibold text-black">
                Dispersion Kneader{" "}
                <span className="text-[#E2010E]">Pneumatic/Hydraulic</span>
              </h1>

              <p className="mt-6 text-lg leading-loose text-black">
                In the world of rubber production, the <span className="font-bold">Dispersion kneader</span> stands
                as a cornerstone in the manufacturing system. This specialised
                system performs a pivotal position in mixing, blending, and
                dispersing various elements within rubber compounds. Whether
                inside the introduction of tire materials, rubber merchandise,
                or industrial parts, a dispersion kneader ensures that the
                components are uniformly allotted, providing super, durable, and
                consistent rubber output.
              </p>

              <p className="mt-6 text-lg leading-loose text-black">
                A Dispersion kneader is prepared with a pair of counter-rotating
                rotors, which paintings collectively to mix the rubber and its
                components. The rotors are designed to create excessive shear
                forces that wreck down aggregates and lightly distribute fillers
                like carbon black, oils, and other additives. The end result is
                a homogeneous mixture, that’s important for achieving most
                reliable overall performance in completed rubber merchandise.
                The green operation of the kneader guarantees that the rubber
                well-knownshows the preferred electricity, flexibility, and
                durability.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="max-w-180 ml-auto">
              <img
                src={dispersion_Image}
                alt="Hydraulic Dispersion Kneader Machine"
                className="w-full rounded-2xl"
              />
            </div>
          </div>

          {/* SECOND CONTENT */}
          <div className="mt-12">
            <p className="text-lg leading-loose text-black">
              Our Dispersion Kneader is specially designed for the efficient
              dispersion and uniform mixing of a wide range of materials,
              including Reclaim Rubber, Natural and Synthetic Rubber, EVA, and
              various engineering plastics. It ensures consistent material
              quality by thoroughly blending raw materials, fillers, and
              additives while maintaining optimal processing temperatures to
              prevent degradation. Built with robust construction, the kneader
              can handle high torque and continuous operation, offering
              long-lasting performance with minimal maintenance. Its versatile
              design makes it ideal for rubber and plastic compounding,
              reclaimed rubber processing, and the production of
              high-performance compounds for automotive, footwear, and
              industrial applications. With precise temperature control,
              energy-efficient operation, and customizable capacities, our
              Dispersion Kneader enhances productivity, improves product
              performance, and ensures superior consistency in every batch.
            </p>

            <p className="mt-8 text-lg leading-loose text-black">
              The time period <span className="font-bold">Rubber kneader</span> refers to any kneading gadget used
              particularly inside the rubber industry for the purpose of
              preparing rubber compounds. These machines are designed to fulfill
              the stressful requirements of rubber manufacturing, where
              precision and consistency are of utmost significance. The kneader
              works by subjecting the rubber materials to continuous mechanical
              forces that help in breaking down clumps and making sure a easy
              consistency.
            </p>

            <p className="mt-8 text-lg leading-loose text-black">
              For industries working with EVA materials, Xtreme Machines
              provides the state-of-the-art EVA Filler Compounding Line. This
              EVA Filler Compounding Line is tailored for compounding ethylene
              vinyl acetate (EVA) resins, commonly used in shoe soles, foam
              products, and adhesives. The EVA Filler Compounding Line from
              Xtreme Machines offers excellent dispersion and consistency,
              ensuring that your end products meet the highest quality
              standards. With advanced control systems and energy-efficient
              operation, the EVA Filler Compounding Line helps manufacturers
              optimize their production processes while minimizing waste. The
              EVA Filler Compounding Line is the perfect choice for businesses
              seeking reliable and high-performance compounding solutions for
              EVA materials.
            </p>

            <p className="mt-8 text-lg leading-loose text-black">
              Modern Rubber kneader machines feature advanced technologies that
              enhance their performance, reduce energy consumption, and increase
              output. These innovations also assist in minimizing the damage and
              tear of the gadget additives, thereby extending the lifespan of
              the equipment. The design of the rubber kneader consists of quite
              a few features together with temperature control, adjustable rotor
              velocity, and variable load capacities, making it adaptable to one
              of a kind production needs.
            </p>

            <p className="mt-8 text-lg leading-loose text-black">
              A <span className="font-bold">kneader Machine</span> is a flexible piece of gadget used in numerous
              industries beyond simply rubber manufacturing. This machine is
              capable of processing a extensive variety of substances, from
              plastics to food merchandise, or even prescribed drugs. Its key
              position lies in its capacity to combine, knead, and blend
              elements to create a uniform product. In rubber production, the
              kneader machine is vital for reaching the proper balance of
              viscosity, consistency, and uniformity in the very last product.
            </p>

            <p className="mt-8 text-lg leading-loose text-black">
              The Kneader machine is frequently designed with features that make
              sure the green transfer of warmth, making it less difficult to
              control the processing temperature. This is particularly critical
              in rubber manufacturing, where temperature control affects the
              houses of the compound. Furthermore, the kneader gadget can be
              customized to address precise manufacturing volumes, making sure
              that manufacturers can scale their operations with out
              compromising on best.
            </p>
            <p className="mt-8 text-lg leading-loose text-black">
              Whether you’re managing a dispersion kneader, rubber kneader, or
              kneader system, those portions of system are critical to the a hit
              manufacturing of high-quality rubber compounds. Their ability to
              combination substances successfully, manipulate temperature, and
              provide steady consequences makes them an essential part of the
              manufacturing manner. For groups in the rubber enterprise,
              investing in a dependable kneader device ensures superior product
              excellent, elevated production efficiency, and a aggressive side
              inside the marketplace.
            </p>
            <p className="mt-8 text-lg leading-loose text-black">
              Each kind of kneader system is designed to meet precise needs,
              however all percentage the commonplace goal of creating
              high-performance rubber compounds that are long lasting, bendy,
              and precisely engineered for their meant packages.
            </p>
            {/* APPLICATIONS SECTION */}
            <div className="mt-10">
              <h2 className="text-[30px] font-bold text-black">
                Applications:-
              </h2>

              <div className="flex flex-col lg:flex-row gap-16 mt-8">
                {/* PLASTIC INDUSTRIES */}
                <div>
                  <h3 className="text-[24px] font-bold text-[#E2010E] mb-6">
                    Plastic Industries
                  </h3>

                  <div className="space-y-3">
                    <p className="text-[18px] text-[#667085]">
                      PP/E.V.A/P.V.C/T.P.R/Foam & Sandal
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      P.V.C. Artifical Leather
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      P.V.C Floor Tile
                    </p>

                    <p className="text-[18px] text-[#667085]">P.V.C. Sheet</p>

                    <p className="text-[18px] text-[#667085]">
                      Automobile P.V.C. Accessories
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      P.E. for cable industries
                    </p>

                    <p className="text-[18px] text-[#667085]">HIPS/ABS</p>

                    <p className="text-[18px] text-[#667085]">
                      Compounding & Masterbatches
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      P.V.C./E.V.A. Toy
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      L.D.P.E./L.L.D.P.E./H.D.P.E.
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      Battery & Plastic Blends
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      Reclaim Plastic
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      Pencil Industry
                    </p>
                  </div>
                </div>

                {/* RUBBER INDUSTRIES */}
                <div>
                  <h3 className="text-[24px] font-bold text-[#E2010E] mb-6">
                    Rubber Industries
                  </h3>

                  <div className="space-y-3">
                    <p className="text-[18px] text-[#667085]">
                      Rubber Sole, Heal & Pad for shoes
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      Rubber Sponge & Rubber Sandal
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      Tyre & Tube for bycycle, Motorcycle & Automobile
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      Rain Boot, Rain Coat & Rubber Boot
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      Automobile Rubber Accessories
                    </p>

                    <p className="text-[18px] text-[#667085]">Marine Fenders</p>

                    <p className="text-[18px] text-[#667085]">
                      V Belt & Conveyor Belt
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      Sports Ball & Balloons
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      Printer Roller & Rice Roller
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      O Ring and Oil Seal
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      Milk Nipple & Rubber Toys
                    </p>

                    <p className="text-[18px] text-[#667085]">
                      Reclaim Rubber, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-[30px] font-bold text-black">
                Technical Specification:-
              </h2>

              <img
                src={technical_specification_dispersionKneader}
                alt="Dispersion Kneader Technical Specifications"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

        {/* IMAGE GALLERY */}
        <section  className="bg-[rgb(255,255,255)] pt-12 mx-auto px-5 lg:px-7 mb-6">
            <div className="flex flex-wrap gap-1.5 mt-16">
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
                  className="w-full h-70 object-cover transition duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <FaPlus className="text-white text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </section>

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
  );
}

export default DispersionKneaderMachine;
