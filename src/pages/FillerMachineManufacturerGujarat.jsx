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

import { FaPlus, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function FillerMachineManufacturerGujarat() {
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
      {/* TOP BANNER */}
      <div className="bg-[#ff5c0a] py-24 text-center">
        <h1 className="text-white text-4xl lg:text-4xl font-bold uppercase">
          FILLER MACHINE MANUFACTURER IN GUJARAT
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
              alt="FILLER MACHINE MANUFACTURER IN GUJARAT"
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
            alt="FILLER MACHINE MANUFACTURER IN GUJARAT"
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

      {/* SECTION */}

      <section className="w-full bg-white py-14 lg:py-20">
        <div className="max-w-312.5 mx-auto px-5 lg:px-8">
          {/* TITLE */}
          <h1 className="text-[#000000] text-4xl font-semibold leading-tight mb-6">
            Filler Machine Manufacturer in Gujarat
          </h1>

          {/* PARAGRAPH */}
          <p className="text-[#4b5563] text-[18px] leading-loose mb-12">
            As a leading{" "}
            <span className="text-[#ff5c0a] font-semibold">
              Filler Machine Manufacturer in Gujarat
            </span>
            , Xtreme Machines is at the forefront of delivering advanced
            solutions for the plastic manufacturing industry. With years of
            expertise and continuous innovation, we specialize in designing and
            exporting high-quality filler masterbatch machines that cater to the
            diverse needs of clients across India, including Vadodara, Daman,
            Valsad, Vapi, Umbergaon, and Silvassa. Our commitment to quality,
            efficiency, and customer satisfaction has made us a trusted partner
            in the global market.
          </p>

          {/* SECTION */}
          <div className="mb-12">
            <h2 className="text-[#000000] text-3xl font-semibold leading-tight mb-6">
              The Role of Filler Masterbatch Machines in Plastic Manufacturing
            </h2>

            <p className="text-[#4b5563] text-[18px] leading-loose">
              Filler masterbatch machines play a crucial role in producing
              high-quality plastic materials by blending fillers such as calcium
              carbonate or talc with polymers. This process enhances the
              properties of plastics, making them cost-effective and
              environmentally friendly. At Xtreme Machines, we understand the
              significance of these machines in optimizing production
              efficiency, reducing expenses, and ensuring superior product
              quality.
            </p>
          </div>

          {/* SECTION */}
          <div className="mb-12">
            <h2 className="text-[#000000] text-3xl font-semibold leading-tight mb-6">
              Advanced Manufacturing Facility
            </h2>

            <p className="text-[#4b5563] text-[18px] leading-loose">
              Our state-of-the-art manufacturing facility is equipped with the
              latest technology and machinery to ensure that every filler
              masterbatch machine meets the highest industry standards. Our team
              of skilled engineers and technicians is dedicated to researching
              and developing innovative solutions tailored to specific client
              requirements. Our commitment to R&D helps us stay ahead of
              industry trends and provide machines that are reliable, efficient,
              and high-performing.
            </p>
          </div>

          {/* SECTION */}
          <div className="mb-12">
            <h2 className="text-[#000000] text-3xl font-semibold leading-tight mb-6">
              Why Choose Xtreme Machines as Your Filler Machine Manufacturer?
            </h2>

            <p className="text-[#4b5563] text-[18px] leading-loose">
              When you partner with Xtreme Machines, you gain access to a
              comprehensive approach to customer service. We take the time to
              understand your unique manufacturing needs and provide customized
              solutions that enhance your production capabilities. Our expert
              team is always available to offer technical support, ensuring
              smooth and efficient machine operation.
            </p>
          </div>

          {/* FEATURES */}
          <div className="mb-12">
            <h2 className="text-[#000000] text-3xl font-semibold leading-tight mb-6">
              Key Features of Our Filler Masterbatch Machines
            </h2>

            <ul className="space-y-5">
              <li className="text-[#4b5563] text-[18px] leading-[1.8] ">
                <span className="text-[#000000] text-[18px] font-bold">
                  {" "}
                  Excellent Dispersion & Cooling Effect:
                </span>{" "}
                Double-bladed rotors ensure maximum dispersion, while unique
                jacketing and rotor construction enhance cooling.
              </li>

              <li className="text-[#4b5563] text-[18px] leading-[1.8] ">
                <span className="text-[#000000] text-[18px] font-bold">
                  Easy Cleaning & Sampling:
                </span>{" "}
                The tilting mixing chamber allows for complete inspection and
                effortless cleaning.
              </li>

              <li className="text-[#4b5563] text-[18px] leading-[1.8] ">
                <span className="text-[#000000] text-[18px] font-bold">
                  Dust Collector:
                </span>{" "}
                Our specially designed dust collector collects excess powder,
                preventing material wastage and reducing pollution.
              </li>
              <li className="text-[#4b5563] text-[18px] leading-[1.8] ">
                <span className="text-[#000000] text-[18px] font-bold">
                  Enhanced Wear Resistance:
                </span>{" "}
                Rotors made of high-quality alloy steel, with stilted edges and
                helically geared alloy steel forgings, improve wear resistance
                and longevity.
              </li>
            </ul>
          </div>

          {/* SECTION */}
          <div className="mb-12">
            <h2 className=" text-[#000000] text-3xl font-semibold leading-tight mb-6">
              Versatile and Energy-Efficient Machines
            </h2>

            <p className="text-[#4b5563] text-[18px] leading-loose mb-4">
              One of the standout features of our filler masterbatch machines is
              their flexibility. They can be easily adjusted to accommodate
              various filler materials and polymer types, making them suitable
              for a wide range of applications. This adaptability is essential
              in today’s fast-paced manufacturing environment, where responding
              to market demands is key to maintaining profitability. for a wide
              range of applications.
            </p>

            <p className="text-[#4b5563] text-[18px] leading-loose">
              Moreover, our machines are designed with energy efficiency in
              mind. They help reduce operational costs while maintaining high
              production output. As sustainability becomes a priority in the
              manufacturing industry, our machines support eco-friendly
              production practices by minimizing environmental impact.
            </p>
          </div>

          {/* APPLICATIONS */}
          <div className="mb-12">
            <h2 className="text-[#000000] text-3xl font-semibold leading-tight mb-4">
              Applications of Our Filler Masterbatch Machines
            </h2>

            <p className="text-[#4b5563] text-[18px] leading-loose mb-8">
              Our machines are widely used in various industries, including:
            </p>

            <ul className="space-y-2 pl-2">
              {[
                "Hoses",
                "Footwear",
                "Conveyor belts and V-belts",
                "Sports balls",
                "Vibration insulators",
                "Automobile and electric rubber parts",
                "Phenol, polythene, and other thermoplastic resins",
              ].map((item, index) => (
                <li
                  key={index}
                  className="text-[#4b5563] text-[18px] leading-[1.8] flex items-start"
                >
                  <span className="mr-4 text-black">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className=" text-[#000000] text-3xl font-semibold leading-tight mb-6">
              Trusted Filler Machine Manufacturer Across India
            </h2>

            <p className="text-[#4b5563] text-[18px] leading-loose mb-4">
              With a strong presence in key industrial hubs such as Vadodara,
              Daman, Valsad, Vapi, Umbergaon, and Silvassa, we have successfully
              partnered with clients across different regions, providing them
              with high-quality filler masterbatch machines that streamline
              their production processes. Our deep understanding of diverse
              market requirements enables us to deliver solutions that align
              with both local and international standards.
            </p>

            <p className="text-[#4b5563] text-[18px] leading-loose">
              We recognize the complexities of international trade and
              regulatory requirements, ensuring that our clients experience
              seamless transactions and top-notch support. Our commitment to
              continuous improvement drives us to seek client feedback to
              enhance our products and services further.
            </p>
          </div>

          {/*additional services  */}
          <div className="mb-12">
            <h2 className=" text-[#000000] text-3xl font-semibold leading-tight mb-6">
              Additional Services
            </h2>

            <p className="text-[#4b5563] text-[18px] leading-loose mb-4">
              In addition to providing high-performance machines, we offer a
              range of complementary services, including:
            </p>

            <p className="text-[#4b5563] text-[18px] leading-loose">
              <ul className="space-y-2 pl-2">
                {[
                  "Machine installation",
                  "Operator training",
                  "Maintenance and support",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="text-[#4b5563] text-[18px] leading-[1.8] flex items-start"
                  >
                    <span className="mr-4 text-black">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </p>

            <p className="text-[#4b5563] text-[18px] leading-loose mb-4">
              We recognize that investing in new machinery is a significant
              commitment, and we strive to offer complete assistance to help our
              clients maximize their investment.
            </p>
          </div>

          {/* conclusion */}
           <div className="mb-12">
            <h2 className=" text-[#000000] text-3xl font-semibold leading-tight mb-6">
             Conclusion
            </h2>

            <p className="text-[#4b5563] text-[18px] leading-loose mb-4">
             At Xtreme Machines, we take pride in being a leading filler machine manufacturer, catering to businesses in Vadodara, Daman, Valsad, Vapi, Umbergaon, and Silvassa. Our commitment to innovation, efficiency, and sustainability sets us apart in the global market.
            </p>

            <p className="text-[#4b5563] text-[18px] leading-loose">
              When you choose Xtreme Machines, you are not just purchasing a machine—you are gaining a trusted partner dedicated to enhancing your production capabilities. Explore our range of filler masterbatch machines and discover how we can help you achieve your manufacturing goals. Our team is ready to assist you in finding the perfect solution tailored to your specific needs, ensuring you stay ahead in the competitive world of plastic manufacturing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default FillerMachineManufacturerGujarat;
