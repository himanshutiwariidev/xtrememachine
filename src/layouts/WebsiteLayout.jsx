import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WebsiteLayout = () => {
  return (
    <>
      <Header />

      <main className="pt-29.5 min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default WebsiteLayout;