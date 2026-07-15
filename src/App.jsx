import { Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import About from "./pages/About";
import DispersionKneaderMachine from "./pages/DispersionKneaderMachine";
import SingleShaftShredder from "./pages/SingleShaftShredder";
import Expertise from "./pages/Expertise";
import Shredder from "./pages/Shredder";
import DispersionKneaderPneumaticHydraulic from "./pages/DispersionKneaderPneumaticHydraulic";
import PelletizingLineCompoundingLine from "./pages/PelletizingLineCompoundingLine";
import FillerMasterbatchMachineExporter from "./pages/FillerMasterbatchMachineExporter";
import OurClients from "./pages/OurClients";
import ContactUs from "./pages/ContactUs";
import Video from "./pages/Video";
import Blog from "./pages/Blog";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import Blog4 from "./pages/Blog4";
import ScrollToTop from "./component/ScrollToTop";
import FillerMachineManufacturerGujarat from "./pages/FillerMachineManufacturerGujarat";
import FillerMasterBatchMumbai from "./pages/FillerMasterBatchMumbai";
import KneaderMachineinGujarat from "./pages/KneaderMachineinGujarat";
import DispersionKneaderinKolkata from "./pages/DispersionKneaderinKolkata";
// import About from "./pages/About";

/* LAYOUT */
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="pt-29.5 min-h-screen">
        <Outlet />
      </main>

       <Footer />
    </>
  );
};

function App() {
  return (
    <Routes>

      {/* WEBSITE ROUTES */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/dispersion-kneader-machine" element={<DispersionKneaderMachine />} />
        <Route path="/single-shaft-shredder" element={<SingleShaftShredder />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/shredder" element={<Shredder />} />
        <Route path="/dispersion-kneader-pneumatic-hydraulic" element={<DispersionKneaderPneumaticHydraulic />} />
        <Route path="/pelletizing-line-compounding-line" element={<PelletizingLineCompoundingLine />} />
        <Route path="/filler-masterbatch-machine-exporter" element={<FillerMasterbatchMachineExporter />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/video" element={<Video />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/who-is-the-best-filler-machine-manufacturer-in-india-for-industrial-packaging-needs/" element={<Blog1 />} />
        <Route path="/top-4-advanced-machines-in-2025-filler-machine-pvc-compounding-line-and-shredders/" element={<Blog2 />} />
        <Route path="/the-future-of-filler-machines-trends-and-innovations-in-2025/" element={<Blog3 />} />
        <Route path="/filler-machine-manufacturer-complete-buying-guide-types-benefits-expert-tips-2026/" element={<Blog4 />} />
        <Route path="/filler-machine-manufacturer/" element={<Blog4 />} />
        <Route path="/filler-machine-manufacturer-in-gujarat/" element={<FillerMachineManufacturerGujarat />} />
        <Route path="/masterbatch-machine-in-mumbai/" element={<FillerMasterBatchMumbai />} />
        <Route path="/kneader-machine-in-gujarat/" element={<KneaderMachineinGujarat />} />
        <Route path="/dispersion-kneader-in-kolkata/" element={<DispersionKneaderinKolkata />} />
      </Route>

    </Routes>
  );
}

export default App;
