import React from "react";
import palletImg from "../images/color-palette.png";
import arrowImg from "../images/arrow.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = ({ toggleSidebar }) => {
  useGSAP(function () {
    gsap.to(".arrow-line", {
      rotation: 15,
      duration: 0.4,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
    gsap.from(".header", {
      opacity: 0,
      duration: 2.5,
    });
  });

  return (
    <div className="header fixed h-[200px] w-[150px] z-20">
      <div
        className="button-img h-[3rem] w-[3rem] mt-4 ml-4 "
        onClick={toggleSidebar}
      >
        <img src={palletImg} className="h-full w-full hover:scale-[1.1]  transition-all duration-600 ease-in-out" />
      </div>
      <div className="arrow-line">
        <img
          src={arrowImg}
          className=" -rotate-[150deg] h-[2rem] w-[2rem] mt-0 ml-12"
        />
      </div>
      <p className="text-[0.9rem] font-one ml-8 nav-btn">Click Me!</p>
    </div>
  );
};

export default Header;
