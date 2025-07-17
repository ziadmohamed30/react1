import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import HeroSection from "./HeroSection";
import LoremOne from "./LoremOne";
import LoremTwo from "./LoremTwo";
import LoremThree from "./LoremThree";
import Footer from "./Footer";

createRoot(document.getElementById("root")).render(
  <>
    <HeroSection />

    <div className="container pb-4 ps-5 pt-5">
      <div className=" d-flex flex-row pb-5">
        <LoremOne />
        <LoremTwo />
        <LoremThree />
      </div>
    </div>

    <Footer />
  </>
);
