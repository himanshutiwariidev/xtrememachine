import blog_banner from "../assets/contact_banner.webp";
import { Link } from "react-router-dom";

import blog1 from "../assets/blogs/blog1.webp";
import blog2 from "../assets/blogs/blog2.webp";
import blog3 from "../assets/blogs/blog3.webp";

function Blog() {
  const blogs = [
    {
      image: blog1,
      title:
        "Who is the Best Filler Machine Manufacturer in India for Industrial Packaging Needs?",
      description:
        "With the fast-paced packaging and production era we are in, efficiency and precision are the name of the game. You can make food & beverage, cosmetics, pharmaceuticals, or chemicals, but the right filler machine can make and break your production...",
      category: "Compounding Line",
      link: "/who-is-the-best-filler-machine-manufacturer-in-india-for-industrial-packaging-needs/",
    },
    {
      image: blog2,
      title:
        "Top 4 Advanced Machines in 2025 Filler Machine PVC Compounding Line and Shredders",
      description:
        "The recycling and manufacturing sectors are always changing as a result of new technologies that improve sustainability, accuracy, and efficiency. By 2025, industrial machinery will be essential to the simplification of waste management and production procedures...",
      category: "Single Shaft Shredder",
      link: "/top-4-advanced-machines-in-2025-filler-machine-pvc-compounding-line-and-shredders/",
    },
    {
      image: blog3,
      title:
        "Filler Machine Manufacturer: Complete Buying Guide, Types, Benefits & Expert Tips (2026)",
      description:
        "Looking for the best filler machine manufacturer? Discover machine types, buying tips, benefits, industries served, and why Xtreme Machines is a trusted manufacturer of high-quality filling machines.",
      category: "Filler Machine",
      link: "/filler-machine-manufacturer-complete-buying-guide-types-benefits-expert-tips-2026/",
    },
    {
      image: blog3,
      title: "The Future of Filler Machines: Trends and Innovations in 2025",
      description:
        "As we look towards 2025, the filler machine industry is poised for significant advancements. From automation to sustainability, here are the key trends shaping the future of filler machines...",
      category: "Dispersion Kneader",
      link: "/the-future-of-filler-machines-trends-and-innovations-in-2025/",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-80 md:h-105 overflow-hidden">
        <img
          src={blog_banner}
          alt="blog banner"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* TEXT */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-4xl font-bold uppercase">
            Blog
          </h1>
        </div>
      </section>

      {/* BLOG SECTION */}
      {/* BLOG SECTION */}
      <section className="max-w-350 mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md overflow-hidden flex flex-col"
            >
              {/* IMAGE */}
              <div className="w-full h-65 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-[24px] font-bold text-black leading-snug">
                  {blog.title}
                </h2>

                <p className="text-[#667085] text-[17px] leading-8 mt-4 flex-1">
                  {blog.description}
                </p>

                {/* READ MORE ALWAYS BOTTOM */}
                
                <Link
                  to={blog.link}
                  className="mt-6 text-[#ff5c0a] text-lg font-medium inline-flex items-center gap-2 hover:gap-4 transition-all duration-300"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blog;
