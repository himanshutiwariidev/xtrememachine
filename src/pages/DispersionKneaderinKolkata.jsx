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

import { FaPlus, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SEO from "../component/SEO";

const dispersionKneaderKolkataSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.xtrememachines.in/dispersion-kneader-in-kolkata/#blogposting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.xtrememachines.in/dispersion-kneader-in-kolkata/",
      },
      headline: "Dispersion Kneader in Kolkata | Industrial Dispersion Kneader Manufacturer",
      description:
        "Looking for a reliable Dispersion Kneader Manufacturer in Kolkata? Xtreme Machines manufactures high-performance Dispersion Kneader Machines for rubber, plastic, EVA, PVC, masterbatch and polymer processing industries with customized solutions, installation support and nationwide service.",
      image: "https://www.xtrememachines.in/wp-content/uploads/2024/01/dispersion-kneader-machine.webp",
      author: {
        "@type": "Organization",
        name: "Xtreme Machines",
      },
      publisher: {
        "@type": "Organization",
        name: "Xtreme Machines",
        logo: {
          "@type": "ImageObject",
          url: "https://www.xtrememachines.in/wp-content/uploads/2023/09/logo.png",
        },
      },
      datePublished: "2025-01-01",
      dateModified: "2026-07-07",
      inLanguage: "en-IN",
      articleSection: "Industrial Machinery",
      keywords: [
        "Dispersion Kneader in Kolkata",
        "Dispersion Kneader Manufacturer in Kolkata",
        "Industrial Dispersion Kneader",
        "Rubber Kneader Machine",
        "Plastic Kneader Machine",
        "Masterbatch Kneader",
        "PVC Processing Machine",
        "EVA Kneader Machine",
        "Rubber Mixing Machine",
        "Polymer Processing Machine",
        "Dispersion Kneader West Bengal",
        "Rubber Processing Equipment",
      ],
      about: {
        "@type": "Thing",
        name: "Dispersion Kneader Machine Manufacturing",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.xtrememachines.in/dispersion-kneader-in-kolkata/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why choose Xtreme Machines for a Dispersion Kneader in Kolkata?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Xtreme Machines is a trusted Dispersion Kneader Manufacturer in Kolkata, offering high-performance kneading solutions for rubber, plastic, EVA, PVC, masterbatch, and polymer processing industries. Our machines are engineered for efficient mixing, superior dispersion, low power consumption, and long service life, making them ideal for manufacturers across Kolkata and West Bengal.",
          },
        },
        {
          "@type": "Question",
          name: "Which industries use your Dispersion Kneader Machines in Kolkata?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our Dispersion Kneader Machines in Kolkata are widely used in rubber processing, plastic compounding, PVC products, EVA compounds, footwear manufacturing, cable compounds, masterbatch production, reclaimed rubber processing, engineering plastics, and automotive component manufacturing industries.",
          },
        },
        {
          "@type": "Question",
          name: "Which locations do you supply Dispersion Kneader Machines in West Bengal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We supply Dispersion Kneader Machines across Kolkata, Howrah, Durgapur, Asansol, Haldia, Kharagpur, Siliguri, Bardhaman, Dankuni, and other industrial areas of West Bengal. We also provide installation, commissioning, and technical support throughout the region.",
          },
        },
        {
          "@type": "Question",
          name: "Can your Dispersion Kneader Machine process different rubber and plastic materials?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our Industrial Dispersion Kneader Machines are designed to process Natural Rubber, Synthetic Rubber, Reclaim Rubber, EVA, PVC, PP, PE, TPR, Engineering Plastics, Filler Masterbatch, and various polymer compounds with excellent mixing consistency.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide customized Dispersion Kneader Machines in Kolkata?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We manufacture customized Dispersion Kneader Machines in Kolkata based on production capacity, chamber size, rotor configuration, automation level, material type, plant layout, and future production requirements to maximize operational efficiency.",
          },
        },
        {
          "@type": "Question",
          name: "What are the advantages of installing a Dispersion Kneader Machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A high-quality Dispersion Kneader Machine improves material dispersion, reduces batch processing time, minimizes material wastage, increases production efficiency, maintains uniform compound quality, and delivers better overall product performance for rubber and plastic industries.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide installation and after-sales support for Dispersion Kneader Machines in Kolkata?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Xtreme Machines offers complete installation, commissioning, operator training, preventive maintenance guidance, genuine spare parts, and technical support for Dispersion Kneader Machines across Kolkata and all major industrial locations in West Bengal.",
          },
        },
        {
          "@type": "Question",
          name: "How can I get a quotation for a Dispersion Kneader Machine in Kolkata?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simply contact the Xtreme Machines sales team with your production capacity, raw material details, application, automation requirements, and preferred machine configuration. Our experts will recommend the most suitable Dispersion Kneader Machine in Kolkata and provide a customized quotation with complete technical assistance.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Why choose Xtreme Machines for a Dispersion Kneader in Kolkata?",
    answer:
      "Xtreme Machines is a trusted Dispersion Kneader Manufacturer in Kolkata, offering high-performance kneading solutions for rubber, plastic, EVA, PVC, masterbatch, and polymer processing industries. Our machines are engineered for efficient mixing, superior dispersion, low power consumption, and long service life, making them ideal for manufacturers across Kolkata and West Bengal.",
  },
  {
    question: "Which industries use your Dispersion Kneader Machines in Kolkata?",
    answer:
      "Our Dispersion Kneader Machines in Kolkata are widely used in rubber processing, plastic compounding, PVC products, EVA compounds, footwear manufacturing, cable compounds, masterbatch production, reclaimed rubber processing, engineering plastics, and automotive component manufacturing industries.",
  },
  {
    question: "Which locations do you supply Dispersion Kneader Machines in West Bengal?",
    answer:
      "We supply Dispersion Kneader Machines across Kolkata, Howrah, Durgapur, Asansol, Haldia, Kharagpur, Siliguri, Bardhaman, Dankuni, and other industrial areas of West Bengal. We also provide installation, commissioning, and technical support throughout the region.",
  },
  {
    question: "Can your Dispersion Kneader Machine process different rubber and plastic materials?",
    answer:
      "Yes. Our Industrial Dispersion Kneader Machines are designed to process Natural Rubber, Synthetic Rubber, Reclaim Rubber, EVA, PVC, PP, PE, TPR, Engineering Plastics, Filler Masterbatch, and various polymer compounds with excellent mixing consistency.",
  },
  {
    question: "Do you provide customized Dispersion Kneader Machines in Kolkata?",
    answer:
      "Yes. We manufacture customized Dispersion Kneader Machines in Kolkata based on production capacity, chamber size, rotor configuration, automation level, material type, plant layout, and future production requirements to maximize operational efficiency.",
  },
  {
    question: "What are the advantages of installing a Dispersion Kneader Machine?",
    answer:
      "A high-quality Dispersion Kneader Machine improves material dispersion, reduces batch processing time, minimizes material wastage, increases production efficiency, maintains uniform compound quality, and delivers better overall product performance for rubber and plastic industries.",
  },
  {
    question: "Do you provide installation and after-sales support for Dispersion Kneader Machines in Kolkata?",
    answer:
      "Yes. Xtreme Machines offers complete installation, commissioning, operator training, preventive maintenance guidance, genuine spare parts, and technical support for Dispersion Kneader Machines across Kolkata and all major industrial locations in West Bengal.",
  },
  {
    question: "How can I get a quotation for a Dispersion Kneader Machine in Kolkata?",
    answer:
      "Simply contact the Xtreme Machines sales team with your production capacity, raw material details, application, automation requirements, and preferred machine configuration. Our experts will recommend the most suitable Dispersion Kneader Machine in Kolkata and provide a customized quotation with complete technical assistance.",
  },
];

const DispersionKneaderinKolkata = () => {
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
      <SEO
        title="Dispersion Kneader in Kolkata | Manufacturer & Supplier | Xtreme Machines"
        description="Looking for a high-quality Dispersion Kneader in Kolkata? Xtreme Machines is a trusted manufacturer and supplier offering energy-efficient rubber mixing machines across Kolkata, Ahmedabad, Hosur, Indore, Kollam, and Kerala."
        canonical="https://www.xtrememachines.in/dispersion-kneader-in-kolkata/"
        schema={dispersionKneaderKolkataSchema}
      />

      {/* TOP BANNER */}
      <div className="bg-[#ff5c0a] py-24 text-center">
        <h1 className="text-white text-4xl lg:text-4xl font-bold uppercase">
          Dispersion Kneader in Kolkata, Ahmedabad, Hosur, Indore, Kollam &
          Kerala
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

      <div className="mt-12 px-20">
        <h2 className="text-[#E2010E] text-3xl mt-3 font-semibold uppercase tracking-[3px]">
          Dispersion Kneader in Kolkata, Ahmedabad, Hosur, Indore, Kollam &
          Kerala | Manufacturer & Supplier
        </h2>
        <p className="mt-3 text-lg leading-loose text-black">
          When it comes to industrial mixing and compounding equipment, a{" "}
          <strong>Dispersion Kneader in kolkata</strong> plays a critical role
          in achieving consistent, high-quality material blending across
          industries like rubber, adhesives, chemicals, plastics, and paints.
          Whether you're located in{" "}
          <strong>Kolkata, Ahmedabad, Hosur, Indore, Kollam, or Kerala</strong>,
          finding a reliable manufacturer that understands your regional
          production needs is essential — and that's exactly where{" "}
          <strong>Xtreme Machine</strong> comes in.
        </p>
        <p className="mt-3 text-lg leading-loose text-black">
          At Xtreme Machine, we design, manufacture, and supply high-performance
          dispersion kneaders built for durability, precision, and efficiency —
          trusted by manufacturers across India for consistent output and
          long-term reliability.
        </p>

        <h3 className="text-[#E2010E] text-2xl mt-3 font-semibold uppercase tracking-[3px]">
          What is a Dispersion Kneader?
        </h3>
        <p className="mt-3 text-lg leading-loose text-black">
          A Dispersion Kneader is a heavy-duty industrial mixing machine used to
          blend, disperse, and homogenize highly viscous materials such as
          rubber compounds, silicone, adhesives, sealants, and chemical pastes.
          The machine uses two rotating blades (rotors) inside a sealed mixing
          chamber, applying intense mechanical shear and pressure to achieve
          uniform dispersion of fillers, pigments, and additives into the base
          material.
        </p>
        <p className="mt-3 text-lg leading-loose text-black">
          Industries that commonly use dispersion kneaders include:
        </p>
        <ul className="list-disc mt-2 pl-5">
          <li className="py-2 text-1xl">Rubber and tyre manufacturing</li>
          <li className="py-2 text-1xl">Adhesives and sealants production</li>
          <li className="py-2 text-1xl">Silicone rubber compounding</li>
          <li className="py-2 text-1xl">Chemical and pigment processing</li>
          <li className="py-2 text-1xl">
            Cable and wire insulation material manufacturing
          </li>
          <li className="py-2 text-1xl">Plastic compounding units</li>
        </ul>

        <h4 className="text-[#E2010E] text-xl mt-3 font-semibold uppercase tracking-[3px]">
          Why Choose Xtreme Machine as Your Dispersion Kneader Manufacturer?
        </h4>

        <p className="mt-3 text-lg leading-loose text-black">
          Selecting the right manufacturer isn't just about the machine
          specifications — it's about long-term reliability, after-sales
          support, and engineering precision. Here's what sets{" "}
          <strong>Xtreme Machine</strong> apart:
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          <strong>1. Robust Build Quality</strong>
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          Our dispersion kneaders are built using high-grade materials and
          precision-engineered components, ensuring consistent performance even
          under continuous, heavy-duty operation.
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          <strong>2. Customized Machine Configurations</strong>
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          We understand that every industry has different mixing requirements.
          Xtreme Machine offers customizable kneader capacities, rotor designs,
          and heating/cooling systems tailored to your specific material and
          production volume.
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          <strong>3. Energy-Efficient Design</strong>
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          Our machines are engineered to optimize power consumption without
          compromising mixing efficiency — helping you reduce operational costs
          over time.
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          <strong>4. Pan-India Service Network</strong>
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          From Kolkata to Kerala, Xtreme Machine provides installation support,
          operator training, and technical assistance across all major
          industrial regions in India.
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          <strong>5. Genuine Spare Parts & Quick Support</strong>
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          We ensure minimal downtime for your production line with readily
          available spare parts and a responsive technical support team.
        </p>

        <h5 className="text-[#E2010E] text-xl mt-3 font-semibold uppercase tracking-[3px]">
          Dispersion Kneader Solutions Across India
        </h5>

        <p className="mt-3 text-lg leading-loose text-black">
          <strong>Dispersion Kneader in Kolkata</strong>
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          Kolkata's growing industrial base, particularly in rubber processing
          and chemical manufacturing, demands reliable and efficient mixing
          equipment. Xtreme Machine supplies dispersion kneaders in Kolkata
          designed to handle high-viscosity compounds with consistent quality,
          backed by local installation and service support.
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          <strong>Dispersion Kneader in Ahmedabad</strong>
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          As one of India's major industrial and manufacturing hubs, Ahmedabad
          hosts numerous chemical, rubber, and adhesive production units. Xtreme
          Machine's dispersion kneaders in Ahmedabad are built to withstand
          demanding production cycles, offering manufacturers durability and
          precision mixing for large-scale operations.
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          <strong>Dispersion Kneader in Hosur</strong>
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          Hosur's industrial corridor, known for its strong manufacturing and
          automotive component base, requires dependable compounding machinery.
          Our dispersion kneaders in Hosur are engineered for high-output
          performance, making them ideal for rubber and plastic compounding
          businesses in the region.
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          <strong>Dispersion Kneader in Indore</strong>
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          Indore's expanding industrial sector, including chemical and rubber
          processing units, benefits from Xtreme Machine's efficient and durable
          dispersion kneaders. We provide tailored machine configurations in
          Indore to match specific production capacities and material
          requirements.
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          <strong>Dispersion Kneader in Kollam</strong>
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          Kollam's manufacturing units, particularly in the rubber and chemical
          processing space, rely on consistent mixing quality. Xtreme Machine's
          dispersion kneaders in Kollam are designed for smooth, uniform
          dispersion, helping local manufacturers maintain high product
          standards.
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          <strong>Dispersion Kneader in Kerala</strong>
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          Across Kerala's broader industrial landscape — from rubber
          plantations-linked processing units to chemical manufacturing plants —
          Xtreme Machine offers reliable dispersion kneader solutions built to
          handle the state's diverse material processing needs, with dedicated
          regional support.
        </p>

        <h5 className="text-[#E2010E] text-xl mt-3 font-semibold uppercase tracking-[3px]">
          Key Features of Xtreme Machine's Dispersion Kneaders
        </h5>

        <ul className="list-disc mt-2 pl-5">
          <li className="py-2 text-1xl">
            <strong>Heavy-Duty Rotor Design –</strong> Ensures thorough and
            uniform material dispersion, even for high-viscosity compounds.
          </li>
          <li className="py-2 text-1xl">
            <strong>Precision Temperature Control – </strong> Integrated heating
            and cooling jackets maintain optimal processing temperatures
            throughout the mixing cycle.
          </li>
          <li className="py-2 text-1xl">
            <strong>Sturdy Sealed Chamber – </strong> Minimizes material loss
            and contamination, ensuring consistent product quality batch after
            batch.
          </li>
          <li className="py-2 text-1xl">
            <strong>Hydraulic/Pneumatic Discharge Systems – </strong> Available
            based on your operational preference, for faster and safer material
            unloading.
          </li>
          <li className="py-2 text-1xl">
            <strong>Safety Interlocks – </strong> Built-in safety mechanisms
            protect operators during high-pressure mixing operations.
          </li>
          <li className="py-2 text-1xl">
            <strong>Customizable Capacity – </strong> Available in a range of
            batch sizes to suit small-scale units as well as large industrial
            production lines.
          </li>
        </ul>

        <h5 className="text-[#E2010E] text-xl mt-3 font-semibold uppercase tracking-[3px]">
          Factors That Influence Dispersion Kneader Pricing
        </h5>

        <p className="mt-3 text-lg leading-loose text-black">
          If you're comparing quotes across manufacturers, keep these factors in
          mind:
        </p>

        <ol className="list-decimal mt-2 pl-5">
          <li className="py-2 text-1xl">
            <strong>Batch Capacity – </strong>Larger mixing chambers with higher
            output capacity naturally cost more.
          </li>
          <li className="py-2 text-1xl">
            <strong>Rotor & Chamber Material – </strong> Machines built with
            wear-resistant, high-grade steel components are priced higher but
            offer longer service life.
          </li>
          <li className="py-2 text-1xl">
            <strong>Automation Level – </strong> Manual, semi-automatic, and
            fully automatic control systems vary in price based on the level of
            process automation included.
          </li>
          <li className="py-2 text-1xl">
            <strong>Heating/Cooling System Type – </strong> Advanced temperature
            control systems add to the overall cost but significantly improve
            mixing consistency.
          </li>
          <li className="py-2 text-1xl">
            <strong>After-Sales Support & Warranty –</strong> Manufacturers
            offering strong service networks and warranty coverage, like Xtreme
            Machine, provide better long-term value despite a potentially higher
            upfront investment.
          </li>
        </ol>

        <h5 className="text-[#E2010E] text-xl mt-3 font-semibold uppercase tracking-[3px]">
          How to Choose the Right Dispersion Kneader Manufacturer
        </h5>

        <p className="mt-3 text-lg leading-loose text-black">
          Before finalizing your purchase, consider the following checklist:
        </p>

        <ul className="list-disc mt-2 pl-5">
          <li className="py-2 text-1xl">
            Does the manufacturer have proven experience in your specific
            industry (rubber, chemicals, adhesives, etc.)?
          </li>
          <li className="py-2 text-1xl">
            Can they customize the machine based on your material type and
            production volume?
          </li>
          <li className="py-2 text-1xl">
            Do they offer regional installation and after-sales support in your
            city?
          </li>
          <li className="py-2 text-1xl">
            Are spare parts easily available, and how quickly can technical
            issues be resolved?
          </li>
          <li className="py-2 text-1xl">
            Does the manufacturer provide a warranty and clear service
            agreement?
          </li>
        </ul>

        <p className="mt-3 text-lg leading-loose text-black">
          Xtreme Machine checks all these boxes, making us a preferred choice
          for manufacturers across Kolkata, Ahmedabad, Hosur, Indore, Kollam,
          Kerala, and beyond.
        </p>

        <h5 className="text-[#E2010E] text-xl mt-3 font-semibold uppercase tracking-[3px]">
          Why Manufacturers Across India Trust Xtreme Machine
        </h5>

        <p className="mt-3 text-lg leading-loose text-black">
          With years of engineering expertise and a strong focus on quality,
          Xtreme Machine has become a dependable name in industrial mixing
          equipment manufacturing. Our commitment to precision engineering,
          customer-focused service, and pan-India support ensures that
          businesses — regardless of location — get access to reliable,
          high-performing dispersion kneaders built to match their exact
          production needs.
        </p>

        <p className="mt-3 text-lg leading-loose text-black">
          Whether you're setting up a new production line or upgrading your
          existing mixing equipment, Xtreme Machine offers the technical
          expertise, machine quality, and after-sales support needed to keep
          your operations running smoothly.
        </p>

        <h5 className="text-[#E2010E] text-xl mt-3 font-semibold uppercase tracking-[3px]">
          Get in Touch with Xtreme Machine
        </h5>

        <p className="mt-3 text-lg leading-loose text-black">
          Looking for a dependable{" "}
          <strong>
            Dispersion Kneader in Kolkata, Ahmedabad, Hosur, Indore, Kollam, or
            Kerala?
          </strong>{" "}
          Contact the Xtreme Machine team today to discuss your production
          requirements, get a customized quotation, and learn more about our
          range of industrial mixing solutions.
        </p>

        {/* FAQ */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-black mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-l-4 border-[#E2010E] bg-white shadow-sm rounded-r-lg p-6"
              >
                <h3 className="text-lg font-semibold text-black mb-3">
                  {index + 1}. {faq.question}
                </h3>

                <div className="text-gray-700 leading-7">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DispersionKneaderinKolkata;
