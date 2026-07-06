import client_banner from "../assets/client_banner.webp";
import { Link } from "react-router-dom";

import client1 from "../assets/client1.webp";
import client2 from "../assets/client2.webp";
import client3 from "../assets/client3.webp";
import client4 from "../assets/client4.webp";
import client5 from "../assets/client5.webp";
import client6 from "../assets/client6.webp";
import client7 from "../assets/client7.webp";
import client8 from "../assets/client8.webp";
import client9 from "../assets/client9.webp";
import client10 from "../assets/client10.webp";
import client11 from "../assets/client11.webp";
import client12 from "../assets/client12.webp";
import client13 from "../assets/client13.webp";
import client14 from "../assets/client14.webp";
import client15 from "../assets/client15.webp";
import client16 from "../assets/client16.webp";
import client17 from "../assets/client17.webp";
import client18 from "../assets/client18.webp";
import client19 from "../assets/client19.webp";
import client20 from "../assets/client20.webp";
import client21 from "../assets/client21.webp";
import client22 from "../assets/client21.webp";
import client23 from "../assets/client23.webp";
import client24 from "../assets/client24.webp";
import client25 from "../assets/client25.webp";
import client26 from "../assets/client26.webp";
import client27 from "../assets/client27.webp";
import client28 from "../assets/client28.webp";
import client29 from "../assets/client29.webp";
import client30 from "../assets/client30.webp";
import client31 from "../assets/client31.webp";
import client32 from "../assets/client32.webp";
import client33 from "../assets/client33.webp";
import client34 from "../assets/client34.webp";
import client35 from "../assets/client35.webp";
import client36 from "../assets/client36.webp";
import client37 from "../assets/client37.webp";
import client38 from "../assets/client38.webp";
import client39 from "../assets/client39.webp";
import client40 from "../assets/client40.webp";
import client41 from "../assets/client41.webp";
import client42 from "../assets/client42.webp";
import client43 from "../assets/client43.webp";
import client44 from "../assets/client44.webp";
import client45 from "../assets/client45.webp";
import client46 from "../assets/client46.webp";
import client47 from "../assets/client47.webp";
import client48 from "../assets/client48.webp";
import client49 from "../assets/client49.webp";
import client50 from "../assets/client50.webp";
import client51 from "../assets/client51.webp";
import client52 from "../assets/client52.webp";
import client53 from "../assets/client53.webp";
import client54 from "../assets/client54.webp";
import client55 from "../assets/client55.webp";
import client56 from "../assets/client56.webp";

function OurClients() {
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
    client12,
    client13,
    client14,
    client15,
    client16,
    client17,
    client18,
    client19,
    client20,
    client21,
    client22,
    client23,
    client24,
    client25,
    client26,
    client27,
    client28,
    client29,
    client30,
    client31,
    client32,
    client33,
    client34,
    client35,
    client36,
    client37,
    client38,
    client39,
    client40,
    client41,
    client42,
    client43,
    client44,
    client45,
    client46,
    client47,
    client48,
    client49,
    client50,
    client51,
    client52,
    client53,
    client54,
    client55,
    client56,
  ];

  return (
    <>
      {/* BANNER */}
      <section className="w-full relative">
        {/* IMAGE */}
        <img
          src={client_banner}
          alt="banner"
          className="w-full h-120 object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <h1 className="text-white text-4xl lg:text-6xl font-bold">
            Our Clients
          </h1>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-350 mx-auto px-6">
          {/* HEADING */}
          <h1 className="text-center text-[40px] lg:text-[50px] leading-tight font-semibold text-[#15185B] mb-16">
            Check our top partners & clients
          </h1>

          {/* GALLERY */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-[#e5e5e5]">
            {clients.map((client, index) => (
              <div
                key={index}
                className="border border-[#e5e5e5] bg-white h-52.5 flex items-center justify-center p-6 group overflow-hidden"
              >
                <img
                  src={client}
                  alt={`client-${index}`}
                  className="max-h-35 object-contain transition duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#ff4d2d] py-16 px-6">
        <div className="max-w-350 mx-auto flex flex-col lg:flex-row items-center align-items justify-center gap-10">
          {/* TEXT */}
          <div>
            <h2 className="text-white text-3xl lg:text-3xl font-semibold leading-tight max-w-237.5">
              We create for clients who value unique quality.
              <br />
              Projects can start from a simple sketch!
            </h2>
          </div>

          {/* BUTTON */}
          <div>
            <button className="bg-white text-black text-2xl font-medium px-12 py-4 rounded-md hover:bg-black hover:text-white transition duration-300 cursor-pointer">
             
              <Link
                  to="/contact-us"
                >
                 Contact Us
                </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurClients;
