import { useState } from "react";
import contact_banner from "../assets/contact_banner.webp";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
  FaBuilding,
  FaChartBar,
  FaUniversity,
  FaFileInvoice,
  FaBalanceScale,
  FaIdCard,
} from "react-icons/fa";

function ContactUs() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = "New Inquiry From Website";

    const body = `
      First Name: ${formData.first_name}

      Last Name: ${formData.last_name}

      Email: ${formData.email}

      Phone: ${formData.phone}

      Message:
      ${formData.message}
          `;

      window.location.href = `mailto:info@xtrememachines.in?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
    };

  return (
    <>
      {/* BANNER */}
      <section className="w-full relative">
        {/* IMAGE */}
        <img
          src={contact_banner}
          alt="banner"
          className="w-full h-120 object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-300 mx-auto bg-white shadow-md grid grid-cols-1 lg:grid-cols-[360px_1fr]">
          {/* LEFT SIDE */}
          <div className="bg-[#082542] p-10">
            {/* CONTACT BOX */}

            <div className="bg-white p-5 flex gap-4 mb-4">
              <div className="w-11 h-11 rounded-full bg-[#ff5c0a] flex items-center justify-center text-white text-sm">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="text-[16px] font-bold text-black mb-1">
                  Contact Number
                </h3>

                <div className="text-[#667085] text-[16px] leading-7">
                  <a
                    href="tel:+919810322070"
                    className="block hover:text-[#ff5c0a] transition"
                  >
                    +91 981-032-2070
                  </a>

                  <a
                    href="tel:+919873300087"
                    className="block hover:text-[#ff5c0a] transition"
                  >
                    +91 987-330-0087
                  </a>
                </div>
              </div>
            </div>

            {/* EMAIL BOX */}
            <div className="bg-white p-5 flex gap-4 mb-4">
              <div className="w-11 h-11 rounded-full bg-[#ff5c0a] flex items-center justify-center text-white text-sm">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-[16px] font-bold text-black mb-1">Email</h3>

                <a
                  href="mailto:info@xtrememachines.in"
                  className="text-[#667085] text-[16px] hover:text-[#ff5c0a] transition break-all"
                >
                  info@xtrememachines.in
                </a>
              </div>
            </div>

            {/* ADDRESS BOX */}
            <div className="bg-white p-5 flex gap-4 mb-5">
              <div className="w-11 h-11 rounded-full bg-[#ff5c0a] flex items-center justify-center text-white text-sm">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-[16px] font-bold text-black mb-1">
                  Address
                </h3>

                <p className="text-[#667085] text-[16px] leading-7">
                  Plot No. 72/6, Khasra No.
                  <br />
                  72/9/2/1, Metro Pillar #485,
                  <br />
                  Swarn Park, Mundka,
                  <br />
                  New Delhi 110 041 (INDIA)
                </p>
              </div>
            </div>

            {/* SOCIAL */}
            <h3 className="text-white text-[18px] font-bold mb-4">
              Get In Touch
            </h3>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/Xtreme-Machines/61561599418906/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#3b5998] flex items-center justify-center text-white text-sm rounded hover:scale-110 transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.youtube.com/@xtrememachines134"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#ff0000] flex items-center justify-center text-white text-sm rounded hover:scale-110 transition duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-10">
            <h2 className="text-[42px] font-bold text-black mb-4 leading-tight">
              Needs Help? Let’s Get in Touch
            </h2>

            <p className="text-[#667085] text-[16px] leading-8 mb-8">
              We will get back to you as soon as possible. Your satisfaction is
              our priority.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div>
                <label className="text-[14px] font-semibold text-black block mb-3">
                  Name <span className="text-red-500">*</span>
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="first_name"
                      onChange={handleChange}
                      className="w-full h-11 border border-[#d0d5dd] px-4 text-[14px] outline-none"
                    />
                    <span className="text-[12px] text-[#667085] mt-1 block">
                      First
                    </span>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="last_name"
                      onChange={handleChange}
                      className="w-full h-11 border border-[#d0d5dd] px-4 text-[14px] outline-none"
                    />
                    <span className="text-[12px] text-[#667085] mt-1 block">
                      Last
                    </span>
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-[14px] font-semibold text-black block mb-3">
                  Email <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="w-full h-11 border border-[#d0d5dd] px-4 text-[14px] outline-none"
                />
              </div>

              {/* NUMBER */}
              <div>
                <label className="text-[14px] font-semibold text-black block mb-3">
                  Numbers <span className="text-red-500">*</span>
                </label>

                <input
                  type="number"
                  name="phone"
                  onChange={handleChange}
                  className="w-full h-11 border border-[#d0d5dd] px-4 text-[14px] outline-none"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-[14px] font-semibold text-black block mb-3">
                  Comment or Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  onChange={handleChange}
                  className="w-full border border-[#d0d5dd] p-4 text-[14px] outline-none resize-none"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="bg-[#0073aa] hover:bg-[#005f8d] text-white text-[15px] font-medium px-8 py-3 rounded transition duration-300 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* TOP INFO SECTION */}
      <section className="bg-[#082542] py-14">
        <div className="max-w-312.5 mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-16">
            {/* ITEM */}
            <div className="flex items-start gap-4">
              <FaBuilding className="text-[#2d36ff] text-[22px] mt-1" />

              <div>
                <h3 className="text-white text-[20px] font-bold leading-7">
                  Nature Of Business
                </h3>

                <p className="text-white text-[18px] leading-8">
                  Exporter and Manufacturer
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4">
              <FaUniversity className="text-[#2d36ff] text-[22px] mt-1" />

              <div>
                <h3 className="text-white text-[20px] font-bold leading-7">
                  Year Of Establishment
                </h3>

                <p className="text-white text-[18px] leading-8">2008</p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4">
              <FaBalanceScale className="text-[#2d36ff] text-[22px] mt-1" />

              <div>
                <h3 className="text-white text-[20px] font-bold leading-7">
                  Legal Status of Firm
                </h3>

                <p className="text-white text-[18px] leading-8">
                  Individual-Proprietier
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4">
              <FaChartBar className="text-[#2d36ff] text-[22px] mt-1" />

              <div>
                <h3 className="text-white text-[20px] font-bold leading-7">
                  Annual Turnover
                </h3>

                <p className="text-white text-[18px] leading-8">
                  Up to 10-12 crore
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4">
              <FaFileInvoice className="text-[#2d36ff] text-[22px] mt-1" />

              <div>
                <h3 className="text-white text-[20px] font-bold leading-7">
                  Import Export Code
                </h3>

                <p className="text-white text-[18px] leading-8">05090****</p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4">
              <FaIdCard className="text-[#2d36ff] text-[22px] mt-1" />

              <div>
                <h3 className="text-white text-[20px] font-bold leading-7">
                  GST NO.
                </h3>

                <p className="text-white text-[18px] leading-8">
                  07AVCPS8642K1Z1
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full mb-16 mt-6">
        <iframe
          src="https://www.google.com/maps?q=Xtreme+Machines+Mundka+Delhi&output=embed"
          width="100%"
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        ></iframe>
      </section>
    </>
  );
}

export default ContactUs;
