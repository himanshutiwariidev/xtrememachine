import video_banner from "../assets/video/video_banner.mp4";
import video_1 from "../assets/video/video_1.mp4";
import video_2 from "../assets/video/video_2.mp4";

function Video() {
  const videos = [
    {
      link: "https://www.youtube.com/embed/F1dmNVLwhNw",
    },
    {
      link: "https://www.youtube.com/embed/dszFBzsF_Bs",
    },
    {
      link: "https://www.youtube.com/embed/mcsbH01acPU",
    },
    {
      link: "https://www.youtube.com/embed/_WUBDtBzcFM",
    },
    {
      link: "https://www.youtube.com/embed/-nhBBk8ILAU",
    },
    {
      link: "https://www.youtube.com/embed/LLuGdAjNsgs",
    },
    {
      link: "https://www.youtube.com/embed/GPl_4H8uz_s",
    },
    {
      link: "https://www.youtube.com/embed/X4rCVGQXFh8",
    },
    {
      link: "https://www.youtube.com/embed/O5GALVMpQ0U",
    },
    {
      link: "https://www.youtube.com/embed/m3uJOZGv1Ko",
    },
    {
      link: "https://www.youtube.com/embed/-RhddGkIW84",
    },
  ];

  return (
    <>
      {/* HERO VIDEO SECTION */}
      <section className="relative w-full h-[350px] md:h-[500px] overflow-hidden">
        {/* BACKGROUND VIDEO */}
        <video
          src={video_banner}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* TEXT OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-center"></div>
      </section>

      {/* VIDEO GRID */}
      <section className="max-w-[1200px] mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* YOUTUBE VIDEOS */}
          {videos.map((video, index) => (
            <div key={index} className="w-full overflow-hidden bg-black">
              <iframe
                src={video.link}
                title={`video-${index}`}
                className="w-full h-[250px] md:h-[320px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}

          {/* CUSTOM VIDEO 1 */}
          <div className="w-full overflow-hidden bg-black">
            <video
              src={video_1}
              controls
              className="w-full h-[250px] md:h-[320px] object-cover"
            />
          </div>

          {/* CUSTOM VIDEO 2 */}
          <div className="w-full overflow-hidden bg-black">
            <video
              src={video_2}
              controls
              className="w-full h-[250px] md:h-[320px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Video;
