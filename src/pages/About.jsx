// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SEO from "../component/SEO";

import "swiper/css";
import aboutBanner from "../assets/about-banner.jpeg";
import infrastructureImg from "../assets/infrastructure_companyAlbum.webp";
import warehouseImg from "../assets/warehouse_companyAlbum.webp";
import productionVideo from "../assets/video/production_companyAlbum.mp4";
import warehouse1 from "../assets/warehouse1.webp";
import warehouse2 from "../assets/warehouse2.webp";
import warehouse3 from "../assets/warehouse3.webp";
import warehouse4 from "../assets/warehouse4.webp";

import packaging1 from "../assets/packaging1.webp";
import packaging2 from "../assets/packaging2.webp";
import packaging3 from "../assets/packaging3.webp";
import packaging4 from "../assets/packaging4.webp";
import packaging5 from "../assets/packaging5.webp";
import packaging6 from "../assets/packaging6.webp";

import manufacturing1 from "../assets/video/manufacturing1.mp4";
import manufacturing2 from "../assets/video/manufacturing2.mp4";
import manufacturing3 from "../assets/video/manufacturing3.mp4";
import manufacturing4 from "../assets/video/manufacturing4.mp4";
import manufacturing5 from "../assets/video/manufacturing5.mp4";
import manufacturing6 from "../assets/video/manufacturing6.mp4";
import manufacturing7 from "../assets/video/manufacturing7.mp4";

import award1 from "../assets/award1.webp";
import award2 from "../assets/award2.webp";
import award3 from "../assets/award3.webp";
import award4 from "../assets/award4.webp";
import award5 from "../assets/award5.webp";
import award6 from "../assets/award6.webp";
import award7 from "../assets/award7.webp";
import award8 from "../assets/award8.webp";
import award9 from "../assets/award9.webp";

function About() {
  const awardImages = [
    award1,
    award2,
    award3,
    award4,
    award5,
    award6,
    award7,
    award8,
    award9,
  ];

  return (
    <>
      <SEO title="About Us" />
      {/* BANNER */}
      <section className="w-full">
        <img
          src={aboutBanner}
          alt="About Xtreme Machines - Plastic and Rubber Processing Machinery Manufacturer"
          className="w-full h-auto object-cover"
        />
      </section>

      <section className="bg-[#f5f7fb] py-20 px-6 lg:px-16">
        {/* HEADING */}
        <div className="text-center mb-14">
          <span className="text-[#E2010E] text-lg font-semibold uppercase tracking-[3px]">
            Company Profile
          </span>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-[18px] lg:rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white">
          <h1 className="text-[#0B0D26] text-[22px] sm:text-[26px] lg:text-3xl font-bold mt-4 mb-4 px-4 sm:px-6 lg:px-8">
            Basic Information
          </h1>

          <table className="w-full min-w-162.5 border-collapse">
            <tbody>
              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc] w-[40%] lg:w-[35%]">
                  Nature Of Business
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  Exporter and Manufacturer
                </td>
              </tr>

              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc]">
                  Additional Business
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  Supplier
                </td>
              </tr>

              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc]">
                  Proprietor
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  Kulwant Singh (Monty Singh)
                </td>
              </tr>

              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc] align-top">
                  Registered Address
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 leading-[1.8]">
                  Plot No. 72/6, Khasra No. 72/9/2/1, Metro Pillar #485, Swarn
                  Park, Mundka, Rohtak Road, New Delhi 110041 (INDIA)
                </td>
              </tr>

              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc]">
                  Total Number Of Employees
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  30 to 34 Employees
                </td>
              </tr>

              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc]">
                  Year Of Establishment
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 leading-[1.8]">
                  1982 (Kneader House) <br />
                  Present (Xtreme Machines)
                </td>
              </tr>

              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc]">
                  Legal Status Of Firm
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  Individual — Proprietor
                </td>
              </tr>

              <tr>
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc]">
                  Annual Turnover
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  10-12 Crore
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto rounded-[18px] lg:rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white mt-6">
          <h3 className="text-[#0B0D26] text-[22px] sm:text-[26px] lg:text-3xl font-bold mt-4 mb-4 px-4 sm:px-6 lg:px-8">
            Trade & Market
          </h3>

          <table className="w-full min-w-162.5 border-collapse">
            <tbody>
              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc] w-[40%] lg:w-[35%]">
                  Export Percentage
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  25%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto rounded-[18px] lg:rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white mt-6">
          <h3 className="text-[#0B0D26] text-[22px] sm:text-[26px] lg:text-3xl font-bold mt-4 mb-4 px-4 sm:px-6 lg:px-8">
            Infrastructure
          </h3>

          <table className="w-full min-w-162.5 border-collapse">
            <tbody>
              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc] w-[40%] lg:w-[35%]">
                  Location Type
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  Urban
                </td>
              </tr>

              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc] w-[40%] lg:w-[35%]">
                  Size of Premises
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  1600 Sq. Yard
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto rounded-[18px] lg:rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white mt-6">
          <h3 className="text-[#0B0D26] text-[22px] sm:text-[26px] lg:text-3xl font-bold mt-4 mb-4 px-4 sm:px-6 lg:px-8">
            Company USP
          </h3>

          <table className="w-full min-w-162.5 border-collapse">
            <tbody>
              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc] w-[40%] lg:w-[35%] align-top">
                  Primary Competative Advantage
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  <ul className="space-y-2 leading-[1.8]">
                    <li>Experienced R & D Department</li>
                    <li>Good Financial Position & TQM</li>
                    <li>Large Product Line</li>
                    <li>Large Production Capacity</li>
                    <li>Provide Customized Solutions</li>
                  </ul>
                </td>
              </tr>

              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc] w-[40%] lg:w-[35%]">
                  Contract Manufacturing
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  Buyer Label Offered
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto rounded-[18px] lg:rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white mt-6">
          <h3 className="text-[#0B0D26] text-[22px] sm:text-[26px] lg:text-3xl font-bold mt-4 mb-4 px-4 sm:px-6 lg:px-8">
            Statutory Profile
          </h3>

          <table className="w-full min-w-162.5 border-collapse">
            <tbody>
              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc] w-[40%] lg:w-[35%]">
                  Import and Export Code(IEC)
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  05120***
                </td>
              </tr>

              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc] w-[40%] lg:w-[35%] align-top">
                  Banker
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  <ul className="space-y-2 leading-[1.8]">
                    <li>PUNJAB NATIONAL BANK</li>
                    <li>KOTAK MAHINDRA BANK</li>
                  </ul>
                </td>
              </tr>

              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc] w-[40%] lg:w-[35%]">
                  GST No.
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  07AVCPS8642K1Z1
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto rounded-[18px] lg:rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white mt-6">
          <h3 className="text-[#0B0D26] text-[22px] sm:text-[26px] lg:text-3xl font-bold mt-4 mb-4 px-4 sm:px-6 lg:px-8">
            Packaging/Payment and Shipping Details
          </h3>

          <table className="w-full min-w-162.5 border-collapse">
            <tbody>
              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc] w-[40%] lg:w-[35%]">
                  Customizing Packaging
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  Yes
                </td>
              </tr>

              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc] w-[40%] lg:w-[35%] align-top">
                  Payment Mode
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  <ul className="space-y-2 leading-[1.8]">
                    <li>Cheque</li>
                    <li>DD</li>
                    <li>Online</li>
                    <li>Bank Transfer</li>
                    <li>RTGS</li>
                    <li>Cash</li>
                    <li>Credit Card</li>
                  </ul>
                </td>
              </tr>

              <tr className="border-b border-[#e9edf5]">
                <td className="text-[#0B0D26] text-[14px] sm:text-[16px] lg:text-[20px] font-semibold px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 bg-[#f8fafc] w-[40%] lg:w-[35%] align-top">
                  Shipment Mode
                </td>

                <td className="text-[#5f6875] text-[14px] sm:text-[16px] lg:text-[19px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
                  <ul className="space-y-2 leading-[1.8]">
                    <li>By Air</li>
                    <li>By Road</li>
                    <li>By Sea</li>
                    <li>By Cargo</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* COMPANY ALBUM SECTION */}
      <section className="bg-[rgb(255,255,255)] py-20 px-6 lg:px-16">
        <div className="text-center mb-14">
          <span className="text-[#E2010E] text-3xl font-semibold uppercase tracking-[3px]">
            Company Album
          </span>
        </div>

        {/* ALBUM CARDS */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* CARD 1 */}
          <div className="w-full md:w-[31%] text-center">
            <div className="overflow-hidden">
              <video controls className="w-full h-70 object-cover">
                <source src={productionVideo} type="video/mp4" />
              </video>
            </div>

            <h3 className="text-[#000000] text-2xl font-bold mt-6">
              Production House
            </h3>
          </div>

          {/* CARD 2 */}
          <div className="w-full md:w-[31%] text-center">
            <div className="overflow-hidden">
              <img
                src={infrastructureImg}
                alt="Infrastructure"
                className="w-full h-70 object-cover"
              />
            </div>

            <h3 className="text-[#000000] text-2xl font-bold mt-6">
              Our Infrastructure
            </h3>
          </div>

          {/* CARD 3 */}
          <div className="w-full md:w-[31%] text-center">
            <div className="overflow-hidden">
              <img
                src={warehouseImg}
                alt="Warehouse"
                className="w-full h-70 object-cover"
              />
            </div>

            <h3 className="text-[#000000] text-2xl font-bold mt-6">
              Our Warehouse
            </h3>
          </div>
        </div>
      </section>

      {/* OUR INFRASTRUCTURE SECTION */}
      <section className="bg-[rgb(245,245,245)] py-20 px-6 lg:px-16">
        {/* HEADING */}
        <div className="text-center mb-14">
          <span className="text-[#E2010E] text-3xl font-semibold uppercase tracking-[3px]">
            Our Infrastructure
          </span>
        </div>

        {/* CONTENT */}
        <div className="flex flex-wrap items-start gap-12">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[48%]">
            <img
              src={infrastructureImg}
              alt="Infrastructure"
              className="w-full h-130 object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[46%]">
            <p className="text-[#1d1d1d] text-[18px] leading-10">
              At Xtreme Machines, we pride ourselves on being at the forefront
              of innovation and technology in the production of engineering
              machines. Our commitment to excellence is reflected in our
              state-of-the-art machinery and sophisticated technology, which
              enable us to manufacture premium quality Rubber and Plastic
              Processing Machines. As a leading manufacturer, exporter, and
              supplier in the industry, we have established a strong clientele
              worldwide.
            </p>

            {/* LIST */}
            <div className="mt-4 space-y-4">
              <p className="text-[18px] text-[#5a5a5a]">Services after Sales</p>

              <p className="text-[16px] text-[#5a5a5a]">
                Commitment to Excellence:
              </p>

              <p className="text-[16px] text-[#5a5a5a]">
                Global Industry Leader
              </p>

              <p className="text-[16px] text-[#5a5a5a]">
                Comprehensive Product Range
              </p>

              <p className="text-[16px] text-[#5a5a5a]">
                Customer Satisfaction:
              </p>

              <p className="text-[16px] text-[#5a5a5a]">
                Innovation and Continuous Improvement:
              </p>

              <p className="text-[16px] text-[#5a5a5a]">
                Dedication to Quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY COMPLIANCE SECTION */}
      <section className="bg-[#ffffff] py-20 px-6 lg:px-14">
        {/* HEADING */}
        <div className="text-center mb-14">
          <span className="text-[#E2010E] text-3xl font-semibold uppercase tracking-[3px]">
            Quality Compliance
          </span>
        </div>

        {/* CONTENT */}
        <div className="max-w-350 mx-auto">
          <ol className="list-decimal pl-8 space-y-8 mb-4">
            <li className="text-[#5a5a5a] text-[18px] leading-8">
              <span className="font-bold text-[#4a4a4a]">
                Stringent Quality Control Processes:
              </span>{" "}
              Xtreme Machines implements rigorous quality control processes at
              every stage of production. From raw material inspection to final
              product testing, each step is meticulously monitored to ensure
              that only products meeting the highest quality standards are
              released to the market.
            </li>

            <li className="text-[#5a5a5a] text-[18px] leading-8">
              <span className="font-bold text-[#4a4a4a]">
                Continuous Improvement Culture:
              </span>{" "}
              The company fosters a culture of continuous improvement, where
              employees are encouraged to identify areas for enhancement and
              implement corrective actions. By constantly refining its processes
              and procedures, Xtreme Machines strives for excellence and stays
              ahead of industry quality benchmarks.
            </li>

            <li className="text-[#5a5a5a] text-[18px] leading-8">
              <span className="font-bold text-[#4a4a4a]">
                Customer Feedback Integration:
              </span>{" "}
              Xtreme Machines places a strong emphasis on customer feedback and
              satisfaction. Feedback from customers is systematically collected
              and analyzed to identify areas for improvement. By incorporating
              customer insights into its quality management processes, the
              company ensures that its products consistently meet or exceed
              customer expectations.
            </li>

            <li className="text-[#5a5a5a] text-[18px] leading-8">
              <span className="font-bold text-[#4a4a4a]">
                Supplier Quality Assurance:
              </span>{" "}
              Xtreme Machines works closely with its suppliers to ensure the
              quality of raw materials and components used in its manufacturing
              processes. Supplier performance is closely monitored, and only
              trusted suppliers who consistently meet quality standards are
              retained, contributing to the overall quality compliance of the
              final products.
            </li>

            <li className="text-[#5a5a5a] text-[18px] leading-8">
              <span className="font-bold text-[#4a4a4a]">
                Regulatory Compliance:
              </span>{" "}
              Xtreme Machines adheres to all relevant regulatory requirements
              and industry standards governing the manufacturing of engineering
              machines. By staying abreast of regulatory changes and proactively
              updating its processes accordingly, the company ensures compliance
              with all applicable quality and safety regulations.
            </li>
          </ol>
        </div>
      </section>

      {/* OUR WAREHOUSE SECTION */}
      <section className="bg-[#f5f5f5] py-20 px-6 lg:px-16">
        {/* HEADING */}
        <div className="text-center mb-14">
          <span className="text-[#E2010E] text-3xl font-semibold uppercase tracking-[3px]">
            Our Warehouse
          </span>
        </div>

        {/* IMAGES */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <img
              src={warehouse1}
              alt="Xtreme Machines Warehouse Facility"
              className="w-full h-65 object-cover"
            />
          </div>

          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <img
              src={warehouse2}
              alt="Plastic Machinery Storage Area"
              className="w-full h-45 object-cover"
            />
          </div>

          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <img
              src={warehouse3}
              alt="Rubber Processing Machinery Warehouse"
              className="w-full h-45 object-cover"
            />
          </div>

          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <img
              src={warehouse4}
              alt="Finished Machinery Warehouse"
              className="w-full h-45 object-cover"
            />
          </div>
        </div>
      </section>

      {/* PACKAGING & LOADING SECTION */}
      <section className="bg-[#fffff] py-10 px-6 lg:px-16">
        {/* HEADING */}
        <div className="text-center mb-14">
          <span className="text-[#E2010E] text-3xl font-semibold uppercase tracking-[3px]">
            Packaging & Loading of the machine
          </span>
        </div>

        {/* IMAGES */}
        <div className="flex flex-wrap gap-6">
          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <img
              src={packaging1}
              alt="Plastic Machinery Packaging"
              className="w-full h-45 object-cover"
            />
          </div>

          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <img
              src={packaging2}
              alt="Industrial Machine Loading Process"
              className="w-full h-45 object-cover"
            />
          </div>

          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <img
              src={packaging3}
              alt="Export Packaging for Processing Machinery"
              className="w-full h-45 object-cover"
            />
          </div>

          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <img
              src={packaging4}
              alt="Export Packaging for Processing Machinery"
              className="w-full h-45 object-cover"
            />
          </div>

          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <img
              src={packaging5}
              alt="Export Packaging for Processing Machinery"
              className="w-full h-45 object-cover"
            />
          </div>

          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <img
              src={packaging6}
              alt="Export Packaging for Processing Machinery"
              className="w-full h-45 object-cover"
            />
          </div>
        </div>
      </section>

      {/* MANUFACTURING UNIT SECTION */}
      <section className="bg-[#f5f5f5] py-20 px-6 lg:px-16">
        {/* HEADING */}
        <div className="text-center mb-14">
          <span className="text-[#E2010E] text-3xl font-semibold uppercase tracking-[3px]">
            Manufacturing Unit
          </span>
        </div>

        {/* IMAGES */}
        <div className="flex flex-wrap gap-6">
          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <video controls className="w-full h-45 object-cover">
              <source src={manufacturing1} type="video/mp4" />
            </video>
          </div>

          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <video controls className="w-full h-45 object-cover">
              <source src={manufacturing2} type="video/mp4" />
            </video>
          </div>

          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <video controls className="w-full h-45 object-cover">
              <source src={manufacturing3} type="video/mp4" />
            </video>
          </div>

          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <video controls className="w-full h-45 object-cover">
              <source src={manufacturing4} type="video/mp4" />
            </video>
          </div>

          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <video controls className="w-full h-45 object-cover">
              <source src={manufacturing5} type="video/mp4" />
            </video>
          </div>

          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <video controls className="w-full h-45 object-cover">
              <source src={manufacturing6} type="video/mp4" />
            </video>
          </div>

          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <video controls className="w-full h-45 object-cover">
              <source src={manufacturing7} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENT & AWARDS SECTION */}
      <section className="bg-[#ffffff] py-20 px-6 lg:px-12">
        {/* HEADING */}
        <div className="text-center mb-14">
          <span className="text-[#E2010E] text-3xl font-semibold uppercase tracking-[3px]">
            Achievement and Awards
          </span>
        </div>

        {/* SWIPER SLIDER */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {awardImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img
                  src={img}
                  // alt={`award-${index}`}
                  alt="Xtreme Machines Industry Award"
                  className="w-full h-105 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default About;
