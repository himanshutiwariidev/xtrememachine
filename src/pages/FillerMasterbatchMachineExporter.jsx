import fillermasterbatch1 from "../assets/fillermasterbatch1.webp";
import fillermasterbatch2 from "../assets/fillermasterbatch2.webp";
import fillermasterbatch3 from "../assets/fillermasterbatch3.webp";
import fillermasterbatch4 from "../assets/fillermasterbatch4.webp";
import fillermasterbatch5 from "../assets/fillermasterbatch5.webp";
import fillermasterbatch6 from "../assets/fillermasterbatch6.webp";
import fillermasterbatch7 from "../assets/fillermasterbatch7.webp";
import fillermasterbatch8 from "../assets/fillermasterbatch8.webp";
import fillermasterbatch9 from "../assets/fillermasterbatch9.webp";
import fillermasterbatch10 from "../assets/fillermasterbatch10.webp";

import { useState } from "react";

import SEO from "../component/SEO";

import { FaPlus, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function FillerMasterbatchMachineExporter() {
  const galleryImages = [
    fillermasterbatch1,
    fillermasterbatch2,
    fillermasterbatch3,
    fillermasterbatch4,
    fillermasterbatch5,
    fillermasterbatch6,
    fillermasterbatch7,
    fillermasterbatch8,
    fillermasterbatch9,
    fillermasterbatch10,
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
        title="Filler Masterbatch Machine Exporter | PP Filler Machine | LD Filler Machine"
        description="Xtreme Machines are the best Filler Masterbatch Machine exporter & manufacturer and PP Filler Machine, LD Filler Machine etc...."
        keywords="
         Masterbatch Machine Manufacturer ,
          Filler Masterbatch Machine ,
          PP Filler Machine ,
          LD Filler Machine,
        "
         url="https://www.xtrememachines.in/filler-masterbatch-machine-exporter/"
      />
      {/* TOP BANNER */}
      <div className="bg-[#ff5c0a] py-24 text-center">
        <h1 className="text-white text-4xl lg:text-4xl font-bold uppercase">
           FILLER / MASTERBATCH MACHINE 
        </h1>
      </div>

      {/* IMAGE GALLERY */}
      <div className="flex flex-wrap justify-center gap-4 mt-16 px-6 mb-8">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="w-full md:w-[48%] relative overflow-hidden group cursor-pointer"
            onClick={() => openImage(index)}
          >
            {/* IMAGE */}
            <img
              src={img}
              alt="FILLER MASTERBATCH MACHINE"
              className="w-full h-105 object-cover transition duration-500 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <FaPlus className="text-white text-3xl" />
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
            alt="FILLER MASTERBATCH MACHINE"
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

      {/* content */}

      {/* QUALITY COMPLIANCE SECTION */}
      <section className="bg-[#ffffff] py-20 px-6 lg:px-14">
        {/* HEADING */}
        <div className="text-center mb-14">
          <span className="text-[#E2010E] text-3xl font-semibold uppercase tracking-[3px]">
            Filler Masterbatch Machine Exporter
          </span>
        </div>

        {/* CONTENT */}
        <div className="max-w-350 mx-auto">
          <p className="text-[#5a5a5a] text-[18px] leading-8">
            As a{" "}
            <span className="font-bold">
              Filler Masterbatch Machine Exporter
            </span>
            , Xtreme Machines stands at the forefront of providing advanced
            solutions for the plastic manufacturing industry. With years of
            expertise and innovation, we specialise in designing and exporting
            high-quality filler masterbatch machines that meet the diverse needs
            of our clients worldwide. Our commitment to quality, efficiency, and
            customer satisfaction has made us a trusted partner in the global
            market.
          </p>
          <p className="text-[#5a5a5a] text-[18px] leading-8 pt-4">
            Filler masterbatch machines play a crucial role in the production of
            various plastic products, allowing manufacturers to create materials
            that are not only cost-effective but also environmentally friendly.
            These machines are designed to facilitate the blending of fillers,
            such as calcium carbonate or talc, with polymers to produce
            masterbatches that enhance the properties of plastics. At Xtreme
            Machines, we understand the importance of these machines in
            optimising production processes, reducing costs, and improving the
            overall quality of finished products.
          </p>
          <p className="text-[#5a5a5a] text-[18px] leading-8 pt-4">
            Our manufacturing facility is equipped with state-of-the-art
            technology and machinery, ensuring that each filler masterbatch
            machine is built to the highest standards. We employ a team of
            skilled engineers and technicians who are dedicated to researching
            and developing innovative solutions tailored to the specific
            requirements of our clients. This commitment to research and
            development has enabled us to stay ahead of industry trends and
            provide machines that are both reliable and efficient.
          </p>
          <p className="text-[#5a5a5a] text-[18px] leading-8 pt-4">
            When you choose Xtreme Machines as your{" "}
            <span className="font-bold">
              Filler Masterbatch Machine Exporter
            </span>
            , you benefit from our comprehensive approach to customer service.
            We take the time to understand your unique manufacturing needs and
            work closely with you to provide tailored solutions that enhance
            your production capabilities. Our team is always available to offer
            technical support, ensuring that your machines operate smoothly and
            efficiently.
          </p>
          <p className="text-[#5a5a5a] text-[18px] leading-8 pt-4">
            One of the standout features of our filler masterbatch machines is
            their flexibility. They can be easily adjusted to accommodate
            various filler materials and polymer types, making them suitable for
            a wide range of applications. This versatility is essential in
            today’s fast-paced manufacturing environment, where the ability to
            adapt to changing market demands can make a significant difference
            in profitability.
          </p>
          <p className="text-[#5a5a5a] text-[18px] leading-8 pt-4">
            Furthermore, our machines are designed with energy efficiency in
            mind, helping you reduce your operational costs while maintaining
            high output levels. We believe that sustainability is essential for
            the future of manufacturing, and our machines are built to support
            your efforts to minimise your environmental impact. By choosing our
            filler masterbatch machines, you are investing in equipment that not
            only enhances productivity but also aligns with global
            sustainability goals.
          </p>
          <p className="text-[#5a5a5a] text-[18px] leading-8 pt-4">
            In addition to the high performance of our machines, we prioritise
            safety in our designs. Each machine undergoes rigorous testing and
            quality assurance processes to ensure that it meets international
            safety standards. We are committed to providing equipment that not
            only performs well but also protects the operators and the
            environment.
          </p>
          <p className="text-[#5a5a5a] text-[18px] leading-8 pt-4">
            Our global presence as a{" "}
            <span className="font-bold">
              Filler Masterbatch Machine Exporter
            </span>{" "}
            is a testament to our commitment to excellence. We have successfully
            partnered with clients across various countries, providing them with
            reliable machines that drive their production processes. Our
            understanding of different markets and regulatory requirements
            allows us to navigate the complexities of international trade,
            ensuring a smooth experience for our clients.
          </p>
          <p className="text-[#5a5a5a] text-[18px] leading-8 pt-4">
            At Xtreme Machines, we are also dedicated to continuous improvement.
            We actively seek feedback from our clients to enhance our products
            and services further. This customer-centric approach has helped us
            build long-lasting relationships with clients, as they appreciate
            our willingness to listen and adapt to their needs.
          </p>
          <p className="text-[#5a5a5a] text-[18px] leading-8 pt-4">
            In addition to our core offerings, we provide a range of
            complementary services to support our clients. This includes machine
            installation, operator training, and maintenance services. We
            understand that investing in new machinery can be a significant
            commitment, and we strive to provide our clients with the support
            they need to maximise their investment.
          </p>
          <p className="text-[#5a5a5a] text-[18px] leading-8 pt-4">
            In conclusion, as a leading{" "}
            <span className="font-bold">
              Filler Masterbatch Machine Exporter
            </span>
            , Xtreme Machines is committed to providing innovative, efficient,
            and reliable solutions for the plastic manufacturing industry. Our
            focus on quality, customer service, and sustainability sets us apart
            in the global market. When you partner with us, you are not just
            purchasing a machine; you are gaining a trusted ally in enhancing
            your production capabilities. We invite you to explore our range of
            filler masterbatch machines and discover how we can help you achieve
            your manufacturing goals. Our team is ready to assist you in finding
            the perfect solution tailored to your specific needs, ensuring that
            you stay ahead in the competitive world of plastic manufacturing.
          </p>
        </div>

        <div className="max-w-350 mx-auto mt-4">
          <h3 className="text-1.5xl font-semibold uppercase text-[#5a5a5a]">
            KEY FEATURES
          </h3>
          <ul>
            <li className="py-2 text-1xl">
              <span className="font-bold text-[#5a5a5a]">
                Excellent dispersion & cooling effect:
              </span>{" "}
              Maximum dispersion is facilitated by double bladed rotors.
              adequate clearance, unique jacketing and rotor construction
            </li>
            <li className="py-2 text-1xl">
              <span className="font-bold text-[#5a5a5a]">
                Easy cleaning & sampling:
              </span>{" "}
              Tilting of mixing chamber helps in complete inspection and easy
              cleaning
            </li>
            <li className="py-2 text-1xl">
              <span className="font-bold text-[#5a5a5a]">Dust collector:</span>{" "}
              The specially designed dust collector collects spurt powder which
              saves raw material and checks pollution
            </li>
            <li className="py-2 text-1xl">
              <span className="font-bold text-[#5a5a5a]">
                Improved wear resistance:
              </span>{" "}
              Wear resistance is enhanced by rotors made of quality alloy steel,
              with their edges stilted and Helica gears made of alloy steel
              forgings
            </li>
          </ul>
        </div>

        <div className="max-w-350 mx-auto mt-4">
          <h3 className="text-1.5xl font-semibold uppercase text-[#5a5a5a]">
            APPLICATION AREAS:
          </h3>

          <ol className="list-disc pl-6 mt-4 text-[18px] text-[#667085] leading-8.5">
            <li>
              Hoses • Footwear • Conveyor belts and V-belts • Sports balls •
              Vibration insulators • Automobile & electric rubber parts •
              Phenol, polythene and other thermoplastic resins • Tyres & tubes •
              Tread compounds • E.P.D.M. • Silicone rubber • Battery containers
              and many more applications
            </li>
          </ol>
        </div>

        <div className="max-w-350 mx-auto mt-4">
          <h3 className="text-1.5xl font-semibold uppercase text-[#5a5a5a]">
            VARIANTS AVAILABLE: <span className="font-normal">55L, 100L & 200L</span>
          </h3>

        </div>
      </section>
    </>
  );
}

export default FillerMasterbatchMachineExporter;
