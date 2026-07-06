import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0B0D26] text-white overflow-hidden">
      {/* TOP FOOTER */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 pt-[60px] lg:pt-[90px] pb-[50px] lg:pb-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-14">
          {/* ABOUT */}
          <div>
            <h3 className="text-[22px] font-bold mb-5">About</h3>

            <p className="text-[#b7bcc7] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.9] font-normal">
              An ISO 9001:2000 certified company;{" "}
              <span className="font-bold text-white">XTREME MACHINES</span> is a
              trusted name in the market for offering high quality Rubber and
              Plastic Processing Machinery. We are well-known Manufacturers and
              Exporters of Filler Pelletizing Lines, Dispersion Kneaders, Single
              Shaft Shredders, Die Face Cutters.
            </p>
          </div>

          {/* OFFICE ADDRESS */}
          <div>
            <h3 className="text-[22px] font-bold mb-5">Office Address</h3>

            <p className="text-[#E2010E] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.9]">
              Plot No. 72/6, Khasra No. 72/9/2/1, Metro Pillar #485, Swarn Park,
              Mundka, Rohtak Road, New Delhi 110 041 (INDIA)
            </p>

            <h3 className="text-[22px] font-bold mt-7 mb-4">Email ID</h3>

            <a
              href="mailto:info@xtrememachines.in"
              className="text-[#E2010E] text-[15px] sm:text-[16px] lg:text-[17px] break-all hover:text-white transition"
            >
              info@xtrememachines.in
            </a>

            <div className="mt-5">
              <a
                href="tel:+919810322070"
                className="block text-white text-[16px] sm:text-[17px] font-bold leading-[2] hover:text-[#E2010E] transition"
              >
                +91 981-032-2070
              </a>
              <a
                href="tel:+919873300087"
                className="block text-white text-[16px] sm:text-[17px] font-bold hover:text-[#E2010E] transition"
              >
                +91 987-330-0087
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[22px] font-bold mb-5">Quick Links</h3>

            <ul className="space-y-4 text-[#b7bcc7] text-[15px] sm:text-[16px] lg:text-[17px]">
              <li>
                <NavLink to="/" className="hover:text-[#E2010E] transition">
                  Compounding Line
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dispersion-kneader-machine"
                  className="hover:text-[#E2010E] transition"
                >
                  Dispersion Kneader
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/single-shaft-shredder"
                  className="hover:text-[#E2010E] transition"
                >
                  Single Shaft Shredder
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/expertise"
                  className="hover:text-[#E2010E] transition"
                >
                  Expertise
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/our-clients"
                  className="hover:text-[#E2010E] transition"
                >
                  Our Clients
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/video"
                  className="hover:text-[#E2010E] transition"
                >
                  Gallery
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog" className="hover:text-[#E2010E] transition">
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact-us"
                  className="hover:text-[#E2010E] transition"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h3 className="text-[22px] font-bold mb-5">Get In Touch</h3>
            <ul className="space-y-5 text-[#b7bcc7] text-[15px] sm:text-[16px] lg:text-[17px]">
              <li>
                <a
                  href="https://www.facebook.com/people/Xtreme-Machines/61561599418906/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E2010E] transition"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@xtrememachines134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E2010E] transition"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="bg-[#4b4d68] py-4 px-5">
        <p className="text-white text-[14px] sm:text-[15px] lg:text-[16px] text-center leading-[1.8]">
          Copyright © 2026 Xtreme Machines | Powered & Maintained by{" "}
          <a
            href="https://www.cybertricksmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E2010E] hover:text-white transition font-semibold"
          >
            Bharat Bizmart
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
