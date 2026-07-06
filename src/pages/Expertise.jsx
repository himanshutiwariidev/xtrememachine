import expertise_banner from "../assets/expertise_banner.webp";
import { useNavigate } from "react-router-dom";
import expertise_img1 from "../assets/expertise_img1.webp";
import expertise_img2 from "../assets/expertise_img2.webp";
import expertise_img3 from "../assets/expertise_img3.webp";
import expertise_img4 from "../assets/expertise_img4.webp";

function Expertise() {
  const navigate = useNavigate();
  const expertiseData = [
    {
      id: 1,
      title: "SINGLE SHAFT SHREDDER",
      image: expertise_img1,
      path: "/shredder",
    },
    {
      id: 2,
      title: "DISPERSION KNEADER",
      image: expertise_img2,
      path: "/dispersion-kneader-pneumatic-hydraulic",
    },
    {
      id: 3,
      title: "PELLETIZING LINE / COMPOUNDING LINE",
      image: expertise_img3,
      path: "/pelletizing-line-compounding-line",
    },
    {
      id: 4,
      title: "FILLER / MASTERBATCH MACHINE",
      image: expertise_img4,
      path: "/filler-masterbatch-machine-exporter",
    },
  ];
  return (
    <>
      <section className="w-full">
        <img
          src={expertise_banner}
          alt="banner"
          className="w-full h-auto object-cover"
        />
      </section>

      <section className="py-16 bg-white">
      <div className="max-w-275 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {expertiseData.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(item.path)}
              className="cursor-pointer group"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-md border border-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-90 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-center text-[#E2010E] text-[22px] font-bold uppercase mt-5">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Expertise;
