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

import { FaPlus, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SEO from "../component/SEO";

const kneaderGujaratSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.xtrememachines.in/kneader-machine-in-gujarat#blogposting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.xtrememachines.in/kneader-machine-in-gujarat",
      },
      headline: "Kneader Machine in Gujarat | Industrial Kneader Machine Manufacturer",
      description:
        "Looking for a reliable Kneader Machine Manufacturer in Gujarat? Xtreme Machines manufactures high-performance industrial kneader machines for masterbatch, plastic, rubber, polymer, PVC and compounding industries across Ahmedabad, Surat, Vadodara, Rajkot and all major cities of Gujarat.",
      image: "https://www.xtrememachines.in/wp-content/uploads/2024/01/kneader-machine.webp",
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
      keywords: [
        "Kneader Machine in Gujarat",
        "Kneader Machine Manufacturer in Gujarat",
        "Industrial Kneader Machine Gujarat",
        "Masterbatch Kneader Machine",
        "Plastic Processing Machine Gujarat",
        "Rubber Kneader Machine",
        "Dispersion Kneader Machine",
        "Kneader Machine Ahmedabad",
        "Kneader Machine Surat",
        "Kneader Machine Vadodara",
      ],
      articleSection: "Industrial Machinery",
      about: {
        "@type": "Thing",
        name: "Kneader Machine Manufacturing",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.xtrememachines.in/kneader-machine-in-gujarat#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why choose Xtreme Machines as a Kneader Machine Manufacturer in Gujarat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Xtreme Machines is a trusted Kneader Machine Manufacturer in Gujarat, offering high-performance kneader machines for plastic, rubber, masterbatch, and polymer processing industries. Our machines are designed for efficient mixing, consistent output, low maintenance, and long-term industrial performance.",
          },
        },
        {
          "@type": "Question",
          name: "Which cities in Gujarat do you supply Kneader Machines to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We supply Kneader Machines across Ahmedabad, Vadodara, Surat, Rajkot, Bhavnagar, Gandhinagar, Vapi, Bharuch, Ankleshwar, Morbi, Jamnagar, Mehsana, and other industrial cities in Gujarat. We also provide installation assistance and after-sales support.",
          },
        },
        {
          "@type": "Question",
          name: "Which industries use your Kneader Machines in Gujarat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our Kneader Machines in Gujarat are widely used in masterbatch manufacturing, plastic compounding, PVC processing, rubber industries, cable compounds, engineering plastics, EVA compounds, TPR compounds, and filler masterbatch production for consistent material mixing.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide customized Kneader Machines in Ahmedabad, Surat, and Vadodara?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We manufacture customized Kneader Machines in Ahmedabad, Surat, Vadodara, and across Gujarat based on your production capacity, raw material type, automation requirements, and industrial application to ensure maximum productivity.",
          },
        },
        {
          "@type": "Question",
          name: "What production capacities are available for Kneader Machines in Gujarat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our Industrial Kneader Machines in Gujarat are available in multiple production capacities to suit small, medium, and large manufacturing units. We help customers choose the right machine according to production volume, material formulation, and future expansion requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How do I select the best Kneader Machine Manufacturer in Gujarat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When selecting a Kneader Machine Manufacturer in Gujarat, consider manufacturing experience, machine quality, customization options, energy efficiency, technical support, spare parts availability, and after-sales service. Xtreme Machines offers complete support from machine selection to installation.",
          },
        },
        {
          "@type": "Question",
          name: "What are the advantages of installing a Kneader Machine for Masterbatch Manufacturing in Gujarat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A high-quality Kneader Machine for Masterbatch Manufacturing in Gujarat improves filler dispersion, enhances mixing quality, reduces material wastage, increases production efficiency, and delivers uniform output for plastic and polymer processing industries.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide installation and after-sales support for Kneader Machines in Gujarat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Xtreme Machines provides complete installation, commissioning, operator guidance, technical assistance, spare parts support, and after-sales service for Kneader Machines across Gujarat, ensuring smooth machine operation and minimal production downtime.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Why choose Xtreme Machines as a Kneader Machine Manufacturer in Gujarat?",
    answer:
      "Xtreme Machines is a trusted Kneader Machine Manufacturer in Gujarat, offering high-performance kneader machines for plastic, rubber, masterbatch, and polymer processing industries. Our machines are designed for efficient mixing, consistent output, low maintenance, and long-term industrial performance.",
  },
  {
    question: "Which cities in Gujarat do you supply Kneader Machines to?",
    answer:
      "We supply Kneader Machines across Ahmedabad, Vadodara, Surat, Rajkot, Bhavnagar, Gandhinagar, Vapi, Bharuch, Ankleshwar, Morbi, Jamnagar, Mehsana, and other industrial cities in Gujarat. We also provide installation assistance and after-sales support.",
  },
  {
    question: "Which industries use your Kneader Machines in Gujarat?",
    answer:
      "Our Kneader Machines in Gujarat are widely used in masterbatch manufacturing, plastic compounding, PVC processing, rubber industries, cable compounds, engineering plastics, EVA compounds, TPR compounds, and filler masterbatch production for consistent material mixing.",
  },
  {
    question: "Do you provide customized Kneader Machines in Ahmedabad, Surat, and Vadodara?",
    answer:
      "Yes. We manufacture customized Kneader Machines in Ahmedabad, Surat, Vadodara, and across Gujarat based on your production capacity, raw material type, automation requirements, and industrial application to ensure maximum productivity.",
  },
  {
    question: "What production capacities are available for Kneader Machines in Gujarat?",
    answer:
      "Our Industrial Kneader Machines in Gujarat are available in multiple production capacities to suit small, medium, and large manufacturing units. We help customers choose the right machine according to production volume, material formulation, and future expansion requirements.",
  },
  {
    question: "How do I select the best Kneader Machine Manufacturer in Gujarat?",
    answer:
      "When selecting a Kneader Machine Manufacturer in Gujarat, consider manufacturing experience, machine quality, customization options, energy efficiency, technical support, spare parts availability, and after-sales service. Xtreme Machines offers complete support from machine selection to installation.",
  },
  {
    question: "What are the advantages of installing a Kneader Machine for Masterbatch Manufacturing in Gujarat?",
    answer:
      "A high-quality Kneader Machine for Masterbatch Manufacturing in Gujarat improves filler dispersion, enhances mixing quality, reduces material wastage, increases production efficiency, and delivers uniform output for plastic and polymer processing industries.",
  },
  {
    question: "Do you provide installation and after-sales support for Kneader Machines in Gujarat?",
    answer:
      "Yes. Xtreme Machines provides complete installation, commissioning, operator guidance, technical assistance, spare parts support, and after-sales service for Kneader Machines across Gujarat, ensuring smooth machine operation and minimal production downtime.",
  },
];

const KneaderMachineinGujarat = () => {
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
        title="Kneader Machine in Gujarat & Kerala regions | Xtreme Machines"
        description="Leading Kneader Machine Manufacturer in Gujarat , Kochi, Kottayam, Vadodara, Daman, Valsad, Vapi & Umbergaon. Durable, custom-built machines by Xtreme Machines."
        canonical="https://www.xtrememachines.in/kneader-machine-in-gujarat/"
        schema={kneaderGujaratSchema}
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
                Kneader Machine Manufacturer in Gujarat –
                <span className="text-[#E2010E]">
                  Kochi, Kottayam, Vadodara, Daman, Valsad, Vapi & Umbergaon
                </span>
              </h1>

              <p className="mt-6 text-lg leading-loose text-black">
                Finding a reliable{" "}
                <strong>Kneader Machine Manufacturer in Gujarat</strong> is one
                of the most important decisions for businesses involved in
                rubber, chemical, adhesive, and compound processing. The quality
                of your kneader machine directly impacts your production
                consistency, output efficiency, and long-term operational costs.
                Whether you're based in{" "}
                <strong>
                  Gujarat's industrial belt — Vadodara, Daman, Valsad, Vapi,
                  Umbergaon — or in Kerala's manufacturing hubs like Kochi and
                  Kottayam,
                </strong>{" "}
                choosing the right manufacturer with proven engineering
                expertise makes all the difference.
              </p>

              <p className="mt-6 text-lg leading-loose text-black">
                At <strong>Xtreme Machines</strong>, we specialize in designing
                and manufacturing high-performance kneader machines built for
                durability, precision mixing, and long-term reliability —
                trusted by manufacturers across India's key industrial regions.
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
            <h2 className="text-[#E2010E] text-3xl mt-3 font-semibold uppercase tracking-[3px]">
              What is a Kneader Machine?
            </h2>
            <p className="mt-3 text-lg leading-loose text-black">
              A Kneader Machine is a heavy-duty industrial mixing equipment used
              to blend, knead, and homogenize highly viscous materials such as
              rubber compounds, silicone, adhesives, sealants, chemical pastes,
              and polymer blends. The machine works using twin rotating blades
              (sigma or Z-blade rotors) inside a mixing chamber, which apply
              intense mechanical shear to achieve uniform dispersion of fillers,
              additives, and pigments within the base material.
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              Kneader machines are widely used across:
            </p>
            <ul className="list-disc mt-2 pl-5">
              <li className="py-2 text-1xl">
                Rubber compounding and tyre manufacturing
              </li>
              <li className="py-2 text-1xl">Adhesive and sealant production</li>
              <li className="py-2 text-1xl">Silicone rubber processing</li>
              <li className="py-2 text-1xl">
                Chemical paste and pigment manufacturing
              </li>
              <li className="py-2 text-1xl">
                Cable compound and insulation material production
              </li>
              <li className="py-2 text-1xl">
                Plastic and polymer compounding units
              </li>
              <li className="py-2 text-1xl">
                Pharmaceutical and food-grade paste processing (with specialized
                configurations)
              </li>
            </ul>

            <h3 className="text-[#E2010E] text-2xl mt-3 font-semibold uppercase tracking-[3px]">
              Why Xtreme Machines is a Trusted Kneader Machine Manufacturer
            </h3>
            <p className="mt-3 text-lg leading-loose text-black">
              Choosing the right manufacturer goes beyond just comparing machine
              specifications on paper. It's about long-term dependability,
              engineering precision, and strong after-sales support. Here's what
              makes <strong>Xtreme Machines</strong> a preferred choice for
              manufacturers across Gujarat and Kerala:
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>1. Precision Engineering & Durable Build</strong>
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              Every Xtreme Machines kneader is built using high-grade steel
              components and precision-machined parts, ensuring consistent
              mixing performance even under continuous, heavy industrial use.
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>2. Customized Machine Configurations</strong>
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              We understand that no two production units are the same. Xtreme
              Machines offers customizable batch capacities, rotor designs, and
              heating/cooling systems tailored to your specific material type
              and output requirements.
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>3. Energy-Efficient Operation</strong>
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              Our kneader machines are engineered with optimized motor and
              heating systems to reduce power consumption without compromising
              on mixing quality — helping you lower operational costs over time.
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>3. Energy-Efficient Operation</strong>
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              Our kneader machines are engineered with optimized motor and
              heating systems to reduce power consumption without compromising
              on mixing quality — helping you lower operational costs over time.
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>4. Strong Regional Service Network</strong>
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              From Kochi to Vadodara, Xtreme Machines provides installation
              support, operator training, and responsive technical assistance
              across all major industrial regions we serve.
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>5. Genuine Spare Parts & Fast Support</strong>
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              We ensure minimal production downtime with easily available spare
              parts and a dedicated technical support team ready to resolve
              issues quickly.
            </p>

            <h4 className="text-[#E2010E] text-xl mt-3 font-semibold uppercase tracking-[3px]">
              Kneader Machine Solutions Across Gujarat & Kerala
            </h4>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>Kneader Machine in Kochi</strong>
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              Kochi's growing industrial base, especially in rubber processing
              and chemical manufacturing, requires dependable and efficient
              kneading equipment. Xtreme Machines supplies kneader machines in
              Kochi designed to handle high-viscosity compounds with consistent
              quality, backed by dedicated local installation and service
              support.
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>Kneader Machine in Kottayam</strong>
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              Kottayam, known for its strong presence in rubber-based industries
              due to Kerala's natural rubber production, relies heavily on
              efficient compounding machinery. Our kneader machines in Kottayam
              are built to deliver uniform mixing quality, helping local
              manufacturers maintain high product standards batch after batch.
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>Kneader Machine in Vadodara</strong>
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              As one of Gujarat's major industrial and chemical manufacturing
              hubs, Vadodara hosts numerous rubber, adhesive, and chemical
              processing units. Xtreme Machines' kneader machines in Vadodara
              are engineered to withstand demanding production cycles, offering
              manufacturers the durability and precision mixing required for
              large-scale operations.
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>Kneader Machine in Daman</strong>
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              Daman's industrial zone, home to several chemical and plastic
              processing units, benefits from Xtreme Machines' reliable and
              efficient kneader machines. We provide tailored machine
              configurations in Daman to match specific production capacities
              and material requirements.
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>Kneader Machine in Valsad</strong>
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              Valsad's expanding manufacturing sector, particularly in chemical
              and rubber compounding, requires consistent and dependable mixing
              equipment. Xtreme Machines' kneader machines in Valsad are
              designed for smooth, uniform dispersion, ensuring reliable
              production output for local businesses.
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>Kneader Machine in Vapi</strong>
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              Vapi, one of Gujarat's most industrially dense regions with a
              strong chemical and pharmaceutical manufacturing base, demands
              high-performance kneading equipment. Our kneader machines in Vapi
              are built to handle complex compound formulations with precision
              and consistency.
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>Kneader Machine in Umbergaon</strong>
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              Umbergaon's growing industrial units, particularly in rubber and
              chemical processing, rely on Xtreme Machines for dependable
              kneader solutions. We offer customized machine capacities in
              Umbergaon designed to match diverse production needs, from
              small-scale units to larger manufacturing setups.
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>Kneader Machine in Gujarat</strong>
            </p>

            <p className="mt-3 text-lg leading-loose text-black">
              Across Gujarat's broader industrial landscape — one of India's
              largest manufacturing and chemical processing states — Xtreme
              Machines offers a comprehensive range of kneader machines suited
              to various industries, including rubber, chemicals, adhesives, and
              plastics. With dedicated regional support across the state, we
              help manufacturers achieve consistent, high-quality output at
              scale.
            </p>

            <h5 className="text-[#E2010E] text-xl mt-3 font-semibold uppercase tracking-[3px]">
              Key Features of Xtreme Machines' Kneader Machines
            </h5>

            <ul className="list-disc mt-2 pl-5">
              <li className="py-2 text-1xl">
                <strong>Heavy-Duty Sigma/Z-Blade Rotors –</strong> Ensures
                thorough, uniform mixing even for high-viscosity and
                hard-to-process compounds.
              </li>
              <li className="py-2 text-1xl">
                <strong>Precision Temperature Control –</strong> Integrated
                heating and cooling jackets maintain optimal processing
                temperatures throughout the mixing cycle, improving product
                consistency.
              </li>
              <li className="py-2 text-1xl">
                <strong>Sturdy Sealed Mixing Chamber –</strong> Minimizes
                material loss and contamination risk, ensuring reliable product
                quality across every batch.
              </li>
              <li className="py-2 text-1xl">
                <strong>Hydraulic Tilting & Discharge Systems –</strong>{" "}
                Available for faster, safer, and more efficient material
                unloading.
              </li>
              <li className="py-2 text-1xl">
                <strong>Advanced Safety Interlocks –</strong> Built-in safety
                mechanisms protect operators during high-torque mixing
                operations.
              </li>
              <li className="py-2 text-1xl">
                <strong>Customizable Batch Capacities –</strong> Available in a
                range of sizes to suit small-scale processing units as well as
                large industrial production lines.
              </li>
              <li className="py-2 text-1xl">
                <strong>Low Maintenance Design –</strong> Engineered for easy
                access to key components, reducing maintenance time and costs.
              </li>
            </ul>

            <h5 className="text-[#E2010E] text-xl mt-3 font-semibold uppercase tracking-[3px]">
              Factors That Influence Kneader Machine Pricing
            </h5>

            <p className="mt-3 text-lg leading-loose text-black">
              If you're comparing quotations from different manufacturers, here
              are the key factors that affect pricing:
            </p>

            <ol className="list-decimal mt-2 pl-5">
              <li className="py-2 text-1xl">
                <strong>Batch Capacity – </strong> Larger mixing chambers with
                higher output capacity are priced higher due to increased
                material and engineering requirements.
              </li>
              <li className="py-2 text-1xl">
                <strong>Rotor & Chamber Material Quality – </strong> Machines
                built with wear-resistant, high-grade steel components cost more
                upfront but offer significantly longer service life and reduced
                maintenance.
              </li>
              <li className="py-2 text-1xl">
                <strong>Automation Level – </strong> Manual, semi-automatic, and
                fully automatic control systems vary in price based on the
                extent of process automation included.
              </li>
              <li className="py-2 text-1xl">
                <strong>Heating/Cooling System Type – </strong> Advanced
                temperature control systems increase machine cost but greatly
                improve mixing consistency and product quality.
              </li>
              <li className="py-2 text-1xl">
                <strong>Customization Requirements – </strong> Machines built
                for specific material types, unusual batch sizes, or specialized
                discharge systems may involve additional engineering costs.
              </li>
              <li className="py-2 text-1xl">
                <strong>After-Sales Support & Warranty Coverage –</strong>{" "}
                Manufacturers like Xtreme Machines that offer strong service
                networks and comprehensive warranty coverage provide better
                long-term value, even if the upfront investment is slightly
                higher.
              </li>
            </ol>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>Tip:</strong> Always request a detailed, itemized
              quotation that separates machine cost, installation charges,
              training, and warranty terms — this makes it much easier to
              compare manufacturers on a like-for-like basis rather than just
              comparing headline prices.
            </p>

            <h5 className="text-[#E2010E] text-xl mt-3 font-semibold uppercase tracking-[3px]">
              How to Choose the Right Kneader Machine Manufacturer
            </h5>

            <p className="mt-3 text-lg leading-loose text-black">
              Before finalizing your purchase decision, run through this
              checklist:
            </p>

            <ul className="list-disc mt-2 pl-5">
              <li className="py-2 text-1xl">
                Does the manufacturer have proven experience in your specific
                industry (rubber, chemicals, cable compounds, adhesives, etc.)?
              </li>
              <li className="py-2 text-1xl">
                Can they customize the machine based on your material type,
                viscosity, and required production volume?
              </li>
              <li className="py-2 text-1xl">
                Do they offer regional installation and after-sales support in
                your city or state
              </li>
              <li className="py-2 text-1xl">
                Are genuine spare parts readily available, and how quickly can
                technical issues be resolved?
              </li>
              <li className="py-2 text-1xl">
                Does the manufacturer provide a clear warranty and service
                agreement?
              </li>
              <li className="py-2 text-1xl">
                Can you visit their facility or request a live demonstration
                before purchasing?
              </li>
            </ul>

            <p className="mt-3 text-lg leading-loose text-black">
              <strong>Xtreme Machines</strong> checks all these boxes, making us
              a dependable choice for manufacturers across Kochi, Kottayam,
              Vadodara, Daman, Valsad, Vapi, Umbergaon, and the wider Gujarat
              industrial region.
            </p>

            <h5 className="text-[#E2010E] text-xl mt-3 font-semibold uppercase tracking-[3px]">
              Semi-Automatic vs Fully Automatic Kneader Machines
            </h5>

            <div className="overflow-x-auto rounded-xl mt-5 border border-gray-200 shadow-sm">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                      Factor
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                      Semi-Automatic
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                      Fully Automatic
                    </th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">
                  {[
                    {
                      factor: "Initial Investment",
                      semi: "Lower",
                      fully: "Higher",
                    },
                    {
                      factor: "Labor Requirement",
                      semi: "Higher",
                      fully: "Lower",
                    },
                    {
                      factor: "Production Consistency",
                      semi: "Good",
                      fully: "Excellent",
                    },
                    {
                      factor: "Best Suited For",
                      semi: "Small/Medium Businesses",
                      fully: "Large-Scale Continuous Production",
                    },
                    {
                      factor: "Maintenance Complexity",
                      semi: "Lower",
                      fully: "Higher",
                    },
                  ].map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4 font-semibold text-[#E2010E] w-[30%]">
                        {item.factor}
                      </td>
                      <td className="px-6 py-4 text-black w-[30%]">
                        {item.semi}
                      </td>
                      <td className="px-6 py-4 text-black w-[40%]">
                        {item.fully}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-lg leading-loose text-black">
              Xtreme Machines offers both semi-automatic and fully automatic
              kneader machine variants, allowing businesses to choose based on
              their current production scale — with the flexibility to upgrade
              as operations grow.
            </p>

            <h5 className="text-[#E2010E] text-xl mt-3 font-semibold uppercase tracking-[3px]">
              Why Manufacturers Across Gujarat & Kerala Trust Xtreme Machines
            </h5>

            <p className="mt-3 text-lg leading-loose text-black">
              With years of engineering expertise and an unwavering focus on
              quality, Xtreme Machines has established itself as a dependable
              name in industrial kneading and mixing equipment manufacturing.
              Our commitment to precision engineering, customer-focused service,
              and strong regional support across Gujarat and Kerala ensures that
              businesses — regardless of location or industry — get access to
              reliable, high-performing kneader machines built to match their
              exact production needs. Whether you're setting up a new
              compounding line or upgrading your existing mixing equipment,
              Xtreme Machines offers the technical expertise, machine
              durability, and dedicated after-sales support needed to keep your
              production running smoothly, batch after batch.
            </p>

            <h5 className="text-[#E2010E] text-xl mt-3 font-semibold uppercase tracking-[3px]">
              Get in Touch with Xtreme Machines
            </h5>

            <p className="mt-3 text-lg leading-loose text-black">
              Looking for a dependable{" "}
              <strong>Kneader Machine Manufacturer</strong> in Kochi, Kottayam,
              Vadodara, Daman, Valsad, Vapi, Umbergaon, or anywhere across
              Gujarat? Contact the Xtreme Machines team today to discuss your
              production requirements, request a customized quotation, and learn
              more about our complete range of industrial kneading solutions.
            </p>
          </div>

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
      </section>

      {/* IMAGE GALLERY */}
      <section className="bg-[rgb(255,255,255)] mx-auto px-5 lg:px-7 mb-6">
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
};

export default KneaderMachineinGujarat;
